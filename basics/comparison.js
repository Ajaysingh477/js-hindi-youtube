// console.log(2 > 1);
// console.log(2 >= 1)
// console.log(2 < 1);
// console.log(2 <= 2);
// console.log(2 == 4);
// console.log(2 != 2);

console.log("2" > 1);
console.log("02" < 1 );

//below kind of code of compariosn is always avoided as it puts us into trouble and we might not know its result.
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0); // here null comes out to be true because when null is copared it gets th e value of 0 which makes him true here and when it comes to equality check null is empty or in its null form that is empty so it becomes false when null == 0...basically compariosn converst null into a number that is 0.
console.log(undefined == 0);
console.log(undefined < 0);
console.log(undefined > 0);

//  Strict check In JavaScript, “strict check” often refers to the use of strict comparison operators (=== and !==) or the use of “strict mode”.

console.log("2" ===2);