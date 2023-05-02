const errorMiddleware = (err, req, res, next) => {
  const statusCode = res && res.statusCode ? res.statusCode : 500;
  if (res) {
    res.status(statusCode);
    res.json({
      message: err.message,
      stack: process.env.NODE_ENV === "development" ? err.stack : null,
    });
  }
  
  // Check for file too large error (413) and send an appropriate response
  if (err.http_code === 413) {
    res.status(413).json({ message: "File too large" });
  }
};

export default errorMiddleware;



// const erroHanndler = (err, req, res, next) => {
//   const statusCode = res && res.statusCode ? res.statusCode : 500;
//   if (res) {
//     res.status(statusCode);
//     res.json({
//       message: err.message,
//       stack: process.env.NODE_ENV === "development" ? err.stack : null,
//     });
//   }
// };

// export default erroHanndler;
