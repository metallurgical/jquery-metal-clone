
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





//this function to concat(can be used to concat css file also) all js file and code, strip empty space js file
//This example passes an array of filenames to gulp.src(); I want scripts.js to appear at the top of the production file followed by all other JavaScript files in any order. 
gulp.task('myJs', function(){

	gulp.src(['./jquery.metalClone.js'])
		.pipe(concat('jquery.metalClone.min.js'))
		//.pipe(stripDebug())
		.pipe(uglify())
		.pipe(gulp.dest('./'));
});




//to run all the task sekaligus(sequence) guna code ni
//just run 'gulp' command on console to run the default task
gulp.task('default', ['jshint','myJs'], function(){



/********************************** optional buang kod dalm block ni shaja klu xse(to watch the changes realtime use this)**********/

	// watch for HTML changes
  gulp.watch('./src/*.html', function() {
    gulp.run('minifyHtml');
  });
 
  // watch for JS changes
  gulp.watch('./src/scripts/*.js', function() {
    gulp.run('jshint', 'scripts');
  });
 
  // watch for CSS changes
  gulp.watch('./src/styles/*.css', function() {
    gulp.run('css');
  });

 /***************************** end optional **************************/

});
 





