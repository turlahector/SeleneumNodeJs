const {Builder, By, Key, until} = require('selenium-webdriver');
const driver =  new Builder().forBrowser('chrome').build();

class Seleneum{
    constructor() {

    }

    async init(url) {
        await driver.get(url);
    }

    async findElementByClassName(className) {
        try {
            var result = "";

            await driver.findElement(By.className(className)).then(async function(webElement){
                result = {"status":"passed","message":"Element with a classname "+className+" found"}
            },function(err){
                result = {"status":"failed","message":"Element with a classname "+className+" NOT FOUND!!!!"}
            });

            return result;
        }catch(err) {
            result = {"status":"failed","message":err.message}
        }
    }

    async findElementByXPath(xpath) {
        try {
            var result = "";

            await driver.findElement(By.xpath(xpath)).then(async function(webElement){
                result = {"status":"passed","message":"Element with a xpath of "+xpath+" found"}
            },function(err){
                result = {"status":"failed","message":"Element with a xpath "+xpath+" NOT FOUND!!!!"}
            });

            return result;
        }catch(err) {
            result = {"status":"failed","message":err.message}
        }
    }

    async findElementById(id) {
        try {
            var result = "";

            await driver.findElement(By.id(id)).then(async function(webElement){
                result = {"status":"passed","message":"Element with a id "+id+" found"}
            },function(err){
                result = {"status":"failed","message":"Element with a id "+id+" NOT FOUND!!!!"}
            });

            return result;
        }catch(err) {
            result = {"status":"failed","message":err.message}
        }
    }


    //CLICK EVENTS

    async clickElementById(id) {
        try {
            var result = "";

            await driver.findElement(By.id(id)).then(async function(webElement){
                await driver.findElement(By.id(id)).click();
                result = {"status":"passed","message":"Element with a id "+id+" is Clicked"}
            },function(err){
                result = {"status":"failed","message":"Element with a id "+id+" NOT FOUND!!!!"}
            });

            return result;
        }catch(err) {
            result = {"status":"failed","message":err.message}
        }
    }


    async clickElementByXPath(xpath) {
        try {
            var result = "";

            await driver.findElement(By.xpath(xpath)).then(async function(webElement){
                await driver.findElement(By.xpath(xpath)).click();
                result = {"status":"passed","message":"Element with a id "+xpath+" is Clicked"}
            },function(err){
                result = {"status":"failed","message":"Element with a id "+xpath+" NOT FOUND!!!!"}
            });

            return result;
        }catch(err) {
            result = {"status":"failed","message":err.message}
        }
    }

    async clickElementByClassName(className) {
        try {
            var result = "";

            await driver.findElement(By.className(className)).then(async function(webElement){
                await driver.findElement(By.className(className)).click();
                result = {"status":"passed","message":"Element with a id "+className+" is Clicked"}
            },function(err){
                result = {"status":"failed","message":"Element with a id "+className+" NOT FOUND!!!!"}
            });

            return result;
        }catch(err) {
            result = {"status":"failed","message":err.message}
        }
    }

    //entering text in element
    async enterValuesInElementById(id,text) {
        try {
            var result = "";

            await driver.findElement(By.id(id)).then(async function(webElement){
                await driver.findElement(By.id(id)).sendKeys(text, Key.RETURN);
                result = {"status":"passed","message":"Element with a id "+id+" successfully enter values"}
            },function(err){
                result = {"status":"failed","message":"Element with a id "+id+" NOT FOUND!!!!"}
            });

            return result;
        }catch(err) {
            result = {"status":"failed","message":err.message}
        }
    }


    async enterValuesInElementByXPath(xpath,text) {
        try {
            var result = "";

            await driver.findElement(By.xpath(xpath)).then(async function(webElement){
                await driver.findElement(By.xpath(xpath)).sendKeys(text, Key.RETURN);
                result = {"status":"passed","message":"Element with a id "+xpath+" successfully enter values"}
            },function(err){
                result = {"status":"failed","message":"Element with a id "+xpath+" NOT FOUND!!!!"}
            });

            return result;
        }catch(err) {
            result = {"status":"failed","message":err.message}
        }
    }

    async enterValuesInElementByClassName(className,text) {
        try {
            var result = "";

            await driver.findElement(By.className(className)).then(async function(webElement){
                await driver.findElement(By.className(className)).sendKeys(text, Key.RETURN);
                result = {"status":"passed","message":"Element with a id "+className+"  successfully enter values"}
            },function(err){
                result = {"status":"failed","message":"Element with a id "+className+" NOT FOUND!!!!"}
            });

            return result;
        }catch(err) {
            result = {"status":"failed","message":err.message}
        }
    }

    

    async getTextById(id) {
        try {
            var result = "";

            await driver.findElement(By.id(id)).then(async function(webElement){
                await driver.findElement(By.id(id)).getText;
                result = {"status":"passed","message":"Element with a id "+id+"  successfully enter values"}
            },function(err){
                result = {"status":"failed","message":"Element with a id "+id+" NOT FOUND!!!!"}
            });

            return result;
        }catch(err) {
            result = {"status":"failed","message":err.message}
        }
    }

    async getTextByClassName(className) {
        try {
            var result = "";

            await driver.findElement(By.className(className)).then(async function(webElement){
                await driver.findElement(By.className(className)).getText();
                result = {"status":"passed","message":"Element with a id "+className+"  successfully enter values"}
            },function(err){
                result = {"status":"failed","message":"Element with a id "+className+" NOT FOUND!!!!"}
            });

            return result;
        }catch(err) {
            result = {"status":"failed","message":err.message}
        }
    }

    async getTextByXPath(xpath) {
        try {
            var result = "";

            await driver.findElement(By.xpath(xpath)).then(async function(webElement){
                await driver.findElement(By.xpath(xpath)).sendKeys(text, Key.RETURN);
                result = {"status":"passed","message":"Element with a id "+xpath+"  successfully enter values"}
            },function(err){
                result = {"status":"failed","message":"Element with a id "+xpath+" NOT FOUND!!!!"}
            });

            return result;
        }catch(err) {
            result = {"status":"failed","message":err.message}
        }
    }

    async quit() {
        await driver.quit();
    }
}

module.exports = Seleneum;