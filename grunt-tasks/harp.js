'use strict';

module.exports = {
  server: {
  	server: true,
  	source: '_site'
  },
  staticserver: {
    server:true,
    source: 'web',
    port: 8800
  },
  dist: {
    source: '_site',
    dest: 'web'
  }
};