
enum LanguageCode {
    EN = 'en'
}


export const rtf = new Intl.RelativeTimeFormat(
    LanguageCode.EN,
    { numeric: 'auto' }
);