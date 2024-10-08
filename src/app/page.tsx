import HomeView from "./components/views/HomeView";
import { GetBrowserLanguage } from "@/Language";

export async function generateMetadata() {
  const browserLanguage = GetBrowserLanguage();
  
  let title = 'Home | MHCPP';
  if (browserLanguage.includes('fr'))
  {
    title = 'Accueil | MHCPP';
  }

  return {
    title,
  };
}

export default function Home(): JSX.Element {

  return (
    <main className="">
      <HomeView lang={GetBrowserLanguage()} />
    </main>
  );
}