var gulp  = require('gulp');
var karma = require('karma').server;

var karmaCommonConf = {

  browsers: ['Chrome'],
  frameworks: ['mocha', 'chai', 'chai-as-promised', 'sinon-chai'],
  autoWatch: true,
  files: [
    'node_modules/angular/lib/angular.js',
    'node_modules/angular-mocks/angular-mocks.js',
    'bower_components/angular-chrome-options/*.js',
    'tests/test-modules/data.js',
    'tests/test-modules/chrome-storage-api.js',
    'tests/*.js'
  ],
  client: {
    mocha: {
      ui: 'bdd'
    }
  }
};

gulp.task('karma', function (done) {
  karma.start(karmaCommonConf, done);
});

gulp.task('default', ['karma']);
