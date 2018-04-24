(function(){
	const backBtn=document.getElementById('listall');
	 const editbtn=document.getElementById('editbtn');
	   const logOut=document.getElementById('logOutbtn');
	 const chatIcon=document.getElementById('chatMIcon');
	  const favl=document.getElementById('favl');
	  chatIcon.style.backgroundColor="#d8d8d8";
	
	backBtn.addEventListener('click',function(c){
        
		 var myWindow = window.open("index.html", "_self");
    });
	
	 editbtn.addEventListener('click',function(e){
	    	
    	 var myWindow = window.open("EditProfile.html", "_self");
    	
    });
	 
	 favl.addEventListener('click',function(e){
	    	
	   	 var myWindow = window.open("favlist.html", "_self");
	   	
	   });
	 
	 logOut.addEventListener('click',function(e){
         
         firebase.auth().signOut();
     });
	 document.addEventListener('tizenhwkey', function(e) {
   		if (e.keyName == "back")
   		
   			window.history.back();
   		//tau.back();
   			//var myWindow = window.open("index.html", "_self");
   			console.log("back");
   			
   	});
	 
	
}());