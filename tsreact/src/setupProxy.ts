import proxy from "http-proxy-middleware";

module.exports = function(app: any) {
  app.use(
    proxy("/api/list", {
      target: "http://192.168.33.21:8080",
      secure: false,
      changeOrigin: true
    })
  );
};