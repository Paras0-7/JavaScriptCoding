import {Cat} from './q1.js'
import add from './q2.js'
import compose from './q3.js'
import * as com from './q3.js';
// import {getTotalAmount} from './q4.js'
// import {getMiddleCharacter} from './q5.js'

const Fluffy = new Cat('Fluffy',20);
const pix = new Cat('Fluffy',30);
console.log("Weight of Fluffy : " + Fluffy.weight);
console.log("Avg weight of all Cats : " +Cat.averageWeight());


console.log(add(10)(20)(30).value);

console.log(compose(com.addOne,com.multTwo,com.addOne)(5))
