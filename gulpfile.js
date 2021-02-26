const gulp = require('gulp');
const babel = require('gulp-babel');
const del = require('del');

function compileScripts(babelEnv, destDir) {
  // 设置环境变量
  process.env.BABEL_ENV = babelEnv;
  return gulp.src('./src/**/*.{ts,tsx}').pipe(babel()).pipe(gulp.dest(destDir));
}

function tsTask() {
  return compileScripts('cjs', 'dist');
}

function copyCssTask() {
  return gulp.src('src/**/*.css').pipe(gulp.dest('dist'));
}

function copyDTs() {
  return gulp.src('./dist/src/**/*.*').pipe(gulp.dest('dist'));
}

function cleanD(cb) {
  return del(['dist/src', 'yarn-error.log'], cb);
}

module.exports = {
  build: gulp.parallel(tsTask, copyCssTask),
  copyDTs,
  cleanD,
};
