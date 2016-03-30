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
function makeid(_number)
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < _number; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}
var password = makeid(15)
var new_password = makeid(15)
console.log(colors.cyan("Hello!! ==========> Go to site: "+urlSite))
var random = Math.floor((Math.random() * 10000000000) + 1)
client
	.init()
	.url(urlSite)

	// .setValue('#search_form_input_homepage', 'WebdriverIO')
	// .click('#search_button_homepage')
	.getTitle().then(function(title) {
		console.log('Title is: ' + title);
		// outputs: "Title is: WebdriverIO (Software) at DuckDuckGo"

	})
	.click('ul.nav-default li:nth-child(2) a')
  .pause(1000)
  .click('ul.row.list-choice-acc li:nth-child(1) div.select-acc-bl')
  .pause(200)
  .click('ul.row.list-choice-acc li:nth-child(2) div.select-acc-bl')
  .pause(200)
  .click('ul.row.list-choice-acc li:nth-child(3) div.select-acc-bl')
  .pause(200)
	.click('#ngdialog1 button.bt-default-bl')
  .pause(100)
  .setValue('.popup-container fieldset.signin-signup-content .form-group:nth-child(1) input', random+'@greenglobal.vn')
  .setValue('.popup-container fieldset.signin-signup-content .form-group:nth-child(2) input', password)
  .setValue('.popup-container fieldset.signin-signup-content .form-group:nth-child(3) input', password)
  .click('input#check4')

	.pause(1000)
  .submitForm(".signin-signup-form.step-1 form").then(function(res){
    // console.log(res)

  })
	.pause(200)
	.getText(".signin-signup-form.step-1 form p.error-msg").then(function(text){
		if(text.length!=0){
			var message_error = "";
			text.forEach(function(item,key){
				if(item!=''){
					message_error = colors.red(key+" : "+item);
				}
			})
			if(message_error!=""){
				console.log(message_error)
				client.pause(1000)
				client.end()
			}

		}else{


		}

	})
	.getCookie('loginToken').then(function(cookie) {
		if(cookie == null){
			console.log("Please login to our system")
		}
	})
	// .click('.login-button')
	.pause(1000)
	.getCookie('userInfo').then(function(cookie) {
		var userInfo = cookie.value;
		userInfo = JSON.parse(decodeURIComponent(userInfo));
		if(typeof userInfo != "undefined" && typeof userInfo == "object"){
			console.log("Login successfully");
			console.log("- Email: ", userInfo.email);
			console.log("- ID: ", userInfo.id);
			console.log("- Password: ", password);
			console.log("- Created: ", userInfo.created);


		}else{
			console.log("Login fail");
		}


	})
	.pause(2000)
	.click('div.user-logged ul li:nth-child(5)')
	.pause(1000)
	.click('div.user-logged ul li:nth-child(5) div.dropdown-menu ul li:nth-child(3)')
  .pause(1000)
  .click('div.left-sidebar nav.sidebar-nav-content ul.sidebar-nav:nth-child(2) li:nth-child(2) a.txt-lk')
	.pause(1000)
	.setValue('input#inputCurrentPassword', password )
	.setValue('input#inputNewPassword', new_password )
	.setValue('input#inputConfirm', new_password )
	.click('div.view-animate-container form.profile-content:nth-child(2) .profile-footer-form.text-center button').then(function(){
    console.log("change password successfully");
    console.log("New Password: "+ new_password);
  })
	.pause(10000)
	.end();
