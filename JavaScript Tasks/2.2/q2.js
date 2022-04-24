
// You are going to be given a word. Your job is to return the middle character of the word. 
// If the word's length is odd, return the middle character. If the word's length is even, 
// return the middle 2 characters.

export const getMiddleCharacter = function(string){
    let index = string.length/2;
    if(string.length%2!==0){
         console.log(string.charAt(index));
    }
    else{
        console.log(`${string.charAt(index-1)}${string.charAt(index)}`)
    }
}

