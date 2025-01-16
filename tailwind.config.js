import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}", "./views/**/*.jsx"],
    theme: {
        extend: {}
    },
    plugins: [nextui()]
};
