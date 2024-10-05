import VolunteersView from "../components/views/VolunteersView";
import { GetBrowserLanguage } from "@/Language";

export async function generateMetadata() {
  const browserLanguage = GetBrowserLanguage();
  
  let title = 'Volunteers';
  if (browserLanguage.includes('fr'))
  {
    title = 'Bénévoles';
  }

  return {
    title,
  };
}

export default function Volunteers() {
  return (
    <main className="">
      <VolunteersView lang={GetBrowserLanguage()}/>
    </main>
  );
  }
  