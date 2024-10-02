
// var cricket  = document.getElementById("ck");
// var football = document.getElementById("ft");
// var basketball = document.getElementById("bb");
// var hockey = document.getElementById("hk");
// var tennis = document.getElementById("tn");
var postAdd = document.getElementById("postAdd");
// var getAdd = document.getElementById("GEAdd");
var naam = document.getElementById("one");
var category = document.getElementById("category");
var rate = document.getElementById("two");
var description = document.getElementById("four");
var three = document.getElementById("three");
var uploadpic = document.getElementById("uploadpic");
var see = document.getElementById("see");

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
// let Imagee = null;
// // let file = null
// three.addEventListener("change", handleFileInput);


// function handleFileInput(event) {
    // if (file && file.type.startsWith('image/')) {
    //     const reader = new FileReader();
    //     reader.readAsDataURL(file); 
    //     Imagee = reader; 
    // } else {
    //     alert("Selected file is not an image.");
    // }
// }
// Import the functions you need from the SDKs you need
import { initializeApp  } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import {getFirestore, collection, addDoc, getDocs} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";

import {getStorage,ref,uploadBytes,getDownloadURL} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-storage.js";



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
const storage = getStorage(app);
console.log("🚀 ~ storage:", storage)

// const firebaseApp = getApp();
// const storage = getStorage();

// 'file' comes from the Blob or File API


// console.log(db);
let file = null;
console.log("🚀 ~ file:", file)
postAdd.addEventListener("click", sendingg);

// let picUrl = null;
function sendingg(){
  uploadpic.style.display = "none";
  see.style.display = "none";

let ProName = naam.value;
let ProRate = rate.value;
let ProDecpt = description.value;
let ProCata = category.value;
  const file = three.files[0]; 
  const storageRef = ref(storage, "img/"+file.name);
  console.log("working");
  console.log("file after", file.name);
  console.log("name", ProName);
  
  if (category.value !== "select catagory") {
  
  uploadBytes(storageRef, file).then((snapshot) => {
    console.log('Uploaded a blob or file!');
    getDownloadURL(storageRef)
  .then((url) => {
      console.log("pic url", url);
      try {
        const docRef =  addDoc(collection(db, "product"), {
            name:  ProName,
            price:  ProRate ,
            Url : url,
            despt: ProDecpt,
            cata : ProCata,
          });
          console.log("Document written with ID: ", docRef.id);
          uploadpic.style.display = "flex"
          see.style.display = "block"
        } catch (e) {
          console.error("Error adding document: ", e);
        }

  }).catch((err) => console.log(err));
  
  });

    
   

      rate.value = ""
      naam.value = ""
      description.value = ""
      category.value = ""
      
      console.log("done");
    }else(
      alert("error")
    )
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



