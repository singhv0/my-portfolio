import React from "react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent bg-opacity-80 backdrop-blur">
      <nav className="max-w-6xl mx-auto px-6 py-12">
        <ul className="flex justify-center space-x-16">
          <li>
            <button className="text-gray-200 hover:text-teal-500 font-medium transition">
              About Me
            </button>
          </li>
          <li>
            <button className="text-gray-200 hover:text-teal-500 font-medium transition">
              Skills
            </button>
          </li>
          <li>
            <button className="text-gray-200 hover:text-teal-500 font-medium transition">
              Projects
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
