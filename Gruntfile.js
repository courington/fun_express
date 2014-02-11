module.exports = function(grunt) {
	// project configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		clean: {

		},
		jshint: {

		},
		watch: {

		},
	});

	grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', []);
}
