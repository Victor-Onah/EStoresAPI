"use client";
import { Button, Modal, ModalBody, ModalContent, ModalHeader, useDisclosure } from "@nextui-org/react";
import ProductForm from "./ProductForm";
import { CgMathPlus } from "react-icons/cg";

export default function AddProductModal() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    return (
        <>
            <Button onPress={onOpen} className="flex items-center bg-blue-600 text-white gap-2">
                <CgMathPlus /> Add Product
            </Button>
            <Modal isOpen={isOpen} isDismissable={false} onOpenChange={onOpenChange} scrollBehavior="inside">
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader>
                                <div>
                                    <h2>New Product</h2>
                                    <p className="text-sm text-zinc-600 font-normal">
                                        Fill all the required fields to create a new product.
                                    </p>
                                </div>
                            </ModalHeader>
                            <ModalBody>
                                <ProductForm />
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
