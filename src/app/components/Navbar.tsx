"use client";
import React from "react";
import { useState } from "react";
import nav from "../css_style/nav.module.css";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { IoMenuOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";


const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = [
    { href: "/", name: "Home" },
    { href: "/about", name: "About" },
    { href: "/services", name: "Services" },
    { href: "/contact", name: "Contact" },
  ];

  return (
    <header className={nav.headTag}>
      <h1 className={nav.h1Tag}>CodeHub</h1>
      <nav className={`${nav.linkTag} md:flex`}>
        {toggleMenu.map((toggle, index) => (
          <Link
            href={toggle.href}
            key={index}
            className={`${nav.link} ${
              pathname === toggle.href ? "active" : ""
            }`}
          >
            {toggle.name}
          </Link>
        ))}
      </nav>

      {/*for Small Divice with toggle menu bar*/}
      <div className={nav.buttonTag}>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <RxCross2 size={20} /> : <IoMenuOutline size={20} />}
        </button>
      </div>

      {/* for mobile menu*/}
      {isOpen && (
        <div className={nav.SmallScreenMenu}>
          {toggleMenu.map((toggle, index) => (
            <Link
              href={toggle.href}
              key={index}
              className={`${nav.SmallScreenLink} ${
                pathname === toggle.href ? "active" : ""
              }`}
              onClick={() => setIsOpen(false)}
            >
              {toggle.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
