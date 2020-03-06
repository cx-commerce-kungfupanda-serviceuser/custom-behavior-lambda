module.exports = { main: function (event, context) {
    
    let charityRoundup = Math.ceil(event.data.total) - event.data.total;
    charityRoundup = Math.round(charityRoundup * 1000) / 1000;
    console.log("charityRoundup " + charityRoundup);
    
    let negativeDiscount = {
                    "code": "000",
                    "value": -charityRoundup,
                    "appliedValue": null,
                    "absolute": true,
                    "source": "charityRoundup"
                };
    let responseBody = {
        discountValues: []
    };
    
    responseBody.discountValues.push(negativeDiscount);
    return responseBody;
    
    //event.data.discountValues.push(negativeDiscount);
    //return event.data;
} };