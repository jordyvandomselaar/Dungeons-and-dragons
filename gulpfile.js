/**
 * Created by jordy on 01-03-17.
 */
var gulp = require('gulp'),
  plumber = require('gulp-plumber'),
  watch = require('gulp-watch'),
  stylus = require('gulp-stylus'),
  exec = require('gulp-exec');

var paths = {
  stylus: {
    watch: "src/stylus/**/*.styl",
    compile: "src/stylus/styles.styl"
  }
};

// Error handler
var onError = function (err) {
  console.log(err);
}

gulp.task('default', [ 'watchStylus' ]);

gulp.task('watchStylus', function () {
  return watch(paths.stylus.watch)
    .pipe(exec("gulp compileStylus"));
});

gulp.task('compileStylus', function () {
  return gulp.src(paths.stylus.compile)
    .pipe(plumber({
      errorHandler: onError
    }))
    .pipe(stylus())
    .pipe(gulp.dest('public/styles'));
});

