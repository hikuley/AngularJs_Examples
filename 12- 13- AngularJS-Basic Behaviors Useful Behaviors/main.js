var app = angular.module("behaviorApp", []);

app.directive("enter", function () {
    return function (scope, element) {
        element.bind("mouseenter", function () {
            console.log("enterrrr");
            element.addClass("panel");
        });
    }
});

app.directive("leave", function () {
    return function (scope, element, attr) {
        element.bind("mouseleave", function () {
            console.log("leaveee");
            console.log(attr);
            element.removeClass(attr.leave); // değeri attrubute'den de alabiliriz
        });
    }
});