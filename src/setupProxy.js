const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target:
        process.env.NEXT_PUBLIC_ENVIRONMENT === "production"
          ? "https://onlyfriends-production-84ef.up.railway.app"
          : "http://localhost:3000/",
      changeOrigin: true,
    }),
  );
};
