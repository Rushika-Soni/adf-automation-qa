exports.config = {
  
  seleniumAddress: 'http://localhost:4444/wd/hub',
  capabilities:{
	  browserName : 'firefox'
  },
  specs: [
	  '../Test/test_scenario.js',
	  ],
  onPrepare: function(){
	  browser.driver.manage().window().maximize();
	  browser.driver.manage().deleteAllCookies();
	  browser.manage().timeouts().implicitlyWait(5000);
  },
}