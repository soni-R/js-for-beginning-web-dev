/* var getTime = function() {
	console.log(new Date().getTime());
 },
interval = setInterval(getTime, 1000);  //passing named function to setInterval
*/


// the below code too print the timestamp for every second like the above
/*
var interval = setInterval(function(){
	console.log(new Date().getTime());
}, 1000);
*/


// best way to display something for every specified timestamp
var x = 1;
interval = setInterval(function(){
	console.log(x);

	if(x === 5){
		clearInterval(interval);
	}
	x++;
}, 1000);


//code that counts backwards
/*var x = 5;
interval = setInterval(function(){
	console.log(x);

	if(x === 1){
		clearInterval(interval);
	}
	x--;
}, 1000);
*/


// The below code prints hello for every 5 seconds, but it takes 5 secs to even print the initial output(hello) to the console, the reason is that we have not used a named function
/*interval = setInterval(function(){
	console.log('Hello');
}, 5000);
*/

// code using named function which doesnot delay initial output
/*var outputHello = function(){
	console.log('Hello');
},

interval = setInterval(outputHello, 5000);

outputHello();
*/