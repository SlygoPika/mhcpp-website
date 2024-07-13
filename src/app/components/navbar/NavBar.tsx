import React from "react";
import NavBarLink from "./NavBarLink";

const NavBar = () => {
    return (
        <nav className="bg-gradient-to-r from-logored/50 to-orange-900/50 absolute left-0 right-0 z-10">
            <div className="mx-[15%] max-w-screen-xl flex flex-wrap items-center justify-between py-0">
                <NavBarLink href="/">Home</NavBarLink>
                <NavBarLink href="/">Parents</NavBarLink>
                <NavBarLink href="/">Volunteers</NavBarLink>
                <NavBarLink href="/">Youtube</NavBarLink>
            </div>
        </nav>  
    )
}

export default NavBar;