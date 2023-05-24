/** 
 * Created on May 23 2023
 * @author Antonio Salaices M
*/

import { DOTENV } from './constants'

const Formatter = {
    /** 
     * @function mapURLParams
     * A function to replace query parameters
     * @param {string} url
     * @param {object} uriParams
    */
    mapURIParams(url: string | undefined, uriParams: any) {
        let replaced = '';
        const parts = url?.split(/(\{\w+?\})/g).map((subString: string) => {
            replaced = subString.replace(/\{/g, '').replace(/\}/g, '');

            return uriParams[replaced] === '' ? '' : uriParams[replaced] || replaced;
        })

        return parts?.join('');
    },
    /** 
     * @function getUriGifs
     * A function to create endpoint
     * @param {string} search
    */
    getUriGifs(search: string){
        const params = {
            key: DOTENV.API_KEY,
            search
        }
        return `${DOTENV.API_URL}${DOTENV.API_SEARCH}${Formatter.mapURIParams(DOTENV.QUERY_PARAMETERS, params)}`
    }
}

export default Formatter;