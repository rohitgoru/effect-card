"use client";
import React, { useEffect, useState } from "react";
import { HeaderArrowIcon } from "./Icons";
import Link from "next/link";
import { dropdownContent } from "./Helper";

const Dropdown = ({ isVisible, items }) => (
  <div
    className={`
      absolute top-full sm:left-1/2 sm:-translate-x-1/2 sm:pt-4 sm:w-72 w-full z-50 transition-all duration-300 ease-out sm:px-0 px-2
      ${
        isVisible
          ? "opacity-100 scale-100"
          : "opacity-0 scale-95 pointer-events-none"
      }
    `}
  >
    <div className="bg-primary sm:rounded-xl rounded-lg drop-shadow-glow overflow-hidden">
      {items.map((dropItem, index) => (
        <Link
          key={index}
          href={dropItem.href}
          className="block sm:p-4 p-3 hover:bg-gray-700/50 transition-colors md:text-base text-sm leading-[150%] text-white font-medium font-rubik"
        >
          {dropItem.title}
        </Link>
      ))}
      <div className="sm:bg-punk bg-primary sm:p-4 p-3 cursor-pointer">
        <Link
          href="#"
          className="text-white md:text-base text-sm font-rubik leading-[150%] font-medium w-full"
        >
          View All Options →
        </Link>
      </div>
    </div>
  </div>
);

const HeaderLiItems = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleDropdownToggle = () => {
    if (isMobile) {
      setIsOpen((prev) => !prev);
    }
  };

  return (
    <div
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => !isMobile && setIsHovered(false)}
      className="relative group flex sm:flex-row flex-col sm:items-center"
    >
      {item.href ? (
        <li className="group relative">
          <Link
            href={item.href}
            className="text-white font-semibold md:text-base text-sm transition-colors duration-200 font-rubik sm:p-0 p-3 link-style"
          >
            {item.name}
          </Link>
          <span className="footer-li-hover"></span>
        </li>
      ) : (
        <button
          onClick={handleDropdownToggle}
          className="text-white sm:p-0 p-3 md:text-base text-sm font-rubik font-semibold transition-colors duration-200 flex items-center gap-2"
        >
          {item.name}
          <HeaderArrowIcon isHovered={isOpen || isHovered} />
        </button>
      )}

      {item.hasArrow && dropdownContent[item.name] && (
        <Dropdown
          isVisible={isMobile ? isOpen : isHovered}
          items={dropdownContent[item.name]}
        />
      )}
    </div>
  );
};

export default HeaderLiItems;
