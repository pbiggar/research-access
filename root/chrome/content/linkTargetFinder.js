var linkTargetFinder = function () {
	var prefManager = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefBranch);
	return {
		init : function () {
		},
			
		run : function () {
			var allLinks = content.document.getElementsByTagName("a");
			
			for (var i=0, il=allLinks.length; i<il; i++)
			{
				elm = allLinks[i];
				if (elm.getAttribute("name") == "FullText")
				{
					elm.setAttribute("href", "http://google.com");
				}
			}
		}
	};
}();
window.addEventListener("load", linkTargetFinder.init, false);
