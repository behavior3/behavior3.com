var gulp        = require('gulp');
var concat      = require('gulp-concat');
var uglify      = require('gulp-uglify');
var less        = require('gulp-less');
var minify      = require('gulp-minify-css');
var exec        = require('child_process').exec;
var browserSync = require('browser-sync');
var reload      = browserSync.reload;


// ============================================================================
// INTERNAL
// ============================================================================

/**
 * Concatenate and uglify vendor javascript.
 */
gulp.task('_vendor_js', function() {
  var js_sources = [
    'bower_components/jquery/dist/jquery.min.js',
    'bower_components/bootstrap/dist/js/bootstrap.min.js',
    'bower_components/magnific-popup/dist/jquery.magnific-popup.min.js',
    'bower_components/highlightjs/highlight.pack.js',
    'bower_components/owl.carousel/dist/owl.carousel.min.js',
  ];

  return gulp.src(js_sources)
             .pipe(uglify())
             .pipe(concat('vendor.min.js'))
             .pipe(gulp.dest('behavior3/static/js'))
}) 

/**
 * Concatenate and uglify vendor css.
 */
gulp.task('_vendor_css', function() {
  var css_sources = [
    'bower_components/bootstrap/dist/css/bootstrap.min.css',
    'bower_components/fontawesome/css/font-awesome.min.css',
    'bower_components/hover/css/hover-min.css',
    'bower_components/magnific-popup/dist/magnific-popup.css',
    'bower_components/highlightjs/styles/solarized_light.css',
    'bower_components/owl.carousel/dist/assets/owl.carousel.min.css',
  ];

  return gulp.src(css_sources)
             .pipe(minify())
             .pipe(concat('vendor.min.css'))
             .pipe(gulp.dest('behavior3/static/css'))
}) 

/**
 * Copy vendor fonts.
 */
gulp.task('_vendor_fonts', function() {
  var fonts_sources = [
    'bower_components/fontawesome/fonts/*'
  ];

  return gulp.src(fonts_sources)
             .pipe(gulp.dest('behavior3/static/fonts'))
}) 

/**
 * Concatenate and uglify vendor libraries, and copy static files from vendors.
 */
gulp.task('_vendor', ['_vendor_js', '_vendor_css', '_vendor_fonts']);

/**
 * Compile less
 */
gulp.task('_less', function() {
  return gulp.src('behavior3/static/less/index.less')
             .pipe(less())
             .pipe(minify())
             .pipe(concat('style.min.css'))
             .pipe(gulp.dest('behavior3/static/css'))
});

/**
 * Watch for development.
 */
gulp.task('_watch', function() {
  var watching = [
    'behavior3/static/less/**/*.less',
    'behavior3/templates/**/*.jinja',
  ]
  
  browserSync({
    notify: false,
    proxy: "127.0.0.1:5000"
  });

  gulp.watch(watching, ['_less', reload]);
});


// ============================================================================
// PUBLIC
// ============================================================================

gulp.task('dev', ['_vendor', '_less', '_watch'])
gulp.task('deploy', function() {})