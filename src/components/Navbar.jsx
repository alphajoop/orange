import { useEffect, useRef, useState } from 'react';
import Logo from '../assets/orange.svg';
import { Moon, Sun } from '../utils/icons';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light'
  );
  const dropdownRef = useRef(null);
  const element = document.documentElement; // access to html element

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', closeDropdown);
    return () => {
      document.removeEventListener('mousedown', closeDropdown);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    if (theme === 'dark') {
      element.classList.add('dark');
    } else {
      element.classList.remove('dark');
    }
  }, [theme, element]);

  const setDarkTheme = () => {
    setTheme('dark');
    setIsOpen(false);
  };

  const setLightTheme = () => {
    setTheme('light');
    setIsOpen(false);
  };

  return (
    <header>
      <nav className="bg-black fixed w-full top-0 start-0 border-b border-b-gray-700 z-50 py-2">
        <div className="container max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
          <a
            href=""
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={Logo} className="h-10" alt="Orange Logo" />
            <span className="self-center text-3xl font-semibold whitespace-nowrap text-white">
              Orange
            </span>
          </a>
          <div className="flex relative">
            <button
              type="button"
              onClick={toggleDropdown}
              className="inline-flex items-center p-2 text-sm font-medium text-center rounded-lg hover:bg-transparent focus:ring-transparent focus:outline-none"
            >
              {theme === 'dark' ? (
                <Moon className={'w-7 h-7 md:w-8 md:h-8 text-white'} />
              ) : (
                <Sun className={'w-7 h-7 md:w-8 md:h-8 text-white'} />
              )}
              <svg
                className="w-2.5 h-2.5 ms-2 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            <div
              ref={dropdownRef}
              className={`${
                isOpen ? 'block' : 'hidden'
              } absolute bg-white rounded-lg shadow w-44 top-11 right-0`}
            >
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownMenuIconButton"
              >
                <li onClick={setDarkTheme}>
                  <button
                    type="button"
                    className="flex items-center w-full p-2 text-base font-medium text-gray-900 bg-white rounded-lg hover:bg-transparent focus:ring-transparent focus:outline-none"
                  >
                    <Moon className={'w-6 md:w-7 h-6 md:h-7 mr-2'} />
                    Dark
                  </button>
                </li>
                <li onClick={setLightTheme}>
                  <button
                    type="button"
                    className="flex items-center w-full p-2 text-base font-medium text-gray-900 bg-white rounded-lg hover:bg-transparent focus:ring-transparent focus:outline-none"
                  >
                    <Sun className={'w-6 md:w-7 h-6 md:h-7 mr-2'} />
                    Light
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
