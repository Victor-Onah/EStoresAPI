import { NextUIProvider } from "@nextui-org/react";
import { HashRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
    return (
        <NextUIProvider>
            <HashRouter>
                <Routes>
                    <Route
                        index
                        element={
                            <>
                                <Header />
                                <HomePage />
                                <Footer />
                            </>
                        }
                    />
                </Routes>
            </HashRouter>
        </NextUIProvider>
    );
}
