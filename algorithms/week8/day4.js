// String Encode
// Write a function called `encode` that takes a string with repeated letters and shortens it by counting the number of consecutive same letters where "aaa" will convert to "a3" and "b" will convert to "b1".
function encode(str) {
    let newStr = "";
    let count = 1
    let letter = str[0]
    for (let i = 0; i < str.length; i++) {
        if( str[i+1] === letter){
            count++
        } else { 
            newStr += letter + count
            letter = str[i+1]
            count = 1
        }
    }
    return newStr;
}  
console.log(encode("aaabccdddd"));
// should return "a3b1c2d4"


// String Decode
// Write a function called `decode` that takes a string that is encoded like in the previous example and returns the decoded string.
function decode(str) {
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
        if(isNaN(str[i])){
            let letter = str[i]
            // count = str[i+1]
            let count = ''
            // to get the whole number
            for (let n = i+1; n < str.length; n++) {
                if(!isNaN(str[n])){
                    count += str[n]
                } else {
                    break
                }
            }
            // // for loop
            // for (let j = 0; j < count; j++) {
            //     newStr += letter
            // }

            // repeat function
            newStr += letter.repeat(count)
        }        
    }
    return newStr;
}

console.log(decode("a3b10c2d4"))
// should return "aaabccdddd"


