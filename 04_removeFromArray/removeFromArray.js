const removeFromArray = function(arr, ...val) {
    return arr.filter(function(ele){
        return !val.includes(ele);
    });
};

// Do not edit below this line
module.exports = removeFromArray;
