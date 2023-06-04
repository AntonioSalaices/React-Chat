//We could use dotenv instead of this approach
export const DOTENV = Object.freeze({
    API_URL:'https://api.giphy.com/v1/',
    API_SEARCH:'gifs/search?api_key={key}&q={search}&limit={pagination}&offset=0&rating=g&lang=en',
    API_KEY:'98bosaiOeUIvi3TgaBOUXF2nmEVFZniR',
});


export const DATE_UNITS = Object.freeze({
    YEAR: 31536000,
    MONTH: 2629800,
    DAY: 86400,
    HOUR: 3600,
    MINUTE:60,
    SECOND: 1
});
