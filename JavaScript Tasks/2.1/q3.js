// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// Examples(Operator, value1, value2) --> output


export const operation = function(operation,input1,input2){

    switch(operation){
        case 'add': 
                console.log("Performing Addition on inputs");
                console.log(`${input1} + ${input2} : ` + (input1 + input2));
                break;

        case 'subtract':
                console.log("Performing Subtraction on inputs");
                console.log(`${input1} - ${input2} : ` + (input1 - input2));
                break;

        case 'multiply':
                console.log("Performing Multiplication on inputs");
                console.log(`${input1} * ${input2} : ` + (input1 * input2));
                break;
        case 'divide':
                console.log("Performing Division on inputs");
                
                    console.log(`${input1} / ${input2} : ` + (input1 / input2));
                
                break;
    }
    

}



