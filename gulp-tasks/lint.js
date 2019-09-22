const { src, dest } = require('gulp');
const plugins = require('gulp-load-plugins')();
const config = require('./config')();

function lint() {
  return src([
    config.paths.src.css
  ])
  .pipe(plugins.stylelint({
    failAfterError: true,
    reporters: [
      {formatter: 'string', console: true}
    ]
  }));
}

module.exports = lint;
