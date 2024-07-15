/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let [l, r] = [0, 1];
    let maxProfit = 0;
    while(r < prices.length) {
        if(prices[r] > prices[l]) {
            const profit = prices[r] - prices[l]
            if(profit > maxProfit) maxProfit = profit;
        } else {
            l = r
        }
        
        r++;
    }
    
    return maxProfit;
};