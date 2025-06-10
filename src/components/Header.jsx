import React from 'react';
import logo from "../assets/coffee.jpg"
import { NavLink } from 'react-router';
const Header = () => {
    return (
        <header className="bg-[#1c1a1a] py-4 px-6 mb-5 shadow-md">
            <div className="max-w-6xl mx-auto flex items-center justify-center gap-3">
                <NavLink to="/"><img src={logo} alt="Espresso Emporium Logo" className="w-8 h-8" /></NavLink>
                <h1 className="text-white text-2xl font-cursive tracking-wide">
                    Espresso Emporium
                </h1>
            </div>
        </header>
    );
};

export default Header;