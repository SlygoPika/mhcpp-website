import React, { FunctionComponent } from "react";
import Link from "next/link";

type NavBarLinkProps = {
    href : URL | string;
    children: React.ReactNode;
};

const NavBarLink : FunctionComponent<NavBarLinkProps>= ({ href, children }) => {
    return (
        <div className="hover:bg-red-900   rounded-lg grow justify-center">
            <Link href={href} >
                <p className="text-lightred py-3 text-lg font-medium text-center">{children}</p>
            </Link>
        </div>
    );
}

export default NavBarLink;