var app = angular.module("superHero", []);
app.directive("superman", function () { //superman tagını oluşturmuş olduk
    return {
        restrict: "E",
        template: "<div> Here I am to save the day</div>"
    }
});