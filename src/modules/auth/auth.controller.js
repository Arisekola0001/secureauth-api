const authService = require("./auth.service");

async function register(req, res, next) {
  try {
    const user = await authService.registerUser(req.body);

    res.status(201).json({
      status: "success",
      message: "User registered successfully",
      data: {
        id: user._id,
        email: user.email,
      },
    });
  } catch (error) {
    next(error);
  }
}

async function login(req, res, next) {
  try {
    const { email, password } = req.body;

    const { user, accessToken, refreshToken } =
      await authService.loginUser(email, password);

    res.status(200).json({
      status: "success",
      message: "Login successful",
      data: {
        accessToken,
        refreshToken,
        user: {
          id: user._id,
          email: user.email,
          role: user.role,
        },
      },
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  register,
  login,
};