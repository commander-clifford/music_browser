;(function () {

	'use strict';

	const gulp = require('gulp');
	const sass = require('gulp-sass');
	const jshint = require('gulp-jshint');
	const stylish = require('jshint-stylish');
	const modernizr = require('gulp-modernizr');
	const autoprefixer = require('gulp-autoprefixer');
	const gcmq = require('gulp-group-css-media-queries');

	gulp.task('modernizr', function() {
		return gulp.src('js/*.js')
			.pipe(modernizr())
			.pipe(gulp.dest('../dest/js'))
	});

	gulp.task('lint', function() {
		return gulp.src('js/*.js')
			.pipe(jshint())
			.pipe(jshint.reporter(stylish));
	});

	gulp.task('uglyJS', function() {
	 	return gulp.src('js/*.js')
			.pipe(gulp.dest('../dest/js'));
	});

	gulp.task('uglyHTML', function() {
		return gulp.src('*.html')
			.pipe(gulp.dest('../dest'));
	});

	gulp.task('sass', function () {
		return gulp.src('sass/*.scss')
			.pipe(sass().on('error', sass.logError)) // compile sass to css
			.pipe(autoprefixer({ // add vendor prefixes for browser compatibility
				browsers: ['last 2 versions'],
				cascade: false
			}))
			.pipe(gcmq()) // group media queries for quicker load
			.pipe(gulp.dest('../dest/css')); // write the new css file
	});

	gulp.task('imgs', function(){
		return gulp.src('img/*')
			.pipe(gulp.dest('../dest/img'))
	});

	gulp.task('fonts', function(){
		return gulp.src('fonts/*')
			.pipe(gulp.dest('../dest/fonts'))
	});

	gulp.task('watch', function() {
		gulp.watch('sass/*.scss', ['sass']);
		gulp.watch('*.html', ['uglyHTML']);
		gulp.watch('js/*.js', ['lint', 'modernizr', 'uglyJS']);
		gulp.watch('img/*', ['imgs']);
		gulp.watch('fonts/*', ['fonts']);
	});

}());
