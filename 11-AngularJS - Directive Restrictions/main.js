var app = angular.module("superHero", []);

app.directive("superman", function () { //superman tagını oluşturmuş olduk
    return {
        restrict: "A",
        link: function () {
            alert("I'm a working superman");
        }
    }
});
app.directive("flash", function () { //superman tagını oluşturmuş olduk
    return {
        restrict: "A",
        link: function () {
            alert("I'm a working flash");
        }
    }
});