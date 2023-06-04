/** 
 * Created on May 23 2023
 * @author Antonio Salaices M
*/

import { GifData } from 'ApiData';
import { DATE_UNITS } from '../constants/constants';
import { rtf } from './helper';


const Formatter = {
    /** 
     * @function getUriGifs
     * A function to create endpoint
     * @param {string} search
    */
    getFormatedData(data: GifData[] = []): Partial<GifData>[] {
        return data?.map((item) => ({
            id: item.id,
            url: item.images.fixed_height.url,
            title: item.title,
            date: new Date(item.import_datetime),
            rating: item.rating
        }));
    },
    /** 
     * @function getRelativeTime
     * A function to get transcurred time
     * @param {number} timestamp
    */
   getRelativeTime(timestamp: number){
    const from = new Date(timestamp).getTime();
    const now = new Date().getTime();
    const elapsed = (from - now) / 1000;

    for (const unit in DATE_UNITS) {
        if (elapsed > DATE_UNITS[unit]) {
            return rtf.format(
                Math.floor(elapsed / DATE_UNITS[unit]),
                unit
            )
        }
    }

    return rtf.format(0, 'second');
   }
}

export default Formatter;