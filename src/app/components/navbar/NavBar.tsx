import React from "react";
import NavBarLink from "./NavBarLink";

const NavBar = () => {
    return (
        <nav className="bg-gradient-to-r from-logored/50 to-orange-900/50 absolute left-0 right-0 z-10">
            <div className="mx-[15%] max-w-screen-xl flex flex-wrap items-center justify-between py-0">
                <NavBarLink href="/" sections={[["About Us", "aboutus"], ["Activities", "activities"]]}>Home</NavBarLink>
                <NavBarLink href="/parents" sections={[["Resources", "resources"],["Contact Us", "contactus"]]}>Parents</NavBarLink>
                <NavBarLink href="/volunteers" sections={[["Why Volunteer?", "whyvolunteer"], ["Become a Teacher", "becometeacher"], ["Contact Us", "contactus"]]}>Volunteers</NavBarLink>
                <NavBarLink href="/youtube" sections={[["Level 1", "level1"], ["Level 2", "level2"], ["Level 3", "level3"]]}>Youtube</NavBarLink>
            </div>
        </nav>  
    )
}

export default NavBar;