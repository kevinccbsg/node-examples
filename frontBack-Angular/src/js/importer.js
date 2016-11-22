angular
  .module('starterApp', ['ngMaterial', 'starterApp.controllers'])
  .run(['$log', function($log){
    $log.debug("starterApp + ngMaterial running...");
  }]);
require('./app.control.js');