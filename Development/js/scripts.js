
// <!-- 👇🏻👇🏻التمرين الأول -->

// <!-- في هذا التمرين ستقوم بإنشاء قائمة طعام  -->
// <!-- consoleستطلب من المستخدم رقم الطبق وثم تطبع اسم الطبق في ال -->

let menu = prompt("ماذا تحب أن تطلب");
// <!-- ex1.mov انظر إلى المثال في الفيديو المرفق  -->
// <!-- if استخدم عبارة التحكم -->
if (menu == 1) {
   
    console.log("بيتزا")
  }
if (menu == 2) {
   
    console.log("برجر")
  }
if (menu == 3) {
   
    console.log("سوشي")
  }
 

// <!-- 🔥بونص التمرين الأول -->
// <!-- switch استخدم عبارة -->
switch(menu) {
    case 1:
        "بيتزا"
      break;
    case 2:
        "برجر"
      break;
      case 3:
        "سوشي"
      break;
    default:
     "طبقك غير متوفر حاليا"
  }
// <!-- -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.- -->

// <!-- 👇🏻👇🏻التمرين الثاني -->

// <!-- في هذا التمرين ستقوم بإنشاء آلة حاسبة  -->
// <!-- ستطلب من المستخدم رقمين والعملية الحسابية ثم تطبع نتيجة هذه العملية -->

// <!-- ex2.mov انظر إلى المثال في الفيديو المرفق  -->
// <!-- .* في هذا المثال ، يقوم المستخدم بإدخال الرقم الأول 4 والرقم الثاني 6 والعملية -->
let calculator1 = parseInt(prompt("  قوم بإدخال رقم الاول "))
let calculator2 = parseInt(prompt("  قوم بإدخال رقم الثاني "))
let calculator3 = prompt(" (+,-,*,/) اختار العملية  ")

// <!-- يجب أن تكون الأرقام المدخلة باللغة الإنجليزية -->
// <!-- في حال كانت العملية المدخلة غير صحيحة قم بطباعة رسالة تحذيرية للمستخدم -->
// <!-- في حال كانت الأرقام المدخلة غير صحيحة قم بطباعة رسالة تحذيرية للمستخدم -->

// <!-- scripts.js قم بكتابة الكود اللازم داخل ملف
//      ex1.mov حتى تظهر لك النتيجة كما هو موضح في المثال في الفيديو المرفق -->
// <!-- if استخدم عبارة التحكم -->
if (calculator3 == "+"){

console.log(calculator1 + calculator2 )
   
}
if (calculator3 == "/"){

console.log(calculator1 / calculator2 )
}
if (calculator3 == "*"){
  
console.log(calculator1 * calculator2 )
    
}
if (calculator3 == "-"){

console.log(calculator1 - calculator2 )
    
}

// <!-- 🔥بونص التمرين الثاني -->
// <!-- switch استخدم عبارة -->
switch(calculator3) {
    case "+":
        console.log(calculator1 + calculator2 )
      break;
    case "/":
        console.log(calculator1 / calculator2 )
      break;
      case "*":
        console.log(calculator1 * calculator2 )
      break;
      case "-":
        console.log(calculator1 - calculator2 )
      break;
    default:
        console.log("يجب أن الارقام باللغة الانجليزية")
  }

// <!-- -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.- -->

// <!-- 🔥مزيداً من التدريب؟ -->
// <!-- 👇🏻👇🏻التمرين الثالث -->

// <!-- في هذا التمرين ستقوم بإنشاء برنامج بسطور برمجية بسيطة  -->
let age = prompt("عمرك ؟؟")
// <!-- الخطوات -->
// <!-- age قم بتعيين قيمة عمرك إلى متغير وسمِّ المتغير -->
// <!-- قم باختبار قيمة عمرك باستخدام البرنامج -->
// <!-- بحيث يقوم البرنامج بإرجاع كلمة روضة، مدرسة أو جامعة
//      حسب قيمة عمرك  -->
if (age < 6){
  
    console.log("روضة")
        
    }
if (age > 6){
  
        console.log("مدرسة")
            
    }
if (age == 18){
  
        console.log("جامعة")
            
    }  
// <!-- قم بكتابة السطور البرمجية اللازمة لعمل ذلك -->
