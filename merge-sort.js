const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
const testArray = [2,4,1,3]
export function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  const length = array.length;
  const halfway = Math.floor(length / 2);

  const leftHalf = array.slice(0, halfway);
  const rightHalf = array.slice(halfway);

  const leftSort = mergeSort(leftHalf);
  const rightSort = mergeSort(rightHalf)

  return merge(leftSort, rightSort);

}

export function merge(left, right) {
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while(leftIndex < left.length && rightIndex < right.length){
        if(left[leftIndex] > right[rightIndex]){
            result.push(right[rightIndex]);
            rightIndex++
        } else {
            result.push(left[leftIndex]);
            leftIndex++
        }
    }    return result.concat(left.slice(leftIndex), right.slice(rightIndex))


}

mergeSort(numbers)
