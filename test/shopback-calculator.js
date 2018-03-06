var should = require('should');
var calcuator = require('../shopback-calculator.js');
	//need input more 1 arg because commander package  
   describe('shopback-calculator Test', function(){
    it('node shopback-calculator.js signup www.shopback.sg ', function(done){
        var result = calcuator.ActionFunction('signup', 'www.shopback.sg','');
        done();
    })
 	it('node shopback-calculator.js signup www.shopback.my ', function(done){
        var result = calcuator.ActionFunction('signup', 'www.shopback.my', '');
        done();
    })
    it('node shopback-calculator.js spend 0', function(done){
        var result = calcuator.ActionFunction('spend', 0, '');
        done();
    })
    it('node shopback-calculator.js spend 20', function(done){
        var result = calcuator.ActionFunction('spend', 20, '');
        done();
    })
    it('node shopback-calculator.js spend 100 5', function(done){
        var result = calcuator.ActionFunction('spend', 100, 5, '');
        done();
    })
    it('node shopback-calculator.js spend 10 10 10', function(done){
        var result = calcuator.ActionFunction('spend', 10, 10, 10, '');
        done();
    })
    it('node shopback-calculator.js spend 20 10 15', function(done){
        var result = calcuator.ActionFunction('spend', 20, 10, 15, '');
        done();
    })
    //test open link can't see the report
    // it('node shopback-calculator.js redeem www.shopback.my ', function(done){
    //     calcuator.ActionFunction('redeem', 'www.shopback.my', '');
    //     process.exit(1);
    //     done();
    // })
    // it('node shopback-calculator.js redeem www.shopback.my ', function(done){
    //     calcuator.ActionFunction('redeem', 'www.shopback.my', '');
    //     process.exit(1);
    //     done();
    // })

})



 

