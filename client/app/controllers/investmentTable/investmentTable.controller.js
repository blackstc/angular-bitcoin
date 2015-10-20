(function() {
  'use strict';

  angular.module('app.controllers.investmentTable')
  .controller('InvestmentTableController', function($scope, $http, myfactory){
    // calling the api, grabbing the value for USD, appending it to the dom

    $scope.initalAmt = 5000;

    //set the funcitons from the factory
    $scope.newAmt = myfactory.calcNewAmt;
    $scope.profit = myfactory.calcProfit;
  });

})();
