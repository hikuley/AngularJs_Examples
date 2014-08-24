var myApp = angular.module('myApp', []);

myApp.factory("Avengers", function () {// Veri fabrikası gibi düşünmek gerekir  . . .
    var Avengers = {};
    Avengers.cast = [
        {
            name: "Rober john",
            character: "Tony Strak , falan filan"
        }
        ,
        {
            name: "Rober john",
            character: "Tony Strak , falan filan"
        },
        {
            name: "Rober john",
            character: "Tony Strak , falan filan"
        },
        {
            name: "Rober john",
            character: "Tony Strak , falan filan"
        },
        {
            name: "Rober john",
            character: "Tony Strak , falan filan"
        },
        {
            name: "Rober john",
            character: "Tony Strak , falan filan"
        },
        {
            name: "Rober john",
            character: "Tony Strak , falan filan"
        }

    ];
    return Avengers;
});


myApp.factory("Avengers2", function () {// Veri fabrikası gibi düşünmek gerekir  . . .
    var Avengers2 = {};
    Avengers2.cast = [
        {
            name: "Avengers2 john",
            character: "fwfwe Strak , falan filan"
        }
        ,
        {
            name: "jkykRober john",
            character: "Tony Strak , falan filan"
        },
        {
            name: "rwerw john",
            character: "Tony Strak , falan filan"
        },
        {
            name: "nbvnjy john",
            character: "Tony Strak , falan filan"
        },
        {
            name: "lişil john",
            character: "Tony Strak , falan filan"
        },
        {
            name: "adfadfa john",
            character: "Tony Strak , falan filan"
        },
        {
            name: "üğüğü john",
            character: "gfdg Strak , falan filan"
        }

    ];
    return Avengers2;
});


function AvengersCtrl($scope, Avengers, Avengers2) {//para metre alabilen bir kontroller yapıldı
    $scope.avengers = Avengers;
    $scope.avengers2 = Avengers2;
}

// En basit hali ile angular js veri şekili
function ogrenciCtrl($scope) {

    var data = [
        {firstName: "Halil ibrahim", lastName: "Küley"},
        {firstName: "Halil ibrahim", lastName: "Küley"},
        {firstName: "Halil ibrahim", lastName: "Küley"},
        {firstName: "Halil ibrahim", lastName: "Küley"},
        {firstName: "Halil ibrahim", lastName: "Küley"},
        {firstName: "Halil ibrahim", lastName: "Küley"},
        {firstName: "Halil ibrahim", lastName: "Küley"},
        {firstName: "Halil ibrahim", lastName: "Küley"},
        {firstName: "Halil ibrahim", lastName: "Küley"},
        {firstName: "Halil ibrahim", lastName: "Küley"},
        {firstName: "Halil ibrahim", lastName: "Küley"},
        {firstName: "Halil ibrahim", lastName: "Küley"}
    ];
    $scope.root = data;
}