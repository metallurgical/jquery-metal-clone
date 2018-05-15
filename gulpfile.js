
// define all gulp plugin to used
// define plugin if required
// some of plugins can be used together with others plugin
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

//this plugin for debug js file, will display error and correction into console
gulp.task('jshint', function(){
	var srcJs = './jquery.metalClone.js'; // js source files
	gulp.src(srcJs)
	    .pipe(jshint())
	    .pipe(jshint.reporter('default'));
});

// Concat(can be used to concat css file also) all js file and code, strip empty space js file
gulp.task('myJs', function(){
	gulp.src(['./jquery.metalClone.js'])
		.pipe(concat('jquery.metalClone.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./'));
});

//to run all the task sekaligus(sequence) guna code ni
//just run 'gulp' command on console to run the default task
gulp.task('default', ['jshint','myJs'], function(){

    // Watch for HTML changes
    gulp.watch('./src/*.html', function() {
        gulp.run('minifyHtml');
    });

    // Watch for JS changes
    gulp.watch('./src/scripts/*.js', function() {
        gulp.run('jshint', 'scripts');
    });

    // Watch for CSS changes
    gulp.watch('./src/styles/*.css', function() {
        gulp.run('css');
    });
});
 





