import { NextUIProvider } from "@nextui-org/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages";
import Header from "./components/Header";
import Footer from "./components/Footer";
import DocsLayout from "./pages/docs/Layout";
import DocsHome from "./pages/docs";

export default function App() {
    return (
        <NextUIProvider>
            <BrowserRouter>
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
                    <Route path="/docs" element={<DocsLayout />}>
                        <Route index element={<DocsHome />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </NextUIProvider>
    );
}
