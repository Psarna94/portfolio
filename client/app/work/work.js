'use strict';

angular.module('portfolioApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('work', {
        url: '/work',
        templateUrl: 'app/work/work.html',
        controller: 'WorkCtrl'
      });
  });