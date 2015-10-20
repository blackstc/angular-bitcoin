(function() {
  'use strict';

  angular.module("app.services")
  .factory("myfactory", function($http) {
    var obj = {};

    obj.getBitcoin = function() {
      return $http.get("https://bitpay.com/api/rates");
    };

    obj.calcNewAmt = function(price, currRate, initalAmt) {
      return price/currRate * initalAmt;
    };

    obj.calcProfit = function(price, currRate, initalAmt) {
      return price/currRate * initalAmt - initalAmt;
    };

    return obj;
  });

})();
