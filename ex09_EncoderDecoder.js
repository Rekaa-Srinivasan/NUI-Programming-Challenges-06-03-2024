function encode(string, count){
    if(count < 0 || string === null || string === undefined || Number.isNaN(string) || !string.trim().length > 0){
        return "Provide a valid key to encode a message";
    }
    let encodedString = '';
    for(let i = 0; i < string.length; i++){
        if(string.charAt(i) == ' '){
            encodedString += string.charAt(i);
            continue;
        }
        let index = string.charCodeAt(i);
        for(let j = 0; j < count; j++){
            if(index == 90){
                index = 65;
            }else if(index == 122){
                index = 97;
            }else{
                index++;
            }
            
        }
        encodedString+=String.fromCharCode(index);
    }
    return encodedString;
}

function decode(string, count){
    if(count < 0 || string === null || string === undefined || Number.isNaN(string) || !string.trim().length > 0){
        return "Provide a valid key to decode a message";
    }
    let decodedString = '';
    for(let i = 0; i < string.length; i++){
        if(string.charAt(i) == ' '){
            decodedString += string.charAt(i);
            continue;
        }
        let index = string.charCodeAt(i);
        for(let j = 0; j < count; j++){
            if(index == 65){
                index = 90;
            }else if(index == 97){
                index = 122;
            }else{
                index--;
            }
            
        }
        decodedString+=String.fromCharCode(index);
    }
    return decodedString;
}

console.log(encode('AMY', 4)); // EQC
console.log(decode('EQC', 4)); // AMY
console.log(encode('AMY', -1)); // Provide a valid key to encode a message
console.log(decode('EQC', -1)); // Provide a valid key to encode a message
console.log(encode('AMY', 1.9)); // COA
console.log(decode('COA', 1.9)); // AMY
console.log(encode('', 2)); // Provide a valid key to encode a message
console.log(decode('', 2)); // Provide a valid key to encode a message
console.log(encode('AMY  ', 4)); // EQC  
console.log(decode('EQC  ', 4)); // AMY  
console.log(encode(null, 4)); // Provide a valid key to encode a message
console.log(decode(null, 4)); // Provide a valid key to encode a message
console.log(encode(undefined, 4)); // Provide a valid key to encode a message
console.log(decode(undefined, 4)); // Provide a valid key to encode a message
console.log(encode(NaN, 4)); // Provide a valid key to encode a message
console.log(decode(NaN, 4)); // Provide a valid key to encode a message