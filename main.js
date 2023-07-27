function encodeForCyberChef(data) {
  return encodeURIComponent(btoa(unescape(encodeURIComponent(data))));
}

// Send message of accurate text selection, to be received by listener. workaround for https://crbug.com/116429
function passAccurateTextSelection() {
    (async () => {
        const response = await chrome.runtime.sendMessage({text: window.getSelection().toString()});
        // do something with response here, not outside the function
        //console.log(response);
    })();
}

openInCyberChef = function(info, tab) {
    // workaround https://crbug.com/116429
    chrome.scripting.executeScript({
          target: {tabId: tab.id},
          func: passAccurateTextSelection,
      });
};

chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: "cyberchef-link",
        title: "Open in CyberChef",
        contexts: ["selection"]
    });
});

chrome.contextMenus.onClicked.addListener(openInCyberChef);

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    var query = request.text;
    chrome.storage.sync.get("my_url", function(items) {
      if (!!items.my_url) {
        chrome.tabs.create({url: items.my_url + "#input=" + encodeForCyberChef(query)});
      } else {
        chrome.tabs.create({url: "https://gchq.github.io/CyberChef#input=" + encodeForCyberChef(query)});
      }
    });
  }
);
