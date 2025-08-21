import React from "react";

export default function Header() {
  return (
    <header className="w-full bg-white">
      <nav className="max-w-6xl mx-auto px-6 py-16">
        <ul className="flex justify-center space-x-16">
          <li>
            <button className="text-gray-700 hover:text-teal-500 font-medium transition">
              About Me
            </button>
          </li>
          <li>
            <button className="text-gray-700 hover:text-teal-500 font-medium transition">
              Skills
            </button>
          </li>
          <li>
            <button className="text-gray-700 hover:text-teal-500 font-medium transition">
              Projects
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
