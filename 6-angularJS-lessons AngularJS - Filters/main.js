//Service
var myApp = angular.module("myApp", []);
myApp.factory('Data', function () {
    return {message: "I'm data from a service"}
});

//Filter
myApp.filter('reverse', function (Data) {
    return function (text) {
        return text.split("").reverse().join("") + Data.message;
    }
});


//Controller
function firstController($scope, Data) {
    $scope.data = Data;
}

//Controller
function secondController($scope, Data) {
    $scope.data = Data;
    $scope.reversedMessage = function (message) {
        return message.split("").reverse().join("");
    }
}