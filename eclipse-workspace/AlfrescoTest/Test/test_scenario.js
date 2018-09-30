describe("Alfresco Test", function() {
	
	beforeEach(function(){
			browser.get("http://qaexercise.envalfresco.com/settings");
	});
	
		
	var settings_page = require('../Pages/settings_page.js');
	
	it('Should be able to see the duplicate folder message', function(){
		settings_page.clickDropDown();
		settings_page.selectDropDownValue();
		var login_page = settings_page.clickApply();
		
		login_page.enterUserName("guest@example.com");
		login_page.enterPassword("Password");
		var home_page = login_page.clickSubmit();
		
		var files_page = home_page.clickContentServices();
		files_page.clickCreateNewFolder();
		files_page.verifyNewFolderDialogue();
		files_page.enterFolderName("a");
		files_page.clickCreateBtn();
		
		var folderName = files_page.verifyNewFolderCreated();
		expect(folderName).toContain("a");
		
		files_page.clickCreateNewFolder();
		files_page.verifyNewFolderDialogue();
		files_page.enterFolderName("a");
		files_page.clickCreateBtn();
		files_page.verifyMessage();

	});
	
});