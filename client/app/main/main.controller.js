'use strict';

angular.module('portfolioApp')
    .controller('MainCtrl', function ($scope, $http) {

        $scope.canvasWidth = 400;
        $scope.canvasHeight = 400;
        $scope.dofillcontainer = true;
        $scope.scale = 1;
        $scope.materialType = 'lambert';

    });
