// We want to create a function that will add numbers together when called in succession.

// add(1)(2); // == 3

export default function add(){
    var args = [...arguments];
    // console.log(args)
     function addReturn(){
        var args1 = [...arguments]
        // console.log("Args1 " +args1)
        return add(...args,...args1)
    }

    let total = args.reduce((total,value)=> total + value)
    addReturn.value = total;
    return addReturn;
}