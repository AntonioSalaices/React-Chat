import Formatter from '../formatter';
import { gifsResponse } from '../../mocks/gifs';

describe('Formatter', () => {
  const { sizeToRange, getFormatedData } = Formatter;

  test('should return formatted data from initial array', () => {
    const formattedData = {
      id: 'RRkpCa1JGN89cuT0PX',
      url: 'https://media2.giphy.com/media/RRkpCa1JGN89cuT0PX/200.gif?cid=430ca046gabbeg98p8qf34whxwsx2fclutgw77bc9rx9zzxg&ep=v1_gifs_search&rid=200.gif&ct=g',
      description: 'The official home of the UEFA competitions on GIPHY',
    };
    const data = getFormatedData([gifsResponse]);

    expect(data).toEqual([formattedData]);
  });

  test('should return all the screen sizes as per value entered', () => {
    const resize = [150, 500, 800, 1100, 2400];
    const screenSizes = [];

    for (let i = 0; i < resize.length; i++) {
      const screenSize = sizeToRange(resize[i]);
      screenSizes.push(screenSize);
    }
    expect(screenSizes).toEqual(['xs', 'sm', 'md', 'lg', 'xl']);
  });
});
