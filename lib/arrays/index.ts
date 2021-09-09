/**
 * Returns a random index from array.
 * @param {*[]} array
 */
export const RandomIndex = (array: any[]) => {
  return array[~~(Math.random() * array.length)];
};

/**
 * Returns the total amount (int) of appearances of a given string.
 * @param {*[]} array
 * @param {*} filter What given argument you want to search inside of the array.
 */
export const FilterExact = (array: any[], filter: any) => {
  return array.filter((index) => index === filter).length;
};

/**
 * Loops a function many times.
 * @param {string} maxLoops The amount of times the loop should loop *(e.g. 4 loops)*
 * @param givenFunc The function that should be done `maxLoops` amount of times.
 * @returns
 */
export const LoopFunction = (maxLoops: number, givenFunc: Function) => {
  return [...Array(maxLoops)].forEach(() => givenFunc());
};
