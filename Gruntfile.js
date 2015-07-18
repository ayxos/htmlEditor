module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

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

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  // Compile Jade templates to HTML !!!IMPORTANT there is another contrib from jade to JS
  grunt.loadNpmTasks('grunt-contrib-jade');
  // Remove files
  grunt.loadNpmTasks('grunt-contrib-clean');
  // Compile Jade templates to JavaScript
  // grunt.loadNpmTasks('grunt-jade');
  // watch newer files
  grunt.loadNpmTasks('grunt-newer');

  //production task
  grunt.registerTask('production', ['clean','jade', 'concat', 'uglify']);

  //default task
  grunt.registerTask('default', ['clean','jade']);

  //untest task
  grunt.registerTask('notest', ['clean','jade', 'concat']);


};