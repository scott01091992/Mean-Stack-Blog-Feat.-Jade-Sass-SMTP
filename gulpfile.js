var gulp = require('gulp');
var sass = require('gulp-sass');
var jade = require('gulp-jade');
var browserSync = require('browser-sync').create();


gulp.task('default', ['watch'], function () {
});

gulp.task('watch',['sass', 'jade'], function(){
  browserSync.init({
      server: {
        baseDir: "./client"
      },
      port: 6777
  });
  gulp.watch('client/sass/*.sass', ['sass']);
  gulp.watch('client/jade/*.jade', ['jade']);
  gulp.watch('client/partials/*.html').on('change', browserSync.reload);
});

gulp.task('sass', function(){
  return gulp.src('client/sass/*.sass')
        .pipe(sass())
        .pipe(gulp.dest('client/css'))
        .pipe(browserSync.stream());
});

gulp.task('jade', function(){
  return gulp.src('client/jade/*.jade')
        .pipe(jade())
        .pipe(gulp.dest('client/partials'))
        .pipe(browserSync.stream());
});
