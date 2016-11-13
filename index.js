/*Handle requests from background.html*/
function handleRequest(
	//The object data with the request params
	request,
	// These last two ones isn't important for this example, if
	// you want know more about it visit:
	// http://code.google.com/chrome/extensions/messaging.html
	sender, sendResponse
	) {
	if (request.callFunction == "toggleSidebar")
		toggleSidebar();
}

chrome.extension.onRequest.addListener(handleRequest);

console.log(window.location.href)

function getURL(page_address) {
	page_url = window.location.pathname

	// Map url to PT dashboard and return pt url 

	return "http://pricetrakker.com"
}

/*Small function wich create a sidebar(just to illustrate my point)*/
var sidebarOpen = false;
function toggleSidebar() {
	if(sidebarOpen) {
		var el = document.getElementById('PTSidebar');
		el.parentNode.removeChild(el);
		sidebarOpen = false;
	}
	else {
		var sidebar = document.createElement('aside');
		var url = getURL("http://google.com");

		sidebar.id = "PTSidebar";
		sidebar.style.cssText = "\
			position:fixed;\
			top:0px;\
			left:0px;\
			width:300px;\
			height:100%;\
			z-index:999999;\
		";

		sidebar.innerHTML = "\
			<iframe \
				id='PTIframe' \
				style='height:100%;width:300px;' \
				src=" + url + "> \
			</iframe>\
		";

		document.body.appendChild(sidebar);
		sidebarOpen = true;
	}
}
