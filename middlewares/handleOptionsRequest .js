export  const handleOptionsRequest = (req, res, next) => {
    res.header("Access-Control-Allow-Origin", req.headers.origin);
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With, X-HTTP-Method-Override, Accept");
    res.header("Access-Control-Allow-Credentials", true);
    if (req.method === "OPTIONS") {
      res.sendStatus(200);
    } else {
      next();
    }
  };
  