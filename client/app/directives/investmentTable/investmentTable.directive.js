(function() {
  'use strict';

  angular.module('app.directives.investmentTable')
  .directive("investmentTable", function() {
    return {
      restrict: "E",
      templateUrl: "../app/directives/investmentTable/investmentTable.html",
      controller: "InvestmentTableController",
      link: function(scope, elements, attrs, controllers) {
        scope.prices = [1000, 5000, 10000, 25000, 50000];
      }
    };
  });

})();
