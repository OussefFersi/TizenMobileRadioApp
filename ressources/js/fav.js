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
    const audioP=document.getElementById('audio');
    logOut=document.getElementById('logOutbtn');
    myfavlistIcon=document.getElementById('myfavlist');
    listall=document.getElementById('listall');
    myfavlistIcon.style.backgroundColor="#d8d8d8";
    //create references
    const dbR=firebase.database().ref().child('favoriteR');
   const db=firebase.database().ref();
    const dbReflistRad =firebase.database().ref().child('listRad');
    const playerIcon=document.getElementById('playerIcon');
    var use = firebase.auth().currentUser;
    var Suid= sessionStorage.getItem('UID');
    //name, email, photoUrl, 
    
    var titreR;
  
    listall.addEventListener('click',function(e){
        
    	var myWindow = window.open("index.html", "_self");
    });
  
        //Log out
    
    logOut.addEventListener('click',function(e){
            
            firebase.auth().signOut();
        });
   
        //Add a realtime listener
       firebase.auth().onAuthStateChanged(function(firebaseUser){
            
            if(firebaseUser){
                console.log(firebaseUser);
                initProfilIcon(firebaseUser);
                var uid=firebaseUser.uid;
                
              
                //btnLogout.classList.remove('hide');
                console.log("2"+uid);
            }else{
                console.log('not logged in');
                var myWindow = window.open("login.html", "_self");
                //btnLogout.classList.add('hide');
                
            }
        });
       
        //console.log("1:"+uid);
        const favorites =db.child('favoriteR/'+Suid);
        //console.log(favorites.key);
       // var handles=[];
        favorites.on('child_added',function(snap){
        	const radioRefSR =firebase.database().ref().child('listRad').child(snap.key).child('sommeOfRating');
     	   const radioRefNR =firebase.database().ref().child('listRad').child(snap.key).child('nbrOfVoters');
        	////
        	
        	var tit;
    		var desc;
    		var logo;
    		var flux;
    		var rssurl;
    		var categor;
    		//const titreRf=fn.child('titre');
    		//titreRf.on('value',function(snapt){titre= snapt.val()});
    		
    		//get titre and desc ...
    		//console.log(tit);
    		 const newli = document.createElement("li");
    	        //var cleardiv=document.createElement("div");
    			//cleardiv.setAttribute("style","clear:both");
    	        newli.id=snap.key;
    	        newli.setAttribute("class","elementR");
    	        var html=

    	        	'<div class="logo"><img height="128px" width="128px" id="logo'+snap.key+'" src=""></div><div class="titledesc"><h3 class="name" name="titre" id="titre'+snap.key+'"></h3><p class="description" name="desc" id="desc'+snap.key+'"></p><div id="cat'+snap.key+'" class="category" style="display:none;"></div><div id="fav'+snap.key+'"  class="favoris"></div><div class="rating"><ul id="rating'+snap.key+'" class="c-rating"></ul></div></div>';
    	       
    	        newli.innerHTML =html;
    	        document.getElementById('list').appendChild(newli);
    			//document.getElementById('list').appendChild(cleardiv);
    			var favR=document.getElementById('fav'+snap.key);
    			
    			
    			 //rating(START)
    	        var ratingElement=document.getElementById('rating'+snap.key);
    	       // var ratingElement = el.querySelector('.c-rating');
    	        var currentRating;
    	        var rad=db.child('listRad/'+snap.key);
    	       rad.once('value',function(snapshot){
    	    	   console.log("radio nbrV"+snapshot.val().nbrOfVoters);
       	        if(snapshot.val().nbrOfVoters==0){
       	        	currentRating=0;
       	        	var maxRating = 4;
        	        var callback = function(rating) {  toggleStar(radioRefNR,radioRefSR,rating);/*alert(rating);*/};
        	        var r = rating(ratingElement, currentRating, maxRating, callback);
       	        }else{
       	        	currentRating=(snapshot.val().sommeOfRating/snapshot.val().nbrOfVoters);
       	        	console.log(currentRating);
       	        	var maxRating = 4;
        	        var callback = function(rating) {  toggleStar(radioRefNR,radioRefSR,rating);/*alert(rating);*/};
        	        var r = rating(ratingElement, currentRating, maxRating, callback);
       	        }
    	    	   
    	       });
    	       
        		
               
    	        
    	        
    	        
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
    			
    			
    			
    			
    			
    			
    			
    			
    			
    			
    			 favR.addEventListener('click',function(e){
    		     	   
    		     	   (function lol(){
    		        	if(favR.className=="favoris"){
    		        		favR.className="";
    		        	favR.className="notfavoris";
    		        	//var titreR={RADIOKEY:titre};
    		        	const favRU=dbR.child(Suid).child(snap.key).remove();
    		        	console.log(favR.className);
    		        	
    		        	return 0;
    		        	}
    		        	
    		     	   }());
    		        	
    		        });
    			 var logoimg=document.getElementById('logo'+snap.key);
      	       var newtitre=document.getElementById('titre'+snap.key);
      	       var newdesc=document.getElementById('desc'+snap.key);
      	     var categ=document.getElementById('cat'+snap.key);
        	///
        	console.log(snap.key);
        	var RadioR=db.child('listRad/'+snap.key);
        	
        	var fn =RadioR.on('value',function(radiosnap){  //once //value
        		//console.log(radiosnap.child('flux').value());
        		/////////////////////////////////////
        		
        		
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
     //   handles.push(fn);
        });
        //	handles.forEach(function(fn){
        	//	console.log(fn.val().titre);
        	//	RadioR.off('value',fn);
        		
        	//});
        //Add login event
        
        ///REMOVE RADIO FROM FAV EVENT LISTENER
        
favorites.on('child_removed',function(snap){
        	var removedElment=document.getElementById(snap.key);
        	document.getElementById('list').removeChild(removedElment)
        	
        });
        playerIcon.addEventListener('click',function(e){
        	
        	 var myWindow = window.open("chat.html", "_self");
        	
        });
        
        document.addEventListener('tizenhwkey', function(e) {
      		if (e.keyName == "back")
      			//tizen.application.getCurrentApplication().exit();
      			window.history.back();
      		//tau.back();
      			//var myWindow = window.open("index.html", "_self");
      			console.log("back");
      			
      	});
        
function initProfilIcon(user){
        	
        	var eltp=document.getElementById('userElt');
        	//var eltpimg=document.getElementById('pimg');
        	console.log(user.photoURL);
        	//eltpimg.setAttribute("src",""+user.photoURL+"");
        	eltp.innerHTML='<img src="'+user.photoURL+'" alt="ressources/img/profileDefault.jpg" id="pimg">'+user.displayName;
        }

editbtn.addEventListener('click',function(e){
	
	 var myWindow = window.open("EditProfile.html", "_self");
	
});
    
}());