;(function () {

	'use strict';

	const gulp = require('gulp');
	const sass = require('gulp-sass');
	const jshint = require('gulp-jshint');
	const stylish = require('jshint-stylish');
	const autoprefixer = require('gulp-autoprefixer');
	const gcmq = require('gulp-group-css-media-queries');

	gulp.task('jsLint', function() {
		return gulp.src('js/*.js')
			.pipe(jshint())
			.pipe(jshint.reporter(stylish));
	});

	gulp.task('javascript', function() {
	 	return gulp.src('js/*.js')
			.pipe(gulp.dest('../dest/js'));
	});

	gulp.task('html', function() {
		return gulp.src('*.html')
			.pipe(gulp.dest('../dest'));
	});

	gulp.task('sass', function () {
		return gulp.src('sass/*.scss')
			.pipe(sass().on('error', sass.logError))
			.pipe(autoprefixer({
				browsers: ['last 2 versions'],
				cascade: false
			}))
			.pipe(gcmq())
			.pipe(gulp.dest('../dest/css'));
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
		gulp.watch('*.html', ['html']);
		gulp.watch('js/*.js', ['jsLint', 'javascript']);
		gulp.watch('img/*', ['imgs']);
		gulp.watch('fonts/*', ['fonts']);
	});

	gulp.task('build', [ 'sass', 'html', 'jsLint', 'javascript', 'imgs', 'fonts' ]);


}());
