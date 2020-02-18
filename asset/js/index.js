/*
// This is a print statement to the concole

// This is a example of variable using var
//don't use var anymore
// var x = 3;
// var y = x + 2;

// console.log(y);

// y = "hello"
// console.log(y);

let x = 3;
let y = x + 2;

console.log(y);

y = "Hello";

console.log(y);

//
const today = "2020-02-18";
console.log(today);

// const today = "2020-02-19";
// console.log(today);


//number
let apples = 3;
console.log(apples);

let name = "Yuanyuan's \"stupid\"";
console.log(name);


// string
let last_name = `${name} HU`;
console.log(last_name);


//


//Boolean

let isOver18 = true;
console.log(isOver18);

let isPetOwner = false;
console.log(isPetOwner);



//

let awesome=undefined;
console.log(awesome);

let winners = null;
console.log(winners);



let groceries = [
    "apples",
    "orange",
    "pineaple"
];

console.log(groceries);
console.log(groceries.length);
console.log(groceries[0]);

console.log(groceries[2]);
console.log(groceries[3]);

groceries.push("grapefruit");
groceries.push("watermelon","egg");
console.log(groceries);

console.log(groceries.length);
let justBought = groceries.pop ();
console.log(groceries.length);

console.log(justBought);
*/


// object
//difficient = and ":"
let person = {
    name: {
        firstName: "Yuanyuan",
        middleName: null,
        lastName: "Hu",
    },

    dateOfBirth: "08-10",
    hair: "black",
    hairStyle: "straight",
    favColors: [
        "black", "pink", "white"
    ]


};

console.log(person.name.lastName);
console.log(person.favColors[2]);

person.dateOfDeath = "2002-02-09";

console.log(person.dateOfDeath);
person.dateOfDeath = "null";


console.log(person);
