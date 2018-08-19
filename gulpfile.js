var gulp = require('gulp');
var cssnano = require('gulp-cssnano');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');

gulp.task('default', function () {
    return gulp.src('./css/styles.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(cssnano({
                discardComments: {removeAll: true},
                zIndex: true
            }
        ))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./css'));
});