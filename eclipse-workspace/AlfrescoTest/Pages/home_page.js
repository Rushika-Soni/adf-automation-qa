require('../Pages/files_page.js');

var home_page = function(){
	
	//click on content service and return the files page
	this.clickContentServices = function(){
		
		element(by.xpath("//div[contains(text(),'Content Services')]")).click();
		return require('./files_page.js');
	};
	
};

module.exports = new home_page();