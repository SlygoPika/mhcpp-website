import ParentsView from "../components/views/ParentsView";
import { GetBrowserLanguage } from "@/Language";

export async function generateMetadata() {
  const browserLanguage = GetBrowserLanguage();
  
  let title = 'Parents';
  if (browserLanguage.includes('fr'))
  {
    title = 'Parents';
  }

  return {
    title,
  };
}

export default function Parents() {
  return (
    <main className="">
      <ParentsView lang={GetBrowserLanguage()}/>
    </main>
  );
  }
  