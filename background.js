browser.browserAction.onClicked.addListener((tab) => {
  browser.tabs.executeScript(tab.id, { file: 'scripts/content.js' }).then(() => {
    browser.tabs.sendMessage(tab.id, { command: "stripSpaces" }).then(response => {
      browser.browserAction.setBadgeText({ text: response.count.toString(), tabId: tab.id });
    });
  });
});
