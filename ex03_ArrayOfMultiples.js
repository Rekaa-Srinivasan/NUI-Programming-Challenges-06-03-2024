function arrayOfMultiples(array){
    if(!Array.isArray(array)){
        return "Provide a valid number to get the multiples";
    }
    if(array[0] == null || array[0] == undefined || Number.isNaN(array[0]) || array[0] === '' || array[0] === ' ' || array[1] == null || array[1] == undefined || Number.isNaN(array[1]) || array[1] === '' || array[1] === ' '){
        return "Provide a valid number to get the multiples";
    }
    const result = [];
    for(let i = 1; i <= array[1]; i++){
        result.push(array[0]*i);
    }
    return result;
}

console.log(arrayOfMultiples([2, 5])); // [ 2, 4, 6, 8, 10 ]
console.log(arrayOfMultiples(['2', '5'])); // [ 2, 4, 6, 8, 10 ]
console.log(arrayOfMultiples(['', 2])); // Provide a valid number to get the multiples
console.log(arrayOfMultiples([' ', 2])); // Provide a valid number to get the multiples
console.log(arrayOfMultiples([2, ''])); // Provide a valid number to get the multiples
console.log(arrayOfMultiples([2, ' '])); // Provide a valid number to get the multiples
console.log(arrayOfMultiples([0, 5])); // [ 0, 0, 0, 0, 0 ]
console.log(arrayOfMultiples([2, 0])); // []
console.log(arrayOfMultiples([null, 0])); // Provide a valid number to get the multiples
console.log(arrayOfMultiples([2, null])); // Provide a valid number to get the multiples
console.log(arrayOfMultiples([2, NaN])); // Provide a valid number to get the multiples
console.log(arrayOfMultiples([2, undefined])); // Provide a valid number to get the multiples
console.log(arrayOfMultiples([])); // Provide a valid number to get the multiples
console.log(arrayOfMultiples(null)); // Provide a valid number to get the multiples
console.log(arrayOfMultiples(NaN)); // Provide a valid number to get the multiples
console.log(arrayOfMultiples(undefined)); // Provide a valid number to get the multiples