 var urlRss= sessionStorage.getItem('URL');
 console.log(urlRss);
var ParserT = {
   
    dataReceivedCallback : null,
    
    XHRObj : null,
  
    url : ""+urlRss//"https://queryfeed.net/twitter?q=from%3ARadioMosaiqueFM&title-type=user-name-screen&geocode=&omit-retweets=on.xml"
  
};
document.addEventListener('tizenhwkey', function(e) {
	if (e.keyName == "back")
		//tizen.application.getCurrentApplication().exit();
		window.history.back();
	//tau.back();
		//var myWindow = window.open("index.html", "_self");
		console.log("back");
		
});
ParserT.init = function() {
    var success = true;

    if (this.XHRObj) {
        this.XHRObj.destroy();
        this.XHRObj = null;
    }
    
    return success;
};
ParserT.fetchDatas = function() {
    if (this.XHRObj == null) {
        this.XHRObj = new XMLHttpRequest();
    }
    
    if (this.XHRObj) {
        this.XHRObj.onreadystatechange = function() {
          
           if (ParserT.XHRObj.readyState == 4) {
               ParserT.createDatas();
           }
  };
           
    this.XHRObj.open("GET", this.url, true);
    this.XHRObj.send(null);
    }
    else {
        alert("Failed to create XHR");
    }
};
ParserT.createDatas = function() {
    
    if (this.XHRObj.status != 200) {
       alert("XML Parser Error " + this.XHRObj.status);
    }
    else {
        var xmlElement = this.XHRObj.responseXML.documentElement;
        
        if (!xmlElement) {
            alert("Failed to get valid XML");
        }
        else {
          
            var items = xmlElement.getElementsByTagName("item");
            
            var Noms = [ ];
            var Prenoms = [ ];
            var Adresses = [ ];
            var Images = [ ];
            for (var index = 0; index < items.length; index++) {
                
                var nomElement = items[index].getElementsByTagName("title")[0];
                var prenomElement = items[index].getElementsByTagName("description")[0];
                var adresseElement = items[index].getElementsByTagName("link")[0];
               var imageElement = items[index].getElementsByTagName("enclosure")[0];
                
                if (nomElement && prenomElement && adresseElement/*&& imageElement*/ ) {
                    Noms[index] = nomElement.firstChild.data;
                    Prenoms[index] = prenomElement.firstChild.data;
                    Adresses[index] = adresseElement.firstChild.data;
                  if(imageElement){Images[index] = imageElement.getAttribute("url");}
                   
                    //imageElement
                   console.log(Images[index]);
                }
            }
        //TODO
            
            DataT.setNoms(Noms);
            DataT.setPrenoms(Prenoms);
            DataT.setAdresses(Adresses);
            DataT.setImages(Images);
            if (this.dataReceivedCallback) {
                this.dataReceivedCallback();
            }
        }
    }
};
