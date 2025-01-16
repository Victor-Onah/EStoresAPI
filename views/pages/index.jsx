"use client";
import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";
import {
    CgArrowRight,
    CgBolt,
    CgCode,
    CgQuote,
    CgSearch,
    CgServer,
    CgShield,
    CgShoppingBag,
    CgUserAdd
} from "react-icons/cg";
import Circles from "../components/Circles";

export default function HomePage() {
    return (
        <main className="bg-gradient-to-b from-blue-700 to-blue-900 min-h-[200vh] overflow-x-hidden -z-50">
            <Hero />
            <div className="p-4">
                <Features />
            </div>
            <HowItWorks />
            <div className="p-4">
                <Testimonials />
            </div>
            <FinalCTA />
        </main>
    );
}

const Hero = () => (
    <section className="py-20 px-4 sm:px-6 lg:px-8 text-center -z-1 flex justify-center items-center relative">
        <Circles />
        <div className="m-auto z-10">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6">
                Build E-Commerce Apps Faster, <br className="hidden sm:inline" />
                Without Backend Hassles
            </h1>
            <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto">
                Focus on designing great user experiences—we'll handle the backend. Create, manage, and scale e-commerce
                applications with ease using eStoresAPI.
            </p>
            <div className="flex justify-center space-x-4">
                <Link to={"/auth/register"}>
                    <Button size="lg" className="bg-blue-800 hover:bg-blue-700 text-zinc-100">
                        Get Started Free
                    </Button>
                </Link>
                <Link to={"/about"}>
                    <Button size="lg" variant="outline" className="bg-blue-950 text-white">
                        Learn More <CgArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </Link>
            </div>
        </div>
    </section>
);

const features = [
    {
        icon: <CgServer className="text-4xl text-blue-600" />,
        title: "No Backend Needed",
        description: "Skip server setups and CRUD logic—we handle it all."
    },
    {
        icon: <CgBolt className="text-4xl text-orange-600" />,
        title: "Powerful API",
        description: "Effortlessly manage stores, products, carts, and customers via our well-documented API."
    },
    {
        icon: <CgSearch className="text-4xl text-yellow-600" />,
        title: "Full-Text Search",
        description: "Add blazing-fast search functionality to your app with zero effort."
    },
    {
        icon: <CgShield className="text-4xl text-green-600" />,
        title: "Scalable & Secure",
        description: "Designed to grow with your business and keep your data safe."
    }
];

const Features = () => (
    <section
        id="features"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white max-w-screen-xl mx-auto rounded-3xl z-50 relative text-gray-800"
    >
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose eStoresAPI?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                    {feature.icon}
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                </div>
            ))}
        </div>
    </section>
);

const steps = [
    {
        icon: <CgUserAdd className="text-4xl" />,
        title: "Sign Up for Free",
        description: "Create an account and get your API keys."
    },
    {
        icon: <CgShoppingBag className="text-4xl" />,
        title: "Create Your Store",
        description: "Set up stores and manage products directly via the API."
    },
    {
        icon: <CgCode className="text-4xl" />,
        title: "Start Building",
        description: "Use our endpoints for CRUD operations, cart management, customer sign-up, and more."
    }
];

const HowItWorks = () => (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 text-gray-100">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                    <div className="bg-white text-blue-600 rounded-full p-4 mb-4">{step.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-200">{step.description}</p>
                </div>
            ))}
        </div>
    </section>
);

const Testimonials = () => (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white text-gray-800 max-w-screen-lg mx-auto rounded-3xl">
        <h2 className="text-3xl font-bold text-center mb-12">Trusted by Developers Worldwide</h2>
        <div className="max-w-3xl mx-auto">
            <blockquote className="text-center">
                <CgQuote className="text-blue-500 mx-auto text-4xl" />
                <p className="text-xl italic mb-4">
                    "The fastest way to launch e-commerce projects. eStoresAPI saves me hours of backend work!"
                </p>
                <footer className="text-gray-400">– Developer Testimonial</footer>
            </blockquote>
        </div>
    </section>
);

const FinalCTA = () => (
    <section className="py-20 px-4 sm:px-6 lg:px-8 text-center text-white">
        <h2 className="text-3xl font-bold mb-6">Ready to Build Smarter?</h2>
        <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-gray-100">
            Create Your Free Account
        </Button>
    </section>
);
