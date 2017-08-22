var name='Mark';
age =32;
availableToday = false;

if(age === 32){
	console.log('age is 32');
}


/*  Comparison Operators
	'='    assigns value
	'=='   checks something is equal to
	'==='  strict equal, checks for value equality and type of the variable as well
	'!='   not equal
	'!=='  strict not equal, checks for not equal value or not equal type
	'>'	   greater than 	 	
	'<'	   less than 		
	'>='   greater than or equal to  	
	'<='   less than or equal to */

// output in console
// 	name
// "Mark"
// age
// 32
// age == 32
// true
// age === 32
// true
// age === '32' // === doesnot only check value it also checks type of the variable 
// false		// since age is int type we passed 32 as a string so output is false
// age == '32'
// true
// age != '32'
// false
// age !== '32' // !== operator also checks type of variable
// true