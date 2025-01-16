"use client";
import { Button } from "@nextui-org/react";
import { CgBell, CgUser } from "react-icons/cg";
import Logo from "../Logo";

export default function Header() {
    return (
        <header className="bg-white h-20 shadow-sm sticky top-0 z-50 px-4 flex items-center justify-between">
            <Logo />
            <div className="flex items-center gap-5">
                <button>
                    <CgBell className="text-xl" />
                </button>
                <Button variant="ghost" className="flex items-center gap-1 border-none">
                    <CgUser className="text-lg" /> Onah Victor
                </Button>
            </div>
        </header>
    );
}
