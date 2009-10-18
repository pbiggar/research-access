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

	onPageLoad: function (aEvent)
	{
		var title = document.title;
		var allLinks = content.document.getElementsByTagName("a");

		for (var i in allLinks)
		{
			elm = allLinks[i];
			if (elm.getAttribute("name") == "FullText")
			{
				elm.setAttribute("href", raExtension.getPDFLink ("An experimental study of sorting and branch prediction", ["Paul Biggar", "Nicholas Nash", "Kevin Williams", "David Gregg"]));
				break;
			}
		}
	},

	getPDFLink: function (title, authors)
	{
		// Just go with the title for now
//		var req = new XMLHttpRequest();  
//		req.open('GET', 'http://scholar.google.com/?q=' + title, false);   
//		req.send(null);  
//		if (req.status == 0)
//			dump(req.responseText);

		return 'http://scholar.google.com/scholar?q=%22An+experimental+study+of+sorting+and+branch+prediction%22&btnG=Search';
	}
}

