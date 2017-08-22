var number1 = 10,
number2 = 50,
result; // typeof result is undefined since we hasn't had a value set to it
// Note: undefined is different from not defined, undefined means no value is assigned, not defined means the specified variable is not exist in code.

/* output in console
typeof result
"undefined"
typeof number1
"number" */

if(typeof result === 'undefined') // === this not only checks the value for equal but also checks the type of a variable
{
	result = number1 + number2;
}

//NaN(not a number)
var result2 = 'Alex';
// result2/2
// NaN
// parseInt(result2)
// NaN
// output in console is NaN, for result2/2, since result2 is string type

var result3 = '0Alex2';
//parseInt(result3)
//0    - gives what ever value available first

//The isNaN() function determines whether a value is not a number or a number
if(isNaN(result2 / 2)){
	console.log("not a number");
}

num = 'a';
result = num + number1;
// result
// "a10"

result = parseInt(number1) + parseInt(num); // results NaN since num is string type.
// result
// NaN