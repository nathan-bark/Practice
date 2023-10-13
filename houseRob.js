const eg1 = [1, 2, 3, 1]; //4
const eg2 = [2, 7, 9, 3, 1]; // 12
const eg3 = [0] //28

export var rob = function(nums) {
    if(!nums.length) return 0
    let maxCash = [];  
   
    for(let i = 0; i < nums.length; i++){
      let current = nums[i]
      let lastMax = maxCash[i -1] || 0
      let beforeLastMax = maxCash[i -2] || 0
   
      
      maxCash.push(Math.max(current + beforeLastMax, lastMax))
      
    }
    return maxCash[nums.length -1]
  };

rob(eg3)