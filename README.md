# CyberChef Chrome Extension

A basic chrome extension that allows you to open selected text in CyberChef using the context menu (right click).  It includes the option of what URL to use for CyberChef, default is https://gchq.github.io/CyberChef/.

## Known issues:

Note that in some cases, the text you select might not be sent as an _exact_ match to the CyberChef input:

Selected multiline text is altered because of a [longstanding bug](https://crbug.com/116429) with how context menu `info.selectionText` does text conversion in Chrome. In this instance, newlines in the text will be replaced with spaces (ascii 0x20 char).
 
 `document.documentElement.innerText` gives the correct expected text selection (for whole text page).
 
These issues are not present with the Firefox extension.
