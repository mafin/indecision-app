'use strict';

// argument object - no longer bound with arrow functions

// const add = function (a, b) {
//     console.log(arguments);
//     return a + b;
// }

var add = function add(a, b) {
    return a + b;
};

console.log(add(55, 1));

// this keyword - no longer bound

var user = {
    name: 'Petr',
    cities: ['Prague', 'Bratislava', 'Budva'],
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        return this.cities.map(function (city) {
            return _this.name + ' has lived in ' + city;
        });

        // this.cities.forEach((city) => {
        //     console.log(this.name + ' has lived in ' + city);
        // });
    }
};

console.log(user.printPlacesLived());

var multiplier = {
    numbers: [1, 6, 25],
    muliplyBy: 3,
    multipy: function multipy() {
        var _this2 = this;

        return this.numbers.map(function (number) {
            return _this2.muliplyBy * number;
        });
    }
};

console.log(multiplier.multipy());
