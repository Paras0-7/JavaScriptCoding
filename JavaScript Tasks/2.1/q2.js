// given an integer or a floating-point number, find its opposite.

export const getOpposite = function(number){
    if(!isNaN(number)){
    if(number<0){
        console.log(`${number} : ${Math.abs(number)}`);
    }
    else{
        console.log(`${number} : ${number*-1}`)
    }

    return;
}
console.log("Please enter a number")

}


