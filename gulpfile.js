const {src, dest, series, parallel, watch} = require('gulp')
const concat = require('gulp-concat')
const clean = require('gulp-clean')
const uglify = require('gulp-uglify')
const sourcemaps = require('gulp-sourcemaps')
const browserSync = require('browser-sync').create()
const {path} = require('./gulp/const')

function serveTask(done) {
    browserSync.init({
        server: {
            baseDir: path.dest
        }
    });

    watch('./src/index.html', series(copyHtmlTask, reloadBrowser))
    watch('./src/**/*.js', series(copyJsTask, reloadBrowser))
    watch('./src/**/*.css', series(copyCssTask, reloadBrowser))

    done()
}

function reloadBrowser(done) {
    browserSync.reload()
    done()
}

function buildTask() {
    return series(
        cleanDistTask,
        parallel(
            copyHtmlTask,
            copyJsTask,
            copyCssTask,
            copyJsVendorTask
        ))
}

function copyHtmlTask() {
    return src(path.srcHtml)

        .pipe(dest(path.dest))
}

function copyJsTask() {
    return src(
        path.jsSrc
    )

        .pipe(concat(path.destJs))
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(sourcemaps.write('./'))
        .pipe(dest(path.dest))
}

function copyJsVendorTask() {
    return src(path.jsVendorSrc)

        .pipe(concat(path.destVendorJs))

        .pipe(dest(path.dest))
}

function copyCssTask() {
    return src(path.cssSrc)

        .pipe(concat(path.destCss))

        .pipe(dest(path.dest))
}

function cleanDistTask() {
    return src(path.dest, {read: false, allowEmpty: true}).pipe(clean())
}

exports.build = buildTask()
exports.serve = series(buildTask(), serveTask)