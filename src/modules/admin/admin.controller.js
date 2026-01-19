const User = require("../users/user.model");

const getAllUsers = async (req, res) => {
  const users = await User.find().select("-password");

  res.status(200).json({
    status: "success",
    results: users.length,
    data: users,
  });
};

const updateUserRole = async (req, res) => {
  const { id } = req.params;
  const { role } = req.body;

  if (!["user", "admin"].includes(role)) {
    return res.status(400).json({
      status: "error",
      message: "Invalid role",
    });
  }

  const user = await User.findById(id);

  if (!user) {
    return res.status(404).json({
      status: "error",
      message: "User not found",
    });
  }

  user.role = role;
  await user.save();

  res.status(200).json({
    status: "success",
    message: `User role updated to ${role}`,
    data: {
      id: user._id,
      email: user.email,
      role: user.role,
    },
  });
};

module.exports = {
  getAllUsers,
  updateUserRole,
};