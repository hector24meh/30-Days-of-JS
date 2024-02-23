/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let val = 0;
    if (nums.length == 0){
        val = init;
    } else {
        for(let i = 0; i < nums.length; i++){
            val = fn(init, nums[i]);
            init = val;
        }
    }
    return val;
};