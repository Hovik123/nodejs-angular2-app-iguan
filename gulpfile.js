let gulp = require("gulp");
let uglify = require('gulp-uglify');
let concat =require('gulp-concat');
var cssmin = require('gulp-cssmin');
let dest="public/assets";
let paths = {
    js: [
        "public/node_modules/core-js/client/shim.min.js",
        "public/node_modules/zone.js/dist/zone.js",
        "public/node_modules/reflect-metadata/Reflect.js",
        "public/node_modules/systemjs/dist/system.src.js",
        "public/systemjs.config.js",


    ],
    css: [
        "public/stylesheets/style.css"
    ],
    fonts: [
        "bower_components/bootstrap/fonts/*.*"
    ]
};
gulp.task("copy", ()=> {
    gulp.src(paths.js)
        .pipe(uglify())
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
gulp.task("server",()=>{

});

gulp.task('watch',function(){
    gulp.watch(paths.js,["copy"]);
    gulp.watch(paths.css,["copy"])
});
gulp.task("default",["copy","watch"]);
gulp.task("production",["copy:production"]);

