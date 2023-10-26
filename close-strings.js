const word1 = "abbbzcf";
const word2 = "babzzcz";


export function closeStrings(word1, word2) {
  // Check if the lengths of the two words are different
  if (word1.length !== word2.length) {
    return false;
  }

  // Create frequency maps for both words
  const freqMap1 = new Map();
  const freqMap2 = new Map();

  // Populate the frequency maps
  for (let i = 0; i < word1.length; i++) {
    freqMap1.set(word1[i], (freqMap1.get(word1[i]) || 0) + 1);
    freqMap2.set(word2[i], (freqMap2.get(word2[i]) || 0) + 1);
  }

  // Check if the sets of characters are the same
  if (![...freqMap1.keys()].sort().join('') === [...freqMap2.keys()].sort().join('')) {
    return false;
  }

  // Check if the frequencies of characters are the same
  if (![...freqMap1.values()].sort().join('') === [...freqMap2.values()].sort().join('')) {
    return false;
  }

  return true;
}

console.log(closeStrings(word1, word2)); 