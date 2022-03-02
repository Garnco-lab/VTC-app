function getClickHandler(info, tab) {
  chrome.tabs.sendMessage(tab.id, {text: "test-files-are-fun"});
};

chrome.contextMenus.create({
"title" : "Replace , / - with .",
"type" : "normal",
"contexts" : ["editable"],
"onclick" : getClickHandler
});