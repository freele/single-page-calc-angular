
angular.module('MyApp',['ngMaterial', 'ngMessages', 'material.svgAssetsCache'])
.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('blue-grey') // specify primary color, all
                            // other color intentions will be inherited
                            // from default
})
.controller('AppCtrl', function($scope) {

  // input a = Leasable area
  // input b = vacancy percentage
  // input c = rent per sq. m per year
  //
  // OLD RENT = input a * (100 - input b) * input c /1200
  //

  $scope.old = {
    inputs: {
      leasableArea: {
        name: 'Leasable area',
        value: 0,
      },
      vacancyPercentage: {
        name: 'Vacancy percentage',
        value: 0,
      },
      rent: {
        name: 'Rent per sq. m per year',
        value: 0,
      }
    },
    formulas: {
      rent: function rent() {
        var i = $scope.old.inputs;

        var result = i.leasableArea.value * (100 - i.vacancyPercentage.value) * i.rent.value / 1200;
        $scope.old.results.rent = result;
        return result.toFixed(2);
      }
    },
    results: {},
  }
  //
  // input d = average working hours per week
  // input e = average contract duration days
  // input f = office usage
  // input g = Additional hours for program per day
  // input h = Engagement level 1
  // input i = percentage of vacancy for special program
  // input j = Engagement Level 2

  // (Old Rent * input f/100) + [input a * (100-input b) * input h * input g * 30.44 * 0.1 /10000] + [input a * input b * input i * input j * 243.52 / 1,000,000]

  $scope.new = {
    inputs: {
      avWorkingHours: {
        name: 'Average working hours per week',
        value: 1,
        min: 1,
        max: 168,
      },
      avContractDuration: {
        name: 'Average contract duration days',
        value: 1,
        min: 1,
        max: 180,
      },
      officeUsage: {
        name: 'Office usage',
        value: 0,
        min: 0,
        max: 100,
      },
      addHours: {
        name: 'Additional hours for program per day',
        value: 1,
        min: 1,
        max: 24,
      },
      eng1: {
        name: 'Engagement level 1',
        value: 0,
        min: 0,
        max: 100,
      },
      vacancyPercentage: {
        name: 'Percentage of vacancy for special program',
        value: 0,
        min: 0,
        max: 100,
      },
      eng2: {
        name: 'Engagement level 2',
        value: 0,
        min: 0,
        max: 100,
      },
    },
    formulas: {
      rent: function rent() {
        var i = $scope.new.inputs;
        var iOld = $scope.old.inputs;
        var oldRent = $scope.old.results.rent;

        // (Old Rent * input f/100) + [input a * (100-input b) * input h * input g * 30.44 * 0.1 /10000] + [input a * input b * input i * input j * 243.52 / 1,000,000]

        var temp1 = oldRent*i.officeUsage.value/100;
        var temp2 = (iOld.leasableArea.value * (100 - iOld.vacancyPercentage.value) * i.eng1.value * i.addHours.value * 30.44 * 0.1 / 10000);
        var temp3 = iOld.leasableArea.value * iOld.vacancyPercentage.value * i.vacancyPercentage.value * i.eng2.value * 243.52 / 1000000;
        debugger;
        var result = temp1 + temp2 + temp3;
        $scope.new.results.rent = result;
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