// Given an input n, write a function always that returns a function which returns n.

// return a function that returns n
export function always (n) {
    return function(){
      return n;
    }
  }
  