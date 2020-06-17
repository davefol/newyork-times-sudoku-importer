function update_sudoku(sdk) {
	document.getElementById('sdk').innerHTML = sdk;
}

function connect() {
	chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const port = chrome.tabs.connect(tabs[0].id);
    port.postMessage({ text: 'get_sudoku' });
    port.onMessage.addListener((response) => {
			update_sudoku(response)
    });
  });
}

window.addEventListener('load', (event) => {
	chrome.tabs.executeScript(null, {
		file: 'content.js', }, () => {
			connect()
		});
});
