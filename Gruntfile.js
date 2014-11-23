/*
 * grunt-uid
 * https://github.com/christophwitzko/grunt-uid
 *
 * Copyright (c) 2014 Christoph Witzko
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  grunt.initConfig({
    uid: {
      options: {
        length: 4,
        file: '.uid',
        confname: 'builduid'
      },
      gen: {
        generate: true
      },
      def: {

      }
    }
  });

  grunt.loadTasks('tasks')
  grunt.registerTask('default', ['uid'])

}
