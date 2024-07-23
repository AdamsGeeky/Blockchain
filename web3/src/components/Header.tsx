"use client"; // This directive marks the component as a Client Component
import { useState, useEffect } from "react";
import { FaGithub, FaSun, FaMoon } from "react-icons/fa";
import Navbar from "./navbar/Navbar";
import MobileNav from "./navbar/Mobile";
import Link from "next/link";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [starsCount, setStarsCount] = useState<number | null>(null);

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    fetch("https://api.github.com/repos/AdamsGeeky/Blockchain")
      .then((response) => response.json())
      .then((data) => setStarsCount(data.stargazers_count))
      .catch((error) => console.error("Error fetching GitHub stars:", error));
  }, []);

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    } else {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    }
    setDarkMode(!darkMode);
  };

  return (
    <header
      className={`flex justify-between items-center p-4 space-x-4 sticky top-0 border-b-2 0 z-40 ${
        isScrolled
          ? "backdrop-blur-md bg-opacity-70 bg-transparent"
          : "bg-white dark:bg-black"
      }`}
    >
      <div className="flex items-center space-x-4">
        <div className="flex items-center sm:hidden">
          <MobileNav />
        </div>
        <Link
          href="/"
          className="text-2xl font-bold cursor-pointer hidden sm:block"
        >
          Web3 
        </Link>
        <div className="hidden sm:block">
          <Navbar  />
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <a
          href="https://github.com/AdamsGeeky/Blockchain"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-2xl"
          title="GitHub repository"
        >
          <FaGithub />
          {starsCount !== null && (
            <span className="text-xl">{starsCount} ★</span>
          )}
        </a>
        <button
          onClick={toggleDarkMode}
          className="text-2xl"
          title="Dark/Light mode"
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </header>
  );
}