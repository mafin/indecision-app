// argument object - no longer bound with arrow functions

// const add = function (a, b) {
//     console.log(arguments);
//     return a + b;
// }

const add = (a, b) => {
    return a + b;
}

console.log(add(55, 1));

// this keyword - no longer bound

const user = {
    name: 'Petr',
    cities: ['Prague', 'Bratislava', 'Budva'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);

        // this.cities.forEach((city) => {
        //     console.log(this.name + ' has lived in ' + city);
        // });
    }
};

console.log(user.printPlacesLived());

const multiplier = {
    numbers: [1, 6, 25],
    muliplyBy: 3,
    multipy() {
        return this.numbers.map((number) => this.muliplyBy * number);
    }
}

console.log(multiplier.multipy());
