var number1 = 16,
    number2 = 5,
    number3 = 2
	result = number1 + number2; // we can use all mathematical operators(+, -, *, /, %) in place of +.
	console.log(result);

	result = (number1 + number2) / number3;

	result = number1 % number2; // % results remainder
	console.log(result); // outputs 1


	// Increment and Decrement

var number = 1;
	 result = number++; //outputs 1
	 console.log(result);

var num =1;
	 result = ++num; // outputs 2
	 console.log(result);

var num2 = 1;
	 result = num2--; // outputs 1
	 console.log(result);

var num3 = 1;
	 result = --num3; // outputs 0
	 console.log(result);


var value = 1;
	value= value + 1;  // same as ++value
	console.log(value);

var negvalue = -10;

//in console
// number
// 2
// -number
// -2

// negvalue
// -10
// -negvalue  //negation
// 10

var value2 ='20'; //value2 is a string types

// value2
// "20"
// +value2 // +value2 converts string type value into integer
// 20

var value3 = 'Alex'; // string type

// output in console
// value3
// "Alex"
// +value3 //  +value3 results NaN since value3 has string in it 
// NaN
