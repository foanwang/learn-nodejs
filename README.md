###Calculator.js
=======
>It need install following package
>>commander:
    npm install commander --save
>>openurl:
    npm install openurl
>>mocha:
    npm install mocha -g
    npm install mocha --save-dev
    npm install should --save-dev
>>Json:
    npm install jsonfile

Calculator Cli system,
Provide three function:
>1.showdata
>2.calc award
>3.direction user to web link

>System will write data.json to create new action, open function setting.
Example:
	"new-action-name":
		{	
			"show":"true",
			"calculation":"false",
			"direction":"false",
			"title":"Award bonus:",
			"www.shopback.sg":"SGD 5",
			"www.shopback.my":"MYR 10",
			"www.shopback.co.id":"IDR 25.000",
			"www.shopback.com.tw":"TWD 1000",
			"www.myshopback.co.th":"THB 500",
			"www.myshopback.com":"USD 5"
		}
>>Calculation funcion setting example:
	1.Single prices setting array {price: percentage}
	  example:
		"single":["20","0.15","50","0.2"], 
		noteice price small to large
        2.Multiple prices setting array
	  example:
		"multiple":["10","0.1"],
	3.Others:	
		"other":"0.05",
	4.0
		"0":"No cashback"

>>Direction funcion setting example:
  "args:direct link"
  example:
  "www.myshopback.com":"https://www.myshopback.com"
 
 ==========================
 ###Test case:
  use command:mocha
  this test case pass direction url , because it's direct to web can't respond 
  
