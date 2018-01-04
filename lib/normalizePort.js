// Normalize a port into a number, string, or false.
module.exports = (val) => {
  const port = parseInt(val, 10);

  // named pipe
  if (Number.isNaN(port)) {
    return val;
  }

  // port number
  if (port >= 0) {
    return port;
  }

  return false;
};
