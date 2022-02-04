'use strict';

// 1) ---------------------
// 
//  using the (findMax) function; return the maximum value in the provided array
//  without using build-in functions.
//  EX:
//  [12, 32, 22, 45, 78, 12, 50] ==> 78
//  
// ------------------------

const findMax = (arr)=>{
    let max;
     max = arr [0];
    for(var i=0 ; i < (arr.length) ; i++){
        if (max > arr [i]) {
             max = max
        } else {
            max = arr [i]
        }
    }
    return( max);
}

// 2) ---------------------
// 
//  using the (sumNums) function; return the Sum value of the numeric values
//  inside the array (there could be strings inside), without using build-in functions
//  EX:
//  [20, '234', 'car', 41, 20, 'chair'] ==> 81
//  
// ------------------------

function sumNums(arr) {
    let sum=0;
    let numberArray =[]
    let arrayLenght = arr.length
    for(var i=0 ; i < arrayLenght ; i++){ //lenght is property not a function   
       if (typeof (arr[i]) == "number") {
            //console.log (typeof arr[i])
            numberArray [i] = arr [i] ;
              sum = sum + numberArray [i]
            
        } }
        return sum;
}

// 3) ---------------------
// 
//  using the (reverseArray) function; return provided array reversed
//  without using build-in functions
//  EX:
//  ['C#', 'JS', 'Ruby','Python' ] ==> ['Python','Ruby','JS','C#']
// 
// ------------------------
const reverseArray = (arr)=>{
    let  reverse = [] ; 
    let arrayLenght = arr.length-1;
   
   for (let i=0 ; i <= arrayLenght ; i++){
      reverse[i] = arr[arrayLenght-i];
   };
     return reverse
}

module.exports = {findMax , sumNums, reverseArray};