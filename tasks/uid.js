/*
 * grunt-uid
 * https://github.com/christophwitzko/grunt-uid
 *
 * Copyright (c) 2015 Christoph Witzko
 * Licensed under the MIT license.
 */

'use strict'

var crypto = require('crypto')
var fs = require('fs')

module.exports = function(grunt) {

  grunt.registerMultiTask('uid', 'creates a UID', function() {
    var options = this.options({length: 8, file: 'build.uid', confname: 'uid'})
    var uid = ''
    if(this.data.generate || !(fs.existsSync(options.file) && fs.statSync(options.file).isFile())){
      grunt.log.writeln('generating unique id with %d bytes...', options.length)
      uid = crypto.randomBytes(options.length).toString('hex')
      grunt.file.write(options.file, uid)
    }
    else{
      grunt.log.writeln('reading uid...')
      uid = grunt.file.read(options.file)
    }
    grunt.log.writeln('setting "%s" to: %s', options.confname, uid)
    grunt.config.set(options.confname, uid)
  })

}
