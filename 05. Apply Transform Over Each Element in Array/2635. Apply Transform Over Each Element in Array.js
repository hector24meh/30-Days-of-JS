/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let returnedArray = []; //Define the array that's goint to stored the new values for map fn.
    for(let i = 0; i < arr.length; i++){ //Create a for loop that iterates over the given arr.
        returnedArray.push(fn(arr[i], i)); //Use push method to store the new values.
    }
    return returnedArray;
};