function reverseNumber(num) {
   
    let numStr = num.toString();
    
    // Split the string into an array of characters, reverse the array, and join it back into a string
    let reversedStr = numStr.split('').reverse().join('');
    
    // Convert the reversed string back into a number
    let reversedNum = parseInt(reversedStr);
    
    return reversedNum;
}


let sampleInput = 32243;
let sampleOutput = reverseNumber(sampleInput);
console.log(sampleOutput); //print in terminal
