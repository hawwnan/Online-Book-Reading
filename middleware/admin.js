function admin(req, res, next) {
  if (req.user.role != "admin")
    return res.status(403).send("You are not authorized");
  else next();
}

module.exports = admin;
