import React from "react";
import { Link } from 'react-router-dom';

const Header = ({handleTheme, theme}) => {
    return (
        <nav className="bg-orange-500 dark:bg-slate-900 dark:text-white">
            <ul className="flex flex-row justify-between p-6">
                <div className="list-none">
                    <li className="font-bold text-xl">To-Do</li>
                </div>
                <div className="flex flex-row no-underline">
                    <Link className="font-bold text-xl no-underline cursor-pointer pr-4 pt-1" to="/"><li>List</li></Link>
                    <Link className="font-bold text-xl no-underline cursor-pointer pr-4 pt-1" to="/add"><li>Add</li></Link>
                    <button
                        className="font-bold text-xl bg-amber-900 text-white px-2 py-1 dark:bg-gray-100 dark:text-black cursor-pointer rounded-lg hover:shadow-2xl" 
                        onClick={handleTheme} 
                    >
                        {theme === 'dark' ? 'Dark' : 'Light'}
                    </button>
                </div>
            </ul>
        </nav>
    )
};

export default Header;