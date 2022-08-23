const show = ( msg ) => console.log( msg );

// =============== array challenges =================================
// Write a function that takes an array of strings as argument
// Sort the array elements alphabetically
// Return the result
// 'b', 'c', 'd', 'a' === ['a', 'b', 'c', 'd']
const arrayChallenge = ( ...array ) => array.sort();
const resulChallenge = arrayChallenge( "b","c","d", "a" );
console.log( "challenge 01 => ", resulChallenge); 
// ============== *** ================================================
// Write a function that takes an array (a) as argument
// Remove the first 3 elements of 'a'
// Return the result
//1,2,3,4 => 4
const arrayChallenge2 = ( ...array ) => array.slice( 3 );
const resulChallenge2 = arrayChallenge2( 99,1,1 );
console.log( "challenge 02 ", resulChallenge2 );
//======================***================================================
// Write a function that takes an array (a) as argument
// Extract the last 3 elements of 'a'
// Return the resulting array
//1,2,3,4] => 2,3,4
const arrayChallenge3 = ( ...array ) => array.slice( -3 );
const resulChallenge3 = arrayChallenge3(5,4,3,2,1,0);
console.log( "challenge 03 ", resulChallenge3);
//=========================== *** ==============================================
// Write a function that takes an array (a) and a value (b) as argument
// The function should remove all elements equal to 'b' from the array
// Return the filtered array
//[1,2,3], 2 => 1,3
const arrayChallenge4 = ( arr, n ) => arr.filter( numb => numb !== n );
const resulChallenge4 = arrayChallenge4( [1,2,3], 2);
console.log("challenge 04 ", resulChallenge4);
// ==============================***===============================================
// Write a function that takes an array (a) as argument
// Return the number of elements in a
//[1,2,2,4] - 4
const arrayChallenge5 = ( arr ) => arr.length;
const resulChallenge5 = arrayChallenge5( [1,2,2,4]);
console.log( "challenge 05", resulChallenge5);
// ================================= *** ========================================
// Write a function that takes an array (a) and a value (n) as arguments
// Save every nth element in a new array
// Return the new array
//[1,2,3,4,5,6,7,8,9,10],3 => [3,6,9]
const arrayChallenge6 = ( arr, n ) =>  { 
  arr[n]
};
const resulChallenge6 = arrayChallenge6( [1,2,3,4,5,6,7,8,9,10], 3 );
show( "challenge 06 ", resulChallenge6 );