/**
 * test dynamic with session
 */

(function (){
	
	var url="https://queryfeed.net/twitter?q=from%3ARadioMosaiqueFM&title-type=user-name-screen&geocode=&omit-retweets=on.xml";
//const url=document.getElementById('yo').value;
const rad=document.getElementById('rad1');

rad.addEventListener('click',function(e){
    
	 sessionStorage.setItem('URL', url);
	 var myWindow = window.open("demo/news.html", "_self");
});
	
}());