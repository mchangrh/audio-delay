// slider manip
const text = document.getElementById("delay-text");

// set storage on display update
text.onchange = setStorage

// set storage
function setStorage() {
  let delay = this.value
  chrome.storage.sync.set({ delay })
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { delay }, function(response) {
      console.log(response.ack);
    });
  });
}

chrome.storage.sync.get("delay", (value) => {
  text.value = value?.delay
})