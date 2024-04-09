const a1=document.getElementById("a1");
const a2=document.getElementById("a2");
const a3=document.getElementById("a3");
const world=document.querySelectorAll(".c");

a1.onclick=(event)=>{
  sessionStorage.setItem("currentKategory","ניחוחות קלאסיים");
  sessionStorage.setItem("currentLink","smell"); 
   window.location="../products/index.html";
} 
a2.onclick=(event)=>{
  sessionStorage.setItem("currentKategory","סדרות פרימיום");
  sessionStorage.setItem("currentLink","primium"); 
   window.location="../products/index.html";
} 

a3.onclick=(event)=>{
  sessionStorage.setItem("currentKategory","מארזי מתנה");
  sessionStorage.setItem("currentLink","gifts"); 
   window.location="../products/index.html";
} 


world[0].onclick=(event)=>{
  sessionStorage.setItem("currentKategory", "VanillaPinkPepper");
  sessionStorage.setItem("currentLink","smell"); 
   window.location="../products/index.html";
} 
world[1].onclick=(event)=>{
  sessionStorage.setItem("currentKategory","Frozenpear");
  sessionStorage.setItem("currentLink","smell"); 
   window.location="../products/index.html";
} 
world[2].onclick=(event)=>{
  sessionStorage.setItem("currentKategory", "Ocean");
  sessionStorage.setItem("currentLink","smell"); 
   window.location="../products/index.html";
} 
world[3].onclick=(event)=>{
  sessionStorage.setItem("currentKategory", "PeonyGardenia");
  sessionStorage.setItem("currentLink","smell"); 
   window.location="../products/index.html";
}
 world[4].onclick=(event)=>{
  sessionStorage.setItem("currentKategory", "VioletAmber");
  sessionStorage.setItem("currentLink","smell"); 
   window.location="../products/index.html";
} 

let square = document.getElementById("square"); // איתור הריבוע ב-HTML
let button3=document.getElementById("button3");
square.style.display = "none";
square.style.opacity="1";

setInterval(function() {
  if (square.style.display === "none") {

    square.style.display = "block";
    botton3.onclick=(event)=>{
        square.style.display = "none";
}  } else {
    botton3.onclick=(event)=>{
    square.style.display = "none";
      }  }
}, 10000); 
