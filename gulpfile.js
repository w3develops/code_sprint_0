'use strict'
const gulp = require('gulp'),
    watch = require('gulp-watch'),
    //styles
    sourcemaps = require('gulp-sourcemaps'),
    prefixer = require('gulp-autoprefixer'),
    // html
    rigger = require('gulp-rigger'),
    // clear
    del = require('del'),
    // loggers and notifiers
    notify = require('gulp-notify'),
    gulplog = require('gulplog'),
    //accessory
    combine = require('stream-combiner2').obj,
    gulpIf = require('gulp-if'),
    newer = require('gulp-newer');
const browserSync = require('browser-sync').create();

const config = {
    html: {
        src: "src/front/*.html",
        dest: "views",
        watch: "src/front/chunk/**/*.*",
    },
    styles: {
        src: "src/front/css/*.css",
        dest: "public/css/",
        watch: "src/front/css/**/*.*",
    },
    scripts: {
        src: "src/front/js/**/*.*",
        dest: "public/js/",
        watch: "src/front/js/**/*.*",
    },
    module: {
        src: "src/modules/**/*.*",
        dest: "public/js/",
        dest2: "lib",
        watch: "src/modules/**/*.*",
    },
    assets: {
        src: "",
        dest: "",
        watch: "",
    },
    clean: ["public/css/*", "public/js/*", "views/*.html"],
    server: {
		src: ".",
		watch: ["views/**/*.html", "public/css/**/*.*", "public/js/**/*.*"],
	},
};


//for production use NODE_ENV=production gulp <task>
var isDev = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';

/* clean dist folder */
gulp.task('clear', function(callback) {
    return del(config.clean).then(paths => {
    console.log('Deleted files and folders:\n', paths.join('\n'));
});;
});

/* compile html from partial */
gulp.task('html', function(callback) {
    return combine( // make container
        gulp.src(config.html.src), // find html
        rigger(), // apply includes !!! add file before included !!!, it may crush task
        gulp.dest(config.html.dest)) // put to build folder
    .on('error', notify.onError(function(error) {
            return {
                title: 'HTML Error',
                message: error.message
            };
        })); // show message if error
});

gulp.task('styles', function(callback) {
    return combine(
        gulp.src(config.styles.src),
        gulpIf(isDev, sourcemaps.init()), // start sourcemap if development
        rigger(), // or any CSS preprocessors
        prefixer(), // add browser prefixes
        gulpIf(isDev, sourcemaps.write()), // write sourcemap if development
        gulp.dest(config.styles.dest))
        .on('error', notify.onError(function(error) {
            return {
                title: 'Styles Error',
                message: error.message
            };
        }));
});

gulp.task('scripts', function(callback) {
    return gulp.src(config.scripts.src, {since: gulp.lastRun('scripts')})
        .pipe(gulp.dest(config.scripts.dest));
});

gulp.task('modules', function(callback) {
    return gulp.src(config.module.src, {since: gulp.lastRun('modules')})
        .pipe(gulp.dest(config.module.dest))
        .pipe(gulp.dest(config.module.dest2));
});

gulp.task('assets', function(callback) {
    return gulp.src(config.assets.src, {since: gulp.lastRun('assets')})
			.pipe(newer(config.asssets.dest))
			.pipe(gulp.dest(config.assets.dest));
});

gulp.task('watch', function() {
    gulp.watch(config.html.watch, gulp.series('html'));
    gulp.watch(config.styles.watch, gulp.series('styles'));
    gulp.watch(config.scripts.watch, gulp.series('scripts'));
    gulp.watch(config.module.watch, gulp.series('modules'));
  //  gulp.watch(config.assets.watch, gulp.series('assets'));
});

gulp.task('build', gulp.series('clear', gulp.parallel('html', 'styles', 'scripts', 'modules')));

gulp.task('serve', function() {
	browserSync.init({
		server: config.server.src
	});
	browserSync.watch(config.server.watch).on('change', browserSync.reload);
});

gulp.task('dev',
			gulp.series('build', gulp.parallel('watch')));

gulp.task('default', gulp.series('dev'));
