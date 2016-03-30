var webdriverio = require('webdriverio');
var options = { desiredCapabilities: { browserName: 'chrome' } };
var client = webdriverio.remote(options);
var colors = require('colors/safe');
console.log(colors.yellow("-----------------------------------------------------"))
console.log(colors.yellow("-----------------------------------------------------"))
console.log(colors.yellow("-------- Selenium - WebDriver.IO     ----------------"))
console.log(colors.yellow("--------  + Author: Do Thi Trang Thuong -------------"))
console.log(colors.yellow("--------  + Date  : 14/02/2016 ----------------------"))
console.log(colors.yellow("-----------------------------------------------------"))
console.log(colors.yellow("-----------------------------------------------------"))

var urlSite = 'http://youlook.net/'

console.log(colors.cyan("Hello!! ==========> Go to site: "+urlSite))
client
	.init()
	.url(urlSite)
	
	// .setValue('#search_form_input_homepage', 'WebdriverIO')
	// .click('#search_button_homepage')
	.getTitle().then(function(title) {
		console.log('Title is: ' + title);
		// outputs: "Title is: WebdriverIO (Software) at DuckDuckGo"
		
	})
	.saveScreenshot('snapshot.png', function(err, screenshot, response) { 
		console.log(response)
	})
	
	.end().then(function(res){
		console.log(colors.red("Goodbye"))
	}); // Close website
