//concat()
//it is used to concat the arrays

let ex1 = ["Angular10"];
let ex2 = ["NODEJS"];
let ex3 = ["MONGODB"];

console.log(ex1.concat(ex2, ex3)); //[ 'Angular10', 'NODEJS', 'MONGODB' ]
console.log(ex1, ex2, ex3); //[ 'Angular10' ] [ 'NODEJS' ] [ 'MONGODB' ]

let arr1 = [10, 20];
let arr2 = [30, 40];
let arr3 = [50, 60];

//join array -->spread operator
//ES6 operator spread operator
//spread operator act as concat operator as well as to maintain the immutability

console.log([...arr1, ...arr2, ...arr3]); //[ 10, 20, 30, 40, 50, 60 ]
console.log(arr1, arr2, arr3); //[ 10, 20 ] [ 30, 40 ] [ 50, 60 ]

//join(), repeat() -->Completed.

//toString()

let str = "Hello";

console.log(Array.from(str));
console.log(Array.from(str).reverse());
console.log(Array.from(str).reverse().toString());

console.log(Array.from(str).reverse().toString().replace(/,/g, ""));

//[ 'H', 'e', 'l', 'l', 'o' ]

// [ 'o', 'l', 'l', 'e', 'H' ]

//  o,l,l,e,H

//How to convert String to Array?   Array.from()

//reverse() ? to reverse the array

// How to convert Array to String? toString()

//what is difference b.w toString() and join()

//we are getting string with ","

//how to replace all the characters globally? identify "," globally -- /,/g, ""

let str1 = "Welcome to react js";

console.log(str1.split(" ")); //[ 'Welcome', 'to', 'react', 'js' ]

let str2 = "Hello.welcome,to,Node.JS";

console.log(str2.replace(/,/g, ".").split(".")); // [ 'Hello', 'welcome', 'to', 'Node', 'JS' ]

let str3 = "Welcome";

console.log(str3.substr(1, 3)); //elc
console.log(str3.substr(3, 4)); //come

//1st argument index second argument is length

//subString()
//1st argument is starting index, 2nd argument ending index
let str4 = "Welcome to ReactJS";
console.log(str4.substring(0, 7)); //Welcome

console.log(str4.substring(8, 10)); //to

console.log(str4.substring(11, 18)); //ReactJS

//both substr and substring has same functionality --> recommended substr

let varr = [10, 20, 10, 20, 10, 30, 40, 10, 20];
console.log(varr.lastIndexOf(10)); //7
console.log(varr.lastIndexOf(20)); //8
console.log(varr.lastIndexOf(30)); //5
console.log(varr.lastIndexOf(1)); //-1

//lastIndexOf() - get the last occurence of element in array.
