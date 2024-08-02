import { Menu, X } from "lucide-react";
import logo from "../assets/logo2.png";
import { navItems } from "../constants";
import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";
import { useState } from "react";

const Navbar = () => {
  const [menux, setMenux] = useState(false);

  const toggleNavbar = () => {
    setMenux(!menux);
  };
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className="sticky top-0 z-50 py-3 border-b backdrop-blur-lg border-neutral-700/80"
    >
      <nav>
        <div className="container relative px-4 mx-auto text-sm">
          <div className="flex items-center justify-between">
            {/* nav logo */}
            <a href="#">
              <div className="flex items-center flex-shrink-0 cursor-pointer">
                <img className="w-10 h-10 mr-2" src={logo} alt="logo" />
                <span className="text-xl tracking-tight">VirtualE</span>
              </div>
            </a>
            {/* nav links */}
            <ul className="hidden space-x-12 tracking-tight lg:flex ml-14">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="duration-150 ease-in hover:text-gray-400"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            {/* other nav links */}
            <div className="items-center justify-center hidden space-x-12 lg:flex">
              <a
                href="#"
                className="px-3 py-2 duration-150 ease-in border rounded-md hover:border-gray-600"
              >
                Sign In
              </a>
              <a
                href="#"
                className="px-3 py-2 rounded-md bg-gradient-to-r from-gray-500 to-gray-800"
              >
                Create an account
              </a>
            </div>
            {/* mobile menu  */}
            <div className="flex-col justify-end lg:hidden md:flex">
              <button onClick={toggleNavbar}>{menux ? <X /> : <Menu />}</button>
            </div>
          </div>
          {menux && (
            <div className="fixed right-0 z-20 flex flex-col items-center justify-center w-full p-12 bg-neutral-900 lg:hidden sidebar ">
              <ul>
                {navItems.map((item, index) => (
                  <li key={index} className="py-3 text-center">
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col">
                <a href="#" className="px-3 py-2 text-center border rounded-md">
                  Sign In
                </a>
                <a
                  href="#"
                  className="px-3 py-2 mt-4 rounded-md bg-gradient-to-r from-gray-500 to-gray-800"
                >
                  Create an account
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </motion.nav>
  );
};

export default Navbar;
