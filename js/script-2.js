
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






// let age = 66;

// if(age <= 5 || age >= 65 ){
//     console.log('free')
// }else if(age > 5 && age <= 10){
//     console.log(("10£"));
// }else{
//     console.log(( "20£"));
// }





// it is NOT important, just in case you see it anywhere
//late on => DateFns library for handling dates and time


// 


/*
Arrays
Ordered collection of values 
use square brackets to make array[]
• .length
• Index => [0]
• Undefined ??
• Chain array with strings //
• Change the index ;) //we can not do it with strings!!!
*/

// let students = ['mohammadhossein'.length , 'ali'[0] , ['manochehr' , 11 , NaN, 'sarah'] , 'anahid' , 'zahra']

// console.log(students.includes('manochehr'));//true
// console.log(students[0]);//mohammadhossein
// console.log(students[2][0][2]);//n
// console.log(students)
// console.log(students.length);//5


// Array method
/*push()
adds one or more elements to the end of an array and
returns the new length of the array.
*/
// console.log(students.push('mahdie' , 'motahareh' ))//7
// console.log(students)

// pop()
/* removes the last element from end of an array and returns that element. 
This method changes the length of the array.
*/
// console.log(theLastElement = students.pop())
// console.log(students)

// shift()
/*removes the first element from start of an array and returns 
that removed element. This method changes the length of the array.
*/
// console.log(theFirstElement = students.shift())
// console.log(students)

// unshift
/*adds one or more elements to the start of an array and
returns the new length of the array.
*/
// console.log(students.unshift("amir", undefined));//7
// console.log(students)







// let movies = ["Harry Potter", "12 angry men", 'A dog"s life', "dark coffee"];

// let years = [1999, 1900, 1940, 2010, 1900];

// let nums = [1, 2, 3];

//$  concat
/* is used to merge two or more arrays. 
This method does not change the existing arrays, 
but instead returns a new array.
*/

// let newArr = years.concat(movies, nums);
// console.log(newArr)


//$ includes
// console.log(newArr.includes(1400))

// if(!movies.includes("Harry Potter")){
//     console.log('bad movie')
// }else {
//     console.log('good movie')
// }


//$ indexOf
// console.log(movies.indexOf('nemo'))
// console.log(newArr.indexOf('Harry Potter'))



//! destructive
//$ reverse
// console.log(movies.reverse())
// console.log(movies)



//* not destructive
//$   slice
// console.log(newArr)
// console.log(newArr.slice(4))
// console.log(newArr)



//! destructive
// $ splice
//  console.log(newArr)
//  console.log(newArr.splice(1))
//  console.log(newArr);//1999
 
// newArr.splice(1, 0, "pulp fiction");
// newArr.splice(4, 4, 'nemo')
// console.log(newArr)



// $  sort
//DO NOT TELL ME, SORT DIDN'T WORK FOR MEEEEEEEE
// const array1 = [1, 30, 4, 21, 100000, 15];
// array1.sort();
// console.log(array1);



//* Array equality

// 1, 2, 3, 4,
// []
// []
// let a , b 

// a = [1 ,2 ,3]
// b = [1 ,2 ,3]

// a = [];
// b = [1, 2, 3, 4];
// b = a;

// console.log( a===b);

// if (a === b) {
//   console.log('it"s true');
// } else {
//   console.log("it's false");
// }
/* it looks to refrences if the refrences are assigned to each other 
they are equall.
*/

// console.log(a);



const arr = [1,2,3,4]

arr.push('arad')

arr[arr.length] = 'mohammad'
// arr[2] = 'kian'

// arr = [1,2,3,4]

console.log(arr)

