const product_Details=document.getElementById("product_Details");
const currentProduct=sessionStorage.getItem("currentProduct");
const parsecurrentProduct=JSON.parse(currentProduct);
product_Details.innerHTML=
`<div><i   class="fas fa-arrow-right"></i> </div>

<div>
<img   id="img" src="../../${ parsecurrentProduct.image }" width="500px"/></div>
<div id="text">
<div id=text1><h1>${ parsecurrentProduct.name } </h1>
<p> ${ sessionStorage.getItem("currentLink") }/${ parsecurrentProduct.kategory }</p>
<p id="price" >${ parsecurrentProduct.price } <i class="fas fa-shekel-sign" ></i></p> <div class="col-auto">
<select class="form-select" id="autoSizingSelect">
  <option value="1" >1</option>
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
</div>
<button  id="addtocart"type="button" class="btn btn-light btn-lg">להוספה לסל</button></div> 
<div id="details"><p>פרטים נוספים</p>

<i class="fas fa-plus" id="moredetails"></i></div></div></div>
`;

const addtocart=document.getElementById("addtocart");
const autoSizingSelect=document.getElementById("autoSizingSelect");
const moredetails=document.getElementById("moredetails");
const back=document.querySelector(".fa-arrow-right");
const details=document.getElementById("details");
console.log("details");

console.log(details);
//לפרטים נוספים
moredetails.onclick=(event)=>{
details.innerHTML=`<p >פרטים נוספים <br>${parsecurrentProduct.descrepition } </p><i class="fas fa-minus"  id="lesdetails"></i>
 `
 console.log(details);
 const  lesdetails=document.getElementById("lesdetails");
 lesdetails.onclick=(event)=>{
    details.innerHTML=`<p>פרטים נוספים</p><p>  </p> <i class="fas fa-plus" id="moredetails2"></i>
 `
 const moredetails2=document.getElementById("moredetails2");
moredetails2.onclick=(event)=>{
    moredetails.click();
};
 };
};
//הוספת הפריט לסל
let k=0,productsArrayForTheCart=[];
let stringifyk=0;
if(sessionStorage.getItem("k")==="0")
{  
    sessionStorage.setItem("k",JSON.stringify(k));
    console.log("newk");}
else{
  console.log("continuek");
}
stringifyk = sessionStorage.getItem("k");
k=JSON.parse(stringifyk);
let stringifyproductsArrayINCart=[];
if(sessionStorage.getItem("productsArrayForTheCart")==="[]")
{  
    console.log(productsArrayForTheCart);      
    sessionStorage.setItem("productsArrayForTheCart",JSON.stringify(productsArrayForTheCart));
    console.log("newsal");}
else{
 console.log("continuesal");
 
}
stringifyproductsArrayINCart= sessionStorage.getItem("productsArrayForTheCart");
productsArrayForTheCart=JSON.parse(stringifyproductsArrayINCart);
console.log(productsArrayForTheCart);

addtocart.onclick=(event)=>{       
    let flag=0;
    productsArrayForTheCart.forEach(P=> {
      if(P.id===parsecurrentProduct.id){
        console.log("מצאתי");
        console.log(parsecurrentProduct.id);
        console.log(P);
        P.quantity=P.quantity+Number(autoSizingSelect.value);
        flag=1;
      }
      });
    if(flag===0){
      productsArrayForTheCart[sessionStorage.getItem("k")]= {id:parsecurrentProduct.id,
                                      image:parsecurrentProduct.image,
                                      name:parsecurrentProduct.name,
                                      price:parsecurrentProduct.price,
                                      quantity:Number(autoSizingSelect.value)};
    k=k+1;
    sessionStorage.setItem("k",k);
  }
  sessionStorage.setItem("productsArrayForTheCart",JSON.stringify(productsArrayForTheCart));
  window.location="../products/index.html";

}
//back
back.onclick=(event)=>{
  window.location="../products/index.html";

}


 






