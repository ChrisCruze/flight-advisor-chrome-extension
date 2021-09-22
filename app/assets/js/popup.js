// Initialize butotn with users's prefered color
let submit = document.getElementById("submit");
let response = document.getElementById("response");
let flight_number = document.getElementById("flight_number")



chrome.storage.sync.get("delay_probability", ({ delay_probability }) => {
  response.html = delay_probability;
});

// When the button is clicked, inject setPageBackgroundColor into current page
submit.addEventListener("click", async () => {
  let message = `Flight ${flight_number.value} has a 50% chance of delay`
  response.textContent = message
  chrome.storage.sync.set({ flight_number:flight_number.value});
  alert(message)
  // let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  // chrome.scripting.executeScript({
  //   target: { tabId: tab.id },
  //   function: setPageBackgroundColor,
  // });

});

// The body of this function will be execuetd as a content script inside the
// current page
function setPageBackgroundColor() {
  chrome.storage.sync.get("color", ({ color }) => {
    document.body.style.backgroundColor = color;
  });
}
