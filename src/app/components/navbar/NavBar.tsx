import NavBarLink from "./NavBarLink";
import { allHeadings } from "@/Config";

const NavBar = ({lang} : {lang : string}) => {

    return (
        <nav className="bg-gradient-to-r from-logored/50 to-orange-900/50 absolute left-0 right-0 z-10">
            <div className="sm:mx-[15%] max-w-screen-xl flex flex-wrap items-center justify-between py-0">
                <NavBarLink href="/" 
                    sections={[[allHeadings[lang == "en" ? "en" : "fr"]["aboutUs"], "aboutus"], [allHeadings[lang == "en" ? "en" : "fr"]["activities"], "activities"]]}>
                {allHeadings[lang == "en" ? "en" : "fr"]["navbarHome"]}
                </NavBarLink>
                <NavBarLink href="/parents" 
                    sections={[[allHeadings[lang == "en" ? "en" : "fr"]["resources"], "resources"],[allHeadings[lang == "en" ? "en" : "fr"]["contactUsParents"], "contactus"]]}>
                {allHeadings[lang == "en" ? "en" : "fr"]["navbarParents"]}
                </NavBarLink>
                <NavBarLink href="/volunteers" 
                    sections={[[allHeadings[lang == "en" ? "en" : "fr"]["whyVolunteer"], "whyvolunteer"], [allHeadings[lang == "en" ? "en" : "fr"]["becomeTeacher"], "becometeacher"], [allHeadings[lang == "en" ? "en" : "fr"]["contactUsVolunteer"], "contactus"]]}>
                {allHeadings[lang == "en" ? "en" : "fr"]["navbarVolunteers"]}
                </NavBarLink>
                <NavBarLink href="/youtube" 
                    sections={[[allHeadings[lang == "en" ? "en" : "fr"]["level1"], "level1"], [allHeadings[lang == "en" ? "en" : "fr"]["level2"], "level2"], [allHeadings[lang == "en" ? "en" : "fr"]["level3"], "level3"]]}>
                {allHeadings[lang == "en" ? "en" : "fr"]["navbarYoutube"]}
                </NavBarLink>
            </div>
        </nav>  
    )
}

export default NavBar;