require('../Pages/home_page.js');

var login_page = function(){
	
	//send value to username field
	this.enterUserName = function(value){
		
		element(by.id("username")).sendKeys(value);
	};
	
	//send value to password field
	this.enterPassword = function(value){
		
		element(by.id("password")).sendKeys(value);

	};
	
	//click on submit button and return the home page
	this.clickSubmit = function(){
		
		element(by.id("login-button")).click();
		return require('./home_page.js');
	};
	
};

module.exports = new login_page();