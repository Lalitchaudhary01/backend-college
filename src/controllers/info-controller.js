const info = (req, res) => {
  return res.json({
    success: true,
    msg: "Api is live",
    error: {},
    data: {},
  });
};

module.exports = {
  info,
};
