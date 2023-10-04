import { mergeSort } from "./merge-sort";

    // To verify if the mergeSort function correctly sorts an array with a single element
    it('should return an array with one element', () => {
        const array = [1];
        const sortedArray = mergeSort(array);
        expect(sortedArray).toEqual([1]);
      });
      //returns array if empty
      it('should reurn array unchanged, if 0 elements', ()=> {
        const array = [];
        const sortedArray = mergeSort(array);
        expect(sortedArray).toEqual([]);
      })