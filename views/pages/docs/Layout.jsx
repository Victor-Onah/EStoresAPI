import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";

export default function DocsLayout() {
    return (
        <div className="bg-black text-gray-100">
            <aside className="fixed left-0 w-60 bg-zinc-900 top-0 bottom-0"></aside>
            <div className="ml-60">
                <main className="py-12 px-6 min-h-screen">
                    <Outlet />
                </main>
                <Footer />
            </div>
        </div>
    );
}
