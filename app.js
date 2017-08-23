var name = 'Alex';

/* In console
 - finding length of a string
name
"Alex"
name.length
4

 - finding character at specified position(index)
name.charAt(0);
"A"
name.charAt(5)
""
name.charAt(2)
"e"

name.search('A') //returns the index value(position) of the specified character
0
name.search('e')
2
name.search('s') // since 's' is not there in the given name, it returns -1
-1
name.search('a') // since 'a' is small, we have to provide 'A' , .search is a case sensitive
-1

 - we can try the following in console
'Alex'.length
4
'Alex'.search('A')
0
['Alex', 'Billy', 'Dale'].length
3 
*/


// creating object
 var app = {};

/* output in console
app
{}
app.name = "javascript" //defining a variable 'name' and assigning a value 'javascript' to the object
"javascript"
app
{name: "javascript"} // object with property(variable) 'name' and string 'javascript'
app.name.length // accessing object properties - (name.length)returns length of the value(string)
10
*/