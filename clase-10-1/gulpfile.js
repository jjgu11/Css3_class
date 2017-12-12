var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
  gulp.src('./scss/styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: true
    }))
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream());
});

gulp.task('default', function() {

  browserSync.init({
    server: "./"
  });

  gulp.watch("./*.html").on('change', browserSync.reload);
  gulp.watch('./scss/styles.scss',['sass']);
});