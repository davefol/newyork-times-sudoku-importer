chrome.runtime.onConnect.addListener((port) => {
  port.onMessage.addListener((msg) => {
    if (msg.text == 'get_sudoku') {
			let s = "";
			let els = document.querySelectorAll(".su-cell");
			Array.prototype.forEach.call(els, function(el, i) {
				if (el.getAttribute("aria-label") != "empty") {
						s+=el.getAttribute("aria-label");
				} else {
						s+='.';
				}
				if (parseInt(el.getAttribute('data-cell'), 10) % 9 == 8 && el.getAttribute('data-cell') != '80') {
						s+= '\n';
				}
			});
			port.postMessage(s);
    }
  });
});
