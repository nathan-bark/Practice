const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
  let a = 0;
  let b = 1;
  let counter = array.length;

  while (b < array.length && counter > 0) {
    let first = array[a];
    let second = array[b];

    if (first > second) {
      array[b] = first;
      array[a] = second;
    }

    a++;
    b++;

    if (b === array.length) {
      a = 0;
      b = 1;
      counter--;
    }
  }
}

bubbleSort(numbers);
console.log(numbers);
//expect               [ 0, 1, 2, 4, 5, 6, 44, 63, 87, 99, 283 ]
