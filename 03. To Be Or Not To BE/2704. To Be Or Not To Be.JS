/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    return { toBe:  function(val2){ //The function expect should return an object.
        if(val === val2){ 
            return true;
        } else{
            throw new Error("Not Equal");  //If we use return "Not Equal" returns a VALUE not an error.
        }
    },
    notToBe: function(val2){
        if(val !== val2){
            return true;
        } else {
               throw new Error("Equal")
           }
    }
    }
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */