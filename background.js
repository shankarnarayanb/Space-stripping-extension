chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['scripts/content.js']
  }, () => {
    chrome.tabs.sendMessage(tab.id, {command: "stripSpaces"}, (response) => {
      chrome.action.setBadgeText({text: response.count.toString(), tabId: tab.id});
    });
  });
});
