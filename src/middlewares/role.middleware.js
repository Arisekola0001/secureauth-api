const restrictTo = (...roles) => {
    return (req, res, next) => {
      if (!roles.includes(req.user.role)) {
        return res.status(403).json({
          status: "error",
          message: "You have no permission to perform this action",
        });
      }
      next();
    };
  };
  
  module.exports = restrictTo;