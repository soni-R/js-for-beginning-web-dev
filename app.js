// Array is like a datatype in javascript which stores a list of particular items with in it.(or)
// arrays are used to store multiple values in a single variable.

var names = ['Alex', 'Billy', 'Dale'];

/* output in console
names
[]
typeof names
"object" */

// Remove Billy
names.splice(1, 1); //(1,1) first value specifies index and second one specifies how many elements we have to remove

// Add Joshua and Ashley
names.push('Joshua', 'Ashley');

// Add Sheba
names[4] = 'Sheba';

// Change Dale to Billy
names[1] = 'Billy';

// Add named index to end of array
names['color'] = 'Blue';

console.log(names);

var fruits = ['apple', 'orange', 'grapes', 100, 80, 65, {}]; //in arrays we can even store numbers and object (the curly braces represent object)

/* accessing elements of array in console
names[0]
"Alex"
names[2]
"Dale" */

//changing Billy to sam(but this change in console will not affect the original code, as soon as we refresh page it sets back to original code)
// names[1] = 'sam';
// "sam"
// names 
// ["Alex", "sam", "Dale"]

//to append new values
// names
// ["Alex", "Billy", "Dale"]
// names[3] = 'john';
// "john"
// names
// ["Alex", "Billy", "Dale", "john"]

// names.push('ally');
// 5 // .push returns number of elements in an array and insert the specified element
// names
// ["Alex", "Billy", "Dale", "john", "ally"]

// names.splice(names, 1)  //.splice removes specified element
// ["Alex"]
// names
// (4) ["Billy", "Dale", "john", "ally"]

// names
// (3) ["Alex", "Billy", "Dale"]
// names.splice(1, 2)       // first value specifies index of the element to remove, second value specifies number of elements to remove from there
// (2) ["Billy", "Dale"]
// names
// ["Alex"]  // remaining elements

// names.push('sam');
// names.push('marc');
// names.push('sam' , 'marc'); // we can add any number of elements in single line

// accessing named index
// names.color
// "Blue"