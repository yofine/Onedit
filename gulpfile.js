var gulp = require('gulp');
var coffee = require('gulp-coffee')
var react = require('gulp-react');
var browserify = require('gulp-browserify');
var del = require('del');

gulp.task('clean', function(cb) {
  del(['build'], cb);
});

gulp.task('jsx', ['clean'], function() {
  return gulp.src('app/*.jsx')
    .pipe(react())
    .pipe(browserify())
    .pipe(gulp.dest('build'));
});

gulp.task('cx', ['clean'], function() {
  return gulp.src('tmp/*.coffee')
    .pipe(coffee({bare: true}))
    .pipe(react())
    .pipe(browserify())
    .pipe(gulp.dest('build'));
});

gulp.task('watch', function() {
  gulp.watch('src/*.jsx', ['jsx']);
});

gulp.task('default', ['jsx']);
