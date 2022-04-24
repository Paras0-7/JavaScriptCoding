import {arrayToString} from './q1.js'
import {getOpposite} from './q2.js'
import {operation} from './q3.js'
import {getTotalAmount} from './q4.js'
import {getMiddleCharacter} from './q5.js'

console.log("Printing Array elements with Comma delimiters")
arrayToString(["h","o","l","a"]);

console.log("Opposite of a number")
getOpposite(1.25)

console.log("Basic mathematical operations")
operation('divide',10,0)

console.log("Calculating total rental amout of car")
getTotalAmount(6);

console.log("The middle character of the word")
getMiddleCharacter("Palindrome")
getMiddleCharacter('AA')


