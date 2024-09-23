"use client"
import { useState, useEffect } from "react";

import NavBarLink from "./NavBarLink";
import { allHeadings } from "@/Config";

const NavBar = () => {
    const [userLang, setUserLang] = useState("en");
    useEffect(() => {
    if (navigator.language.includes("fr"))
      {
          setUserLang("fr");
      }
    }, []);

    return (
        <nav className="bg-gradient-to-r from-logored/50 to-orange-900/50 absolute left-0 right-0 z-10">
            <div className="sm:mx-[15%] max-w-screen-xl flex flex-wrap items-center justify-between py-0">
                <NavBarLink href="/" 
                    sections={[[allHeadings[userLang == "en" ? "en" : "fr"]["aboutUs"], "aboutus"], [allHeadings[userLang == "en" ? "en" : "fr"]["activities"], "activities"]]}>
                {allHeadings[userLang == "en" ? "en" : "fr"]["navbarHome"]}
                </NavBarLink>
                <NavBarLink href="/parents" 
                    sections={[[allHeadings[userLang == "en" ? "en" : "fr"]["resources"], "resources"],[allHeadings[userLang == "en" ? "en" : "fr"]["contactUsParents"], "contactus"]]}>
                {allHeadings[userLang == "en" ? "en" : "fr"]["navbarParents"]}
                </NavBarLink>
                <NavBarLink href="/volunteers" 
                    sections={[[allHeadings[userLang == "en" ? "en" : "fr"]["whyVolunteer"], "whyvolunteer"], [allHeadings[userLang == "en" ? "en" : "fr"]["becomeTeacher"], "becometeacher"], [allHeadings[userLang == "en" ? "en" : "fr"]["contactUsVolunteer"], "contactus"]]}>
                {allHeadings[userLang == "en" ? "en" : "fr"]["navbarVolunteers"]}
                </NavBarLink>
                <NavBarLink href="/youtube" 
                    sections={[[allHeadings[userLang == "en" ? "en" : "fr"]["level1"], "level1"], [allHeadings[userLang == "en" ? "en" : "fr"]["level2"], "level2"], [allHeadings[userLang == "en" ? "en" : "fr"]["level3"], "level3"]]}>
                {allHeadings[userLang == "en" ? "en" : "fr"]["navbarYoutube"]}
                </NavBarLink>
            </div>
        </nav>  
    )
}

export default NavBar;