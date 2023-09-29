const fibonacciRecursion = (n) => {
    if(n < 2){
        return n
    }
    return fibonacciRecursion(n-1) + fibonacciRecursion(n-2)

    
};

fibonacciRecursion(3);

const fibonacciIteration = (n) => {
  let counter = 2;
  let a = 0;
  let b = 1;
  let value = 0;

  if (n === 0) {

    return value;
  }
  if (n === 1) {
    console.log(b);
    return b;
  }

  while (counter <= n) {
    value = a + b;
    a = b;
    b = value;
    counter++;
  }

  return value;
};

fibonacciIteration(3);
