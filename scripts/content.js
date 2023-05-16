chrome.runtime.onMessage.addListener(
  (request, sender, sendResponse) => {
    if (request.command == "stripSpaces") {
      let inputs = document.querySelectorAll('input[type=text], textarea');
      let count = 0;
      inputs.forEach(input => {
        let existingValue = input.value;
        let newValue = input.value.trim();
        if (existingValue !== newValue) {
          input.value = input.value.trim();
          count++;
        }
      });
      sendResponse({count: count});
    }
  }
);
