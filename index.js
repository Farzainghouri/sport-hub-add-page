
// var cricket  = document.getElementById("ck");
// var football = document.getElementById("ft");
// var basketball = document.getElementById("bb");
// var hockey = document.getElementById("hk");
// var tennis = document.getElementById("tn");
var postAdd = document.getElementById("postAdd");
// var getAdd = document.getElementById("GEAdd");
var category = document.getElementById("category");

var naam = document.getElementById("one");
var rate = document.getElementById("two");
var three = document.getElementById("three");
var description = document.getElementById("four");

// console.log(cricket.innerHTML);




// var ads = [
//     // { title: "Rolls Royce", price: "1M"  , img: rollsroyce},
//     // { title: "Haya Busa", price: "50,000" , img: hayabusa},
//     // { title: "500 sq DHA House", price: "45,000" , img: house},
//     // { title: "Iphone 14", price: "2000 " , img: mobile},
    
    
// ];

// for (var count = 0; count < ads.length; count++) {    
//     box.innerHTML += `<div>
    
    
//     <img src=${ads[count].img} class="addimg" /> 
//     <h3> ${ads[count].title} </h3> 
//     <p> ${ads[count].price} $ </p>


//     </div> `
//     ;

// }
let Imagee = null;
three.addEventListener("change", handleFileInput);

function handleFileInput(event) {
    const file = event.target.files[0]; 
    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.readAsDataURL(file); 
        Imagee = reader; 
    } else {
        alert("Selected file is not an image.");
    }
}
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import {getFirestore, collection, addDoc, getDocs} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";




const firebaseConfig = {
    apiKey: "AIzaSyBDEQhBI4NnEICxrrboHNDo7o5JQewBKtM",
    authDomain: "sport-hub-36c15.firebaseapp.com",
    projectId: "sport-hub-36c15",
    storageBucket: "sport-hub-36c15.appspot.com",
    messagingSenderId: "979690208371",
    appId: "1:979690208371:web:38d2468a9cfa2b86bebe06",
    measurementId: "G-GWQ7BBG0K3"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

console.log(db);
postAdd.addEventListener("click", sending);

function sending(){
    try {
        const docRef =  addDoc(collection(db, "product"), {
          name:  naam.value,
          price:  rate.value ,
          url : Imagee.result,
          despt: description.value,
          cata : category.value,
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }

      rate.value = ""
      naam.value = ""
      description.value = ""
      category.value = ""

      console.log("done");
}

// async function geting(){
//     const querySnapshot = await getDocs(collection(db, "product"));
// querySnapshot.forEach((doc) => {
//     // doc.data() is never undefined for query doc snapshots
//   showAdd(doc.data())
// });
// }

// geting()




// // function showAdd(ee){

// //     cricket.innerHTML= `
// //     <h1>${ee.name}</h1>
// //     <img src=${ee.url}  class="addimg"/> 
// //     `
// // }

// // showAdd()
//  function showAdd(ee){ 
//     let slect = category.value;
//     // var gara = eval(slect);
//     // var image =  Imagee   ;
//     cricket.innerHTML="";
//     var newnew = { title: ee.name, price: ee.price , img: ee.url, despt: ee.despt };
    
//     ads.push(newnew);
//     // console.log(ads[1]);
    
//     for (var count = 0; count < ads.length; count++) {    
//         cricket.innerHTML +=  `<div>
        
//         <h1>${ads[count].title}</h1>
//         <img src=${ads[count].img}  class="addimg"/> 
//         <h3> NAME : ${ads[count].title} </h3> 
//         <p> PRICE : $ ${ads[count].price}  </p>
//         <p> DESCRIPTION : ${ads[count].despt}  </p>
        
        
//         </div> `
//         ;
    
        
        
        
//     }
    
// }

// showAdd();



