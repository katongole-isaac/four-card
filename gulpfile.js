const { src, watch, dest, series } = require("gulp");

const sass = require("gulp-sass")(require("sass"));

const purgeCss = require("gulp-purgecss");

const srcFiles = `scss/**/*.scss`;
const destCss = "src/css";
const htmlFiles = "src/**/*.html";

function buildStyles() {
  return src(srcFiles)
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(
      purgeCss({
        content: [htmlFiles],
      })
    )
    .pipe(dest(destCss));
}

function watchTask() {
  watch([srcFiles, htmlFiles], buildStyles);
}

exports.default = series(buildStyles, watchTask);
