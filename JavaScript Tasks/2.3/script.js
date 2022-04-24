import {prefill} from './q1.js'
import {always} from './q2.js'
import {createFunctions} from './q3.js'
import {createSecretHolder} from './q4.js'


console.log("Prefill an array : " + "\n" +  prefill(3,'2d'));

console.log("Closures in Javascript ->")
const closure = always(4);
console.log(closure());

console.log("Array of functions")
const callBacks =createFunctions(5)
console.log(callBacks[4]());

console.log("Create your secret : ")
const obj = createSecretHolder("Football");
console.log(obj.getSecret());
obj.setSecret("Cricket");
console.log(obj.getSecret());




