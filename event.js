'use strict';

chrome.browserAction.onClicked.addListener(function() {
	chrome.storage.sync.get({

	}, function(item) {
		chrome.tabs.executeScript({
			file: "main.js"
		});	
	});
});

