chrome.runtime.onMessage.addListener(function (request) {
  replaceSelectedText(document.activeElement, request.text);
});

function replaceSelectedText(elem, text) {
  var start = elem.selectionStart;
  var end = elem.selectionEnd;
  console.log(elem.value);
  // elem.value = elem.value.slice(0, start) + elem.value + elem.value.substr(end);
  elem.value = elem.value.replaceAll("-", ".");
  elem.value = elem.value.replaceAll(",", ".");
  elem.value = elem.value.replaceAll("/", ".");
  // elem.value = elem.value.replaceAll(/\s+/g, '');
  elem.selectionStart = start + text.length;
  elem.selectionEnd = elem.selectionStart;
}
