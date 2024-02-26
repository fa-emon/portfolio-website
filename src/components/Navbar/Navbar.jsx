import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    const navLinks = [
        { to: '/', text: 'About' },
        { to: '/learning', text: 'Learning' },
        { to: '/projects', text: 'Projects' },
        { to: '/contact', text: 'Contact' },
    ];

    const navOptions = navLinks.map((link) => (
        <li key={link.to}>
            <Link
                to={link.to}
                onClick={closeMobileMenu}
                className="text-white px-4 py-2 block hover:bg-[#383e44] rounded-md secondary-font"
            >
                {link.text}
            </Link>
        </li>
    ));

    return (
        <nav className="p-4">
            <div className="container mx-auto flex items-center justify-between">
                {/* Portfolio on the left */}
                <div>
                    <Link
                        to="/"
                        className="text-white font-extrabold text-2xl hover:bg-[#383e44] rounded-md px-4 py-2 primary-font"
                    >
                        Portfolio
                    </Link>
                </div>

                {/* Hamburger icon for mobile */}
                <div className="lg:hidden">
                    <button
                        onClick={toggleMobileMenu}
                        className="text-white focus:outline-none"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </button>
                </div>

                {/* Navigation links */}
                <ul className={`lg:flex lg:space-x-4 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
                    {navOptions}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
