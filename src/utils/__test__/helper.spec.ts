import { gifsResponse } from '../../mocks/gifs';
import Helper from '@Utils/helper';

describe('Helper', () => {
  const { deepEqualCompare, getProperty, debounce, throttle } = Helper;

  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
    jest.clearAllTimers();
  });

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

  test('should execute function after 300ms using debounce', async () => {
    const callback = jest.fn();
    const delay = 300;

    const handleFunction = debounce(callback, delay);

    for (let j = 0; j < 10; j++) {
      jest.advanceTimersByTime(150);
      handleFunction(j.toString());
    }

    expect(callback).toHaveBeenCalledTimes(0);

    handleFunction('testing');
    jest.advanceTimersByTime(300);

    expect(callback).toHaveBeenCalledTimes(1);
  });

  test('should execute function after 400 ms using throttle', () => {
    const callback = jest.fn();
    const delay = 400;

    const handleEvent = throttle(callback, delay);

    for (let k = 0; k < 4; k++) {
      jest.advanceTimersByTime(100);
      handleEvent();
    }

    expect(callback).toHaveBeenCalledTimes(1);
  });
});
