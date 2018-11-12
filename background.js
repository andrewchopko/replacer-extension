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
});