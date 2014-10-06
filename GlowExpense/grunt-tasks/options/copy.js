'use strict';
// Put files not handled in other tasks here
module.exports = function(grunt) {
    grunt.config('copy', {
        dist: {
            files: [
                {
                    expand: true,
                    dot: true,
                    cwd: '<%= grunt.config.app %>',
                    dest: '<%= grunt.config.dist %>',
                    src: [
                        '*.{ico,png,txt}',
                        'offline.html',
                        '.htaccess',//??
                        'resources/fonts/**',
                        'resources/images/**'
                    ]
                }
            ]
        },
		cordova: {
            files: [
                {
                    expand: true,
                    dot: true,
                    cwd: '<%= grunt.config.dist %>',
                    dest: '<%= grunt.config.cordova %>/www',
                    src: [
                        '**/*'
                    ]
                }
            ]
        }
    });
};