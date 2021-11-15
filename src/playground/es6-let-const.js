var nameVar = 'Petr';
var nameVar = 'Mike';

console.log('nameVar', nameVar);

let nameLet = 'Mike';
nameLet = 'Petr';

console.log('nameLet', nameLet);

const nameConst = 'Bonny';

console.log('nameConst', nameConst);

//block scoping
const fullName = 'Pavel Bubak';
let firstName;

if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);