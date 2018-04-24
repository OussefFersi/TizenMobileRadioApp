(function(){
    var config = {
    apiKey: "AIzaSyAP14E690CXWqszSBr-FTfCcBCONoPQEsE",
    authDomain: "mradiotocross.firebaseapp.com",
    databaseURL: "https://mradiotocross.firebaseio.com",
    storageBucket: "mradiotocross.appspot.com",
    messagingSenderId: "707638579705"
  };
  firebase.initializeApp(config);
    
    var auth = firebase.auth();
    var storageRef = firebase.storage().ref();
    var f=document.getElementById('file');
   
      
      document.addEventListener('tizenhwkey', function(e) {
  		if (e.keyName == "back")
  			//tizen.application.getCurrentApplication().exit();
  			window.history.back();
  		//tau.back();
  			//var myWindow = window.open("index.html", "_self");
  			console.log("back");
  			
  	});
    
    }());