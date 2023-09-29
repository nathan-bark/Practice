const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
    //set smallest to n index
    //start loop from n index
    //loop through indexes comparing to smallest
    // if index smaller set to smallest
    //at end set smallest to n index
    //restart loop from n+1 index
    
    for (let first = 0; first < array.length; first++){
        let smallest = first;
        let temp = array[first];

        for(let check = first+1; check< array.length; check++){
            if(array[check] < array[smallest]){
                smallest = check;
            }
        }
        

        array[first] = array[smallest]
        array[smallest] = temp

    }
}

selectionSort(numbers);
console.log(numbers);
//expect               [ 0, 1, 2, 4, 5, 6, 44, 63, 87, 99, 283 ]
