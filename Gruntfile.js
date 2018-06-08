module.exports = function(grunt) {

	var paths = {
		src: 'webapp'
	};

	grunt.initConfig({
		pkg : grunt.file.readJSON('package.json'),

		eslint : {
			target : [ paths.src ]
		},

	});

	// Load the plugins
	grunt.loadNpmTasks('grunt-eslint');

	// define tasks
	grunt.registerTask('lint', [ 'eslint' ]);

};