var files_page = function(){
	
	//click on create new folder
	this.clickCreateNewFolder = function(){
		
		element(by.xpath("//mat-icon[contains(text(),'create_new_folder')]")).click();
	};
	
	//verify that hte create new folder dialogue is displayed
	this.verifyNewFolderDialogue = function(){
		
		expect(element(by.xpath("//h2[@class='mat-dialog-title']")).isDisplayed());
		expect(element(by.xpath("//h2[@class='mat-dialog-title']")).getText()).toEqual("New folder");
	};
	
	//enter folder name
	this.enterFolderName = function(value){
		
		element(by.id("adf-folder-name-input")).sendKeys(value);
	};
	
	//click on create button
	this.clickCreateBtn = function(){
		
		element(by.id("adf-folder-create-button")).click();
	};
	
	//verify that the folder is created
	this.verifyNewFolderCreated = function(){
		
		var listItems = element.all(by.className("adf-datatable-cell")).$$("span");
		return listItems.getText();
		
	};
	
	//verify the duplicate folder message
	this.verifyMessage = function(){
				
		element(by.className("cdk-live-announcer-element cdk-visually-hidden")).getText().then(function(messageText){
		console.log("The message displayed is :" + messageText);
		});
	};
		
};

module.exports = new files_page();