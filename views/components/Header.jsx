"use client";
import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { CgMenu } from "react-icons/cg";
// import Logo from "./Logo";

const navItems = [
    { name: "Features", href: "#features" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Pricing", href: "#pricing" },
    { name: "Docs", href: "#docs" }
];

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflowY = "auto";
        }
    }, [mobileMenuOpen]);

    return (
        <header className="bg-zinc-900 text-zinc-100 shadow-md sticky top-0 left-0 w-full z-[9999]">
            {mobileMenuOpen && (
                <div className="fixed inset-0 bg-transparent" onClick={() => setMobileMenuOpen(false)}></div>
            )}
            <div className="max-w-screen-lg mx-auto flex justify-between p-4 items-center">
                {/* <Logo /> */}
                <h3>eStoresAPI</h3>
                <nav
                    style={{ transformOrigin: "top right" }}
                    className={`${
                        mobileMenuOpen ? "max-md:scale-100" : "max-md:scale-0"
                    } text-sm font-semibold max-md:fixed max-md:right-4 max-md:top-4 max-md:z-[9999] max-md:bg-zinc-950 max-md:shadow-md max-md:rounded-lg max-md:p-4 max-md:flex max-md:flex-col max-md:space-x-0 max-md:min-w-[200px] transition-all duration-300 ease-in-out`}
                >
                    <ul className="space-x-4 max-md:space-x-0 max-md:flex max-md:flex-col max-md:space-y-4">
                        {navItems.map((link) => (
                            <a onClick={() => setMobileMenuOpen(false)} key={link.name} href={link.href}>
                                {link.name}
                            </a>
                        ))}
                    </ul>
                </nav>
                <div className="flex items-center space-x-1">
                    <Button
                        as={Link}
                        href="/auth/login"
                        size="md"
                        className="bg-blue-600 hover:bg-blue-700 text-zinc-100"
                    >
                        Sign In
                    </Button>
                    <button onClick={() => setMobileMenuOpen(true)} className="border-none md:hidden p-4" aria-hidden>
                        <CgMenu />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
