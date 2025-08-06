import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';


const Navbar = () => {
    const[IsOpen, setIsOpen] = useState(false);

   const toggleMenu = () => setIsOpen(!IsOpen);


    return (
        <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
                <div className="text-2xl font-bold text-gray-800">
                    <Link to="">E-commerce</Link>
                </div>
                <div className="hidden md:flex space-x-6 items-center">
                    <Link to="/" className="text-gray-600 hover:text-black">Home</Link>
                    <Link to="/" className="text-gray-600 hover:text-black">Shop</Link>
                    <Link to="/" className="text-gray-600 hover:text-black">Cart</Link>
                    <Link to="/" className="text-gray-600 hover:text-black">Profile</Link>                   
                </div>
                <div className="md:hidden">
                    <button onClick={toggleMenu}>
                        {IsOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {IsOpen && (
                <div className="md:hidden px-4 pb-4 space-y-2 bg-white shadow">
                    <Link to="/" className="block text-gray-600 hover:text-black" onClick={toggleMenu}>Home</Link>
                    <Link to="/" className="block text-gray-600 hover:text-black" onClick={toggleMenu}>Shop</Link>
                    <Link to="/" className="block text-gray-600 hover:text-black" onClick={toggleMenu}>Cart</Link>
                    <Link to="/" className="block text-gray-600 hover:text-black" onClick={toggleMenu}>Profile</Link>
                </div>
            )

            }
        </nav>
        
    )
}

export default Navbar