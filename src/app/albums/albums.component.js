// albums.controller.js
(function () {
    'use strict';

    angular
        .module('app')
        .component('albums', {
            controller: 'AlbumsController',
            controllerAs: 'vm',
            templateUrl: 'app/albums/albums.html'
        });

})();