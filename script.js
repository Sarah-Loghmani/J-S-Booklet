//         let randomNumber=Math.round(Math.random()*50);
// let randomNumber = Math.round(Math.random() * 50);
// console.log(randomNumber)





/*  برای به دست آوردن دقیق رزولوشن گوشی وارد این سایت شوید
gsmarena.com
نام گوشی را وارد کنید در قسمت 
display --> resolution --> ( ~ x ppidenssity)
ppi= pixcel per inch
و همچنین اگر در گوگل بزنی :
mobile resolution for website
یه سری اطلاعات کلی برای اندازه های استاندارد می آورد  */


// ?what is JS?
// * یک زبان برنامه نویسی است که در فرانت و بک استفاده می شود.
// ? console in inspect
// * یک پلتفرم است که داخل آن کدهای جی اس ران(اجرا) میشود
// برای جی اس حتما از کنسول روم استفاده کنید ولی برای سی اس اس از دوتول فایرفاکس استفاده کنید.
// *در مورد اعداد در جی اس فقط اعداد داریم و لازم نیست چیزی را دسته بندی کنیم مثلا به اعداد صحیح یا حسابی یا...
// ?  عملیات منطقی 
// *  PLUS +    MINES -   *    **  /   %
// *   % این یعنی باقی مانده تقسیم برای مثال
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
// * 2-const   اگر با این متغیری را تعریف کنیم ثابت می ماند
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
// * myAge++   =   myAge+=1(plus, equall)    سن مرا 1 واحد اضافه کن و معادل با سن من قرار بده.
console.log (myAge=myAge++);
// output = 35
// به حالت دیگری هم نوشته می شود.
console.log(myAge=++myAge);
// output = 36 
// * -- mines mines     یک واحد کم می کند و همچنین متغیر را معادل با آن قرار می دهد.
// * myAge--   =   myAge-=1(mines, equall)    سن مرا 1 واحد کم کن و معادل با سن من قرار بده.
console.log (myAge=myAge--);
// output = 36
// به حالت دیگری هم نوشته می شود.
console.log(myAge=--myAge);
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
// * string یک سری متن هستند از انواع دیتا تایپ ها هستند
let myName = "Sara";
// * این مقدار باید در "" یا در '' قرار بگیره منتها در هر کدوم که قرار بگیره تا آخر کدنویسی باید همون در نظر گرفته بشه.
console.log(myName);
// !چرا  توی پرانتز خط خورد
// * درون ""یا '' عدد قرار بگیرد درواقع استرینگ محسوب می شود 
// * qutation inside qutation
let herDog="her dog's name is eco";
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




















    
