/*
===================================================
This is the main Development file do not use this when uploading
to Extension package. This file should be closure compiled (Makes it unreadable)
then set to loadthm-1.2.js in the plugin section
===================================================
*/
$('head').append('<link rel="stylesheet" type="text/css" href="../.CSS THEMES/theme_dark.css">')
chrome.storage.local.get(['theme'], function(data) {
 if (data.theme === "light") {goLight();};
 if (data.theme === "dark") {goDark();};
});
chrome.storage.local.get(['accent'], function(data) {
 if (data.accent === "red") {goRed();};
 if (data.accent === "blue") {goBlue();};
 if (data.accent === "purple") {goPurple();};
 if (data.accent === "asylum") {goAsylum();};
});

async function goLight() {
	chrome.storage.local.set({'theme': "light"});
	$('head').append('<link rel="stylesheet" type="text/css" href="../.CSS THEMES/theme_light.css">');
};
async function goDark() {
	chrome.storage.local.set({'theme': "dark"});
	$('head').append('<link rel="stylesheet" type="text/css" href="../.CSS THEMES/theme_dark.css">');
};
async function goRed() {
	chrome.storage.local.set({'accent': "red"});
	$('head').append('<link rel="stylesheet" type="text/css" href="../.CSS THEMES/theme_accent_red.css">');
};
async function goBlue() {
	chrome.storage.local.set({'accent': "blue"});
	$('head').append('<link rel="stylesheet" type="text/css" href="../.CSS THEMES/theme_accent_blue.css">');
};
async function goPurple() {
	chrome.storage.local.set({'accent': "purple"});
	$('head').append('<link rel="stylesheet" type="text/css" href="../.CSS THEMES/theme_accent_purple.css">');
};
async function goAsylum() {
	chrome.storage.local.set({'accent': "asylum"});
	$('head').append('<link rel="stylesheet" type="text/css" href="../.CSS THEMES/theme_accent_asylum.css">');
};

document.addEventListener('DOMContentLoaded', async function() {
	document.getElementById('theme1').addEventListener('click', async function() {
	  goLight()
	});
	document.getElementById('theme2').addEventListener('click', async function() {
	  goDark()
	});			
	document.getElementById('accentred').addEventListener('click', async function() {
	  goRed()
	});
	document.getElementById('accentblue').addEventListener('click', async function() {
	  goBlue()
	});
	document.getElementById('accentpurple').addEventListener('click', async function() {
	  goPurple()
	});
	document.getElementById('accentasylum').addEventListener('click', async function() {
	  goAsylum()
	});
});
