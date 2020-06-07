
let name = 'Diandra';
console.log(name);

console.log("My name is " + name);
/**
 * variable rules
 * cannot be a reserved keyword
 * should be meaningful
 * cannot start with a number (eg. 1name)
 * cannot contain a space or hypen (-)
 * Are case-sensitive
 * 
 */

 let firstName = 'Diandra';
 let lastName = 'Simon';

 console.log(firstName + " " + lastName);

 const interestRate = 0.3; //inital value, can always be changed later

 console.log(interestRate);

//use constant if you dont want the value to change.
//if you need to reassign/change variable use let. 

let state = 'SC'; //String literal
let age = 35; // number literal
let isApproved = true; //boolean literal
let firstName2 = undefined;
let lastName2 = null; // explicitly clear the value of the variable

//Javascript Objects

let person = {
    name: 'Dee',
    age: 35,
    state : 'south carolina'
} // object literal, adding key value pairs


console.log(person);
console.log(person.age);

person.name = 'Diandra';

let selection ='name';
person[selection] = 'Bianca';

console.log(person.name);

//arrays

let selectedColors = []; //empty array 

selectedColors=['red', 'blue'];

console.log(selectedColors);

console.log(selectedColors[1]);
selectedColors[2] = 1;

console.log(selectedColors.length);

//technically an array is an object

//functions  a set of statemnts that perform a tast or calculate

//performing a task
function greet(name){

// body of the function where you would add some kind of logic
console.log('Hello ' + name );

}

greet('Dee'); // argument is the actual value provided for the parameter


greet('Ryan');

//calculating a value
function square(number){

    return number * number;
}

let number = square(3);
console.log(number);
console.log(square(5));

console.log(square(11));


















































