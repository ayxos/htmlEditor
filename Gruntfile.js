module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({

    clean: ['*.html'],

    jade: {
      compile: {
        options: {
          client: false,
          pretty: true
        },
        files: [ {
          cwd: "public/templates",
          src: "**/*.jade",
          dest: "public/",
          expand: true,
          ext: ".html"
        } ]
      }
    },

    ngAnnotate: {
      'dev': {
        files: {
          'public/js/ngAnnotated.js': 'public/js/angular/**/*.js'
        }
      }
    },

    watch: {
      options: {
        event: ['added', 'changed']
      },
      jade: {
        files: ['templates/*.jade'],
        tasks: ['newer:jade','jade']
      }
    }

  });

  //production task
  grunt.registerTask('production', ['clean','jade', 'concat', 'uglify']);

  //default task
  grunt.registerTask('default', ['clean','jade', 'ngAnnotate']);

  //untest task
  grunt.registerTask('notest', ['clean','jade', 'concat']);


};