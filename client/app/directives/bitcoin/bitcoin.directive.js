(function() {
  'use strict';

  angular.module('app.directives.bitcoin')
  .directive("bitcoinValue", function() {
    return {
      restrict: "E",
      templateUrl: "../app/directives/bitcoin/bitcoin.html",
      controller: "BitcoinController",
    };
  });

})();
