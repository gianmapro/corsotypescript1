var gulp = require("gulp");
var ts = require("gulp-typescript");
var sourcemaps = require('gulp-sourcemaps');
var tsProject = ts.createProject("tsconfig.json");
var tslint = require("gulp-tslint");

gulp.task("compile-ts", function () {
    return tsProject.src()
        .pipe(sourcemaps.init())
        .pipe(tsProject())
        .js
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest("dist"));
});

gulp.task("default", ["compile-ts"]);

gulp.task("tslint", function() {
    return gulp.src("./src/**/*.ts")
        .pipe(tslint({ formatter: "verbose" }))
        .pipe(tslint.report());
});