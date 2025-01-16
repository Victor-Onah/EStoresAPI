"use client";
import { Select, SelectItem } from "@nextui-org/react";
import { Link } from "react-router-dom";
import {
    CgChart,
    CgHome,
    CgLogOut,
    CgOptions,
    CgShoppingBag,
    CgShoppingCart,
    CgUser,
    CgUserList
} from "react-icons/cg";

export default function Aside() {
    return (
        <aside className="top-20 bg-white w-72 bottom-0 fixed shadow-sm overflow-y-auto space-y-6 text-small">
            <div className="space-y-2">
                <div className="p-4">
                    <Select size="md" label="Select store">
                        {["Rex Collection"].map((store) => (
                            <SelectItem key={store}>{store}</SelectItem>
                        ))}
                    </Select>
                </div>
                <h4 className="text-sm font-semibold px-4">Menu</h4>
                <div className="flex flex-col">
                    <Link className="p-2 pl-4 hover:bg-blue-100 flex items-center gap-3" href={"/dashboard"}>
                        <CgHome /> Dashboard
                    </Link>
                    <Link className="p-2 pl-4 hover:bg-blue-100 flex items-center gap-3" href={"/dashboard/products"}>
                        <CgShoppingBag /> Products
                    </Link>
                    <Link className="p-2 pl-4 hover:bg-blue-100 flex items-center gap-3" href={"/dashboard/orders"}>
                        <CgShoppingCart /> Orders
                    </Link>
                    <Link className="p-2 pl-4 hover:bg-blue-100 flex items-center gap-3" href={"/dashboard/users"}>
                        <CgUserList /> Users
                    </Link>
                    <Link className="p-2 pl-4 hover:bg-blue-100 flex items-center gap-3" href={"/dashboard/users"}>
                        <CgChart /> Analytics
                    </Link>
                </div>
            </div>
            <div className="pb-4">
                <h4 className="text-sm font-semibold px-4 py-2">Others</h4>
                <div className="flex flex-col">
                    <Link className="p-2 pl-4 hover:bg-blue-100 flex items-center gap-3" href={"/dashboard/products"}>
                        <CgOptions /> Settings
                    </Link>
                    <Link className="p-2 pl-4 hover:bg-blue-100 flex items-center gap-3" href={"/dashboard/orders"}>
                        <CgUser /> Profile
                    </Link>
                    <Link className="p-2 pl-4 hover:bg-red-100 flex items-center gap-3" href={"/dashboard/users"}>
                        <CgLogOut /> Logout
                    </Link>
                </div>
            </div>
        </aside>
    );
}
