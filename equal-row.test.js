import { equalPairs } from "./equal-row-column-pairs";

it('should return false input', () => {
    const grid = []
    const result = equalPairs(grid)
    expect(result).toEqual(false)
})

