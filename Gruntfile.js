module.exports = function(grunt) {

	var paths = {
		src : 'webapp'
	};

	grunt
			.initConfig({
				pkg : grunt.file.readJSON('package.json'),

				eslint : {
					target : [ paths.src ]
				},

				connect : {
					options : {
						port : 8080,
						hostname : '*',
						keepalive : true
					},
					src : {},
					dist : {}
				},

				openui5_connect : {
					options : {
						resources : 'https://openui5.hana.ondemand.com/1.52.13/resources/',
						cors : {
							origin : '*'
						}
					},
					src : {
						options : {
							appresources : 'webapp'
						}
					},
					dist : {
						options : {
							appresources : 'dist'
						}
					}
				},

			});

	// Load the plugins
	grunt.loadNpmTasks('grunt-eslint');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-openui5');

	// define tasks
	grunt.registerTask('lint', [ 'eslint' ]);
	grunt.registerTask('serve', [ 'openui5_connect:src' ]);

};