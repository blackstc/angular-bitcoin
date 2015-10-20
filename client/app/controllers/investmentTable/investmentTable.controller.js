(function() {
  'use strict';

  angular.module('app.controllers.investmentTable')
  .controller('bitcoinController', function($scope, $http, myfactory){
    // calling the api, grabbing the value for USD, appending it to the dom
    myfactory.getBitcoin()
    .success(function(data){
      $scope.rates = data;
      for(var i=0;i<data.length;i++){
        if (data[i].code == "USD"){
          $scope.currRate = data[i].rate;
        }
      }
    });

    $scope.initalAmt = 5000;

    $scope.newAmt = myfactory.calcNewAmt;
    $scope.profit = myfactory.calcProfit;
  });
  
})();
