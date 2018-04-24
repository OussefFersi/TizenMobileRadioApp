(function(){
var config = {
    apiKey: "AIzaSyAP14E690CXWqszSBr-FTfCcBCONoPQEsE",
    authDomain: "mradiotocross.firebaseapp.com",
    databaseURL: "https://mradiotocross.firebaseio.com",
    storageBucket: "mradiotocross.appspot.com",
    messagingSenderId: "707638579705"
  };
  firebase.initializeApp(config);
// window.validcredential=true;
    
   const singUpbtn=document.getElementById('btnSign');
  const mess=document.getElementById('message');
    
    function checkpass(pass,confpass){
        
    if(pass!=confpass){
        document.getElementById("txtPassword").style.backgroundColor = "#db8080";
         document.getElementById("confirmPassword").style.backgroundColor = "#db8080";
        
        return false;
    }else{
      return true;  }
    }
    singUpbtn.addEventListener('click',function(e){
        
       var pass= document.getElementById("txtPassword").value;
   var confpass= document.getElementById("confirmPassword").value;
        var Email=document.getElementById("txtEmail").value;
        if(!checkpass(pass,confpass)){
            console.log("try again");
        }else{
            
            
           // console.log(response);
       const auth = firebase.auth();
        
        //Sign in
        
       const promise= auth.createUserWithEmailAndPassword(Email,pass).then(function(e){
           console.log("works");
           var myWindow = window.open("login.html", "_self");
           
       }).catch(function(error){
           
           mess.innerText=error.message;
           console.log("dnt works");
        //window.validcredential=false;
              //  
              
           
      });
           // console.log( window.validcredential);
            //catch
            
          //
          
        }
    	
    });
    document.addEventListener('tizenhwkey', function(e) {
  		if (e.keyName == "back")
  			//tizen.application.getCurrentApplication().exit();
  			window.history.back();
  		//tau.back();
  			//var myWindow = window.open("index.html", "_self");
  			console.log("back");
  			
  	});
}());