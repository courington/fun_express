module.exports = function(grunt) {
	// project configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
	});

	// Load Grunt plugins.
  grunt.loadTasks('build');

  // grunt.loadNpmTasks('grunt-contrib-jshint');

  // Tasks.
  grunt.registerTask('dev', ['jshint']);

	grunt.registerTask('default', ['dev']);
};