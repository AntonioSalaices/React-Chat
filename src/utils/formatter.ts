/**
 * Created on May 23 2023
 * @author Antonio Salaices M
 */

import { ScreenSize } from "@Constans/screenConstants";
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
  /**
   * @function throttle
   * A function to implement throttle technique
   * @param {Function} callback
   * @param {number} timer
   */
  throttle(callback: GenericFunction<any>, delay: number) {
    let timeout;

    return (...args) => {
      if (timeout) return;

      timeout = setTimeout(() => {
        timeout = undefined;
      }, delay);

      return callback(...args);
    };
  },
  /**
   * @function sizeToRange
   * A function to get the size by range
   * @param {number} size
   */
  sizeToRange(size: number): string {
    if (size < 480) {
      return ScreenSize.XS;
    } else if (size > 480 && size < 720) {
      return ScreenSize.SM;
    } else if (size > 720 && size < 960) {
      return ScreenSize.MD;
    } else if (size > 960 && size < 1200) {
      return ScreenSize.LG;
    }
    return ScreenSize.XL;
  },
};

export default Formatter;

//We can reuse this function for another inputs [CURRYING]
// const handleCurried = (fieldName: string) => {
//   return ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
//     setValues((prev: FormState) => ({
//       ...prev,
//       [fieldName]: value,
//     }));
//   };
// };
