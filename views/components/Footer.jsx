import { Link } from "react-router-dom";
import { FaDiscord, FaFacebook, FaGithub, FaXTwitter } from "react-icons/fa6";

const navigation = {
    main: [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Blog", href: "/blog" },
        { name: "Docs", href: "/docs" }
    ],
    social: [
        { name: "Facebook", href: "#", icon: <FaFacebook /> },
        { name: "Twitter", href: "#", icon: <FaXTwitter /> },
        { name: "Discord", href: "#", icon: <FaDiscord /> },
        { name: "GitHub", href: "#", icon: <FaGithub /> }
    ]
};

const Footer = () => (
    <footer className="bg-gray-900 relative">
        <div className="mx-auto max-w-7xl  p-6">
            <nav className="-mb-6 flex justify-center space-x-12" aria-label="Footer">
                {navigation.main.map((item) => (
                    <div key={item.name} className="pb-6">
                        <Link href={item.href} className="text-sm leading-6 text-gray-400 hover:text-white">
                            {item.name}
                        </Link>
                    </div>
                ))}
            </nav>
            <div className="mt-10 flex justify-center space-x-10">
                {navigation.social.map((item) => (
                    <Link key={item.name} href={item.href} className="text-gray-400 hover:text-gray-300">
                        <span className="sr-only">{item.name}</span>
                        {item.icon}
                    </Link>
                ))}
            </div>
            <p className="mt-10 text-center text-xs leading-5 text-gray-400">
                &copy; {new Date().getFullYear()} eStoresAPI, Inc. All rights reserved.
            </p>
        </div>
    </footer>
);

export default Footer;
