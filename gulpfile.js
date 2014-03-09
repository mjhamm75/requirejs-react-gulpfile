var gulp = require('gulp'),
      less = require('gulp-less'),
      clean = require('gulp-clean'),
      connect = require('gulp-connect');

var paths = {
  build: {
    css: './build/css',
    html: './build/index.html',
    js: './build/js',
    root: './build',
    templates: './build/templates'
  },
  dev: {
    html: ['./app/index.html'],
    js: './app/js/**/*.js',
    less: ['./app/less/*.less', './app/js/libs/bootstrap/dist/css/bootstrap.css'],
    templates: './app/templates/*.hbs'
  }
};

gulp.task('connect', connect.server({
  root: ['build/'],
  port: 1337,
  livereload: true,
  open: {
    browser: 'google chrome'
  }
}));

gulp.task('clean', function() {
  'use strict';
  gulp.src([paths.build.root])
    .pipe(clean());
});

gulp.task('html', function() {
  'use strict';
  gulp.src(paths.dev.html)
    .pipe(gulp.dest(paths.build.root));
});

gulp.task('js', function() {
  'use strict';
  gulp.src(paths.dev.js)
    .pipe(gulp.dest(paths.build.js));
});

gulp.task('less', function(){
  'use strict';
  gulp.src(paths.dev.less)
    .pipe(less())
    .pipe(gulp.dest(paths.build.css));
});

gulp.task('templates', function() {
  'use strict';
  gulp.src(paths.dev.templates)
    .pipe(gulp.dest(paths.build.templates));
});

gulp.task('watch', function() {
  'use strict';
  gulp.watch(paths.dev.js, ['js']);
  gulp.watch(paths.dev.less, ['less']);
  gulp.watch(paths.dev.html, ['html']);
  gulp.watch(paths.dev.templates, ['templates']);
  gulp.run('default');
});


gulp.task('default', ['html', 'js', 'less', 'templates', 'connect']);