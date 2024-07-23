import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";
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
      className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80"
    >
      <nav>
        <div className="container px-4 mx-auto relative text-sm">
          <div className="flex justify-between items-center">
            {/* nav logo */}
            <div className="flex items-center flex-shrink-0">
              <img className="h-10 w-10 mr-2" src={logo} alt="logo" />
              <span className="text-xl tracking-tight">VirtualR</span>
            </div>
            {/* nav links */}
            <ul className="hidden lg:flex ml-14 space-x-12 tracking-tight">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="hover:text-orange-500 ease-in duration-150"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            {/* other nav links */}
            <div className="hidden lg:flex justify-center space-x-12 items-center">
              <a
                href="#"
                className="py-2 px-3 border rounded-md hover:border-orange-500 ease-in duration-150"
              >
                Sign In
              </a>
              <a
                href="#"
                className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md"
              >
                Create an account
              </a>
            </div>
            {/* mobile menu  */}
            <div className="lg:hidden md:flex flex-col justify-end">
              <button onClick={toggleNavbar}>{menux ? <X /> : <Menu />}</button>
            </div>
          </div>
          {menux && (
            <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden sidebar ">
              <ul>
                {navItems.map((item, index) => (
                  <li key={index} className="py-3 text-center">
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col">
                <a href="#" className="py-2 px-3 text-center rounded-md border">
                  Sign In
                </a>
                <a
                  href="#"
                  className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 mt-4 rounded-md"
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
