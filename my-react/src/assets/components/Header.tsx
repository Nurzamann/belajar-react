import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-gray-900 text-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-xl font-bold">MyPortfolio</h1>
        <nav>
          <ul className="flex gap-6 text-sm font-medium">
            <li>
              <a href="#home" className="hover:text-blue-400 transition duration-300">Home</a>
            </li>
            <li>
              <a href="#project" className="hover:text-blue-400 transition duration-300">Project</a>
            </li>
            <li>
              <a href="#about" className="hover:text-blue-400 transition duration-300">About</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-400 transition duration-300">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
