import React from "react";
import './Header.css';

const Header = () => {
    return (
        <nav className="header-container">
            <ul className="list-container">
                <div className="list-container_logo">
                    {/* logo */}
                    <li>To-Do</li>
                </div>
                <div className="list-container_links">
                    <a href="/"><li>List</li></a>
                    <a href="/add"><li>Add</li></a>
                    <li>Theme</li>
                </div>
            </ul>
        </nav>
    )
};

export default Header;