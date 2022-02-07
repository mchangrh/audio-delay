// Inside your Gruntfile.js
module.exports = function (grunt) {
  // Define a zip task
  grunt.initConfig({
    zip: {
      'dist/chrome.zip': ['src/**', 'icons/**', 'manifest.json']
    }
  });
 
  // Load in `grunt-zip`
  grunt.loadNpmTasks('grunt-zip');
};