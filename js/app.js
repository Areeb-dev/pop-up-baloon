const firebaseConfig = {
    apiKey: "AIzaSyBH4fPT0-5wFFh9kMlQcYO_gYlrLPbrjfc",
    authDomain: "pop-up-baloon-b4d98.firebaseapp.com",
    projectId: "pop-up-baloon-b4d98",
    storageBucket: "pop-up-baloon-b4d98.appspot.com",
    messagingSenderId: "917188028617",
    appId: "1:917188028617:web:3e27f47cccdacc5b7a4518",
    measurementId: "G-5V23EJQL65"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const firestore = firebase.firestore();
// Signup
const signup=()=> {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                var user = userCredential.user;
                location.href="../index.html"
            })
            .catch((error) => {
                const errorMessage = error.message;
                alert(errorMessage)
            });
}
//login
const login=()=>{
    const Lemail = document.getElementById("Lemail").value;
    const Lpassword = document.getElementById("Lpassword").value;
    firebase.auth().signInWithEmailAndPassword(Lemail, Lpassword)
        .then((userCredential) => {
            user = userCredential.user;
            location.href="./HTML/home.html"
            console.log("succesfully signin")
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage)
        });
       
} 
//add user data 
auth.onAuthStateChanged((user) => {
    if (user) {
        firestore.collection('users').doc(user.uid).set({
            email: user.email,
            lastLoggedInAt: new Date()
        })
            .then(() => {
                console.log("Document written");
            })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });
        
    } 
});



//logout
const logout=()=>{
    firebase.auth().signOut().then(() => {
        location.href="../index.html"
    })
}
    var popped = 0;

    document.addEventListener('mouseover', function(e){
        
        if (e.target.className === "balloon1"){
                    e.target.style.backgroundColor = "#ededed";
                    e.target.textContent = "POP!";
                    popped++;
                    removeEvent(e);
                    checkAllPopped();
        }
        else if(e.target.className === "balloon"){
            console.log("gameover")
            gameover()

        }   
    });
    
    function removeEvent(e){
        e.target.removeEventListener('mouseover', function(){
            
        })
    };
    function checkAllPopped(){
       
        if (popped === 7){
            console.log('all popped!');
            let gallery = document.querySelector('#balloon-gallery');
            let message = document.querySelector('#yay-no-balloons');
            
            gallery.innerHTML = '';
            // game.style.display='block'
            message.style.display = 'block';
        }
    };
    function gameover(){
        let gallery = document.querySelector('#balloon-gallery');
        let message = document.querySelector('#yay-no-balloons');
        gallery.style.display = "none";
        message.style.display = 'none';

        let gameOver=document.querySelector('#gamekhatam');
        gameOver.style.textAlign="center"
        gameOver.style.fontSize="bold"
        gameOver.style.color="red"
        gameOver.append("Game Over")
        // retry button
        let btnretry = document.createElement("BUTTON");
        btnretry.id="retry-btn"
        btnretry.onclick=function retry(){
            location.href="../HTML/home.html"
        }
        let btnretryText = document.createTextNode("Retry");
        btnretry.appendChild(btnretryText);
        document.body.appendChild(btnretry);
    }
    

//  LEVEL    2


function level2(){
    location.href="./level2.html"

}
