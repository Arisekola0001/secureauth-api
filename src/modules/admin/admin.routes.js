const express = require("express");
const protect = require("../../middlewares/auth.middleware");
const restrictTo = require("../../middlewares/role.middleware");
const {
  getAllUsers,
  updateUserRole,
} = require("./admin.controller");

const router = express.Router();

// All admin routes are protected
router.use(protect);
router.use(restrictTo("admin"));

router.get("/users", getAllUsers);

// Promote / demote user
router.patch("/users/:id/role", updateUserRole);

module.exports = router;