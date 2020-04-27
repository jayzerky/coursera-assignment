// JavaScript source code
(function () {
    'use strict';
    angular.module('firstAssignment', [])
        .controller('lunchChecker', checkQuantity)

    checkQuantity.$inject = ['$scope'];
    function checkQuantity($scope) {
        $scope.food = '';
        $scope.message = '';
        $scope.foodQuantity = function () {
            if (!$scope.food) {
                $scope.message = "Please enter data first";
                $scope.changeColor = { "color": "red" };
                $scope.changeBorder = { "border-color": "red" };
                return;
            }
            var differentfoods = $scope.food.split(',');
            differentfoods = differentfoods.filter(function (el) {
                return /\S/.test(el); //Remove the blank arrays, by removing whitespace if any
            });
            if (differentfoods.length <= 3) $scope.message = "Enjoy!";     
            else if (differentfoods.length > 3) $scope.message = "Too much!";
            $scope.changeColor = { "color": "green" };
            $scope.changeBorder = { "border-color": "green"};
        };
    }


})();