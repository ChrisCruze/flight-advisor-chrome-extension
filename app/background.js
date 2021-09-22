let delay_probability = '50%';
let flight_number = 'A4734'
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ delay_probability });
  chrome.storage.sync.set({ flight_number });

  console.log({flight_number,delay_probability});
});
