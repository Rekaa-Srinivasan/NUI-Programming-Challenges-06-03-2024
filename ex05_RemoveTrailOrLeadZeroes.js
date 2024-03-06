function removeTrailingOrLeadingZeroes(string, condition){
    if(!typeof string == string || string == null || Number.isNaN(string)){
        return "Provide a valid input to remove the zeroes accordingly";
    }
    if(condition == 'leading'){
        return Number(string);
    }
    let temp = Number(string).toString();
    let index = temp.indexOf('0');
    // console.log(index);
    if(index>0){
        return string.substring(0, index + string.length-temp.length);
    }
    return temp;
}

console.log(removeTrailingOrLeadingZeroes('00000098997979900000', 'leading')); // 98997979900000
console.log(removeTrailingOrLeadingZeroes('00000098997979900000', 'trailing')); // 000000989979799
console.log(removeTrailingOrLeadingZeroes('989979799', 'leading')); // 989979799
console.log(removeTrailingOrLeadingZeroes('989979799', 'trailing')); // 989979799
console.log(removeTrailingOrLeadingZeroes('', 'leading')); // Provide a valid input to remove the zeroes accordingly
console.log(removeTrailingOrLeadingZeroes('', 'trailing')); // Provide a valid input to remove the zeroes accordingly
console.log(removeTrailingOrLeadingZeroes(null, 'leading')); // Provide a valid input to remove the zeroes accordingly
console.log(removeTrailingOrLeadingZeroes(null, 'trailing')); // Provide a valid input to remove the zeroes accordingly
console.log(removeTrailingOrLeadingZeroes(undefined, 'leading')); // Provide a valid input to remove the zeroes accordingly
console.log(removeTrailingOrLeadingZeroes(undefined, 'trailing')); // Provide a valid input to remove the zeroes accordingly
console.log(removeTrailingOrLeadingZeroes(NaN, 'leading')); // Provide a valid input to remove the zeroes accordingly
console.log(removeTrailingOrLeadingZeroes(NaN, 'trailing')); // Provide a valid input to remove the zeroes accordingly