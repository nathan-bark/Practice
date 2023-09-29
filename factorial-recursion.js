const factorialIteration = (number) => {
    let total = number
    for (let counter = number-1; counter >= 1; counter--){
        total = total * counter;
    }
    
    return total
}

const factorialRecursion = (number) => {
    if(number === 2){
        return 2
    }
    return number * factorialRecursion(number - 1);
}
    
    factorialIteration(5)
    factorialRecursion(5)