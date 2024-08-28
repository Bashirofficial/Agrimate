import React from 'react'
import { headerLogo } from "../assets/images";
import { navLinks } from '../constants';
import { hamburger } from '../assets/icons';
import { Link, useNavigate } from 'react-router-dom'
function Nav() {
    const navigate = useNavigate(); // Initialize useNavigate

    const handleKnowMoreClick1 = () => {
    navigate('/SignUp'); // Navigate to the login page
    };

    const handleKnowMoreClick2 = () => {
    navigate('/LogIn'); // Navigate to the login page
    };
  return (
    <header className="shadow   top-0 padding-x py-2  z-50 ">
        <nav className="flex flex-wrap justify-between items-center max-container">
            <a href="/">
            <img 
                src={headerLogo}
                alt='Logo'
                width={129}
                height={29}
            />
             </a>

             <div className="flex items-center lg:order-2">
                        <Link
                            to="/LogIn"
                            className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                            onClick={handleKnowMoreClick2}
                        >
                            Log in
                        </Link>
                        <Link
                            to="/SignUp"
                            className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                            onClick={handleKnowMoreClick1}
                        >
                            Get started
                        </Link>
             </div> 
            <ul className="flex flex-1 justify-center items-center gap-16 max-lg:hidden font-bold">
             {
                navLinks.map((item) => (
                <li key={item.label}>
                    <a
                        href={item.href}
                        className="block py-2 pr-4 pl-3 duration-200 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-green-800 hover:underline lg:p-0"
                    >
                            {item.label}
                    </a>                            
                </li>
                ))
            }
            </ul>
            <div className="hidden max-lg:block">
                <img
                    src={hamburger}
                    alt="Hamburger"
                    width={25}
                    height={25}
                />
            </div>
        </nav>
    </header>        

  )
}

export default Nav