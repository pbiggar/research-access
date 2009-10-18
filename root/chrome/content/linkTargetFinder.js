  // 1. var req = new XMLHttpRequest();  
//	   2. req.open('GET', 'file:///home/user/file.json', false);   
//		   3. req.send(null);  
//			   4. if(req.status == 0)  
//	   5.   dump(req.responseText);  

window.addEventListener("load", function() { raExtension.init(); }, false);

var raExtension =
{
	init: function()
	{

		/*
		 * Running code after the page has loaded isn't trivial for some reason.
		 * Code from:
		 *		https://developer.mozilla.org/en/Code_snippets/On_page_load
		 */
		var appcontent = document.getElementById("appcontent");   // browser
		if (appcontent)
			appcontent.addEventListener("DOMContentLoaded", raExtension.onPageLoad, true);
	},

	onPageLoad: function(aEvent)
	{
		var title = document.title;
		var allLinks = content.document.getElementsByTagName("a");

		for (var i=0, il=allLinks.length; i<il; i++)
		{
			elm = allLinks[i];
			if (elm.getAttribute("name") == "FullText")
			{
				elm.setAttribute("href", "http://google.com?q=");
			}
			break;
		}
	}
}

