
// Your task is to write a compose function which can compose any number of functions together.
export const addOne = (a) => a + 1
export const multTwo = (b) => b * 2

export default function compose(){
    const functions = [...arguments];

    const updatedFunctions = functions.reverse();
    const [first, ...restFunctions] = updatedFunctions;


    
    return function(arg){
        return restFunctions.reduce(function(res,fn){
            return fn(res);
        },first(arg))
    }
    // return function(arg){
    //     return restFunctions.reduce((res,fn) => fn(res),first(arg))
    // }
    

}

