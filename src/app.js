const express = require("express");
const authRoutes = require("./modules/auth/auth.routes");
const userRoutes = require("./modules/users/user.routes");



const app = express();

app.use(express.json());

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/users", userRoutes);

app.get("/", (req, res) => {
  res.json({ message: "SecureAuth API running" });
});

module.exports = app;