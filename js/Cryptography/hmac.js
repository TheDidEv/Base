//HMAC

//механізм перевірки цілісності інформації, що передається або зберігається в ненадійному середовищі.
//Hash-based message authentication code (or HMAC) is a 
//cryptographic authentication technique that uses a hash function and a secret key.

//With HMAC, you can achieve authentication and verify that 
//data is correct and authentic with shared secrets, as opposed
//to approaches that use signatures and asymmetric cryptography.

const  { createHmac } = require('crypto');

const secretKey = 'secret';
const message = 'some message';

const hmac = createHmac('sha256', secretKey).update(message).digest('hex');//digest = output

console.log(hmac);//output f28a70b41263840e5c059a0a733336e0957efba87902aa8cca11441d4b0c96d7

const secretKey2 = 'secr';
const hmac2 = createHmac('sha256', secretKey2).update(message).digest('hex');//digest = output
console.log(hmac2);//output: 1dadff0a81f94c4aee9db3c1f5d4919b77ce040a2f9cb2a812b21194631a4930