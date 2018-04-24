(function(){
var config = {
    apiKey: "AIzaSyAP14E690CXWqszSBr-FTfCcBCONoPQEsE",
    authDomain: "mradiotocross.firebaseapp.com",
    databaseURL: "https://mradiotocross.firebaseio.com",
    storageBucket: "mradiotocross.appspot.com",
    messagingSenderId: "707638579705"
  };
  firebase.initializeApp(config);
  
  var provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/plus.login');
  const mess=document.getElementById('message');
   

    //Get elements
    
    const txtEmail = document.getElementById('txtEmail');
    const txtPassword = document.getElementById('txtPassword');
    const btnLogin = document.getElementById('btnLogin');
    
  
    
    //Add login event
    
    btnLogin.addEventListener('click',function(e){
        //Get email and pass
        
        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();
        
        //Sign in
        
       const promise= auth.signInWithEmailAndPassword(email,pass).catch(function(error){
           
           mess.innerText=error.message;
           //console.log("dnt works");
        //window.validcredential=false;
              //  
              
           
      });
       console.log(e.message);
       // promise.catch(function(e){console.log(e.message)});
        
    });
   
    
    firebase.auth().getRedirectResult().then(function(result) {
    	  if (result.credential) {
    	    // This gives you a Google Access Token. You can use it to access the Google API.
    	    var token = result.credential.accessToken;
    	    // ...
    	  }
    	  // The signed-in user info.
    	  var user = result.user;
    	})
    	//});
     firebase.auth().onAuthStateChanged(function(user) {
    	 
  user.sendEmailVerification(); 
  mess.innerText="Verification mail sended";
                   console.log("lol");
});
    
        firebase.auth().onAuthStateChanged(function(firebaseUser){
            
            if(firebaseUser.emailVerified){
                console.log(firebaseUser);
                sessionStorage.setItem('UID', firebaseUser.uid);
               // firebaseUser.uid
                var myWindow = window.open("index.html", "_self");
                //btnLogout.classList.remove('hide');
                
            }else{
                console.log('not logged in');
                 console.log('Email is not verified');
                 
                //btnLogout.classList.add('hide');
            }
        });
        
        document.addEventListener('tizenhwkey', function(e) {
      		if (e.keyName == "back")
      			tizen.application.getCurrentApplication().exit();
      			//window.history.back();
      		//tau.back();
      			//var myWindow = window.open("index.html", "_self");
      			console.log("back");
      			
      	});
       
}());