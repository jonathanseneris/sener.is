var config = require('./server/config/config');
var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var bs = require('browser-sync');
var browserify = require("browserify"); // require modules within the browser
var source = require("vinyl-source-stream"); // github.com/hughsk/vinyl-source-stream
var reload = bs.reload;

gulp.task('start', function() {
  nodemon({
    script: 'server/server.js',
    ext: 'js html ejs jsx',
    env: {
      'NODE_ENV': 'development'
    }
  });
});

/* Bundles required modules */
gulp.task('browserify', function() {
  browserify('./client/app.js')
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('copy', function() {
  gulp.src('client/*.*')
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['start', 'browserify', 'copy'], function() {
  return gulp.watch('client/**/*.*', ['browserify', 'copy']); // this only watches client changes
});
