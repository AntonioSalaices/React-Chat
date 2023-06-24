import { logger } from '../LoggerUtil';

describe('LoggerUtil', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const { info, debug, warn, error } = logger;
  test('should log the result after call the function: DEBUG', () => {
    const spyDebugLog = jest.spyOn(global.console, 'log');

    debug('Testing debug');
    expect(spyDebugLog).toHaveBeenCalledTimes(1);
  });

  test('should log the result after call the function: INFO', () => {
    const spyInfoLog = jest.spyOn(global.console, 'log');

    info('Testing info');
    expect(spyInfoLog).toHaveBeenCalledTimes(1);
  });

  test('should log the result after call the function: WARN', () => {
    const spyWarnLog = jest.spyOn(global.console, 'log');

    warn('Testing warn');
    expect(spyWarnLog).toHaveBeenCalledTimes(1);
  });

  test('should log the result after call the function: ERROR', () => {
    const spyErrorLog = jest.spyOn(global.console, 'log');

    error('Testing error');
    expect(spyErrorLog).toHaveBeenCalledTimes(1);
  });
});
