const errorMiddleware = (err, req, res, next) => {
  if (err) {
    res.status(500);
    res.send("Server Error");
    return;
  }

  next();
};

export { errorMiddleware };
