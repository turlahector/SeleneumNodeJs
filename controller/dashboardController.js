const Seleneum = require("../libraries/seleneum");
const sel = new Seleneum(); 
const HomeObjectReference = require("../reference/homeObjectReference");
const hor = new HomeObjectReference(); 


class HomeController{
    constructor(url) {
        sel.init(url)
    }
    
    async checkLogoERP() {
        try {
            var result = "";
            result = await sel.findElementByClassName('logo');
            console.log(result);
            return result;
        }catch(err) {
            result = {"status":"failed","message": err.message};
            console.log(result);
            return result; 
        }
    }

    async enterValueInUsername(username) {
        try {
            var result = "";
            result = await sel.enterValuesInElementByXPath(hor.username,username);
            
            console.log(result);
            return result;
        }catch(err) {
            result = {"status":"failed","message": err.message};
            console.log(result);
            return result; 
        }
    }

    async enterValueInPassword(password) {
        try {
            var result = "";
            result = await sel.enterValuesInElementByXPath(hor.password,password);
            
            console.log(result);
            return result;
        }catch(err) {
            result = {"status":"failed","message": err.message};
            console.log(result);
            return result; 
        }
    }

    async clickLoginButton() {
        try {
            var result = "";
            result = await sel.clickElementByClassName('button');
            console.log(result);
            return result;
        }catch(err) {
            result = {"status":"failed","message": err.message};
            console.log(result);
            return result; 
        }
    }

    async logResult(result,data) {
        try {
            console.log(data)
            console.log(result + " RESULT for this step" + data.steps);   
        }catch(err) {
            console.log(err);
        }
    }

    async quitDriver() {
        sel.quit();
    }
}

module.exports = HomeController;