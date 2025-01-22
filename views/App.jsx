import { NextUIProvider } from "@nextui-org/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages";
import Header from "./components/Header";
import Footer from "./components/Footer";
import DocsLayout from "./pages/docs/Layout";
import DocsHome from "./pages/docs";
import StoreAPIDocHome from "./pages/docs/store";
import NameUpdateDoc from "./pages/docs/store/NameUpdateDoc";
import DescriptionUpdateDoc from "./pages/docs/store/DescriptionUpdateDoc";
import ExtrasUpdateDoc from "./pages/docs/store/ExtrasUpdateDoc";
import DeleteStoreDoc from "./pages/docs/store/DeleteStoreDoc";
import FetchAllStoresDoc from "./pages/docs/store/FetchAllStoresDoc";
import FetchSingleStoreDoc from "./pages/docs/store/FetchSingleStoreDoc";
import ProductsAPIDocHome from "./pages/docs/products";

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
                        <Route path={"stores"} element={<StoreAPIDocHome />} />
                        <Route path={"stores/update/name"} element={<NameUpdateDoc />} />
                        <Route path={"stores/update/description"} element={<DescriptionUpdateDoc />} />
                        <Route path={"stores/update/extras"} element={<ExtrasUpdateDoc />} />
                        <Route path={"stores/delete"} element={<DeleteStoreDoc />} />
                        <Route path={"stores/get/all"} element={<FetchAllStoresDoc />} />
                        <Route path={"stores/get/single"} element={<FetchSingleStoreDoc />} />
                        <Route path={"products"} element={<ProductsAPIDocHome />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </NextUIProvider>
    );
}
