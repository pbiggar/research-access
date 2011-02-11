if(!com) var com = {};
if(!com.paulbiggar) com.paulbiggar = {};
if(!com.paulbiggar.researchAccess) com.paulbiggar.researchAccess = {};


com.paulbiggar.researchAccess =
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
			appcontent.addEventListener("DOMContentLoaded", com.paulbiggar.researchAccess.onPageLoad, true);
	},


	onPageLoad: function (aEvent)
	{
		var doc = aEvent.originalTarget;

		// Check we're in the right page
		if (doc.location.href.match ("http://portal\.acm\.org/citation\.cfm\\?id=.*") != doc.location.href)
			return;


		// Get title
		var title = doc.title;

		// Get authors
		var authors = [];
/*		var allDivs = content.document.getElementsByTagName("div");
		for (var i in allDivs)
		{
			div = allDivs[i];
			if (div.className == "Authors)
			{
				allAuthorLinks = div.getElementsByTagName("a");
				for (var i in allAuthorLinks)
				{
					var authorLink = allAuthorLinks[i];
				}

				break;
			}
		}
*/		

		// Replace link
		var allLinks = doc.getElementsByTagName("a");
		for (var i in allLinks)
		{
			anchor = allLinks[i];
			if (anchor.name == "FullText")
			{
				anchor.href = com.paulbiggar.researchAccess.getPDFLink (title, authors);
				anchor.target = "";
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

		return 'http://scholar.google.com/scholar?q="' + title.replace(" ", "+", "g") + '"&btnG=Search';
	}
}

window.addEventListener("load", function() { com.paulbiggar.researchAccess.init(); }, false);
