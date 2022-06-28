function encodeForCyberChef(data) {
  return encodeURIComponent(btoa(unescape(encodeURIComponent(data))));
}

openInCyberChef = function(word){
  var query = word.selectionText;
  chrome.storage.sync.get("my_url", function(items) {
	if (!!items.my_url) {
		chrome.tabs.create({url: items.my_url + "#input=" + encodeForCyberChef(query)});
	} else {
		chrome.tabs.create({url: "https://gchq.github.io/CyberChef#input=" + encodeForCyberChef(query)});
	}
  });
};

chrome.contextMenus.create({
  title: "Open in CyberChef",
  contexts:["selection"],
  onclick: openInCyberChef
});
