(function() {
  'use strict';

  angular.module('app.controllers.bitcoin')
  .controller('BitcoinController', function($scope, $http, myfactory){
    
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
  });

})();
