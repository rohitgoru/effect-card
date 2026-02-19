import Link from "next/link";
import HeaderLiItems from "./HeaderLiItems";
import { menuItems } from "./Helper";
import Image from "next/image";
import { ConnectWalletIcon2, CrossIcon } from "./Icons";

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <>
      <div
        className={`fixed inset-0 bg-black/50 transition-opacity duration-300 z-40 sm:hidden
          ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={onClose}
      />
      <div
        className={`fixed top-0 sm:hidden left-0 h-dvh overflow-hidden w-[320px] bg-punk z-50 transform transition-transform duration-300 ease-in-out p-4 flex flex-col gap-5
          ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex items-center justify-between">
          <Link href={"/"}>
            <Image
              className="object-cover max-w-20 w-full "
              src={"/images/svg/mobile-logo.svg"}
              alt=""
              width={80}
              height={57}
            />
          </Link>
          <button onClick={onClose}>
            <CrossIcon />
          </button>
        </div>
        <ul className="flex flex-col md:gap-6 gap-2 relative overflow-auto grow  py-3">
          {menuItems.map((item, index) => (
            <HeaderLiItems item={item} key={index} />
          ))}
        </ul>
        <button onClick={onClose} className="update-Primary-btn !w-full">
          Connect Wallet
          <ConnectWalletIcon2 />
        </button>
      </div>
    </>
  );
};

export default Sidebar;
