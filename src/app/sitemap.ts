import { MetadataRoute } from "next";

export default async function sitemap() : Promise<MetadataRoute.Sitemap>
{
    const baseUrl = "https://www.montrealhcpp.ca";

    return [
        {
            url: `${baseUrl}/`,
        },
        {
            url: `${baseUrl}/volunteers`,
        },
        {
            url: `${baseUrl}/parents`,
        },
        {
            url: `${baseUrl}/youtube`,
        },
    ]
}