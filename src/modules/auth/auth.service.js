const bcrypt = require("bcrypt");
const User = require("../users/user.model");
const {
  generateAccessToken,
  generateRefreshToken,
} = require("../../utils/jwt");


async function registerUser(userData) {
  const { email, password } = userData;

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new Error("User already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    ...userData,
    password: hashedPassword,
  });

  return user;
}


async function loginUser(email, password) {
  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    throw new Error("Invalid email or password");
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error("Invalid email or password");
  }

  const payload = {
    id: user._id,
    role: user.role,
  };

  const accessToken = generateAccessToken(payload);
  const refreshToken = generateRefreshToken(payload);

  return {
    user,
    accessToken,
    refreshToken,
  };
}

module.exports = {
  registerUser,
  loginUser,
};