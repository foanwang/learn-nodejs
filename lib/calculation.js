module.exports.calculation = function(data, inputlist){
    var price = inputlist[0];
    var percentage = 0;
    var result;
    //good price is 0
    if(inputlist.length == 1 && inputlist[0]==0){
        result = data[0];
        return result;
    }
    // Single price and price more than one setting
    if(inputlist.length == 1){
        var pricelist = data["single"];
        for(i = 0; i < pricelist.length;i+=2){
            if(price >= pricelist[i]){
                percentage = pricelist[i+1];
            }
        }

    }else{
        //multiple price  all more than setting price ,and find the highest
        var pricelist = data["multiple"];
        var flag = new Boolean(true);
        for(i = 0; i < inputlist.length; i++){
            //check all price more than setting price;
            if( pricelist[0] > inputlist[i]){
                flag = false;
            }
            //find the highest price
            if (inputlist[i] > price){
                pricinputliste = [i];
            }
        }
        if(flag == 'true'){
            percentage = pricelist[1];
        }    
    }
    //others 
    if(percentage == 0){
        percentage = data["other"];
    }
    //console.log("price", price, "percentage;", percentage);
    return data["title"] + (price * percentage).toFixed(2);
}