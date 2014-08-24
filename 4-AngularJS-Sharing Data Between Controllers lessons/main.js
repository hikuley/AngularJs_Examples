//Service
var myApp = angular.module("myApp", []);
myApp.factory('Data', function () {
    return {message: "I'm data from a service"}
});




//Controller
function firstController($scope, Data) {
    $scope.data = Data;
}

//Controller
function secondController($scope, Data) {
    $scope.data = Data;
}