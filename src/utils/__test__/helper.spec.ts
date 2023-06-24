import { gifsResponse } from '../../mocks/gifs';
import Helper from '@Utils/helper';

describe('Helper', () => {
  const { deepEqualCompare, getProperty } = Helper;

  test('should compare if two arguments are equal', () => {
    const areEqual = deepEqualCompare(2, 2);

    expect(areEqual).toBeTruthy();
  });

  test('should throw an error because the method doesnt allow compare array', () => {
    expect(() => {
      deepEqualCompare([], []);
    }).toThrow(Error);
  });

  test('should return property from object', () => {
    const gifUserName = getProperty(gifsResponse, 'username');

    expect(gifUserName).toBe('uefa');
  });
});
