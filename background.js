$('body').on('mouseup', 'div.post_like, div.like_wrap, a.UFILikeLink',  function() {
	 1
	if($("#dog").length===0){
		$("body").append('<img src="'+  chrome.extension.getURL("doge.png") +'" id="dog" style="display: none; position: fixed; right: 0px; bottom: 0px; z-index:9999;" />');
		}
	$("#dog").animate({ height: "toggle" }, 100).delay(250).animate({ height: "toggle" }, 100);	
 });

 
