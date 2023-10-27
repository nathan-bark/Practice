const eg1 = "leet**cod*e"; //lecoe
const eg2 = "erase*****"; //''

var removeStars = function (s) {
  //check if string
  if (typeof s !== "string") {
    return false;
  }

  //create stack
  let stack = [];

  //iterate through string, add each letter to stack, if index is *
  //remove last item from stack and continue

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== "*") {
     stack.push(s[i]);
    } else {
      stack.pop()
    }
  }

  stack = stack.join('')
  return stack
};

removeStars(eg2);
