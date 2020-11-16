console.log('Background script ...');

chrome.runtime.onStartup.addListener(ev => {
  console.log(`On startup: ${ev}`);
});

chrome.runtime.onConnect.addListener(ev => {
  console.log(`On Connect: ${ev}`);
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log(`** On message ${message} - ${sender} - ${sendResponse}`);
});

chrome.runtime.onSuspend.addListener(ev => {
  console.log(`On Suspend: ${ev}`);
});