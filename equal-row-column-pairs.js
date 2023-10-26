// put row sequences into hash table
// loop through each column,
// compare columns to rows in hash
// if match add one to total

const eg1 = [
  [3, 2, 1],
  [1, 7, 6],
  [2, 7, 7],
];

const eg2 = [
  [3, 1, 2, 2],
  [1, 4, 4, 5],
  [2, 4, 2, 2],
  [2, 4, 2, 2],
];

const eg3 =[]

export var equalPairs = function (grid) {
  // track number of equal rows and columns
  let totalPairs = 0;

  //check if input is valid
  if (!grid || grid.length < 1 || Array.isArray(grid) === false) {
    return false;
  }

  if(grid.length === 1) {
    return 1
  }

  // check if each row in the grid is an array and has the same length
  const rowLength = grid[0].length;
  for (let i = 1; i < grid.length; i++) {
    if (!Array.isArray(grid[i]) || grid[i].length !== rowLength) {
      return false;
    }
  }

  let rowStore = {};

  //store rows in hash table
  for (let row of grid) {
    let arrNumber = row.map(Number);
    if (!rowStore[arrNumber]) {
      rowStore[arrNumber] = 1;
    } else {
      rowStore[arrNumber]++;
    }
  }

  for (let columnIdx = 0; columnIdx < grid.length; columnIdx++) {
    let column = grid.map((row) => row[columnIdx]);
    let colNum = column.map(Number);
    if(rowStore[colNum] > 0){
        totalPairs += rowStore[colNum]
    }
  }
  return totalPairs
};


console.log(equalPairs(eg3));
