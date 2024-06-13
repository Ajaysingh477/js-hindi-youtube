//Datatypes are of primitive and non primitive or also called refrence type.
//the two type of data are differntiated on the basis of how data types are stored in memory and howw you can acsess them.

// *****************Primitive type********************
//7 primitive types: string,Number,Boolian,Null,Undefined,Symbol,BigInt.
// Primitive types are call by value which means whenevre you copy the value you are not given the original data or that reference of memory instead you are given aother seperate thing by copying the original data and whatevr changes you do in that copyied value are done inly in that copied value and not in the original value.
//Symbol => Its used make a thing unique.
//BigInt => when the value is too big we use BigInt.


// *******************Reference type**************************
//Reference value are thore whoes refrence are allocated dircetly to you in memory.
//3 types =>Array, object, Functions 


// ***To master JS you should master object and browser events.***

// JavaScript (JS) is a dynamically-typed language. This means that the type of a variable is checked during the execution of the program, which is at runtime, not in advance.In JavaScript, you don’t have to explicitly specify the data type of a variable when declaring it - the JavaScript engine will automatically convert types if needed (a feature known as type coercion). You can even change the type of a variable after it has been set. Here’s an example:

// Symbol datatype examples  =>Info In JavaScript, the Symbol is a primitive data type introduced in ES61. A Symbol is a unique and immutable data type that is often used to identify object properties

//To create a new primitive Symbol, you write Symbol() with an optional string as its description.

const id = Symbol(123)
let anotherId = Symbol(123)

console.log(id === anotherId)
//Every Symbol() call is guaranteed to return a unique Symbol2. Even if the descriptions are the same, two Symbols are different.


//BigInt datatype.
// In JavaScript, BigInt is a primitive data type that can represent integers of arbitrary magnitude12345. It’s used to store large integer values that are beyond the safe integer limit for Numbers12345.
// A BigInt is created by appending n to the end of an integer literal or by calling the BigInt() function12345. Here are some examples:
let BigInt = 123434334566242542625n;



//Reference datatype examples

//Array
const heroes = ["Ajay", "Vijay", "jay"]

//Object
let myObj = {
    name : "ajay",
    age : 20,
}  //everything insie the curly brackets is in object.

//Function
const myFunction = function(){
    console.log("hello world");
}

//typeof 
console.log(typeof heroes)  //retuen type is object
console.log(typeof myFunction);//funnction return typr 
console.log(typeof myObj);//object return typr
console.log(typeof id);//symbol return type
//Type of operator important to know as its asked in interview 
//type	          Result
// Undefined	"undefined"
// Null	        "object" (reason)
// Boolean	    "boolean"
// Number	    "number"
// BigInt	    "bigint"
// String	    "string"
// Symbol    	"symbol"
// Function     (implements [[Call]] in ECMA-262 terms; classes are functions as well)	"function"
// Any other object "object"

//All the non primitive data type have function as data type when checked through typeof opertor.



