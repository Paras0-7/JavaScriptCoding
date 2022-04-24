// In this case, we want you to extend the built-in Array class with the following methods: 
// square(), cube(), average(), sum(), even() and odd().

// Explanation:

// square() must return a copy of the array, containing all values squared
// cube() must return a copy of the array, containing all values cubed
// average() must return the average of all array values; 
// sum() must return the sum of all array values
// even() must return an array of all even numbers
// odd() must return an array of all odd numbers
// Note: the original array must not be changed in any case!

Array.prototype.square = function(){
    return this.map(function(item){
            return Math.pow(item,2);
    })
}

Array.prototype.cube = function(){
    return this.map(function(item){
        return Math.pow(item,3)
    })
}
Array.prototype.average = function(){
    return this.reduce(function(acc,item){
        return acc+item;
    })/this.length;
}
Array.prototype.sum = function(){
    return this.reduce(function(acc,item){
        return acc+item;
    })
}
Array.prototype.even = function(){
    return this.filter(function(item){
        if(item%2==0)
            return item;
    })
}
Array.prototype.odd = function(){
    return this.filter(function(item){
        if(item%2!==0)
            return item;
    })
}

