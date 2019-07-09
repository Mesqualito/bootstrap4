var gulp            = require('gulp');
var sass            = require('gulp-sass');
var postcss         = require('gulp-postcss');
var flexbugsfixes   = require('postcss-flexbugs-fixes');
var autoprefixer    = require('autoprefixer');

var processors = [
    flexbugsfixes,
    autoprefixer({
    browsers: ['last 2 versions', '> 0.1%']
    })
];
var input = './scss/*.scss';
var output = './css';
var sassOptions = {
    errLogToConsole: true,
    outputStyle: 'expanded'
};
gulp.task('sass', function () {
    return gulp
        .src(input)
        .pipe(sass(sassOptions).on('error', sass.logError))
        .pipe(postcss(processors))
        .pipe(gulp.dest(output));
});