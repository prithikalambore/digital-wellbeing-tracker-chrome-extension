chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.nudge) {
    alert("You've spent 15 minutes on this site. Time for a break?");
  }
});
