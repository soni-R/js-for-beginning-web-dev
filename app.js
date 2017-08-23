 var name = 'Alex',
 age = 30;

// window.name //window will have our defined variables and functions too
// "Alex"
// window.age
// 30

var app = {
	version : 1.0,
	name : 'Brilliant app',
	getVersion : function() {
		//return app.version;
		return this.version;
	}
	
};

/*return app.version; // instead of app.version it is better to use this.version or whatever property it is , bcoz if we change the object name app to
		someother name then app.version will not work  */


/* creating objects and properties

 var app = {
	
 };

app.version = 1.0;   // defined the version property to app object and assigned value '1.0' to it.

- This is fine, but however we can define version property with in app object

- output in console
 app
 {version: 1}  // we got version property with in app object */


/*
var app = {
	version : 1.0,
	name : 'Brilliant app'
};

function getVersion(){ 		// this function can be written with in the app object as shown above
	return app.version;
} 

- in console
app
{version: 1, name: "Brilliant app"}
app.version
1
app.name
"Brilliant app" */

// window.app
// Object {version: 1, name: "Brilliant app"} // this is our object

// version
// VM244:1 Uncaught ReferenceError: version is not defined // we cannot simply give version in console it returns undefined, since it is in app object we have to specify like app.version
//     at <anonymous>:1:1
// (anonymous) @ VM244:1

// app.version // correct way
// 1


/* calling function in console

getVersion
function getVersion(){
	return app.version;
}
getVersion() // calling function
1 */

//other way to define a function
var getName = function(){
	return app.name;
} 

/* in console
getName
function (){
	return app.name;
}
window.getName
function (){
	return app.name;
}
window.getName()
"Brilliant app"  */
