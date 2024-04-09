
const cartk=document.getElementById("cartk");
const bt=document.getElementById("bt");
const table=document.getElementById("table");
const drawProducts = () => {
  bt.innerHTML="";
  table.innerHTML="";

let productsArrayINCart=sessionStorage.getItem("productsArrayForTheCart");
if(productsArrayINCart===null||productsArrayINCart==="[]")
  {
    cartk.innerHTML="אין מוצרים בסל";
    cartk.style.textAlign="center";
  }
else
{ 
let parseProductsArrayINCart=JSON.parse(productsArrayINCart); 
let totalp=0;
let totalq=0;
bt.innerHTML += `
<button  id="RemoveAll" type="button" class="btn btn-light btn-lg">
<div>
<i class="fas fa-trash-restore " ></i> לריקון הסל</button>
<button  id="continueBuy" type="button" class="btn btn-light btn-lg"><i class="fas fa-arrow-right"></i> חזור לקנות</button>
<button  id="pay" type="button" class="btn btn-light btn-lg"><i class="fas fa-money-check-alt" ></i> לסיום ותשלום </button>`
table.innerHTML += `
<div class="divIntable" id="titleIntable">
  <p>מוצר</p>
  <p>כמות</p>
  <p>מחיר ליחידה</p>
  <p>הסרה מהסל</p>
</div>
`;
 parseProductsArrayINCart.forEach(product => {
       table.innerHTML += 
  `<div class="divIntable" >
  <div id="imgname">
  <img  id="prodImg"  src="../../${ product.image }" width="150px"/>
  <p    id="name" >${  product.name } </p>
  </div>
  <div id="details" >
  <select class="form-select" id="autoSizingSelect" >
  <option selected value="${product.quantity}">${product.quantity}</option>
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
  <option value="5">5</option>
  <option value="6">6</option>
  <option value="7">7</option>
  <option value="8">8</option>
  <option value="9">9</option>
  <option value="10">10</option>
</select>
<p   id="price" > ${  product.price }   <i class="fas fa-shekel-sign" ></i></p> 
<p>  <i class="fas fa-trash" ></i>
</p> 
</div>
</div>`;
totalp+=(product.price)*(product.quantity);
totalq+=(product.quantity);
});
table.innerHTML += `<div class="divIntable" id="bottomIntable">
<p>סה"כ</p>
<p  id="totalPrice">${  totalp } <i class="fas fa-shekel-sign" ></i> </p> 
<p   id="totalquantity"> <i class="fas fa-shopping-bag" > </i>  ${totalq} </p> `

console.log(totalq);
///שינו כמות פריטים
 const autoSizingSelect=document.querySelectorAll(".form-select");
 autoSizingSelect.forEach((select,index) => {
 select.onchange=()=>{
 parseProductsArrayINCart[index].quantity=(Number(select.value));
     console.log(parseProductsArrayINCart);
     sessionStorage.setItem("productsArrayForTheCart",JSON.stringify(parseProductsArrayINCart));
     drawProducts();
  }
 });
//
const trashes=document.querySelectorAll(".fa-trash") ;
for (let index = 0; index < trashes.length; index++) {
  trashes[index].onclick=(event)=>{
      for (let index2 = index; index2 < parseProductsArrayINCart.length; index2++) {
       parseProductsArrayINCart[index2]=parseProductsArrayINCart[index2+1]
      }
      //עדכון ה  sesionStorage 
      sessionStorage.setItem("k",sessionStorage.getItem("k")-1);
      parseProductsArrayINCart.length=parseProductsArrayINCart.length-1;
      sessionStorage.setItem("productsArrayForTheCart",JSON.stringify(parseProductsArrayINCart));
      drawProducts();
}
}
//עד לפה היה לוגיקת הסרה מהסל
//ריקון הסל
const RemoveAll=document.getElementById("RemoveAll");
console.log("RemoveAll");
console.log(RemoveAll);
RemoveAll.onclick=(event)=>{
      sessionStorage.setItem("k",0);
      parseProductsArrayINCart.length=0;
      sessionStorage.setItem("productsArrayForTheCart",JSON.stringify(parseProductsArrayINCart));
      cartk.innerHTML=`<i class="fas fa-trash fa-spin "></i>`;
      const t=document.querySelector(".fa-trash");
      t.style.textAlign="center";
      t.style.fontSize="200px";
      t.style.color="rgb(211, 87, 87)";
      setTimeout(() => {
      cartk.style.fontSize="100%";
        drawProducts();
      }, 1000);   
      
}
//לחזור לקנות
const continueBuy=document.getElementById("continueBuy");
continueBuy.onclick=(event)=>{
   window.location="../products/index.html";
}

///לסיום ותשלום
const pay=document.getElementById("pay");
pay.onclick=(event)=>{
   sessionStorage.setItem("totalp",totalp);
   window.location="../payment/index.html";
}
}
}
drawProducts();

