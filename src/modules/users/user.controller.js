const User = require("./user.model");

const getMe = async (req, res) => {
  const user = await User.findById(req.user.id).select("-password");

  res.status(200).json({
    status: "success",
    data: user,
  });
};

module.exports = { getMe };