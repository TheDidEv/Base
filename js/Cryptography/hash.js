//HASHING FUNCTION

//A hash function is a mathematical function that converts any 
//digital data into an output string with a fixed number of characters. 
//Hashing is the one-way act of converting the data (called a message) into the output (called the hash).

//Hashing is useful to ensure the authenticity of a piece of data 
//and that it has not been tampered with since even a small 
//change in the message will create an entirely different hash.

//Hash functions are the basic tools of modern cryptography that are 
//used in information security to authenticate transactions, messages, and digital signatures.

//Example MD5, SHA-1, SHA-256

//Example for SHA-256 Input message: CFI, Output message: F3ED 0867 48FF 3641 3091 OBB6 6293 7080 2958 B5A2 52AF F364 1FC5 07FD E80D 9929

const { createHash } = require('crypto');

const hash = (input) => {
    return createHash('sha256').update(input).digest('hex'); //digest = output in console
}
let pass1 = 'password';
let pass2 = 'password1';

console.log(hash(pass1));//output: 5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8

const match = pass1 === pass2;
console.log(match ? 'bad pass' : 'good pass');//output: good pass