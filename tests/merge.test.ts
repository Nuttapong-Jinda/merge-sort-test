import { merge } from '../src/merge';

describe('merge() function', () => {
  test('merges two ascending arrays and one descending array into a single ascending array', () => {
    const collection_1 = [1, 4, 7, 10];
    const collection_2 = [2, 5, 8, 11];
    const collection_3 = [12, 9, 6, 3, 0];

    expect(merge(collection_1, collection_2, collection_3)).toEqual([
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
    ]);
  });

  test('handles duplicate numbers across collections accurately', () => {
    const collection_1 = [0, 2, 2, 5];
    const collection_2 = [1, 2, 5, 8];
    const collection_3 = [8, 5, 3, 0];

    expect(merge(collection_1, collection_2, collection_3)).toEqual([
      0, 0, 1, 2, 2, 2, 3, 5, 5, 5, 8, 8,
    ]);
  });

  test('handles empty arrays properly', () => {
    expect(merge([], [], [])).toEqual([]);
    expect(merge([1, 3, 5], [], [])).toEqual([1, 3, 5]);
    expect(merge([], [2, 4, 6], [])).toEqual([2, 4, 6]);
    expect(merge([], [], [9, 5, 1])).toEqual([1, 5, 9]);
  });

  test('handles arrays of different lengths', () => {
    const collection_1 = [0, 100];
    const collection_2 = [10, 20, 30, 40, 50];
    const collection_3 = [90, 15, 5];

    expect(merge(collection_1, collection_2, collection_3)).toEqual([
      0, 5, 10, 15, 20, 30, 40, 50, 90, 100,
    ]);
  });

  test('handles single-element arrays', () => {
    expect(merge([5], [2], [8])).toEqual([2, 5, 8]);
  });
});