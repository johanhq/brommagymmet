var gulp = require('gulp'),
minifyCSS = require('gulp-minify-css'),
less = require('gulp-less'),
path = require('path'),
concat = require('gulp-concat'),
watch = require('gulp-watch'),
batch = require('gulp-batch'),
gutil = require('gulp-util'),
ftp = require('gulp-ftp'),
config = require('config');

var LessPluginCleanCSS = require('less-plugin-clean-css'),
LessPluginAutoPrefix = require('less-plugin-autoprefix'),
cleancss = new LessPluginCleanCSS({ advanced: true }),
autoprefix= new LessPluginAutoPrefix({ browsers: ["last 2 versions"] });

var ftpDevData = config.get('ftp-dev'),
    ftpProdData = config.get('ftp-prod');

gulp.task('less', function() {
  return gulp.src('./less/main.less')
  .pipe(less({plugins: [autoprefix, cleancss]}))
  .pipe(minifyCSS())
  .pipe(gulp.dest('./dist/css'));
});

gulp.task('scripts', function() {
  return gulp.src(['./node_modules/angular/angular.js',
  './node_modules/angular-ui-router/build/angular-ui-router.js',
  './node_modules/angular-ui-bootstrap/ui-bootstrap.js',
  './js/app.js'])
  .pipe(concat('all.js'))
  .pipe(gulp.dest('./dist/js/'));
});

gulp.task('watch', function () {
  watch('./less/*.less', batch(function (events, done) {
    gulp.start('less', done);
  }));
});

gulp.task('dev-ftp', function() {
  return gulp.src(['./index.html','./dist/**','./template/**','./files/**'],{base: '.'})
  .pipe(ftp(ftpDevData))
  .pipe(gutil.noop());
});

gulp.task('prod-ftp', function() {
  return gulp.src(['./index.html','./dist/**','./template/**','./files/**'],{base: '.'})
  .pipe(ftp(ftpProdData))
  .pipe(gutil.noop());
});


gulp.task('default', ['scripts','less']);
gulp.task('deploy-dev', ['scripts','less','dev-ftp']);
gulp.task('deploy-prod', ['scripts','less','prod-ftp']);
