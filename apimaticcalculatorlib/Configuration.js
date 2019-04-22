/**
 * APIMATICCalculatorLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

;(function (angular) {
'use strict';

angular.module('APIMATICCalculatorLib')
    .factory('Configuration', ['APIHelper', 'Servers', 'Environments', Configuration]);

    function Configuration(APIHelper, Servers, Environments) {
        var environmentsMap = [],
            e = Environments, 
            s = Servers;
    
    
        environmentsMap[e.PRODUCTION] = [];
    
        environmentsMap[e.PRODUCTION][s.ORACLE] = 'http://129.213.81.39/testing/apps/calculator';
        environmentsMap[e.PRODUCTION][s.API_MATIC_HOST] = 'http://examples.apimatic.io/apps/calculator';

        return {
            /**
             * Current API environment
             * @type {string}
             */
            currentEnvironment: e.PRODUCTION,
    
            /**
             * Get base URI for a server in the current API environment
             * @param  {string|null} server Server name
             * @return {string}             Base URI for server
             */
            getBaseUri: function (server) {
                var url = environmentsMap[this.currentEnvironment][server || s.API_MATIC_HOST];
                var urlParams = {
                    };
                return APIHelper.appendUrlWithTemplateParameters(url, urlParams);
            }
        };
    }

}(angular));
