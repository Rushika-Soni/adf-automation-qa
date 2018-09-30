require ('../Pages/login_page.js');

var settings_page = function(){
	
	//find a locator of provider dropdown and click on it
	this.clickDropDown = function(){
		
		element(by.id("adf-provider-selector")).click();
	};
	
	//click on dropdown option ECM
	this.selectDropDownValue = function(){
		
		element(by.id("mat-option-1")).click();
	};
	
	//click on apply button and return the login page
	this.clickApply = function(){
		
		element(by.id("host-button")).click();
		return require('./login_page.js');
	};
	
};

module.exports = new settings_page();