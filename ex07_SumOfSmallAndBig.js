function sumOfSmallAndBig(array){
    if(!Array.isArray(array)){
        return "Provide a valid array to find the result";
    }
    let small = 9007199254740991;
    let big = -9007199254740991;
    for(let number of array){
        if(number != null){
            if(number < small){
                small = number;
            }
            if(number > big){
                big = number;
            }
        }
    }
    // console.log(small);
    // console.log(big);
    return small+big;
}

console.log(sumOfSmallAndBig([45, 2, 25, 11, 6])); // 47
console.log(sumOfSmallAndBig([])); // 0
console.log(sumOfSmallAndBig([45, 2, 25, null, 6])); // 47
console.log(sumOfSmallAndBig([45, 2, 25, undefined, 6])); // 47
console.log(sumOfSmallAndBig([45, 2, 25, 'undefined', 6])); // 47
console.log(sumOfSmallAndBig([45, 2, 25, NaN, 6])); // 47
console.log(sumOfSmallAndBig(null)); // Provide a valid array to find the result
console.log(sumOfSmallAndBig(undefined)); // Provide a valid array to find the result
console.log(sumOfSmallAndBig(NaN)); // Provide a valid array to find the result