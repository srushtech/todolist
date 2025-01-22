import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-60 backdrop-blur-lg shadow-md">
            <div className="container mx-auto flex items-center justify-between px-6 py-4">
                {/* Logo */}
                <a
                    href="https://srushtikshirsagar.caygnus.site/#home"
                    className="text-3xl font-bold text-white hover:scale-110 transform transition duration-300"
                >
                    Srushti <span className="text-teal-400">Kshirsagar</span>
                </a>

                {/* Desktop Menu */}
                <nav className="hidden md:flex space-x-8">
                    <a
                        href="https://srushtikshirsagar.caygnus.site/#home"
                        className="text-white text-lg font-medium transition hover:text-teal-400 hover:border-b-2 hover:border-teal-400"
                    >
                        Home
                    </a>
                    <a
                        href="https://srushtikshirsagar.caygnus.site/#about"
                        className="text-white text-lg font-medium transition hover:text-teal-400 hover:border-b-2 hover:border-teal-400"
                    >
                        About
                    </a>
                    <a
                        href="https://srushtikshirsagar.caygnus.site/#projects"
                        className="text-white text-lg font-medium transition hover:text-teal-400 hover:border-b-2 hover:border-teal-400"
                    >
                        Projects
                    </a>
                    <a
                        href="https://srushtikshirsagar.caygnus.site/#contact"
                        className="text-white text-lg font-medium transition hover:text-teal-400 hover:border-b-2 hover:border-teal-400"
                    >
                        Contact
                    </a>
                </nav>

                {/* Mobile Menu Icon */}
                <div className="md:hidden text-teal-400 text-3xl cursor-pointer" onClick={toggleMenu}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <nav className="md:hidden bg-black bg-opacity-80">
                    <ul className="flex flex-col items-center space-y-6 py-6">
                        <li>
                            <a
                                href="#home"
                                className="text-white text-xl font-medium transition hover:text-teal-400"
                                onClick={toggleMenu}
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="#aboutme"
                                className="text-white text-xl font-medium transition hover:text-teal-400"
                                onClick={toggleMenu}
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="#projects"
                                className="text-white text-xl font-medium transition hover:text-teal-400"
                                onClick={toggleMenu}
                            >
                                Projects
                            </a>
                        </li>
                        <li>
                            <a
                                href="#contact"
                                className="text-white text-xl font-medium transition hover:text-teal-400"
                                onClick={toggleMenu}
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
            )}
        </header>
    );
};

export default Navbar;
