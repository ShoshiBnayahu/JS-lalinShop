
const dom={payment:document.getElementById("payment"),
            payEmail:document.getElementById("payEmail"),
            payName:document.getElementById("payName"),
            payAddress:document.getElementById("payAddress"),
            payNameHolder:document.getElementById("payNameHolder"),
            payNumCard:document.getElementById("payNumCard"),
            threeNums:document.getElementById("3Num"),
            payDate:document.getElementById("payDate"),
            next:document.getElementById("next"),
            step_1:document.getElementById("step_1"),
            step_2:document.getElementById("step_2"),
            step_3:document.getElementById("step_3"),
            p1:document.getElementById("p1"),
            p2:document.getElementById("p2"),
            backToCart:document.querySelector(".fa-arrow-circle-right"),
            orderAddress:document.getElementById("orderAddress")
           }
     
let stringifyuserDet;
let userD;
stringifyuserDet=sessionStorage.getItem("currentUser");
   if(stringifyuserDet===null)
     {
     user.style.fontWeight="bolder";
     }
  else
    {
    userD=JSON.parse(stringifyuserDet);
    dom.payEmail.value=userD.Email;
    dom.payName.value=userD.Name;
    }

dom.payEmail.onchange=(event)=>{
  alert("בשביל להזין פרטי משתמש הכנס כמשתמש חדש/אחר");

if(userD!=null)
    {
    dom.payEmail.value=userD.Email;
    dom.payName.value=userD.Name;
    }
    else
    {
    dom.payEmail.value="";
    dom.payName.value=" ";
    }
}
dom.payName.onchange=(event)=>{
  alert("בשביל להזין פרטי משתמש הכנס כמשתמש חדש/אחר");

if(userD!=null)
    {
    dom.payEmail.value=userD.Email;
    dom.payName.value=userD.Name;
    }
    else
    {
    dom.payEmail.value="";
    dom.payName.value=" ";
    }
}

//validation 
//תקינות לשמות
dom.payNameHolder.onkeydown = function(event) {
  if( !isKeyValid1(event.key)) {
      event.preventDefault();
  }
}
//תקינות לכתובת, מה צריך בדיוק?       
dom.payAddress.onkeydown = function(event) {
  if( !isKeyValid3(event.key)) {
      event.preventDefault();
  }
}
//  תקינות  למספרי כרטיס  
dom.threeNums.onkeydown= function(event) {
  if( !isKeyValid2(event.key)) {
      event.preventDefault();
  }
}
dom.payNumCard.onkeydown = function(event) {
  if( !isKeyValid2(event.key)) {
      event.preventDefault();
  }
}
//אותיות בלבד או רווח
const isKeyValid1 = function(key) {
  return key >= 'a' && key <= 'z' 
      || (key >= 'A' && key <= 'Z')||(key >= 'א' && key <= 'ת')
      || key === ' '
}
//מספרים בלבד
const isKeyValid2 = function(key) {
  return (key >= '0' && key <= '9' )
}
//אותיות או רווח או מספרים בלבד
const isKeyValid3 = function(key) {
  return (key >= 'a' && key <= 'z' 
      || key >= 'A' && key <= 'Z'
      || key === ' '||key >= '0' && key <= '9' ||(key >= 'א' && key <= 'ת'))
     
}
///
dom.p1.innerHTML=`${sessionStorage.getItem("totalp")}  <i class="fas fa-shekel-sign" ></i>`;
dom.p2.innerHTML=`${sessionStorage.getItem("totalp")}  <i class="fas fa-shekel-sign" ></i>`;

dom.backToCart.onclick=(event)=>{
  window.location="../MyCart/index.html";
}

 dom.next.onclick=(event)=>{
   if(dom.payAddress.value!=""&&dom.payEmail.value!=""&&dom.payName.value!=""){
    dom .step_2.style.display="flex";
    dom.span.innerHTML=`${sessionStorage.getItem("totalp")}  <i class="fas fa-shekel-sign" ></i>`;

   }
  else
  alert("מלא את כל השדות");
 }


dom.payment.onsubmit=(event)=>{
event.preventDefault();
//אם התאריך קטן מהתאריך של היום פחות חמש ימים
// alert("תאריך התפוגה קצר מידי");
// else
const userAtLast={Email:userD.Email,
                  Name:userD.Name,
                  Oddress:dom.payAddress.value};
                  console.log(userAtLast);
                 localStorage.setItem(userD.Email,JSON.stringify(userAtLast));
// JSON.stringify
dom .step_1.style.display="none";
dom .step_2.style.display="none";
dom.orderAddress.innerHTML=`${dom.payAddress.value}`;
dom .step_3.style.display="flex";


}
const close=document.getElementById("close");
close.onclick=(event)=>{
      sessionStorage.removeItem("k");
      sessionStorage.removeItem("k2");
}