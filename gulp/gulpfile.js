
// This tells the file that it requires the gulp program
var gulp = require('gulp'),
// This assigns the minifyCSS variable to require the minify css plug-in
    minifyCSS = require('gulp-minify-css'),
// This assigns the concat plug-in to the variable concat
    concat = require('gulp-concat');

// This is a function that creates a css robot that returns all the CSS files in the specified directory, concatenates them all into a file called site.css, minifies (removes comments and cleans it up), then spits the file out into the test/css directory
gulp.task('css', function() {
    return gulp.src('dev/css/*.css')
    .pipe(concat('site.css'))
    .pipe(minifyCSS())
    .pipe(gulp.dest('test/css'));
});

// This part sets up

gulp.watch('dev/css/*.css', function(){
    gulp.run('css');
});
