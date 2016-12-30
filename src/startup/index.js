import angular from 'angular';

angular.module('simpla.startup', [])
    .config(routeConfig)
    .run(startup);


function routeConfig() {

}

startup.$inject = ['$log'];
function startup($log) {
    $log.info('application loading...');
}