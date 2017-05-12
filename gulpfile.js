//JS
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var reload = browserSync.reload;
var sourcemaps = require('gulp-sourcemaps');

var path = {
                'assets' : {
                               'sass' : './app/sass/',
                               'js' : './app/js/',
                               'fonts' : './app/fonts/',
                               'img' : './app/img/',
                               'css' : './app/css/'
                },
                'vendors' : './bower_components/'
}

// COMPILE SASS - SYNCHRO NAVIGATEUR - AUTOPREFIXEUR
gulp.task('styles', function(){
                return gulp.src(path.assets.sass + 'main.scss')
                .pipe(sourcemaps.init())
                .pipe(sass())
                .pipe(autoprefixer())
                .pipe(sourcemaps.write())
                .pipe(gulp.dest("./app/css/"))
                .pipe(browserSync.reload({
                  stream: true
                }))
});


//SYNCHRO NAVIGATEUR
gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: './'
    },
  })
})


//
gulp.task('watch', ['browserSync', 'styles'], function (){
  gulp.watch('app/sass/*.scss', ['styles']);
  gulp.watch("*.html").on("change", reload);
});


// MINIFY
gulp.task('minify-css', function() {
  return gulp.src('app/css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('app/css'));
});
