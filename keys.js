// This module stores the parse keys
// It is in .gitignore in order to keep them secret
// You will need to sign up for parse and use your own keys
// Accounts are free at www.parse.com
//
// The keys can be accessed by including the keys module and 
// calling KeySvc.key1, KeySvc.key2
angular.module('keys', [])

.factory('KeySvc', function() {
    return {
        //App Key
        key1:"we8Xt6J385pTqcrafbsGqEA2mPvq0GKv7Qgm9vCL",
        //JavaScript Key
        key2:"ThpU2U0GqOfHMbYEJ4M1lz1on8XSxvY7WqgfDOtJ",
        //REST API Key
        key3:"b3dNpdsOH8wa9JdGWNB1OUtJa4fAAdjsCNabjFih"
    };
});
