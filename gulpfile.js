const gulp = require('gulp');
const babel = require('gulp-babel');

// const paths = {
//   dest: {
//     lib: 'lib', // commonjs 文件存放的目录名 - 本块关注
//     esm: 'esm', // ES module 文件存放的目录名 - 暂时不关心
//     dist: 'dist', // umd文件存放的目录名 - 暂时不关心
//   },
//   styles: 'src/**/*.less', // 样式文件路径 - 暂时不关心
// };
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
  return gulp.src(['/dist/src/*']).pipe(gulp.dest('dist'));
}

module.exports = {
  build: gulp.parallel(tsTask, copyCssTask),
  copyDTs,
};
