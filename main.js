'use strict';
function $id(i) { return document.getElementById(i) }

chrome.storage.sync.get(function(item) {
	var elm = "";
	var text = [];
	elm = $id('_chatText');
	elm.focus();
	document.execCommand('paste');
	text = [
		item.to + '\n',
		item.greet + '\n',
		'[info][title]本日の日報[/title]',
		elm.value,
		'[/info]'
	];
	elm.value = text.join("");
});

