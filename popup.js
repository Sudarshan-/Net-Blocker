function contentsetting(){
  /*chrome.contentSettings.plugins.getResourceIdentifiers(function (resourceIdentifiers){
		for(i=0;i<resourceIdentifiers.length;i++){
			console.log(JSON.stringify(resourceIdentifiers[i]));
		}
	});
	chrome.contentSettings.plugins.get({"primaryUrl":"http://www.youtube.com/"},function (obj){
		console.log(obj);
	});*/
	chrome.contentSettings.images.get({"primaryUrl":"http://www.pramati.com/"},function (obj){
		console.log(obj);
	});
	chrome.contentSettings.images.set({"primaryPattern":"http://www.pramati.com/*","setting":"block"},function (){
		console.log("Blocked Images");
	});
	chrome.contentSettings.images.clear({},function (){
		console.log("Cleared Blocked Images Setting");
	});
}
window.onload=contentsetting;
