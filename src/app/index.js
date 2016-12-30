/**
 * entry point of the application
 */
import angular from 'angular';
import App from './App';


angular
    .module('simpla.app', [
        /**
         * application dependencies goes here
         */
    ])
    .component('splApp', new App());