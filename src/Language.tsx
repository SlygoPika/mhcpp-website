import { headers } from "next/headers";

function GetBrowserLanguage() {
    const acceptLanguage = headers().get('accept-language');
    let browserLanguage = acceptLanguage?.split(',')[0] || 'en'; // Default to 'en'

    if (browserLanguage.includes('fr'))
    {
        browserLanguage = 'fr';
    } else
    {
        browserLanguage = 'en';
    }

    return browserLanguage;
}

export { GetBrowserLanguage };