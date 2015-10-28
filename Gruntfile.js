
module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  // Configuration goes here
  grunt.initConfig({

    autoprefixer: {
      dist: {
        files: {
          'css/uscc-ecomm.css': 'css/uscc-ecomm.css'
        }
      }
    },

    sass: {                              // Task
      dist: {                            // Target
        options: {                       // Target options
          style: 'compressed',
          sourcemap: 'none'
        },
        files: {                         // Dictionary of files
          'css/uscc-ecomm.css': 'scss/uscc-ecomm.scss',       // 'destination': 'source'
        }
      }
    },

    concat: {
      options: {
        separator: "\n", //add a new line after each file
        banner: "$(document).ready(function(){ ", //added before everything
        footer: " });" //added after everything
      },
      custom: {
        src: ['js/custom/*.js'],
        dest: 'js/main.js',
      }
    },

    watch: {
      html: {
        files: ['**/*.html'],
        options: {
          livereload: true,
        },
      },
      css: {
        files: 'scss/*.scss',
        tasks: ['sass', 'autoprefixer'],
        options: {
          livereload: true,
        },
      },
      js:  {
        files: ['js/custom/*.js'],
        tasks: [ 'concat:custom' ],
        options: {
          livereload: true,
        },
      },
    }

  });


  // Define your tasks here
  grunt.registerTask('default', ['watch']);
  grunt.registerTask('serve', ['watch']);

};
