(function() {
  'use strict';

  angular.module('app.directives.inputForm')
  .directive("inputForm", function() {
    return {
      restrict: "E",
      templateUrl: "../app/directives/inputForm/inputForm.html",
      controller: "InputFormController",
    };
  });

})();
