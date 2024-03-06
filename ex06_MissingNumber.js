function findMissingNumber(array){
    if(!Array.isArray(array)){
        return "Provide a valid array";
    }
    let small = 9007199254740991;
    let big = -9007199254740991;
    for(let number of array){
        if(number < small && number!=null){
            small = number;
        }
        if(number > big){
            big = number;
        }
    }
    const result = [];
    for(let i = small; i <= big; i++){
        if(!array.includes(i)){
            result.push(i);
        }
    }
    return result;
}

console.log(findMissingNumber([7, 10, 12, 9])); // [ 8, 11 ]
console.log(findMissingNumber([7, 10, '12', 9])); // [ 8, 11, 12 ]
console.log(findMissingNumber([7, 10, null, 9])); // [ 8 ]
console.log(findMissingNumber([7, 10, undefined, 9])); // [ 8 ]
console.log(findMissingNumber([7, 10, NaN, 9])); // [ 8 ]
console.log(findMissingNumber(null)); // Provide a valid array
console.log(findMissingNumber(undefined)); // Provide a valid array
console.log(findMissingNumber(NaN)); // Provide a valid array