/**
 * Created on May 23 2023
 * @author Antonio Salaices M
 */

import { GifData } from "ApiData";

type GenericFunction<T> = (arg: T) => void;

const Formatter = {
  /**
   * @function getFormatedData
   * A function to create endpoint
   * @param {string} search
   */
  getFormatedData(data: GifData[] = []): Partial<GifData>[] {
    return data?.map((item) => ({
      id: item.id,
      url: item.images.fixed_height.url,
    }));
  },
  /**
   * @function debounce
   * A function to implemente debounce tecnique
   * @param {Function} callback
   * @param {number} timer
   */
  debounce(callback: GenericFunction<any>, time: number) {
    let timer;
    clearTimeout(timer);
    return (args) => {
      timer = setTimeout(() => {
        callback(args);
      }, time);
    };
  },
};

export default Formatter;
