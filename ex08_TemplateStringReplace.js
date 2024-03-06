function templateStringReplace(input, array){
    if(!Array.isArray(array)){
        return "Provide a proper templates";
    }
    let string = input.replaceAll('#', '');
    string = string.replaceAll('[', '');
    string = string.replaceAll(']', '');
    for(let subArray of array){
        if(subArray!=null){
            string = string.replace(subArray[0], subArray[1]);
        }
    }
    return string;
}

console.log(templateStringReplace(`Numentica is a company focused on delivering high quality code. It is located in #[location] #[state] #[phone]`, [['location', 'Chennai'], ['state', 'TamilNadu'],['phone', '282738287']]));
// Numentica is a company focused on delivering high quality code. It is located in Chennai TamilNadu 282738287

console.log(templateStringReplace(`Numentica is a company focused on delivering high quality code. It is located in #[location] #[state] #[phone]`, [[null, 'Chennai'], ['state', 'TamilNadu'],['phone', '282738287']]));
// Numentica is a company focused on delivering high quality code. It is located in location TamilNadu 282738287

console.log(templateStringReplace(`Numentica is a company focused on delivering high quality code. It is located in #[location] #[state] #[phone]`, [[undefined, 'Chennai'], ['state', 'TamilNadu'],['phone', '282738287']]));
// Numentica is a company focused on delivering high quality code. It is located in location TamilNadu 282738287

console.log(templateStringReplace(`Numentica is a company focused on delivering high quality code. It is located in #[location] #[state] #[phone]`, [[NaN, 'Chennai'], ['state', 'TamilNadu'],['phone', '282738287']]));
// Numentica is a company focused on delivering high quality code. It is located in location TamilNadu 282738287

console.log(templateStringReplace(`Numentica is a company focused on delivering high quality code. It is located in #[location] #[state] #[phone]`, [['location', null], ['state', 'TamilNadu'],['phone', '282738287']]));
// Numentica is a company focused on delivering high quality code. It is located in null TamilNadu 282738287

console.log(templateStringReplace(`Numentica is a company focused on delivering high quality code. It is located in #[location] #[state] #[phone]`, [['location', undefined], ['state', 'TamilNadu'],['phone', '282738287']]));
// Numentica is a company focused on delivering high quality code. It is located in undefined TamilNadu 282738287

console.log(templateStringReplace(`Numentica is a company focused on delivering high quality code. It is located in #[location] #[state] #[phone]`, [['location', NaN], ['state', 'TamilNadu'],['phone', '282738287']]));
// Numentica is a company focused on delivering high quality code. It is located in NaN TamilNadu 282738287

console.log(templateStringReplace(`Numentica is a company focused on delivering high quality code. It is located in #[location] #[state] #[phone]`, [null, ['state', 'TamilNadu'],['phone', '282738287']]));
// Numentica is a company focused on delivering high quality code. It is located in location TamilNadu 282738287

console.log(templateStringReplace(`Numentica is a company focused on delivering high quality code. It is located in #[location] #[state] #[phone]`, [undefined, ['state', 'TamilNadu'],['phone', '282738287']]));
// Numentica is a company focused on delivering high quality code. It is located in location TamilNadu 282738287

console.log(templateStringReplace(`Numentica is a company focused on delivering high quality code. It is located in #[location] #[state] #[phone]`, [NaN, ['state', 'TamilNadu'],['phone', '282738287']]));
// Numentica is a company focused on delivering high quality code. It is located in location TamilNadu 282738287

console.log(templateStringReplace(`Numentica is a company focused on delivering high quality code. It is located in #[location] #[state] #[phone]`, null));
// Provide a proper templates

console.log(templateStringReplace(`Numentica is a company focused on delivering high quality code. It is located in #[location] #[state] #[phone]`, undefined));
// Provide a proper templates

console.log(templateStringReplace(`Numentica is a company focused on delivering high quality code. It is located in #[location] #[state] #[phone]`, NaN));
// Provide a proper templates