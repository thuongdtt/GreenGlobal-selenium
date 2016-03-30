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

var urlSite = 'http://business.toancauxanh.vn:7664/'

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
	.click('a.txt-lk')
	.pause(1000)
	.setValue('.signin-signup-form input[type="email"]', 'thuongdtt@greenglobal.vn')
	.setValue('.signin-signup-form input[type="password"]','thinh123')
	.click('input#check4')
	.getCookie('loginToken').then(function(cookie) {
		if(cookie == null){
			console.log("Please login to our system")
		}

  })
	// .submitForm('.signin-signup-form.step-1 form').then(function(err, response){
	// 	})
	.pause(1000)
	.click('.login-button')
	.pause(1000)
	.getCookie('userInfo').then(function(cookie) {
		var userInfo = cookie.value;
		userInfo = JSON.parse(decodeURIComponent(userInfo));
		if(typeof userInfo != "undefined" && typeof userInfo == "object"){
			console.log("Login successfully");
			console.log("- Email: ", userInfo.email);
			console.log("- ID: ", userInfo.id);
			console.log("- Created: ", userInfo.created);

		}else{
			console.log("Login fail");
		}


  })
	.pause(5000)
	.end();
