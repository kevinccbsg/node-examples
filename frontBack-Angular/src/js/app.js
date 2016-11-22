angular
  .module('starterApp', ['ngMaterial', 'starterApp.controllers'])
  .run(['$log', function($log){
    $log.debug("starterApp +  running...");
  }]);
require('./app.control.js');