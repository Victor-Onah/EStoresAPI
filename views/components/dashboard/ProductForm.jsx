"use client";
import {
    Autocomplete,
    AutocompleteItem,
    Button,
    Form,
    Input,
    Popover,
    PopoverContent,
    PopoverTrigger,
    Select,
    SelectItem,
    Textarea
} from "@nextui-org/react";
import { useState } from "react";
import { CgInfo } from "react-icons/cg";
import currencies from "../../lib/currencies.json";

export default function ProductForm() {
    const initialState = {
        name: "",
        prices: "",
        description: "",
        brand: "",
        price: "",
        quantity: "",
        currency: "",
        promotions: {
            type: ""
        }
    };
    const [form, setForm] = useState(initialState);
    const animals = [
        { label: "Cat", key: "cat", description: "The second most popular pet in the world" },
        { label: "Dog", key: "dog", description: "The most popular pet in the world" },
        { label: "Elephant", key: "elephant", description: "The largest land animal" },
        { label: "Lion", key: "lion", description: "The king of the jungle" },
        { label: "Tiger", key: "tiger", description: "The largest cat species" },
        { label: "Giraffe", key: "giraffe", description: "The tallest land animal" },
        {
            label: "Dolphin",
            key: "dolphin",
            description: "A widely distributed and diverse group of aquatic mammals"
        },
        { label: "Penguin", key: "penguin", description: "A group of aquatic flightless birds" },
        { label: "Zebra", key: "zebra", description: "A several species of African equids" },
        {
            label: "Shark",
            key: "shark",
            description: "A group of elasmobranch fish characterized by a cartilaginous skeleton"
        },
        {
            label: "Whale",
            key: "whale",
            description: "Diverse group of fully aquatic placental marine mammals"
        },
        { label: "Otter", key: "otter", description: "A carnivorous mammal in the subfamily Lutrinae" },
        { label: "Crocodile", key: "crocodile", description: "A large semiaquatic reptile" }
    ];

    return (
        <Form
            validationBehavior="native"
            // onSubmit={handleSubmit}
            className="space-y-4 pb-4"
        >
            <div className="space-y-3">
                <h3 className="font-semibold">Product Info</h3>
                <Input
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    isRequired
                    radius="md"
                    labelPlacement="inside"
                    label="Name"
                    type="text"
                    name="name"
                />
                <div className="grid grid-cols-2 gap-3">
                    <Input
                        value={form.price}
                        onChange={(e) => setForm({ ...form, price: e.target.value })}
                        isRequired
                        radius="md"
                        labelPlacement="inside"
                        label="Price"
                        type="number"
                        name="price"
                    />
                    <Input
                        value={form.quantity}
                        onChange={(e) => setForm({ ...form, quantity: e.target.value })}
                        isRequired
                        radius="md"
                        labelPlacement="inside"
                        label="Quantity"
                        type="number"
                        name="quantity"
                    />
                </div>
                <Autocomplete
                    isRequired
                    defaultItems={currencies}
                    label="Currency"
                    placeholder="Select the currency you sell in"
                >
                    {(item) => (
                        <AutocompleteItem value={item.key} key={item.key}>
                            {item.label}
                        </AutocompleteItem>
                    )}
                </Autocomplete>
                <div className="grid grid-cols-2 gap-3">
                    <Input
                        value={form.brand}
                        onChange={(e) => setForm({ ...form, brand: e.target.value })}
                        radius="md"
                        labelPlacement="inside"
                        label="Brand"
                        name="brand"
                    />
                    <Input
                        value={form.category}
                        onChange={(e) => setForm({ ...form, category: e.target.value })}
                        radius="md"
                        labelPlacement="inside"
                        label="Category"
                        name="category"
                    />
                </div>
                <Textarea
                    value={form.description}
                    onChange={(e) => setForm({ ...form, description: e.target.value })}
                    radius="md"
                    labelPlacement="inside"
                    label="Description"
                    name="description"
                />
            </div>
            <div className="w-full space-y-3">
                <h3 className="font-semibold">Images</h3>
                <div className="grid grid-cols-2 gap-3 min-w-full">
                    <Input
                        isRequired
                        radius="md"
                        labelPlacement="inside"
                        label="Height"
                        type="file"
                        accept="image/*"
                        name="height"
                        errorMessage="Select at least one image"
                        endContent={
                            <Popover size="sm">
                                <PopoverTrigger>
                                    <button type="button">
                                        <CgInfo />
                                    </button>
                                </PopoverTrigger>
                                <PopoverContent>
                                    <p>Select the product's images</p>
                                </PopoverContent>
                            </Popover>
                        }
                    />
                    <Input
                        value={form.color}
                        onChange={(e) => setForm({ ...form, color: e.target.value })}
                        radius="md"
                        labelPlacement="inside"
                        label="Color"
                        type="color"
                        name="color"
                        defaultValue="black"
                    />
                </div>
                <div className="grid grid-cols-2 gap-3 min-w-full"></div>
            </div>
            <div className="w-full space-y-3">
                <h3 className="font-semibold">Promotions</h3>
                <div className="grid grid-cols-2 gap-4 min-w-full">
                    <Select
                        onChange={(e) => setForm({ ...form, promotions: { ...form.promotions, type: e.target.value } })}
                        label="Promo Type"
                    >
                        {[
                            { value: "Discount", key: "Discount" },
                            { value: "Buy and get one free", key: "BOGO" },
                            { value: "Free shipping", key: "FreeShipping" }
                        ].map(({ key, value }) => (
                            <SelectItem key={key} value={key}>
                                {value}
                            </SelectItem>
                        ))}
                    </Select>
                    {form.promotions.type === "Discount" && (
                        <Input
                            isRequired
                            radius="md"
                            labelPlacement="inside"
                            label="Percentage"
                            type="number"
                            name="discount"
                        />
                    )}
                    {form.promotions.type === "BOGO" && (
                        <Input
                            isRequired
                            radius="md"
                            labelPlacement="inside"
                            label="Quantity"
                            type="number"
                            name="quantity"
                            endContent={
                                <Popover size="sm">
                                    <PopoverTrigger>
                                        <button type="button">
                                            <CgInfo />
                                        </button>
                                    </PopoverTrigger>
                                    <PopoverContent>
                                        <p>Quantity to buy before a customer becomes eligible for the promo.</p>
                                    </PopoverContent>
                                </Popover>
                            }
                        />
                    )}
                </div>
                <Textarea radius="md" labelPlacement="inside" label="Promo Description" name="promo-description" />
            </div>
            <div className="w-full space-y-3">
                <h3 className="font-semibold">Dimensions</h3>
                <div className="grid grid-cols-2 gap-3 min-w-full">
                    <Input
                        radius="md"
                        labelPlacement="inside"
                        label="Height"
                        type="number"
                        name="height"
                        endContent={
                            <Popover size="sm">
                                <PopoverTrigger>
                                    <button type="button">
                                        <CgInfo />
                                    </button>
                                </PopoverTrigger>
                                <PopoverContent>
                                    <p>Quantity to buy before a customer becomes eligible for the promo.</p>
                                </PopoverContent>
                            </Popover>
                        }
                    />
                    <Input
                        radius="md"
                        labelPlacement="inside"
                        label="Width"
                        type="number"
                        name="width"
                        endContent={
                            <Popover size="sm">
                                <PopoverTrigger>
                                    <button type="button">
                                        <CgInfo />
                                    </button>
                                </PopoverTrigger>
                                <PopoverContent>
                                    <p>Quantity to buy before a customer becomes eligible for the promo.</p>
                                </PopoverContent>
                            </Popover>
                        }
                    />
                </div>
            </div>
            <Button className="w-full bg-blue-600 text-white" type="submit">
                CREATE PRODUCT
            </Button>
        </Form>
    );
}
