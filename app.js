//"use strict" <-- will throw error if variables aren't defined
console.log("Hello world");

//strings
var x = "hello";
var y = "world";
console.log(x+y);
console.log('she sells sea shells on the sea shore');
console.log('she sells seashells \n by the seashore');

//numbers
var z;
var z = 2;
var z = false;
console.log(z);

var a = 10;
var b = 20;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);

c=5; //when var is emmitted javascript assumes it's a var
console.log(a+b*c);
console.log((a+b)*c);

console.log(a>b);
console.log(b>a);

var p = true;
var q = false;
console.log(p||q);
console.log(p&&q);
console.log(!p);

var k;
console.log(k); //outputs 'undefined'
p= undefined; //use undefined to reset a variable or remove from store
console.log(p); 

//constants
const d = 'myconstant';
//d = 'something else'; <-- can't do this because it's a constant - will throw error
console.log(d);

//strings
console.log(x.length); //returns length of string

//javascript MDN website will give you all the operators

//objects
var student = {}; //empty object
student.firstname = "Sarah";
student.lastname = "Gumm"
student.age = 37;
console.log(student);

var student2 = {
    firstname: "Jon",
    lastname: "Brillhart",
    age: 43
}
console.log(student2);
console.log(student.firstname);



