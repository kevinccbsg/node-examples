'use strict'
const gulp          = require('gulp'),
      sass          = require('gulp-sass'),
      browserSync   = require('browser-sync').create(),
      browserify    = require('browserify'),
      tap           = require('gulp-tap'),
      buffer        = require('gulp-buffer'),
      uglify        = require('gulp-uglify'),
      sourcemaps    = require('gulp-sourcemaps'),
      postcss       = require('gulp-postcss'),
      autoprefixer  = require('autoprefixer'),
      cssnano       = require('cssnano');

let fontPath = './src/fonts/**/*.{ttf,woff,woff2,eof,svg}'
let videoPath = './src/videos/**/*.mp4';
let sassPath = './src/scss/*.scss';
let jsPath = './src/js/**/*.js';
let assetsImg = './src/images/*.{png,jpg,jpeg,gif,svg,JPEG}';

gulp.task('copying-fonts', function() {
  return gulp.src(fontPath)
  .pipe(gulp.dest('./dist/fonts/'));
});
gulp.task('copying-videos', function() {
  return gulp.src(videoPath)
  .pipe(gulp.dest('./dist/videos/'));
});
gulp.task('compile-sass', function() {
  return gulp.src(sassPath)
  .pipe(sourcemaps.init())
  .pipe(sass().on('error', sass.logError))
  .pipe(postcss([autoprefixer(), cssnano()]))
  .pipe(sourcemaps.write('./'))
  .pipe(gulp.dest('./public/css/'))
  .pipe(browserSync.stream());
});
// definimos la tarea para concatenar JS
gulp.task("concat-js", function(){
    gulp.src("./src/js/app.js")
    .pipe(sourcemaps.init())
    .pipe(tap(function(file){
        file.contents = browserify(file.path).bundle();
    }))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest("./public/js/"))
    .pipe(browserSync.stream());
});

gulp.task('develop', [
  'compile-sass',
  'concat-js'], function () {
    // we work with sparest server
    browserSync.init({
      proxy: '127.0.0.1:3001'
    });
    // Define the watchers
    gulp.watch(sassPath, ['compile-sass']);
    gulp.watch('./src/js/*.js', ['concat-js']);
  });
