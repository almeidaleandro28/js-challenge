// ====================== https://www.jschallenger.com/ ========================================
// Write a function that takes two values, say a and b, as arguments
// Return true if the two values are equal and of the same type
//2 3 = false
const testNumber = ( a, b ) => ( a === b ) ? true : false;

console.log( testNumber( "3", "3" ) );

// ================================= *** ==================================================
// Write a function that takes two numbers (a and b) as argument
// Sum a and b
// Return the result  1,2=3

const challange02 = ( a, b ) => a + b; 
console.log( challange02( 99, 1 ) );

// ================================= *** ======================================================
// Write a function that takes two values, say a and b, as arguments
// Return true if the two values are equal and of the same type
//2,3 = false -  3,3 = true -  1,"1" = false
const challange03 = ( a, b ) => a === b ? `${a} equal and same type  ${b}`: `${a} not equal and not same equal ${b}`;
console.log( challange03( 1, 1)); 