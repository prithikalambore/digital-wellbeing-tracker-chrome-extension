let activeTab = "";
let timer = null;

chrome.tabs.onActivated.addListener(async (activeInfo) => {
  const tab = await chrome.tabs.get(activeInfo.tabId);
  handleTabChange(tab.url);
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete') {
    handleTabChange(tab.url);
  }
});

function handleTabChange(url) {
  if (!url.startsWith("http")) return;
  clearInterval(timer);

  const domain = new URL(url).hostname;

  timer = setInterval(() => {
    chrome.storage.local.get([domain], (result) => {
      const currentTime = result[domain] || 0;
      const updatedTime = currentTime + 1;

      chrome.storage.local.set({ [domain]: updatedTime });

      // Nudge every 15 minutes = 900 seconds
      if (updatedTime % 900 === 0) {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
          if (tabs[0]) {
            chrome.tabs.sendMessage(tabs[0].id, { nudge: true });
          }
        });
      }
    });
  }, 1000); // runs every 1 second
}
