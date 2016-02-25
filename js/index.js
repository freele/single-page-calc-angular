
angular.module('MyApp',['ngMaterial', 'ngMessages', 'material.svgAssetsCache'])
.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('blue-grey') // specify primary color, all
                            // other color intentions will be inherited
                            // from default
})
.controller('AppCtrl', function($scope) {

  $scope.old = {
    inputs: {
      totalArea: {
        name: 'Total office area',
        value: 33000,
      },
      rent: {
        name: 'Rent per sq. m. per year',
        value: 20,
      },
      expense: {
        name: 'Operating Expense per sq. m. per year',
        value: 58.3333333,
      }
    },
    formulas: {
      monthlyRent: function monthlyRent() {
        var i = $scope.old.inputs;

        var result = i.totalArea.value * i.rent.value / 12 + i.expense.value / 12 + 16.66;
        $scope.old.results.monthlyRent = result;
        return result.toFixed(2);
      }
    },
    results: {},
  }

  $scope.new = {
    constants: {

    },
    inputs: {
      office: {
        name: 'Office usage',
        value: 0,
      },
      meetings: {
        name: 'Meetings usage',
        value: 0,
      },
      kitchen: {
        name: 'Kitchen usage',
        value: 0,
      },
      storage: {
        name: 'Storage usage',
        value: 0,
      },
      print: {
        name: 'Print usage',
        value: 0,
      }
    },
    formulas: {
      monthlyRent: function monthlyRent() {
        var i = $scope.new.inputs;
        var oldRent = $scope.old.results.monthlyRent;

        var result = oldRent / 100 * (0.759 * i.office.value + 0.167 * i.meetings.value + 0.26 * i.kitchen.value + 0.027 * i.storage.value + 0.021 * i.print.value);
        $scope.new.results.monthlyRent = result;
        return result.toFixed(2);
      }
    },
    results: {},
  }

});


/**
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that can be in foundin the LICENSE file at http://material.angularjs.org/license.
**/