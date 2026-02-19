"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import HeaderLiItems from "./HeaderLiItems";
import { ConnectWalletIcon2, HamburgerIcon } from "./Icons";
import Sidebar from "./Sidebar";
import { menuItems } from "./Helper";

const Header = () => {
  const [issidebarShow, setIsSidebarShow] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = issidebarShow ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [issidebarShow]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-primary shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between gap-2 section-layout py-[17px] w-full">
        <Link href={"/"}>
          <Image
            className="object-cover md:max-w-[168px] max-w-[130px] w-full sm:block hidden"
            src={"/images/svg/Logo.svg"}
            alt="logo"
            width={168}
            height={57}
          />
          <Image
            className="object-cover max-w-20 w-full block sm:hidden"
            src={"/images/svg/mobile-logo.svg"}
            alt="logo"
            width={80}
            height={57}
          />
        </Link>
        <ul className="sm:flex hidden items-center md:gap-6 gap-3 relative">
          {menuItems.map((item, index) => (
            <HeaderLiItems item={item} key={index} />
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <button className="update-Primary-btn max-w-[202px] ">
              Connect Wallet
              <ConnectWalletIcon2 />
            </button>
          </div>
          <button
            onClick={() => setIsSidebarShow(true)}
            className="flex sm:hidden"
          >
            <HamburgerIcon />
          </button>
          <Sidebar
            isOpen={issidebarShow}
            onClose={() => setIsSidebarShow(false)}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
