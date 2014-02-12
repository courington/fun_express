module.exports = function(grunt) {

  grunt.config.set('jshint', {
    build: {
      options: {
        jshintrc: '.jshintrc',
      },
      src: ['Gruntfile.js', 'build/**/*.js'],
    },
    app: {
      options: {
        jshintrc: '.jshintrc',
      },
      src: ['src/**/*.js'],
    },
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');

};