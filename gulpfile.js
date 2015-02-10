var gulp = require('gulp');

// Include plugins
var concat = require('gulp-concat');
var gulpMon = require('gulp-nodemon');
var less = require('gulp-less');

//paths to build dependencies
var bootstrapLess = './bower_components/bootstrap/less';
var boostrapJs = './bower_components/bootstrap';
var angularJs = './bower_components/angular';
var appLess = './private/less';
var appJs = './private/js';

gulp.task('scripts',function(){
	return gulp.src([angularJs+'/angular.js'])
	.pipe(concat('components.js'))
	.pipe(gulp.dest('./public/javascripts'));

});

// Compile Our Less
gulp.task('less', function() {
    return gulp.src([bootstrapLess+'/bootstrap.less',appLess+'/app.less'])
        .pipe(less({
        	fileName:"style.css"
        }))
        .pipe(gulp.dest('./public/stylesheets'));
});

// Watch Files For Changes
gulp.task('watch', function () {
	gulp.watch(bootstrapLess+'/**/*.less', ['less']);
	gulp.watch(appLess+'/*.less', ['less']);
});

// reset server on change
gulp.task('gulp-mon', function() {
	gulpMon({
		script:'./bin/www',
		ext:'html jade js'
	})
	.on('start', ['watch'])
	.on('change', ['watch'])
	.on('restart', function () {
		console.log('restarted!');
	});
});

gulp.task('default', ['scripts','gulp-mon']);