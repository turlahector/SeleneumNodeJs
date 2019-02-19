class TestData {
    constructor() {
        this.homeData = {
            "data": [
                {
                    "username":"Maricar",
                    "password":"TestPassword",
                    "steps":"In login page user enter a correct credentials it will succuessfully redirect to dashboard",
                    "actual":"Able to login successfully",
                    "expected":"User successfully login",
                    "status":"Passed",
                    "message":"Successfully Login",
                    "modalBoxMessage":"Success Login"
                },
                {
                    "username":"Jay",
                    "password":"TestPassword",
                    "steps":"In login page user enter a incorrect credentials it will succuessfully redirect to dashboard",
                    "actual":"User unable to login successfully",
                    "expected":"User not successfully login",
                    "status":"Passed",
                    "message":"Unable to Login",
                    "modalBoxMessage":"Invalid Login"
                },
            ]
        };

    }
}

module.exports = TestData;