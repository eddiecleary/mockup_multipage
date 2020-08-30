const gulp = require("gulp"),
  debug = require('gulp-debug'),
  plumber = require("gulp-plumber"),
  sass = require("gulp-sass"),
  autoprefixer = require("gulp-autoprefixer"),
  imagemin = require("gulp-imagemin"),
  rename = require("gulp-rename"),
  concat = require("gulp-concat"),
  changed = require("gulp-changed"),
  liveReload = require("gulp-livereload")
  plumberNotifier = require('gulp-plumber-notifier'),
  svgSymbols = require('gulp-svg-symbols');

const paths = {
  styles: {
    src: "./src/scss/**/*.scss",
    dest: "./dist/css/",
  },
  scripts: {
    src: "./src/js/*.js",
    dest: "./dist/js/",
  },
  icons: {
    src: "./src/icons/*.svg",
    dest: "./dist/images/"
  },
  images: {
    src: "./src/images/ready/*",
    dest: "./dist/images/",
  },
};

function styles() {
  return (
    gulp
      .src(paths.styles.src)
      .pipe(plumberNotifier())
      .pipe(sass())
      .pipe(
        autoprefixer({
          overrideBrowserslist: ["last 2 versions"],
          cascade: false,
        })
      )
      .pipe(sass({ outputStyle: "expanded" }))
      .pipe(concat("styles.css"))
      .pipe(gulp.dest(paths.styles.dest))
      .pipe(sass({ outputStyle: "compressed" }))
      .pipe(rename("styles.min.css"))
      .pipe(gulp.dest(paths.styles.dest))
      .pipe(liveReload())
  );
}

function scripts() {
  return (
    gulp
      .src(paths.scripts.src)
      .pipe(plumberNotifier())
      .pipe(gulp.dest(paths.scripts.dest))
      .pipe(liveReload())
  );
}

function icons() {
  return (
    gulp
      .src(paths.icons.src)
      .pipe(plumberNotifier())
      .pipe(svgSymbols({
        style: 'positon: absolute;',
        'aria-hidden': 'true'
      }))
      .pipe(gulp.dest(paths.icons.dest))
      .pipe(liveReload())
  );
}

function images() {
  return (
    gulp
      .src(paths.images.src)
      .pipe(changed(paths.images.dest))
      .pipe(imagemin())
      .pipe(gulp.dest(paths.images.dest))
      .pipe(liveReload())
  );
}

function reload(done) {
  liveReload.reload();
  done();
}

function watchTask() {
  liveReload.listen();
  gulp.watch(paths.styles.src, styles);
  gulp.watch(paths.scripts.src, scripts);
  gulp.watch(paths.icons.src, icons);
  gulp.watch(paths.images.src, images);
  gulp.watch('./dist/*.html', reload);
}

const dev = gulp.parallel([watchTask, reload]);
const build = gulp.series([images, icons, styles, scripts]);

exports.images = images;
exports.styles = styles;
exports.scripts = scripts;
exports.icons = icons;
exports.build = build;
exports.default = dev;