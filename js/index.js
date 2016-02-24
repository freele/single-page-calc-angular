
angular.module('MyApp',['ngMaterial', 'ngMessages', 'material.svgAssetsCache'])
.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('blue-grey') // specify primary color, all
                            // other color intentions will be inherited
                            // from default
})
.controller('AppCtrl', function($scope) {

  $scope.value1 = 0;
  $scope.value2 = 0;

});


/**
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that can be in foundin the LICENSE file at http://material.angularjs.org/license.
**/