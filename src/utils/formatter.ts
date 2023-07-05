/**
 * Created on May 23 2023
 * @author Antonio Salaices M
 */

import { ScreenSize } from '@Constans/screenConstants';
import { GifData } from 'ApiData';

const Formatter = {
  /**
   * @function getFormatedData
   * A function to create endpoint
   * @param {string} search
   */
  getFormatedData(data: GifData[] = []): Partial<GifData>[] {
    return data?.map((item) => ({
      id: item.id,
      url: item?.images?.fixed_height?.url,
      description: item?.user?.description,
    }));
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
  getFontSize(value: string): string {
    return `${Number(value) / 50}em`;
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
