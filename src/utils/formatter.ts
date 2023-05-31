/** 
 * Created on May 23 2023
 * @author Antonio Salaices M
*/

import { GifData } from './types';

const Formatter = {
    /** 
     * @function getUriGifs
     * A function to create endpoint
     * @param {string} search
    */
    getFormatedData(data: GifData[] = []): Partial<GifData>[] {
        return data?.map((item) => ({id: item.id, url: item.images.fixed_height.url}));
    }
}

export default Formatter;