const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array) {
  let resultArr = [];

  for (let i = 0; i < array.length; i++) {
    //check resultArr has items
    if (resultArr.length === 0) {
      resultArr.push(array[i]);
    } else {
      for (let j = 0; j < resultArr.length; j++) {
        if (array[i] > resultArr[j] && resultArr[j + 1] === undefined) {
          resultArr.push(array[i]);
        } else if (array[i] > resultArr[j] && array[i] < resultArr[j + 1]) {
           const firstHalf = resultArr.slice(0, j+1);
           const secondHalf = resultArr.slice(j+1);
            resultArr = [
                ...firstHalf,
                array[i],
                ...secondHalf
            ]
        } else if (array[i] < resultArr[j] && resultArr[j-1] === undefined){
            resultArr.unshift(array[i])
        } 
      }
    }
  }
  return resultArr
}
insertionSort(numbers);
