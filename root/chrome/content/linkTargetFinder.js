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
		// Check we're in the right page
		var doc = aEvent.originalTarget;


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
				anchor.href = raExtension.getPDFLink (title, authors);
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

