const dom={
  titleImg:document.getElementById("titleImg"),
  product:document.getElementById("product"),
  carticon:document.getElementById("carticon")
}

const currentKategory=sessionStorage.getItem("currentKategory");


const currentLink=sessionStorage.getItem("currentLink");
if(currentLink==="gifts"){
  console.log(currentLink);
switch (currentKategory) {
  case "מתנות לגבר":
    dom.titleImg.innerHTML=`<img src="../../assests/מארזי מתנה/מתנות לגבר/כיתוב מתנות לגבר.png"width="350px">`;
    break;
    case "מתנות לאישה":
    dom.titleImg.innerHTML=`<img src="../../assests/מארזי מתנה/מתנות לאישה/כיתוב מתנות לאישה.png"width="350px">
    `;
    break;
    case "מתנות לנערות":
    dom.titleImg.innerHTML=`<img src="../../assests/מארזי מתנה/מתנות לנערות/כיתוב מתנות לנערות.png"width="350px">
    `;
    break;
}}

if(currentLink==="primium"){
  switch (currentKategory) {
    case "Dead Sea":
      dom.titleImg.innerHTML=`<img src="../../assests/סדרות פרימיום/Dead Sea/כיתוב Dead Sea.png" width="350px">`;
      break;
      case "Girls":
      dom.titleImg.innerHTML=` <img src="../../assests/סדרות פרימיום/Girls/כיתוב Girls.png" width="350px">`;
      break;
      case"Mr.Laline":
      dom.titleImg.innerHTML=`  <img src="../../assests/סדרות פרימיום/Mr.Laline/כיתוב Mr.Lalin.png" width="350px">`;
      break;
      case"Olive & Babassu":
      dom.titleImg.innerHTML=`  <img src="../../assests/סדרות פרימיום/Olive & Babassu/כיתוב Olive &Babassu.png" width="350px" >`;
      break;
      case"Shea & Kukui":
      dom.titleImg.innerHTML=`  <img src="../../assests/סדרות פרימיום/Shea & Kukui/כיתוב Shea &Kuhui.png" width="350px"> `;
      break;
      case"SKincare":
      dom.titleImg.innerHTML=`  <img src="../../assests/סדרות פרימיום/SKincare/כיתוב SKincare.png" width="350px">`;
      break;
  }
}




if(currentLink==="smell"){
  switch (currentKategory) {
    case "CherryBlossom":
      dom.titleImg.innerHTML=`<img src="../../assests/ניחוחות קלאסיים/CherryBlossom/כיתוב CherryBlossom.png" width="350px">`;
      break;
      case "Frozenpear":
      dom.titleImg.innerHTML=`<img src="../../assests/ניחוחות קלאסיים/Frozenpear/כיתוב FrozenPear.png"
      width="350px">`;
      break;
      case"Ocean":
      dom.titleImg.innerHTML=`<img src="../../assests/ניחוחות קלאסיים/Ocean/כיתוב Ocean.png"
      width="350px">`;
      break;
      case"PeonyGardenia":
      dom.titleImg.innerHTML=`<img src="../../assests/ניחוחות קלאסיים/PeonyGardenia/כיתוב PeonyGardenia.png"
      width="350px" >`;
      break;
      case"VanillaPinkPepper":
      dom.titleImg.innerHTML=`<img src="../../assests/ניחוחות קלאסיים/VanillaPinkPepper/כיתוב VanillaPinkPepper.png"
      width="350px"> `;
      break;
      case"VioletAmber":
      dom.titleImg.innerHTML=`<img src="../../assests/ניחוחות קלאסיים/VioletAmber/כיתוב VioletAmber.png"
      width="350px">`;
      break;
  }
}
let productsArray;

  $.ajax({
    url: "../../data/lalin.json",
    success: ( result ) => {
      productsArray = result; 
        drawProducts();
    },
    error: (err) => {
        console.error(err);
    }
  });
  
 ////////////////////////////////////////////////////////////////////////////////////////////////
 const drawProducts = () => {
  productsArray.forEach(product => {
   console.log("מוצר:");
   
       if(`${ (product.image).substring(7,(product.image).lastIndexOf("."))}`.includes(currentKategory)&&currentKategory !="/"){
        console.log(product.image);
   console.log( (product.image).substring(7,(product.image).lastIndexOf(".")));
          dom.product.innerHTML += 
          `<div id="divpr" class="col-lg-2 col-md-4 col-sm-6 col-xs-12">
           <img   id="prodImg" class=${product.id}  src="../../${ product.image }" width="300px"/>
           <p    id="name"  class=${product.id}  >${ product.name } </p>
           <div id="bottomicons">
           <p   id="price" class=${product.id}  ><i class="fas fa-shekel-sign" ></i> ${ product.price } </p> 
             <i class="${product.id} fas fa-cart-arrow-down "   ></i>
             <i class="${product.id} far fa-heart "   title="I love it's :)"  ></i>
           </div></div>`;
      }}
);

///////

console.log(dom.product.innerHTML);
if(dom.product.innerHTML===""){

  dom.product.innerHTML="לא נמצאו תוצאות";
}


const bottomicons=document.getElementById("bottomicons");
     const prodImgArray=document.querySelectorAll('#prodImg');
    console.log(prodImgArray);
     const prodNameArray=document.querySelectorAll('#name');
     console.log(prodNameArray);

     const cartcheckArray=document.querySelectorAll('.fa-cart-arrow-down');
     console.log(cartcheckArray);

     const iconheartArray =document.querySelectorAll('.fa-heart');
     console.log(iconheartArray);

//   תפתח את המוצר לחיצה על התמונה של המוצר או על שם המוצר 
      prodImgArray.forEach(prodImg=> {
      prodImg.onclick=(event)=>{
           let currentProduct;
                 productsArray.forEach(product=> {
                    if(product.id==prodImg.className){
                            console.log(product);
                            currentProduct=product;
                          }
            });
      console.log(currentProduct);
      sessionStorage.setItem("currentProduct",JSON.stringify(currentProduct))
      window.location="../../pages/ProdDetail/index.html";
             }
           }
         );

      prodNameArray.forEach(prodName=> {
      prodName.onclick=(event)=>{
           let currentProduct;
                 productsArray.forEach(product=> {
                    if(product.id==prodName.className){
                            currentProduct=product;
                          }
            });
      console.log(currentProduct);
      sessionStorage.setItem("currentProduct",JSON.stringify(currentProduct))
      window.location="../../pages/ProdDetail/index.html";
     }
    }
    );
//הלב נהיה ורוד כשלוחצים עליו
localStorage.setItem("TheLastPlaceInTheWishList",0);
let productsArrayINHishListt;

      iconheartArray.forEach(iconheart=> {
      iconheart.onclick=(event)=>{

        if(iconheart.id!="lev"  && iconheart.id!="hearticon"){
 iconheart.style.color="pink";
const hearticon=document.getElementById("hearticon");
hearticon.style.color="pink";
hearticon.style.animationPlayState="paused";

setTimeout(() => {
  hearticon.style.color="black";

  hearticon.style.animationPlayState="running";

}, 1000);  


      }
       }
      }
      );
let k=0,productsArrayForTheCart=[];
let stringifyk=0;


if(sessionStorage.getItem("k")===null)
{  
   sessionStorage.setItem("k",JSON.stringify(k));
    console.log("newk");}
else{
  console.log("continuek");
 
}
stringifyk = sessionStorage.getItem("k");
 k=JSON.parse(stringifyk);





let stringifyproductsArrayINCart=[];

if(sessionStorage.getItem("productsArrayForTheCart")===null)
{  
  console.log(productsArrayForTheCart);
   sessionStorage.setItem("productsArrayForTheCart",JSON.stringify(productsArrayForTheCart));
    console.log("newsal");}
else{
 console.log("continuesal");
 
}stringifyproductsArrayINCart= sessionStorage.getItem("productsArrayForTheCart");

productsArrayForTheCart=JSON.parse(stringifyproductsArrayINCart);


 cartcheckArray.forEach(cartcheck=> {
const currentClass=cartcheck.className;

    cartcheck.onclick=(event)=>{

      cartcheck.className=`${currentClass} fa-spin`;
      cartcheck.style.color="green";
      console.log(cartcheck);
      let Prod;
      productsArray.forEach(product=> {
                      if(product.id==cartcheck.classList[0]){
                      console.log("מצאתי");
                        Prod=product;
                      console.log(Prod);}
              });
     setTimeout(() => {
                cartcheck.className=`${currentClass}`;
                console.log(cartcheck.className);
                cartcheck.style.color="black";
              }, 2000);         
    let flag=0;
    productsArrayForTheCart.forEach(P=> {
      if(P.id===Prod.id){
        P.quantity=P.quantity+1;
        flag=1;
      }
      });
    if(flag===0){
      productsArrayForTheCart[sessionStorage.getItem("k")]={id:Prod.id,
                                                                        image:Prod.image,
                                                                        name:Prod.name,
                                                                        price:Prod.price,
                                                                        quantity:1};
    k=k+1;
    sessionStorage.setItem("k",k);
  }
  sessionStorage.setItem("productsArrayForTheCart",JSON.stringify(productsArrayForTheCart));
       }
  }
      );
}


 


