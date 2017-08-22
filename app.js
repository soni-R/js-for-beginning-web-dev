var names = ['Alex', 'Billy', 'Dale', 'ally'];


//This loop may not returns the result in index order
/* for(name in names)
{
	console.log(names[name]);
} */


//This for loop certainly returns the result in order
for(var x = 0; x <= 2; x=x+1){ //in place of x=x+1 we can use x++
	//here x<=2 is not dynamic, for eg if we have one more element in array at index 3, that will not be displayed
	console.log(names[x]);
}

// output in console
//  Alex
//  Billy
//  Dale // 'ally' is not displayed bcoz of x <= 2 therefore we have to use (x <= names.length-1) this gets the array elements dynamically.

for(var x = 0; x <= names.length-1; x=x+1){ // or in place of (x <= names.length-1) we can use x < names.length.
	console.log(names[x]);
}