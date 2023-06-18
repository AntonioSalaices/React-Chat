import pkg from "gulp";
const { src, dest, watch, series } = pkg;
import dartSass from "sass";
import gulpSass from "gulp-sass";
const sass = gulpSass(dartSass);

function buildStyles() {
  return src("./src/assets/styles/style.scss")
    .pipe(sass())
    .pipe(dest("./src/assets/styles/css"));
}

function watchTask() {
  watch(["./src/assets/styles/style.scss"], buildStyles);
}

export default series(buildStyles, watchTask);
