import { isEqual as isEqualLodash } from 'lodash';

/**
 * Compares two arrays of strings for equality using the lodash library.
 *
 * @param valueOne - The first array of strings to compare.
 * @param valueTwo - The second array of strings to compare.
 *
 * @returns `true` if the arrays are equal, `false` otherwise.
 */
const isEqual = (valueOne: string[], valueTwo: string[]): boolean => {
  return isEqualLodash(valueOne, valueTwo);
};

export default isEqual;
