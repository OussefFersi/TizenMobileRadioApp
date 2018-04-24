(function (){
var config = {
    apiKey: "AIzaSyAP14E690CXWqszSBr-FTfCcBCONoPQEsE",
    authDomain: "mradiotocross.firebaseapp.com",
    databaseURL: "https://mradiotocross.firebaseio.com",
    storageBucket: "mradiotocross.appspot.com",
    messagingSenderId: "707638579705"
  };
  firebase.initializeApp(config);

    var fav=false;
    const editbtn=document.getElementById('editbtn');
    logOut=document.getElementById('logOutbtn');
    listallIcon=document.getElementById('listall');
    listallIcon.style.backgroundColor="#d8d8d8";
    //create references
    const dbR=firebase.database().ref().child('favoriteR');
    const db=firebase.database().ref();
    const dbReflistRad =firebase.database().ref().child('listRad');
    const playerIcon=document.getElementById('playerIcon');
    const favl=document.getElementById('favl');
    var Suid= sessionStorage.getItem('UID');
   // var user = firebase.auth().currentUser;
   //name, email, photoUrl, 
    var titreR;
   /* if (user != null) {
    	 // name = user.displayName;
    	//  email = user.email;
    	//  photoUrl = user.photoURL;
    	  uid = user.uid; 
    	}*/
    dbReflistRad.on('child_added', function(snap){
    	const radioRefSR =firebase.database().ref().child('listRad').child(snap.key).child('sommeOfRating');
    	   const radioRefNR =firebase.database().ref().child('listRad').child(snap.key).child('nbrOfVoters');
    	var tit;
		var desc;
		var logo;
		var flux;
		var rssurl;
		var categor;
		var twitt;
		var Webcam ;
        const newli = document.createElement("li");
         //var cleardiv=document.createElement("div");
 		//cleardiv.setAttribute("style","clear:both");
 		
         newli.id=snap.key;
         newli.setAttribute("class","elementR");
         var RADIOKEY=snap.key;

         var html=

         	'<div class="logo"><img height="128px" width="128px" id="logo'+snap.key+'" src="'+snap.val().logo+'"></div><div class="titledesc"><h3 class="name" name="titre" id="titre'+snap.key+'"></h3><p class="description" name="desc" id="desc'+snap.key+'"></p><div id="cat'+snap.key+'" class="category" style="display:none;"></div><div id="fav'+snap.key+'"  class="notfavoris"></div><div class="rating"><ul id="rating'+snap.key+'" class="c-rating"></ul></div><div id="news'+snap.key+'"  class="newsIcon" style="margin-left:10px;"></div><div id="twitt'+snap.key+'"  class="twitIcon" style="margin-left:10px;"></div></div>';
        
         newli.innerHTML =html;
              
      
         document.getElementById('list').appendChild(newli);
 		//document.getElementById('list').appendChild(cleardiv);
 		
        //const dbRefRadios=dbReflistRad.child(snap.key);
        var logoimg=document.getElementById('logo'+snap.key);
        var newtitre=document.getElementById('titre'+snap.key);
        var newdesc=document.getElementById('desc'+snap.key);
        var favR=document.getElementById('fav'+snap.key);
        var categ=document.getElementById('cat'+snap.key);
        const audioP=document.getElementById('audio');
//IntegratewithNouri
 		const newsI=document.getElementById('news'+snap.key);
 		const twitterI=document.getElementById('twitt'+snap.key);
 		//const webcamI=document.getElementById('yout'+snap.key);
 		const liRef=document.getElementById(snap.key);
 		//
        //rating(START)
        var ratingElement=document.getElementById('rating'+snap.key);
       // var ratingElement = el.querySelector('.c-rating');
        var currentRating ;
        if(snap.val().nbrOfVoters==0){
        	currentRating=0;
        }else{
        	currentRating=(snap.val().sommeOfRating/snap.val().nbrOfVoters);
        	console.log(currentRating);
        }
        
        var maxRating = 4;
        var callback = function(rating) {  toggleStar(radioRefNR,radioRefSR,rating);/*alert(rating);*/};
        var r = rating(ratingElement, currentRating, maxRating, callback);
     // }
  // rating instance
  //var myRating = rating(el, currentRating, maxRating, callback);
  //myR/ating.getRating();

  function toggleStar(radioRefNR,radioRefSR,rating) {
  radioRefNR.transaction(function(nbrOfVoters) {
      if(nbrOfVoters==null){console.log('no reading2');}
      
      return nbrOfVoters+1;
    });
    radioRefSR.transaction(function(sommeOfRating) {
      if(sommeOfRating==null){console.log('no reading');}
      
      return sommeOfRating+rating;
    });
  }
        
        //rating(END)
        
        //old placement
        favR.addEventListener('click',function(e){
      	   
      	   (function lol(){
         	if(favR.className=="favoris"){
         		favR.className="";
         	favR.className="notfavoris";
         	//var titreR={RADIOKEY:titre};
         	const favRU=dbR.child(uid).child(RADIOKEY).remove();
         	console.log(favR.className);
         	
         	return 0;
         	}
         	if(favR.className=="notfavoris"){
         		const favRU=dbR.child(uid).child(RADIOKEY).set("favoris");
         		favR.className="favoris";
         		
         		console.log(favR.className);
         		return 0;
         	}
      	   }());
         	
         });
        var RadioR=db.child('listRad/'+snap.key);
        var fn =RadioR.on('value',function(radiosnap){  //once //value
    		//console.log(radiosnap.child('flux').value());
    		/////////////////////////////////////
			twitt = radiosnap.val().twitter;

        	Webcam = radiosnap.val().webcam;
    		tit=radiosnap.val().titre;
    		desc=radiosnap.val().desc;
    		logo=radiosnap.val().logo;
    		flux=radiosnap.val().flux;
    		rssurl=radiosnap.val().Rss;
    		categor=radiosnap.val().category;
    		logoimg.setAttribute("src",""+logo+"");
            //newtitre.name=titre;
		newtitre.innerText=''+tit+'';
		newdesc.innerText=''+desc+'';
		categ.innerHTML=''+categor+'';
    			 //////////////////////////
    	});
        logoimg.addEventListener('click',function(e){
       	   
       	   audioP.setAttribute("src",""+flux+"");
       	   
          });
        //news icon clicklistener
        newsI.addEventListener('click',function(e){
        	sessionStorage.setItem('URL', rssurl);
        	var myWindow = window.open("demo/news.html", "_self");
        	   
           });
        
        //twitter icon clicklistener
        twitterI.addEventListener('click',function(e){
        	sessionStorage.setItem('twitter', twitt);
			var myWindow = window.open("twitterNews.html","_self");
			console.log(twitt);
        	   
           });
        
        //webcam icon clicklistener
        /*
        webcamI.addEventListener('click',function(e){
        	sessionStorage.setItem('Webcam', Webcam);
			console.log(Webcam);
			var myWindow = window.open("demo/mediaelementplayer.html","_self");
           });*/
        dbR.child(Suid).child(snap.key).once('value',function(snapshot){
        	if(snapshot.val()!=null){
        		console.log(snapshot.val());
        		favR.setAttribute("class","favoris");
        	}
        });
   
    });
    
   // const btnLogout = document.getElementById('btnLogout');
    
    //Add login event
    
    playerIcon.addEventListener('click',function(e){
    	
    	 var myWindow = window.open("chat.html", "_self");
    	
    });
    
    editbtn.addEventListener('click',function(e){
    	
    	 var myWindow = window.open("EditProfile.html", "_self");
    	
    });
    
    
    favl.addEventListener('click',function(e){
    	
   	 var myWindow = window.open("favlist.html", "_self");
   	
   });
        //Log out
    
    logOut.addEventListener('click',function(e){
            
            firebase.auth().signOut();
        });
    
        //Add a realtime listener
        firebase.auth().onAuthStateChanged(function(firebaseUser){
            
            if(firebaseUser){
                console.log(firebaseUser);
                uid=firebaseUser.uid;
                initProfilIcon(firebaseUser);
                //btnLogout.classList.remove('hide');
                console.log(uid);
            }else{
                console.log('not logged in');
                var myWindow = window.open("login.html", "_self");
                //btnLogout.classList.add('hide');
            }
        });
        
        document.addEventListener('tizenhwkey', function(e) {
    		if (e.keyName == "back")
    			//tizen.application.getCurrentApplication().exit();
    			tizen.application.getCurrentApplication().exit();
    		//tau.back();
    			//var myWindow = window.open("index.html", "_self");
    			console.log("back");
    			
    	});
        
        function initProfilIcon(user){
        	
        	var eltp=document.getElementById('userElt');
        	//var eltpimg=document.getElementById('pimg');
        	console.log(user.photoURL);
        	//eltpimg.setAttribute("src",""+user.photoURL+"");
        	//
        	var fileURI = "";
        	function resolveSuccess(file)
        	{
        	   fileURI = file.toURI();
        	   console.log("Successfully resolved file: " + fileURI);
        	}

        	function resolveFail(error)
        	{
        	   console.log("resolve() error occurred: " + error.name + " with message: " + error.message);
        	}

        	tizen.filesystem.resolve(""+user.photoURL, resolveSuccess, resolveFail);
        	
        	//
        	eltp.innerHTML='<img src="'+user.photoURL+'" alt="ressources/img/profileDefault.jpg" id="pimg">'+user.displayName;
        }
    
}());