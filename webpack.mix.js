let mix = require("laravel-mix");
mix
  .js("src/app.js", "js")
  .sass("src/styles/main.scss", "css")
  .setPublicPath("dist")
  .browserSync("http://127.0.0.1:5500");
