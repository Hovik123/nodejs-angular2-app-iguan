let gulp = require("gulp");
let uglify = require('gulp-uglify');
let concat =require('gulp-concat');
var cssmin = require('gulp-cssmin');
let dest="public/assets";
let paths = {
    js: [
        "bower_components/jquery/dist/jquery.min.js",
        "bower_components/bootstrap/dist/js/bootstrap.min.js"

    ],
    css: [
        "bower_components/bootstrap/dist/css/bootstrap.css",
        "public/stylesheets/style.css"
    ],
    fonts: [
        "bower_components/bootstrap/fonts/*.*"
    ]
};
gulp.task("copy", ()=> {
    gulp.src(paths.js)
        .pipe(concat('app.js'))
        .pipe(gulp.dest(dest+"/js"));
    gulp.src(paths.css)
        .pipe(concat('app.css'))
        .pipe(gulp.dest(dest+"/css"));
    gulp.src(paths.fonts)
        .pipe(gulp.dest(dest+"/fonts"));
});
gulp.task("copy:production", ()=> {
    gulp.src(paths.js)
        .pipe(uglify())
        .pipe(concat('app.js'))
        .pipe(gulp.dest(dest+"/js"));
    gulp.src(paths.css)
        .pipe(cssmin())
        .pipe(concat('app.css'))
        .pipe(gulp.dest(dest+"/css"));
    gulp.src(paths.fonts)
        .pipe(gulp.dest(dest+"/fonts"));
});

gulp.task('watch',function(){
    gulp.watch(paths.js,["copy"]);
    gulp.watch(paths.css,["copy"])
});
gulp.task("default",["copy","watch"]);
gulp.task("production",["copy:production"]);