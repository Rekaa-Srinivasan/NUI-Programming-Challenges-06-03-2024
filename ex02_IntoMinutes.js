function convertToMinutes(time) {
    if(time == null || Number.isNaN(time)){
        return "Provide a valid time as input";
    }
    const array = time.split(':');
    if(Number.parseInt(array[0]) > -1 && Number.parseInt(array[0]) < 25 && Number.parseInt(array[1]) > -1 && Number.parseInt(array[1]) < 60){
        return Number.parseInt(array[0])*60 + Number.parseInt(array[1]);
    }
    return "Provide a valid time as input";
}

console.log(convertToMinutes('17:59  ')); // 1079
console.log(convertToMinutes('02:45')); // 165
console.log(convertToMinutes('a:a')); // Provide a valid time as input
console.log(convertToMinutes('-8:16')); // Provide a valid time as input
console.log(convertToMinutes('26:59')); // Provide a valid time as input
console.log(convertToMinutes('23:-8')); // Provide a valid time as input
console.log(convertToMinutes('23:60')); // Provide a valid time as input
console.log(convertToMinutes('null:60')); // Provide a valid time as input
console.log(convertToMinutes('NaN:60')); // Provide a valid time as input
console.log(convertToMinutes('undefined:60')); // Provide a valid time as input
console.log(convertToMinutes(null)); // Provide a valid time as input
console.log(convertToMinutes('  ')); // Provide a valid time as input
console.log(convertToMinutes('')); // Provide a valid time as input
console.log(convertToMinutes(NaN)); // Provide a valid time as input
console.log(convertToMinutes(undefined)); // Provide a valid time as input