const square = function (x) {
    return x * x;
};

// const squareArrow = (x) => {
//     return x * x;
// };

const squareArrow = (x) => x * x;

console.log(squareArrow(4));

const getFirstName = (fullName) => fullName.split(' ')[0].toUpperCase();

console.log(getFirstName('Zombik Bubak'));
