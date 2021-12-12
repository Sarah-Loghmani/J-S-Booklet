
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


// *In JavaScript we end statements with semicolons. Variable names can be made up of numbers, letters, and $ or _, but may not contain spaces or start with a number.


// ?what is JS?
// * یک زبان برنامه نویسی است که در فرانت و بک استفاده می شود.
// ? console in inspect
// * یک پلتفرم است که داخل آن کدهای جی اس ران(اجرا) میشود
// برای جی اس حتما از کنسول روم استفاده کنید ولی برای سی اس اس از دوتول فایرفاکس استفاده کنید.
// *در مورد اعداد در جی اس فقط اعداد داریم و لازم نیست چیزی را دسته بندی کنیم مثلا به اعداد صحیح یا حسابی یا...
// ?  عملیات منطقی 
// *    PLUS +    MINES -   multiply *    **  divide /   remainder % 
// *   % این یعنی باقی مانده تقسیم برای مثال gives the remainder of the division of two numbers.
console.log(15%2);
// output= 1
// *NaN  --> Not a Number
// ?variables
// * یعنی متغیرها مثل لیبل هستند که می توان در آن داده هایی قرار داد مثل اعداد و غیره و بعدا جایی که لازم باشد استفاده کرد و یا تغییر داد
// * این متغیرها سه حالت دارند
// * 1-let  اگر با این متغیری را تعریف کنی بعدا می توانی عوضش کنی
let myAge=33;
console.log(myAge=myAge+2);
// output =myAge = 35
// * 2-const    اگر با این متغیری را تعریف کنیم ثابت می ماند و معمولا با حروف بزرگ نامگذاری می شود.
const myHight = 170;
console.log(myHight + 10);
// output = 180
// console.log(myHight=myHight+10)
// output = error
// * 3-var  این برای ورژن های قدیمی استفاده می شود پس از این استفاد نکنید . یک چیزی مثل متغیر حالت اول است.
var myWieght=58;
console.log(myWieght=myWieght+10);
// output = myWieght = 68
// ? دیگر عملیات منطقی
// * ++ plus plus     یک واحد اضافه می کند و همچنین متغیر را معادل با آن قرار می دهد.
// * myAge++   =   myAge+=1(plus, equall)  =    myAge=myAge+1    سن مرا 1 واحد اضافه کن و معادل با سن من قرار بده.
console.log (myAge++);
// output = 35
// به حالت دیگری هم نوشته می شود.
console.log(++myAge);
// output = 37 
// * -- mines mines     یک واحد کم می کند و همچنین متغیر را معادل با آن قرار می دهد.
// * myAge--   =   myAge-=1(mines, equall)    سن مرا 1 واحد کم کن و معادل با سن من قرار بده.
console.log (myAge--);
// output = 37
// به حالت دیگری هم نوشته می شود.
console.log(--myAge);
// output = 35 
// ! سوال بزرگ اینکه وقتی در کنسول این عملیات را انجام میدهم ++ یا -- بعد از دوبار خواندن متغیر نتیجه را درست نشان می دهد اما در وی اس کد اینطور نیست؟
// * /=

// * Booleans  true or false data types 
// * که برای مقایسه کردن استفاده می شوند.
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

// * string یک سری متن هستند از انواع دیتا تایپ ها هستند
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
console.log(lastLetter=myName[myName.length - 1])
// output = a
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

console.log(Math(2,2))
// ! این برای به توان رساندنه که کار نم کنه































    
