        // Rhino specific test
        
        //* load this timers fixes only if necessary
        load(
            new java.io.File(".").getCanonicalPath() + 
            "/src/rhinoTimers.js"
        );
        //*/
        
        load(
            new java.io.File(".").getCanonicalPath() + 
            "/build/wru.console.js"
        );
        
        wru.test([{
            name: "test that should pass",
            test: function () {
                wru.assert("it passes", 1);
            }
        },{
            name: "async test",
            test: function () {
                setTimeout(wru.async(function (arg) {
                    wru.assert("OK", "OK" === arg);
                }), 2000, "OK");
            }
        },{
            name: "test that should fail",
            test: function () {
                wru.assert("this passes", true);
                wru.assert("this fails", 0);
            }
        },{
            name: "test that should throw an error",
            test: function () {
                wru.assert("it's an error", 1);
                WTF++;
            }
        }]);
        