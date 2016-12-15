module.exports = function(grunt) {

	grunt.loadNpmTasks("grunt-preprocess");

	grunt.initConfig({
		preprocess: {
		    options: {
		        api: {
		            API_URL: process.env.API_HOST || 'localhost:8080'
		        }
		    },
		    config: {
		        src: 'public/config/config.tmpl.js',
		        dest: 'public/config/config.js' // true file generated and loaded in index.html
		    }
		},
	});	
	grunt.registerTask("preprocess");
}
