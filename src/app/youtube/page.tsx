import YoutubeView from "../components/views/YoutubeView";
import { GetBrowserLanguage } from "@/Language";

export async function generateMetadata() {
  const browserLanguage = GetBrowserLanguage();
  let title = 'YouTube';
  if (browserLanguage.includes('fr'))
  {
    title = 'YouTube';
  }
  return {
    title,
  };
}

export default function Youtube() {


    return (
      <main className="flex min-h-screen flex-col justify-between">
        <YoutubeView  lang={GetBrowserLanguage()}/>
      </main>
    );
  }
  