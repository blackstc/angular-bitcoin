(function() {
  'use strict';

  angular.module('app.controllers.investmentTable')
  .controller('InvestmentTableController', function($scope, $http, myfactory){
    
    //set the funcitons from the factory
    $scope.newAmt = myfactory.calcNewAmt;
    $scope.profit = myfactory.calcProfit;

  });

})();
