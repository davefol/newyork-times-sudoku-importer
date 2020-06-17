chrome.runtime.onInstalled.addListener(function() {
	chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
		chrome.declarativeContent.onPageChanged.addRules([{
			conditions: [new chrome.declarativeContent.PageStateMatcher({
				pageUrl: {hostPrefix: 'www.nytimes.com', pathPrefix: '/puzzles/sudoku/', schemes: ['http', 'https']},
			})
			],
					actions: [new chrome.declarativeContent.ShowPageAction()]
		}]);
	});
});