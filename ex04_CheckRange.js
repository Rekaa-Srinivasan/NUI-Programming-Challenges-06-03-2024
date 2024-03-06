function checkRange(array, number){
    // console.log(typeof(array));
    if(!Array.isArray(array)){
        return "Provide a valid range to compare";
    }
    let small = 0, big = 0;
    if(array[0] < array[1]){
        small = array[0];
        big = array[1];
    }else{
        small = array[1];
        big = array[0];
    }
    return number <= big && number >=small;
}

console.log(checkRange([2, 10], 5)); // true
console.log(checkRange([2, 10], 15)); // false
console.log(checkRange([2, 10], 2)); // true
console.log(checkRange([2, 10], 10)); // true
console.log(checkRange([], 10)); // false
console.log(checkRange(undefined, 10)); // Provide a valid range to compare
console.log(checkRange(null, 10)); // Provide a valid range to compare
console.log(checkRange(NaN, 10)); // Provide a valid range to compare
console.log(checkRange('NaN', 10)); // Provide a valid range to compare