// slider manip
const slider = document.getElementById("delay-slider");
const text = document.getElementById("delay-text");

// update display
slider.oninput = function() {
  text.value = this.value;
}
text.oninput = function() {
  slider.value = this.value;
}
// set storage
text.onchange = setStorage
slider.onchange = setStorage

// set storage
function setStorage() {
  chrome.storage.sync.set({ delay: this.value/1000 })
}

chrome.storage.sync.get("delay", (value) => {
  text.value = value.delay
  slider.value = value.delay
})