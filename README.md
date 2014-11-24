# grunt-uid

> generates unique ids

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-uid --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-uid');
```

## The "uid" task

### Overview
In your project's Gruntfile, add a section named `uid` to the data object passed into `grunt.initConfig()`.

```js
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
```

### Options

#### options.length
Type: `Integer`
Default value: `8`

#### options.file
Type: `String`
Default value: `'build.uid'`

#### options.confname
Type: `String`
Default value: `'uid'`


## Release History
_(Nothing yet)_
