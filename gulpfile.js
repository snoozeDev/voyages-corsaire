var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
// var watch = require( 'gulp-watch' );
// var gulpSequence = require('gulp-sequence');
var sourcemaps = require( 'gulp-sourcemaps' );
var cleanCSS = require( 'gulp-clean-css' );
var autoprefixer = require( 'gulp-autoprefixer' );
var rename = require( 'gulp-rename' );

var cfg = require( './gulpconfig.json' );
var paths = cfg.paths;

// Sass task
gulp.task( 'sass', function() {
    return stream = gulp.src( paths.sass + '/*.scss' )
        .pipe( sass( { errLogToConsole: true } ) )
        .pipe( autoprefixer( 'last 2 versions' ) )
        .pipe( gulp.dest( paths.css ) );
    //.pipe( rename( 'custom-editor-style.css' ) );
});

// MinifyCSS Task
gulp.task( 'minifycss', function() {
    return gulp.src( paths.css + '/style.css' )
        .pipe( sourcemaps.init( { loadMaps: true } ) )
        .pipe( cleanCSS( { compatibility: '*' } ) )
        .pipe( rename( { suffix: '.min' } ) )
        .pipe( sourcemaps.write( './' ) )
        .pipe( gulp.dest( paths.css ) );
});

// Run gulp watch
gulp.task( 'watch', function() {
    return gulp.watch( paths.sass + '/*.scss', gulp.series('sass', 'minifycss') );
});
