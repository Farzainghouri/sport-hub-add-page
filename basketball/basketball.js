let main = document.getElementById("main");

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

var ads = [];
var catagory = [];



async function getting(){
    const querySnapshot = await getDocs(collection(db, "product"));
querySnapshot.forEach((doc) => {
  showAd(doc.data())
});
}

getting()

function showAd(ee){
    console.log("check", ee.Url);
        var newnew = { title: ee.name, price: ee.price , img: ee.Url, despt: ee.despt,};
            ads.push(newnew);
            
            var place = { cata: ee.cata};
            catagory.push(place);
        }
        
        // function showAd(ee){ 
    
// }


function renderr(){
    
    console.log(catagory[1]);
    
    for (var count = 0; count < ads.length ; count++) {    
    
    if (catagory[count].cata === "basketball") {
        
        
        // catagory[count].cata.innerHTML = "";
        main.innerHTML +=  `<div>

      <img src=${ads[count].img}  class="addimg"/> 
        <h3> NAME : ${ads[count].title} </h3> 
        <p> PRICE : $ ${ads[count].price}  </p>
        <p> DESCRIPTION : ${ads[count].despt}  </p>

        
        </div> `
        ;
        
        
    }
}
    
    
}

    setTimeout(() => {
    renderr()
}, 5000);