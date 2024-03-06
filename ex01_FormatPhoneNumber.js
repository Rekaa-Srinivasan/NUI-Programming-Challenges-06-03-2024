function formatPhoneNumber(number){
    if(number == null || Number.isNaN(Number(number)) || number.toString().trim().length != 10){
        return "Provide a valid phone number";
    }
    let numberString = number.toString();
    let formattedNumber = ''+'(';
    for(let index = 0; index < 6; index+=3){
        formattedNumber+=numberString.substr(index,3);
        if(index < 3){
            formattedNumber+=')';
        }else{
            formattedNumber+='-';
        }
    }
    formattedNumber+=numberString.substr(6,4);
    return formattedNumber;
}

console.log(formatPhoneNumber(9840164723  )); // (984)016-4723
console.log(formatPhoneNumber('823872ffff    ')); // Provide a valid phone number
console.log(formatPhoneNumber(NaN)); // Provide a valid phone number
console.log(formatPhoneNumber(undefined)); // Provide a valid phone number
console.log(formatPhoneNumber('1234567890   ')); // (123)456-7890
console.log(formatPhoneNumber(12)); // Provide a valid phone number
console.log(formatPhoneNumber(12345673677890)); // Provide a valid phone number
console.log(formatPhoneNumber('')); // Provide a valid phone number
console.log(formatPhoneNumber(null)); // Provide a valid phone number