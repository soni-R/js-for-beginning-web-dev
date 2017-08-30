var app = {};
 
 app.add = function(numbers, callback){
 	var result = 0;

 	if(numbers !== undefined && numbers.length){
 		for(number in numbers){
 			//console.log(numbers[number]);
 			result = result + numbers[number];

 		}
 		//console.log(result);

 		if(callback !== undefined){
 			callback(result);
 		}
 	}
 };