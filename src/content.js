var context;
var filter;

const init = () => {
  if (context === undefined) {
    context = new AudioContext();
  }

  if (filter === undefined) {
    filter = new DelayNode(context, { maxDelayTime: 5 })
    filter.connect(context.destination);
  }
};

const attach = () => {
  init();

  const audioElem = document.getElementsByTagName("audio");
  const videoElem = document.getElementsByTagName("video");

  for (const element of [...audioElem, ...videoElem]) {
    try {
      var mediaSource = context.createMediaElementSource(element)
      mediaSource.connect(filter);
      console.log("delay attached.");
    } catch (e) {
      console.log(e)
    }
  }
};

const setDelay = (delay) => {
  if (filter.delayTime.value !== delay) {
    filter.delayTime.value = delay;
  }
}

window.addEventListener('load', () => {
  attach();
  chrome.storage.sync.get("delay", (value) => {
    setDelay(value.delay)
  })
});
