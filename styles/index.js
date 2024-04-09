const user = document.getElementById("user");
if (sessionStorage.getItem("currentUser") != null) {
    const stringifyuserDetail = sessionStorage.getItem("currentUser");
    const userDetail1 = JSON.parse(stringifyuserDetail);

    user.innerHTML =
        `<a class="nav-link" href="#">${userDetail1.Name} <i class="fa-solid fa-user"></i></a>`;

}
console.log(sessionStorage.getItem("currentUser"));
// localStorage.setItem("productsArrayINCart","[]");

const top_nav = {
    gifts: document.getElementById("gifts"),
    primium: document.getElementById("primium"),
    smell: document.getElementById("smell"),
    carticon: document.getElementById("carticon"),
    SearchInput: document.getElementById("Search-input")
}
top_nav.SearchInput.onkeydown = function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        console.log(top_nav.SearchInput.value);
        sessionStorage.setItem("currentKategory", top_nav.SearchInput.value);
        sessionStorage.setItem("currentLink", "search");

        window.location = "../products/index.html";

    }

}




const linknav = document.getElementById("link-nav")
top_nav.gifts.onclick = (event) => {
    sessionStorage.setItem("currentLink", "gifts");
    linknav.innerHTML =

        `<div id="title">

<h2>   מארזי מתנה    </h2>
<h3>  מגוון מארזי מתנה מיוחדים, מארזי טיפוח, מארזי קרמים ומתנות לכל אירוע, חגיגה או סתם לפינוק
<i  id="up"  class="fas fa-arrow-right"></i></h3>
</div >


<a href="../products/index.html">
<div id="wifegift">
<img src="../../assests/מארזי מתנה/עיגול מתנות נשים.jpg" width="130px">
<p>מתנות לאישה</p>
</div></a>

<a href="../products/index.html"><div  id="girlgift">
<img src="../../assests/מארזי מתנה/עיגול מתנות לנערות.jpg" width="130px">
<p>מתנות לנערות</p>
</div></a>
<a href="../products/index.html"><div  id="mangift">
<img src="../../assests/מארזי מתנה/עיגול מתנות לגבר.jpg" width="130px">
<p>מתנות לגבר</p>
</div></a> 

`

    const wifegift = document.getElementById("wifegift");
    const girlgift = document.getElementById("girlgift");
    const mangift = document.getElementById("mangift");
    const up = document.getElementById("up");
    up.onclick = (event) => {
        linknav.innerHTML = "";
    }

    wifegift.onclick = (event) => {
        sessionStorage.setItem("currentKategory", "מתנות לאישה");
        linknav.innerHTML = "";
    }
    girlgift.onclick = (event) => {
        sessionStorage.setItem("currentKategory", "מתנות לנערות");
        linknav.innerHTML = "";

    }
    mangift.onclick = (event) => {
        sessionStorage.setItem("currentKategory", "מתנות לגבר");
        linknav.innerHTML = "";

    }


}
top_nav.primium.onclick = (event) => {
    sessionStorage.setItem("currentLink", "primium");
    linknav.innerHTML = `<div id="title">

    <h2>סדרות פרמיום      </h2>
    <h3>לא בטוחה במה לבחור? ריכזנו עבורך נבחרת מוצרים מומלצים מבית ללין - המוצרים הכי נמכרים ברשת כדי שתוכלי גם את להתפנק או לפנק
    <i  id="up"  class="fas fa-arrow-right"></i></h3>
    </div>
    <a href="../products/index.html"><div id="Dead Sea">
    <img src="../../assests/סדרות פרימיום/Dead Sea.jpg" width="130px">
    <p>Dead Sea</p>
    </div></a>
    
    <a href="../products/index.html"><div id="Girls">
    <img src="../../assests/סדרות פרימיום/Girls.jpg" width="130px">
    <p>Girls</p>
    </div></a>
    
    <a href="../products/index.html"><div id="Mr.Laline">
    <img src="../../assests/סדרות פרימיום/Mr.Laline.jpg" width="130px">
    <p>Mr.Laline </p>
    </div></a> 
    <a href="../products/index.html"><div id="Olive & Babassu">
        <img src="../../assests/סדרות פרימיום/Olive & Babassu.jpg" width="130px">
        <p>Olive & Babassu </p>
        </div></a> 
        <a href="../products/index.html"><div id="Shea & Kukui">
            <img src="../../assests/סדרות פרימיום/Shea & Kukui.jpg" width="130px">
            <p>Shea & Kukui </p>
            </div></a> 
            <a href="../products/index.html"><div id="SKincare">
                <img src="../../assests/סדרות פרימיום/SKincare.jpg" width="130px">
                <p>Skincare</p>
                </div></a>
                 `
    // linknav.style.height="350px";
    // linknav.style.marginTop=" 120px";



    const Dead_Sea = document.getElementById("Dead Sea");
    const Girls = document.getElementById("Girls");
    const Mr_Laline = document.getElementById("Mr.Laline");
    const Olive_Babassu = document.getElementById("Olive & Babassu");
    const Shea_Kukui = document.getElementById("Shea & Kukui");
    const SKincare = document.getElementById("SKincare");
    Dead_Sea.onclick = (event) => {
        sessionStorage.setItem("currentKategory", "Dead Sea");
        linknav.innerHTML = "";
    }
    const up = document.getElementById("up");
    up.onclick = (event) => {
        linknav.innerHTML = "";
    }

    Girls.onclick = (event) => {
        sessionStorage.setItem("currentKategory", "Girls");
        linknav.innerHTML = "";

    }
    Mr_Laline.onclick = (event) => {
        sessionStorage.setItem("currentKategory", "Mr.Laline");
        linknav.innerHTML = "";

    }
    Olive_Babassu.onclick = (event) => {
        sessionStorage.setItem("currentKategory", "Olive & Babassu");
        linknav.innerHTML = "";

    }
    Shea_Kukui.onclick = (event) => {
        sessionStorage.setItem("currentKategory", "Shea & Kukui");
        linknav.innerHTML = "";

    }
    SKincare.onclick = (event) => {
        sessionStorage.setItem("currentKategory", "SKincare");
        linknav.innerHTML = "";

    }

}
top_nav.smell.onclick = (event) => {
    sessionStorage.setItem("currentLink", "smell");

    linknav.innerHTML = `<div id="title">
        <h2>ניחוחות קלאסיים    </h2>
        <h3>  קסומה מגוון מוצרים בניחוחות קסומים שמכניסים אתכם לאוירה 
        <i  id="up"  class="fas fa-arrow-right"></i></h3>
        </div>
        <a href="../products/index.html"><div id="CherryBlossom">
        <img src="../../assests/ניחוחות קלאסיים/CherryBlossom.jpg" width="130px">
        <p>CherryBlossom</p>
        </div></a>
        
        <a href="../products/index.html"><div id="Frozenpear">
        <img src="../../assests/ניחוחות קלאסיים/Frozenpear.jpg" width="130px">
        <p>FrozenPear</p>
        </div></a>
        
        <a href="../products/index.html"><div id="Ocean">
        <img src="../../assests/ניחוחות קלאסיים/Ocean.jpg" width="130px">
        <p>Ocean</p>
        </div></a> 
        <a href="../products/index.html"><div id="Peony Gardenia">
            <img src="../../assests/ניחוחות קלאסיים/PeonyGardenia.jpg" width="130px">
            <p>Peony Gardenia</p>
            </div></a> 
            <a href="../products/index.html"><div id="Vanilla Pink Pepper">
                <img src="../../assests/ניחוחות קלאסיים/VanillaPinkPepper.jpg" width="130px">
                <p>Vanilla Pink Pepper</p>
                </div></a> 
                <a href="../products/index.html"><div id="Violet Amber">
                    <img src="../../assests/ניחוחות קלאסיים/VioletAmber.jpg" width="130px">
                    <p>Violet Amber</p>
                    </div></a>
                    `


    const CherryBlossom = document.getElementById("CherryBlossom");
    const FrozenPear = document.getElementById("Frozenpear");
    const Ocean = document.getElementById("Ocean");
    const PeonyGardenia = document.getElementById("Peony Gardenia");
    const VanillaPinkPepper = document.getElementById("Vanilla Pink Pepper");
    const VioletAmber = document.getElementById("Violet Amber");
    CherryBlossom.onclick = (event) => {
        sessionStorage.setItem("currentKategory", "CherryBlossom");
        linknav.innerHTML = "";
    }
    Frozenpear.onclick = (event) => {
        sessionStorage.setItem("currentKategory", "Frozenpear");
        linknav.innerHTML = "";

    }

    const up = document.getElementById("up");
    up.onclick = (event) => {
        linknav.innerHTML = "";
    }
    Ocean.onclick = (event) => {
        sessionStorage.setItem("currentKategory", "Ocean");
        linknav.innerHTML = "";

    }
    PeonyGardenia.onclick = (event) => {
        sessionStorage.setItem("currentKategory", "PeonyGardenia");
        linknav.innerHTML = "";

    }
    VanillaPinkPepper.onclick = (event) => {
        sessionStorage.setItem("currentKategory", "VanillaPinkPepper");
        linknav.innerHTML = "";

    }
    VioletAmber.onclick = (event) => {
        sessionStorage.setItem("currentKategory", "VioletAmber");
        linknav.innerHTML = "";

    }
}



const boxs = document.getElementById("box");
user.onclick = (event) => {
    boxs.innerHTML = ` 
<form id="enter-login">
<i  id="times"  class="fas fa-times"></i>
<div class="mb-3">
<label for="exampleInputEmail1" class="form-label">INSERT YOUR EMAIL </label>
<input  type="email"  id="exampleInputEmail1" placeholder="@" required>
</div>
<button  id="new-user"type="button" class="btn btn-light btn-lg">NEW USER?</button>
<button id="submit" type="submit" class="btn btn-light btn-lg">FOR SUBMIT</button>
<img src="../../assests/ללין-שחור.png" width="200px">
</form>`;
    const times = document.getElementById("times");
    //לחיצה על החץ 
    times.onclick = (event) => {
        boxs.innerHTML = "";
    }


    const box = {
        enterLogin: document.getElementById("enter-login"),
        exampleInputEmail1: document.getElementById("exampleInputEmail1"),
        newUser: document.getElementById("new-user")
    }
    box.enterLogin.onsubmit = (event) => {
        event.preventDefault();
        if (localStorage.getItem(box.exampleInputEmail1.value) === null) {
            alert("ניכר שאתה משתמש חדש במערכת, הכנס כמשתמש חדש");
            box.newUser.click();
        }
        else {
            sessionStorage.setItem("currentUser", localStorage.getItem(box.exampleInputEmail1.value));
            boxs.innerHTML = "";
            const username = sessionStorage.getItem("currentUser");
            const userparse = JSON.parse(username);
            user.innerHTML =
                `<a class="nav-link" href="#">${userparse.Name} <i class="fa-solid fa-user"></i></a>`;
            location.reload();
        }
    }

    //:כשלוחצים על ניו יוזר
    box.newUser.onclick = (event) => {

        box.enterLogin.innerHTML = ` <i  id="arrow-right"  class="fas fa-arrow-right"></i>

    <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">INSERT YOUR EMAIL </label>
     <input  type="email"  id="exampleInputEmail1" placeholder="@" required>
    </div>
     <div class="mb-3">
      <label for="exampleInputName1" class="form-label">INSERT YOUR NAME</label>
      <input type="text"   id="exampleInputName1" placeholder="your name" required>
     </div>
     <div class="mb-3">
      <input type="checkbox"  id="exampleCheck1"  >
      <label  for="exampleCheck1">Check me out
      <i class="far fa-grin-beam"></i>
      </label>
      </div>
    <button id="submit" type="submit" class="btn btn-light btn-lg">FOR SUBMIT</button>
    <img src="../../assests/ללין-שחור.png" width="200px">`;
///תקינות לקלט שם משתמש
const name=document.getElementById("exampleInputName1");

name.onkeydown = function(event) {
    if( !isKeyValid1(event.key)) {
        event.preventDefault();
    }
  }

const isKeyValid1 = function(key) {
    return key >= 'a' && key <= 'z' 
        || (key >= 'A' && key <= 'Z')||(key >= 'א' && key <= 'ת')
        || key === ' '
  }


        box.enterLogin.style.height = "450px";
        const arrowright = document.getElementById("arrow-right");
        //לחיצה על החץ 
        arrowright.onclick = (event) => {
            user.click();

        }
        // //זכור אותי
        const check = document.getElementById("exampleCheck1");
        let flag = 0;
        check.onclick = (event) => {
            if (flag === 0)
                flag = 1;
            else
                flag = 0;
        }
        box.enterLogin.onsubmit = (event) => {
            const userData = {
                Email: document.getElementById("exampleInputEmail1").value,
                Name: document.getElementById("exampleInputName1").value
            }




            if (localStorage.getItem(userData.Email) != null) {
                alert("אתה כבר מוכר במערכת, הכנס כמשתמש מוכר");
                user.click();
            }
            else {
                event.preventDefault();

                if (flag === 1) {
                    console.log("click");
                    localStorage.setItem(userData.Email, JSON.stringify(userData));
                }
                else {
                    console.log("oooo");
                }
                sessionStorage.setItem("currentUser", JSON.stringify(userData));
                boxs.innerHTML = "";
                location.reload();
            }

        }
    }
}

top_nav.carticon.onclick = (event) => {
    window.location = "../MyCart/index.html";
}



let square2 = document.getElementById("square2"); // איתור הריבוע ב-HTML
let button4 = document.getElementById("button4");
square2.style.display = "none";

square2.style.opacity = "1";
setInterval(function () {
    if (square2.style.display === "none") {

        square2.style.display = "block";
        botton4.onclick = (event) => {
            square2.style.display = "none";
        }
    } else {
        botton4.onclick = (event) => {
            square2.style.display = "none";
        }
    }
}, 40000);


const openList = document.getElementById("openList");
const list = document.getElementById("list");
list.onclick = () => {
    openList.style.display = "flex";
}
openList.onclick = () => {
    if(openList.style.display==="flex")
         openList.style.display = "none";
}
