
// let dice1 = Math.floor(Math.random()*6 + 1);
// let dice2 = Math.floor(Math.random()*6 + 1);
// let sum = dice1 + dice2
// let roll;
// console.log('dice1' ,dice1)
// console.log("dice2", dice2);
// console.log(roll = `You rolled a ${dice1} and a ${dice2}. they sum to ${sum}.` )


/*
Comparisons
• > // greater than
• < // less than
• >= // greater than or equal to
• <= //less than or equal to
• == //equality(only value – don‟t use it)
• != //not equal(only value - don‟t use it)
• === //strict equality(check value and type – do use it)
• !== //strict non-equality(check value and type – do use it )

*/

// console.log( 9 == '9');
// console.log(`${1+1}`)



/// alert
/* instructs the browser to display a dialog-box with an optional message,
 and to wait until the user dismisses the dialog.
 (has displaied on the browser tab)*/

// alert('hello world')
// alert('1234')
// alert('welcome to APS')




/// prompt

// let fName = prompt('what is you name:');
// console.log(fName.trim())

// let age = prompt('what is your age: '); 

/* console.log( age);
this statement has not displaied on console*/

// console.log(typeof age); //string

// let ageNum = parseInt(age) ;
/* parses a string argument and returns
 an integer of the specified radix or base.*/

// let birthday = 1400 - age;

// console.log(birthday);




// more example for parseInt.
// let str = 'this is a 123. for parseInt';
// console.log(str);
// console.log(parseInt(str));//NaN
// let str2 = "123 this is for parseInt";
// console.log(str2);
// console.log(parseInt(str2))//123;

// let num = '10' ;
// console.log(num + 10)

// console.log(parseInt(num) + 10)
// console.log(parseInt('lsfjsld222'))
// console.log(parseInt('22lsfjsld2'))

// if the string starts with number it works.



// let num = 24;
// if ( num % 2 === 0)
// {
//     console.log('even');
// }



// if statement
// let phrase = 'slow';
// if ( phrase === 'stop')
// {
//     console.log('red');
//     // this is a block code
// }else if(phrase === 'slow')
// {
//     console.log('yellow');
// }else if(phrase === 'go')
// {
//     console.log("green");
// }else{
//     console.log("purple");
// }



// 


/*
Truthyness / Falsyness

• False values:
• False
• 0
• ”” (empty string)
• Null
• Undefined
• NaN

• Everything else is truthy
*/



/*
Logical Operators
And &&
   • Both sides of 'and' , MUST be true to return true 
   • If left side is false, js won‟t even look at the right-hand side
Or || 
   • Even if just one of the statements be true, returns true
Not ! 
   • !false //true 
   • !true //false
*/