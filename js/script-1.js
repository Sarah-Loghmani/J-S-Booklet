
/*  برای به دست آوردن دقیق رزولوشن گوشی وارد این سایت شوید
gsmarena.com
نام گوشی را وارد کنید در قسمت 
display --> resolution --> ( ~ x ppidenssity)
ppi= pixcel per inch
و همچنین اگر در گوگل بزنی :
mobile resolution for website
یه سری اطلاعات کلی برای اندازه های استاندارد می آورد  */

// *JavaScript provides eight different data types which are
// * undefined, null, boolean, string, symbol, bigint, number, and object.


// *In JavaScript we end statements with semicolons.
// *Variable names can be made up of numbers, letters, and $ or _, but may not contain spaces or start with a number.


// ?what is JS?
// * یک زبان برنامه نویسی است که در فرانت و بک استفاده می شود.

// ? console in inspect
// * یک پلتفرم است که داخل آن کدهای جی اس ران(اجرا) میشود

// برای جی اس حتما از کنسول کروم استفاده کنید ولی برای سی اس اس از دِوتولِ فایرفاکس استفاده کنید.

//* در مورد نامبرز در جی اس فقط اعداد داریم و لازم نیست چیزی را دسته بندی کنیم مثلا به اعداد صحیح یا اعشاری یا غیره

// ?  عملیات منطقی MATH OPERATIONS
// *    (PLUS +)   ( MINES -)   (multiply *)    ( توان **)   (divide / )   (remainder % )    (NaN)  (assignment  =)

// *  %  این یعنی باقی مانده تقسیم gives the remainder of the division of two numbers.
console.log(15%2);
// output= 1

// *NaN  --> Not a Number
console.log(Math.round())
// output=NaN



// ?variables
/*  متغیرها مثل لیبل هستند که 
می توان در آن دیتاتایپی قرار داد مثل نامبر و استرینگ و غیره 
و بعدا جایی که لازم باشد استفاده کرد و یا تغییر داد*/

// * این متغیرها از طریق سه کی وورد نوشته می شوند
// * 1-let   
/*اگر با این متغیری را تعریف کنی بعدا می توانی عوضش کنی
 ولازم نیست حتما از اول به آن مقدار بدهیم*/
let myAge;
myAge = 33;
//* Number is a data-type*/
console.log(typeof myAge);
console.log(myAge=myAge+2);
// output =myAge = 3
// * 2-const     
/*اگر با این متغیری را تعریف کنیم ثابت می ماند 
و معمولا با حروف بزرگ نامگذاری می شود.
و باید حتما از ابتدا با مقدار مشخصی تعریف شود.*/
const myHight = 170;
console.log(myHight + 10);
// output = 180
// console.log(myHight=myHight+10)
// output = error
// * 3-var (the old variable keyword)) 
/*این برای ورژن های قدیمی استفاده می شده
 پس از این استفاد نکنید . یک چیزی مثل متغیر حالت اول است.*/
var myWieght=58;
console.log(myWieght=myWieght+10);
// output = myWieght = 68



//    * Best practice
/**  1-We may not start a variable name with a digit
 *   2- استفاده شود camelcase از  familyName   حرف اول کلمه های دوم به بعد کپیتال باشد
 *   3-Use good names / Do not use one-word namesاز یک حرف برای نامگذاری متغیر استفاده نکنید بلکه نام کامل بنویسد
 *   4- You can use ”is” at the first of Boolean variable: 
 *   (isLoggedIn = true;)
      isUser=woman
 */



// ? Counter variable ( ++ , -- , += , -= , *= , /=  , **=  ,  %=)
/*نکته اینکه این ها برای کانست نامعتبر است
  چرا که ما نمی توانیم مقدار اولیه کانست رو تغییر دهیم*/
// * ++ plus plus     
//یک واحد اضافه می کند و همچنین متغیر را معادل با آن قرار می دهد.
/* myAge++   =   myAge+=1(plus, equall)  =    myAge=myAge+1    
سن مرا 1 واحد اضافه کن و معادل با سن من قرار بده.*/
console.log (myAge++);
// output = 35
// به حالت دیگری هم نوشته می شود.
console.log(++myAge);
// output = 37 
// * -- mines mines     
// یک واحد کم می کند و همچنین متغیر را معادل با آن قرار می دهد.
/* myAge--   =   myAge-=1(mines, equall)    =    myAge=myAge-1    
سن مرا 1 واحد کم کن و معادل با سن من قرار بده.*/
console.log (myAge--);
// output = 37
// به حالت دیگری هم نوشته می شود.
console.log(--myAge);
// output = 35 
// ! سوال بزرگ اینکه وقتی در کنسول این عملیات را انجام میدهم ++ یا -- بعد از دوبار خواندن متغیر نتیجه را درست نشان می دهد اما در وی اس کد اینطور نیست؟



// * Booleans  true or false data-types 
// که برای مقایسه کردن استفاده می شوند.
/* 2>3
   false
   3>2
   true
   3<=5
   true    چون یکی از شروط درست است*/

//    * Best practice
/**  1-متغیر با عدد شروع نشود
 *   2- استفاده شود camelcase از  familyName   حرف اول کلمه های دوم به بعد کپیتال باشد
 *   3-از یک حرف برای نامگذاری متغیر استفاده نکنید بلکه نام کامل بنویسد
 *   4- isUser=woman
 */
// *Write variable names in JavaScript in camelCase. In camelCase, multi-word variable names have the first word in lowercase and the first letter of each subsequent word is capitalized.

// * string یک سری دیتا تایپ به صورت متن هستند
// * A string literal, or string, is a series of zero or more characters enclosed in single or double quotes.
let myName = "Sara";
// * این مقدار باید در "" یا در '' قرار بگیره منتها در هر کدوم که قرار بگیره تا آخر کدنویسی باید همون در نظر گرفته بشه.
console.log(myName);

// * درون ""یا '' عدد قرار بگیرد درواقع استرینگ محسوب می شود 

// *Escape Sequences in Strings
/*   \'	single quote
      \"	double quote
      \\	backslash
      \n	newline
      \r	carriage return
      \t	tab
      \b	word boundary
      \f	form feed */
      const myStr = "FirstLine\n\t\\SecondLine\nThirdLine";
      console.log(myStr)
      /* output=FirstLine
	               \SecondLine
               ThirdLine     
                */
// * qutation inside qutation
let herDog="her dog's name is eco";
// کل عبارت خط بالا Expression
//  عبارت داخل"" است که در واقع به متغیرها(ورایبل) منتسب(اساین) می شود Statement 
// Statements asign to varibles
console.log(herDog);
// or with \ slash
console.log (herDog='her dog\'s name is eco');
// or with `` backtick
console.log(herDog=`her dog's name is eco`)



// *strings are indexed and index start from 0
console.log(myName[0]);
// output = s
console.log(myName[2]);
// output = r
// Use bracket notation to find the last character in the string.
console.log(lastLetter=myName[myName.length - 1])
// output = a
// Use bracket notation to find the nth-to-last character in the string.
console.log((thirdToLastLetter = myName[myName.length - 3]));

// *name.length مقدار کاراکترهای داخل استرینگ را اعلام میکند
console.log(myName.length);
// output =4

// *concatenate(add)
let familyName='Loghmani';
let empty=' ';
console.log((wholeName = myName + empty + familyName));
// * string methods  هر دیتا تایپی چه نامبر چه استرینگ متدهایی دارند
// *متدها یک سری کدهایی هستند که توسط خود جاواو پیش نویس شدند و یک سری عملیات انجام می دهند.
// .method()
console.log(upperCaseSara = myName.toUpperCase());
// output=SARA
// *جهت پاک کردن اسپیس پس و پیش یک کلمه
console.log( spacedName= '      sama      ')
console.log(spacedName.trim())

// *Argument برخی متدها داخل پرانتزشان مقادیر میگیرند که اینها را آرگیومنت می گویند
let alphabet='abcdefg'
console.log(alphabet.indexOf('c'))
// output = 2
console.log(alphabet.indexOf('z'));
// output = -1
console.log(alphabet.indexOf('a'));
// output = 0
console.log(alphabet.indexOf(''));
// output = 0
// اما اگر
let alphabet2 = 'abc defg';
console.log(alphabet2.indexOf(''));
// output = 0
console.log(alphabet2.indexOf(' '));
// output = 3

// *برای برش دادن یک متن
console.log (animal='morghe sahar')
console.log(animal.slice(3))
// output = ghe sahar
console.log(animal.slice(7,12));
// output = sahar
console.log(animal.slice(-5));
// output = sahar

// *  برای جایگزین کردن یک حرف یا یک کلمه . در این متد به جای اولین حرف یاکلمه ای که مچ شود می نشیند.
console.log(favorit='my favorit sport is Chess. but i like Chess too.')
console.log(favorit.replace('Chess', 'Yoga'))
console.log(favorit.replaceAll("Chess", "Yoga"));

//  استفاده می شود (مطالعه شخصی) RegExp برای جایگزین کردن باهم از

// * برای تکرار کردن
console.log(myName.repeat(4))
// output = SaraSaraSaraSara

console.log(newUser='Rahman')
// output=Rahman
console.log(greeting='welcome '+newUser)
// output=welcome Rahman
// *backtick
console.log((anothergreeting = `welcome ${newUser}`));
// output=welcome Rahman
console.log(anothergreeting=`welcome 'Rahman' and "sara"`)
// welcome 'Rahman' and "sara"

// *concatenate(add)
console.log(sport='skateboard')
// output=skateboard
console.log(sport.slice(5).replace('o','e'))
// output=beard
// * Null  به صورت عمدی مقدار متغیری را نول قرار می دهیم تا بعدا آن را تغییر دهیم
// * Undefined  این اروری ست که خود جاوا از کد میگیرد
console.log(mySureName=null)
// output=null

// *Math Method
// به صورت رندوم بین 0 تا 1 عددی را انتخاب می کند
console.log(Math.random())
// output=0.4838536879235882

// به صورت رندوم بین 0 تا100  عددی را انتخاب می کند
console.log(Math.random()*100);
// output=84.17731359986095

// عدد را گرد می کند که در این عدد چون کمتر از 0.5 است به سمت پایین گرد شده اس
console.log(Math.round(3.4))
// output=3

// عدد را گرد می کند که در این عدد چون بیشتر از 0.5 است به سمت بالا گرد شده اس
console.log(Math.round(3.6));
// output=4

console.log(Math.round())
// output=NaN

console.log(Math.round(Math.random()*95)+5);
// اعداد صحیح بین 5 تا 100

console.log(Math.PI)
// عدد پی
console.log(Math.abs(-50))
// مثبت می کند

console.log(Math.pow(2,3))
???????????????????????????????????????????????????????????????????????





// ?what is JS?
// * یک زبان برنامه نویسی است که در فرانت و بک استفاده می شود.
// ? console in inspect
// * یک پلتفرم است که داخل آن کدهای جی اس ران(اجرا) میشود






// *JavaScript provides eight different data types which are
// * undefined, null, boolean, string, number , 
// symbol, bigint,  and object.











// ?variables
/*  متغیرها مثل لیبل هستند که 
می توان هر دیتاتایپی را به آنها اساین کرد. مثل نامبر و استرینگ و غیره 
و بعدا جایی که لازم باشد میتوان از آن استفاده کرد و یا تغییرش داد
Variables are like labels
• We can store a value and give it a name so 
that we can:
– Refer back to it later
– Use that value to do some stuff
– Or change it later on
*/





// *  key words for variables-->
// * 1-var (the old variable keyword) 
/*این برای ورژن های قدیمی استفاده می شده
 پس از این استفاد نکنید . یک چیزی مثل متغیر حالت اول است.*/
//  let myName="sara";
//  console.log(myName);

 // * 2-let   
/*اگر با این متغیری را تعریف کنی بعدا می توانی عوضش کنی
 ولازم نیست حتما از اول به آن مقدار بدهیم*/
let myWeight = 58;
console.log(myWeight)
  console.log(myWeight = myWeight+10);
// output = myWeight = 68
/* Number is a data-type*/
// console.log(typeof myWeight);
// * 3-const     
/*اگر با این متغیری را تعریف کنیم ثابت می ماند 
و معمولا با حروف بزرگ نامگذاری می شود.
و باید حتما از ابتدا با مقدار مشخصی تعریف شود.*/
const myHight = 170;
console.log(myHight);
console.log(myHight + 10);
// output = 180
// console.log(myHight=myHight+10)
// output = error
console.log(myHight)



// * Variable names can be made up of numbers, letters, and $ or _, but may not contain spaces or start with a number.
/**  1-We may not start a variable name with a digit(number).
 *   2-  camelcase -->  familyName - myAge --> (multi-word variable names have the first word in lowercase and 
 *                                               the first letter of each subsequent word is capitalized.)
 *   3-Use good names / Do not use one-word names
 *   4- You can use ”is” at the first of Boolean variable: 
 *   (isLoggedIn = true;)
      isUser = woman
 */
// *Write variable names in JavaScript in camelCase. In camelCase, multi-word variable names have the first word in lowercase and the first letter of each subsequent word is capitalized.
// * end statements with semicolons.







// * numbers: 
/*      Positive numbers
        Negatives numbers
        Whole numbers (integers)
        Decimal number
*/



// * MATH OPERATIONS
/*      • +    PLUS
        • -    MINES
        • *    multiply
        • **  
        • /    divide
        • %    remainder  --> gives the remainder of the division of two numbers.*/
            console.log(15%2);
            // output= 1
/*                
        • NaN  Not a Number */
               console.log(Math.round())
                // output=NaN
/*     
         • =    assignment 
*/                 




// ? Counter variable ( ++ , -- , += , -= , *= , /=  , **=  ,  %=)
/*نکته اینکه این ها برای کانست نامعتبر است
  چرا که ما نمی توانیم مقدار اولیه کانست رو تغییر دهیم*/
// * ++ plus plus     
//یک واحد اضافه می کند و همچنین متغیر را معادل با آن قرار می دهد.
/* myWeight++   =   myWeight+=1(plus, equall)  =    myWeight=myWeight+1    
وزن مرا 1 واحد اضافه کن و معادل با سن من قرار بده.*/
// console.log (myWeight++);
// output = 68
// console.log(myWeight)
// به حالت دیگری هم نوشته می شود.
console.log(++myWeight);
// output = 60 
// * -- mines mines     
// یک واحد کم می کند و همچنین متغیر را معادل با آن قرار می دهد.
/* myWeight--   =   myWeight-=1(mines, equall)    =    myWeight=myWeight-1    
سن مرا 1 واحد کم کن و معادل با سن من قرار بده.*/
// console.log(myWeight--);
// output = 58
// به حالت دیگری هم نوشته می شود.
// console.log(--myWeight);
// output = 56 


// * string یک سری دیتا تایپ به صورت متن هستند
// * A string  is a series of zero or more characters enclosed in single or double quotes.
let myName = "Sara";
// * این مقدار باید در "" یا در '' قرار بگیره منتها در هر کدوم که قرار بگیره تا آخر کدنویسی باید همون در نظر گرفته بشه.
console.log(myName);
console.log(typeof myName)
console.log(myName.length)

// *عدد درون ""یا '' عدد قرار بگیرد درواقع استرینگ محسوب می شود 


// *Escape Sequences in Strings
/*    \'	single quote
      \"	double quote
      \\	backslash
      \n	newline
      \t	tab
      \b	word boundary
 */
      const myStr = "FirstLine\n\t\\SecondLine\nThirdLine\b";
      console.log(myStr)
      /* output=FirstLine
	               \SecondLine
                ThirdLine     
                */


// * qutation inside qutation
let herDog = "her dog's name is eco";
// کل عبارت خط بالا Expression
//  عبارت داخل"" است که در واقع به متغیرها(ورایبل) منتسب(اساین) می شود Statement 
// Statements asign to varibles
console.log(herDog);
// or with \ slash
console.log (herDog='her dog\'s name is eco');
// or with `` backtick
console.log(herDog=`her dog's name is eco`)



// *strings are indexed and index start from 0
// s-a-r-a
// 0-1-2-3
console.log(myName[0]);
// output = s
console.log(myName[2]);
// output = r
console.log(myName[-1]);


// Use bracket notation to find the last character in the string.
let lastCharacter;
console.log(lastCharacter=myName[myName.length-1]);
// output = a
// Use bracket notation to find the nth-to-last character in the string.
// console.log((thirdToLastLetter = myName[myName.length - 3]));

// *name.length مقدار کاراکترهای داخل استرینگ را اعلام میکند
console.log(myName.length);
// output =4



// * string methods  هر دیتا تایپی چه نامبر چه استرینگ متدهایی دارند
// *متدها یک سری کدهایی هستند که توسط خود جاواسکریپت و پیش نویس شدند و یک سری عملیات انجام می دهند.

// varieble . method()

// * to UpperCase
// let k = myName.toUpperCase()
console.log(myName.toUpperCase())

// console.log(upperCase);
// output=SARA

// *جهت پاک کردن اسپیس پس و پیش یک استرینگ

console.log( spacedName= '      sama      ')
console.log(spacedName.trim())

// *Argument برخی متدها داخل پرانتزشان مقادیر میگیرند که اینها را آرگیومنت می گویند
let alphabet='abcdefgc'
console.log(alphabet.indexOf('c',2))
// output = 2
console.log(alphabet.indexOf('z'));
// output = -1
console.log(alphabet.indexOf('a'));
// output = 0
console.log(alphabet.indexOf(''));
// output = 0
// اما اگر
let alphabet2 = 'abc defg';
console.log(alphabet2.indexOf(''));
// output = 0
console.log(alphabet2.indexOf(' '));
// output = 3

// *برای برش دادن یک متن
console.log (animal='morghe sahar')
console.log(animal.slice(3))
// output = ghe sahar
console.log(animal.slice(7,12));
// output = sahar
console.log(animal.slice(-5));
// output = sahar

// *  برای جایگزین کردن یک حرف یا یک کلمه . در این متد به جای اولین حرف یاکلمه ای که مچ شود می نشیند.
console.log(favorit='my favorit sport is Chess. but i like Chess too.')
console.log(favorit.replace('Chess', 'Yoga'))
console.log(favorit.replaceAll("Chess", "Yoga"));

//  استفاده می شود (مطالعه شخصی) RegExp برای  سرچ کردن از

// * برای تکرار کردن
console.log(myName.repeat(4))
// output = SaraSaraSaraSara


// *concatenate(add)
console.log( familyName='Loghmani');
let empty=' ';
console.log((wholeName = myName + empty + familyName));

console.log(newUser='Zahra')
// output=Zahra
console.log(greeting='welcome '+newUser)
// output=welcome Zahra


// *backtick
console.log((anothergreeting = `welcome ${newUser}`));
// output=welcome Zahra
console.log(anothergreeting=`welcome 'Zahra' and "sara"`)
// welcome 'Zahra' and "sara"

// *Quiz
console.log(sport='skateboard')
// output=skateboard
console.log(sport=sport.slice(5).replace("o", "e"));
// output=beard



// * Null  به صورت عمدی مقدار متغیری را نول قرار می دهیم تا بعدا آن را تغییر دهیم
// * Undefined  این اروری ست که خود جاوااسکریپت از کد میگیرد
let hisName=null;
console.log(hisName);
console.log(mySureName=null)
// output=null



// *Math Method
// به صورت رندوم بین 0 تا 1 عددی را انتخاب می کند
console.log(Math.random())
// output=0.4838536879235882

// به صورت رندوم بین 0 تا100  عددی را انتخاب می کند
console.log(Math.random()*100);
// output=84.17731359986095

// عدد را گرد می کند که در این عدد چون کمتر از 0.5 است به سمت پایین گرد شده اس
console.log(Math.round(3.6))
// output=3

// عدد را گرد می کند که در این عدد چون بیشتر از 0.5 است به سمت بالا گرد شده اس
// console.log(Math.round(3.6));
// output=4

// console.log(Math.round())
// output=NaN

console.log(Math.round(Math.random()*95)+5);
// اعداد صحیح بین 5 تا 100

console.log(Math.PI)
// عدد پی
console.log(Math.abs(-5.6))
// مثبت می کند

console.log(Math.pow(2,3))
console.log(2**3)


















































    
