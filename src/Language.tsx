import { headers } from "next/headers";

type BrowserLanguage = 'en' | 'fr';

function GetBrowserLanguage() {
    const acceptLanguage = headers().get('accept-language');
    let lang = acceptLanguage?.split(',')[0] || 'en'; // Default to 'en'
    let browserLanguage: BrowserLanguage = 'en';

    if (lang.includes('fr'))
    {
        browserLanguage = 'fr';
    }

    return browserLanguage;
}

export { GetBrowserLanguage };