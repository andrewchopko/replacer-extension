// Update the declarative rules on install or upgrade.
chrome.runtime.onInstalled.addListener(function() {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [
        new chrome.declarativeContent.PageStateMatcher({
          css: ["input[type='text']"]
        })
      ],
      actions: [ 
        new chrome.declarativeContent.ShowPageAction() 
      ]
    }]);
  });
  
  chrome.pageAction.onClicked.addListener(function(){
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.pageAction.setIcon({ tabId: tabs[0].id, path: 'images/icon-active.png' });
      chrome.tabs.executeScript(tabs[0].id, { 
        file: 'extension.js'
      });
    });
  });
});