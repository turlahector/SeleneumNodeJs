const HomeController = require("../controller/homeController");
const hc = new HomeController("http://52.25.243.87:8864/#/login"); 
const TestData = require("../test-data/testData")
const tests = new TestData();

(async function TestLogin() {
  try {
    
    for (i = 0; i < tests.homeData.data.length; i++) { 
      var checkLogo = await hc.checkLogoERP()
      var enteringUsername = await hc.enterValueInUsername(tests.homeData.data[i].username);
      var enteringPassword = await hc.enterValueInPassword(tests.homeData.data[i].password);
      var clickLogin = await hc.clickLoginButton();

      if(checkLogo.status == "passed" && enteringUsername.status == "passed" && enteringPassword.status == "passed" && clickLogin.status == "passed") {
        await hc.logResult("PASSED",tests.homeData.data[i]);
      }else {
        await hc.logResult("FAILED",tests.homeData.data[i]);
      }
    }
  }catch(err) {
    console.log(err);
  } finally {
   await hc.quitDriver();
  }
})();