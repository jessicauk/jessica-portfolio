/*
* Dependencias
*/
var gulp = require('gulp'),
concat = require('gulp-concat'),
uglify = require('gulp-uglify'),
stylus = require('gulp-stylus');

/*
*
*/
gulp.task('default', ['watch']);
/*
* Configuración de la tarea 'js'
*/
gulp.task('js', function () {
	gulp.src('assets/js/*.js')
	.pipe(concat('compilacion.js'))
	.pipe(uglify())
	.pipe(gulp.dest('assets/build/'))
});

/*
*Configuración de la tarea 'css'
*/
gulp.task('css', function () {
  return gulp.src('assets/css/stylus/import.styl')
    .pipe(stylus({compress:true}))
    .pipe(gulp.dest('assets/build/'));
});

/*
*Configuración de la tarea watch que se ejecutan al detectar cambios en los archivos
*/
gulp.task('watch', function() {
	gulp.watch('assets/js/*.js', ['js']);
	gulp.watch('assets/css/stylus/*.styl', ['css']);
});