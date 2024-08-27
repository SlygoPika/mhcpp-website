"use client";

import React, { FunctionComponent } from "react";
import Link from "next/link";
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
} from "@material-tailwind/react";

type NavBarLinkProps = {
    href : URL | string;
    sections?: string[][];
    children: React.ReactNode;
};

const NavBarLink : FunctionComponent<NavBarLinkProps>= ({ href, sections, children }) => {
    return (
        <div className="transition ease-in-out duration-300 hover:bg-red-900 rounded-lg grow justify-center">
            {sections != null ? (
                <Menu allowHover
                  animate={{
                    mount: { y: 0 },
                    unmount: { y: 25 },
                    }}
              > 
                <MenuHandler>
                    <Link href={href} >
                        <p className="text-lightred py-3 text-lg font-medium text-center">{children}</p>
                    </Link>
                </MenuHandler>
                    <MenuList placeholder={<></>} className="w-1/5 bg-logored/65 p-0 border-transparent">
                        {sections.map((section, index) => (
                            <MenuItem placeholder={<></>} key={index} className="text-lightred text-base font-medium bg-logored/0 m-0 rounded-none focus:bg-red-900 focus:text-lightred">
                                <Link href={`${href}#${section[1]}`} >
                                    <p>{section[0]}</p>
                                </Link>
                            </MenuItem>
                        ))}
                    </MenuList>
              </Menu>
            ) : (
            <Link href={href} >
                <p className="text-lightred py-3 text-lg font-medium text-center">{children}</p>
            </Link>
            )}

        </div>
    );
}

export default NavBarLink;