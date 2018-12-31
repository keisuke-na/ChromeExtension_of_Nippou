'use strict';
function $id(i) { return document.getElementById(i) }

document.addEventListener('DOMContentLoaded', function() {
	chrome.storage.sync.get({
		to: '',
		greet: ''
	}, function(item) {
		$id('to').value = item.to;
		$id('greet').value = item.greet;
	});
});

document.getElementById('save').addEventListener('click', 
function () {
	var to = $id('to').value;
	var greet = $id('greet').value;
	alert(to + greet);
	chrome.storage.sync.set({
		to: to,
		greet: greet
	}, function() {
		// console.log('saved');
		$id('notification').innerHTML = "saved!";
		setTimeout(function() {
			$id('notification').innerHTML = "";
		}, 3*1000);
	});
});
