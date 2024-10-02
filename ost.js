var cricket  = document.getElementById("ck");
var football = document.getElementById("ft");
var basketball = document.getElementById("bb");
var hockey = document.getElementById("hk");
var tennis = document.getElementById("tn");




var ads = [];
var catagory = [];


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


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

console.log(db);





async function geting(){
    const querySnapshot = await getDocs(collection(db, "product"));
querySnapshot.forEach((doc) => {
  showAdd(doc.data())
});
}

geting()





 function showAdd(ee){ 
    
    // let slect = category.value;
    // var gara = eval(slect);
    // var image =  Imagee   ;
    var newnew = { title: ee.name, price: ee.price , img: ee.Url, despt: ee.despt,};
    var place = { cata: eval(ee.cata)};
    // var diva = eval(ee.cata);
    ads.push(newnew);
    catagory.push(place);
    // console.log(catagory);
    // console.log(ee);
}

// showAdd();
function render(){
    
        for (var count = 0; count < catagory.length ; count++) {    
        
        
            
        // catagory[count].cata.innerHTML = "";
        catagory[count].cata.innerHTML +=  `<div>

          <img src=${ads[count].img}  class="addimg"/> 
            <h3> NAME : ${ads[count].title} </h3> 
            <p> PRICE : $ ${ads[count].price}  </p>
            <p> DESCRIPTION : ${ads[count].despt}  </p>

            
            </div> `
            ;
            
            
        }
        
        
    }
    
        setTimeout(() => {
        render()
}, 5000);