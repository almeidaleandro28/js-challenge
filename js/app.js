// ======================== Basics ===========================================================
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

//=================================== *** ==========================================================================
// Write a function that takes a value as argument
// Return the type of the value
// 1 = number - false - boolean
const challange04 = ( a ) =>  typeof a;
console.log( challange04( false ) );

//================================= *** ==================================================================================
// Write a function that takes a string (a) and a number (n) as argument
// Return the nth character of 'a'
//"adcd",1 = a - ('zyxbwpl',5) = w
const challange05 = ( word, num ) => word[ num ];

console.log( "challenge 05 - result = ", challange05( "leandro", 0) );
//==================================***==========================================================================================
//Write a function that takes a string (a) as argument
// Get the first 3 characters of a
// Return the result a = abcdefg = abc
const challange06 = ( word ) => word.slice( 0, 3 );
console.log( "challenge 06 - result =", challange06( "abcdefg" ) );
// ====================================***===================================================================================
// Write a function that takes a string as argument
// Extract the last 3 characters from the string
// Return the result
const challange07 = ( word ) => word.slice( -3 );
console.log( "challenge 07 - result = ", challange07( "abcdefg" ) );
// ====================================***==================================================================================
// Write a function that takes a string (a) as argument
// Extract the first half a
// Return the result abcdefgh = abcd
const challange08 = ( word ) => word.slice( 0, word.length / 2);
console.log( "challenge 08 - result = ", challange08( "abcdefgh" ) );
// ================================== ** ======================================================================================
// Write a function that takes a string (a) as argument
// Remove the last 3 characters of a
// Return the result


