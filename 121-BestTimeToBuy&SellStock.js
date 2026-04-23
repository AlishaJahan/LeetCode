const price = [7, 1, 2, 6, 4, 3];

function buyAndsellStock(price) {
    let minProfit = Infinity; //7,1
    let maxProfit = 0; //0,1,5
    for (let i = 0; i < price.length; i++) {
        if (price[i] < minProfit) {
            minProfit = price[i]
        }

        let profit = price[i] - minProfit; //7-7=0

        if (profit > maxProfit) {
            maxProfit = profit;
        }
    }
    return maxProfit;
}
console.log(buyAndsellStock(price));