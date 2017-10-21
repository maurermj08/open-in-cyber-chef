openInCyberChef = function(word){
  var query = word.selectionText;
  chrome.tabs.create({url: "https://gchq.github.io/CyberChef?input=" + encodeURIComponent(btoa(query))});
};

chrome.contextMenus.create({
  title: "Open in CyberChef",
  contexts:["selection"],
  onclick: openInCyberChef
});