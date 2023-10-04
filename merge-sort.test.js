import { mergeSort, merge } from "./merge-sort";

    // To verify if the mergeSort function correctly sorts an array with a single element
    it('should return an array with one element', () => {
        const array = [1];
        const sortedArray = mergeSort(array);
        expect(sortedArray).toEqual([1]);
      });
      //returns array if empty
      it('should return array unchanged, if 0 elements', ()=> {
        const array = [];
        const sortedArray = mergeSort(array);
        expect(sortedArray).toEqual([]);
      });

      //divide array into 2 halves - left and right
    //   it('should return left half and right half of input', ()=> {
    //     const array = [2,4,1,3];
    //     const sortedArray = mergeSort(array);
    //     expect(sortedArray).toEqual([[2,4], [1,3]])
    //   });

      //return first element as single element in array
    //   it('should return first el. from input in own array', ()=>{
    //     const array = [2,4,1,3];
    //     const sortedArray = mergeSort(array);
    //     expect(sortedArray).toEqual([2])
    //   })

      //merge function compare and return smallest
      it('should return sorted array', ()=> {
        const left = [2,4];
        const right = [1,3]
        const mergedArray = merge(left, right);
        expect(mergedArray).toEqual([1,2,3,4])
      })

      //should return sorted array
      it('should return sorted array', ()=> {
        const array = [2,4,1,3];
        const sortedArray = mergeSort(array);
        expect(sortedArray).toEqual([1,2,3,4])
      })