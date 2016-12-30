/**
 * this is bootstrap file of all 
 */

import * as angular from 'angular';
import './index.css'

import './startup';
import './app';

angular.module('simpla', [

    /**
     * vendor
     */

    /**
     * application dependencies
     */
    'simpla.startup',
    'simpla.app'
]);

/**
 * bootstrap
 */

angular.bootstrap(document, ['simpla'], {
    strictDi: true
});

console.info('application load completed!');