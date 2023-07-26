import '@testing-library/jest-dom';
import React from 'react';

global.React = React;
global.window.Audio = jest.fn(() => ({
  pause: jest.fn(),
  play: jest.fn(),
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
}));
