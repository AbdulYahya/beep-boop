var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var utilities = require('gulp-util');
var del = require('del');
var jshint = require('gulp-jshint');

var buildProduction = utilities.env.production; // append '--production' to gulp command

gulp.task('concatJS', function() {
  return gulp.src(['./js/*.js'])
    .pipe(concat('allConcact.js'))
    .pipe(gulp.dest('./tmp'));
});

gulp.task('jsBrowserify', ['concatJS'], function() {
  return browserify({ entries: ['./tmp/allConcact.js'] })
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./build/js'));
});

gulp.task("minify", ["jsBrowserify"], function() {
  return gulp.src("./build/js/app.js")
    .pipe(uglify())
    .pipe(gulp.dest("./build/js"));
});

gulp.task("clean", function() {
  return del(['build', 'tmp']);
});

gulp.task("build", ['clean'], function() {
  if (buildProduction) {
    gulp.start('minify');
  } else {
    gulp.start('jsBrowserify');
  }
});

// linter task
gulp.task('jshint', function() {
  return gulp.src(['js/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});
