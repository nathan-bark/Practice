const eg1 = [7,1,5,3,6,4];

//find biggest increase possible in array after index
export var maxProfit = function (prices) {
  if(prices.length < 2){
    return 0
  }
  
  let maxProfit = 0;
  let minPrice = prices[0];
  
  for(let i = 1; i < prices.length; i++){
    if(prices[i] < minPrice){
      minPrice = prices[i];
    } else if(prices[i] - minPrice > maxProfit){
      maxProfit = prices[i] - minPrice;
    }
  }
  
  return maxProfit;
};
 console.log(maxProfit(eg1));

