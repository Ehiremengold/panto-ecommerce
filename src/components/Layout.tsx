import { useState } from "react";
import type { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import { AlignRight, LogOut, ShoppingBag, X } from "lucide-react";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { companyName } from "../utils/constants";
import { motion, AnimatePresence } from "framer-motion";

const Layout = ({ children }: { children: ReactNode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [signInStatus, SetSignInStatus] = useState(true);

  const navItems = [
    { label: "Furniture", path: "/", id: "furniture" },
    { label: "Shop", path: "/", id: "shop" },
    { label: "About Us", path: "/", id: "about-us" },
    { label: "Contact", path: "/", id: "contact-us" },
  ];

  // Animation variants for navigation items
  const navItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.3 },
    }),
    hover: { scale: 1.1, color: "#e58411" },
  };

  // Animation variants for mobile menu
  const mobileMenuVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: {
      height: "auto",
      opacity: 1,
      transition: { duration: 0.3, easeInOut: 300 },
    },
    exit: {
      height: 0,
      opacity: 0,
      transition: { duration: 0.3, easeInOut: 300 },
    },
  };

  // Animation variants for footer items
  const footerItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, duration: 0.4 },
    }),
  };

  return (
    <div className="max-w-[2100px] mx-auto">
      <header className="md:py-8 py-6 px-8 absolute z-50 left-0 right-0">
        <nav className="mx-auto md:my-2 max-w-7xl flex justify-between items-center gap-4">
          <motion.a
            href="/"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="font-bold text-2xl text-white">Panto</h1>
          </motion.a>

          {/* Desktop Nav */}
          <ul className="hidden min-[852px]:flex lg:gap-16 gap-3">
            {navItems.map((item, index) => (
              <motion.li
                key={item.id}
                className="relative group text-white"
                variants={navItemVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                custom={index}
              >
                <div className="flex items-center gap-1 cursor-pointer">
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      isActive ? "text-sm font-medium" : "text-sm font-medium"
                    }
                  >
                    {item.label}
                  </NavLink>
                </div>
              </motion.li>
            ))}
          </ul>

          {signInStatus ? (
            <div className="min-[852px]:flex gap-8 items-center hidden">
              <motion.div
                className="relative"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <ShoppingBag color="white" />
                <div className="h-5 w-5 -top-1 -right-3 absolute rounded-full text-white bg-primary grid place-content-center">
                  0
                </div>
              </motion.div>

              <motion.button
                className="bg-primary hover:bg-primary/90 transition-all duration-200 text-white px-6 py-1 rounded-full text-sm sm:text-base font-medium flex items-center gap-2"
                onClick={() => SetSignInStatus(false)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Logout
                <LogOut size="20" />
              </motion.button>
            </div>
          ) : (
            <motion.button
              className="bg-primary min-[852px]:flex hidden hover:bg-primary/90 transition-all duration-200 text-white px-6 py-1 rounded-full text-sm sm:text-base font-medium items-center gap-2"
              onClick={() => SetSignInStatus(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Sign in
            </motion.button>
          )}

          {/* Mobile menu toggle */}
          <motion.button
            onClick={() => setMenuOpen(!menuOpen)}
            className="min-[852px]:hidden px-2 py-1 border-2 border-white rounded-md"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {menuOpen ? (
              <X size={20} color="white" />
            ) : (
              <AlignRight size={20} color="white" />
            )}
          </motion.button>
        </nav>

        {/* Mobile Nav Panel */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="min-[852px]:hidden rounded-xl overflow-hidden"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="bg-white rounded-xl px-3 py-6 space-y-2 shadow-inner mt-3">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    variants={navItemVariants}
                    initial="hidden"
                    animate="visible"
                    custom={index}
                  >
                    <button
                      className="w-full flex justify-between items-center text-sm font-semibold text-left p-5 text-black"
                      aria-label={`Toggle ${item.label} dropdown`}
                    >
                      <a href={item.path}>{item.label}</a>
                    </button>
                  </motion.div>
                ))}

                {signInStatus ? (
                  <div className="min-[852px]:hidden gap-8 items-center flex flex-row-reverse justify-between px-3">
                    <motion.div
                      className="relative w-fit"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <ShoppingBag color="black" />
                      <div className="h-5 w-5 -top-1 -right-3 absolute rounded-full text-white bg-primary grid place-content-center">
                        0
                      </div>
                    </motion.div>

                    <motion.button
                      className="bg-primary hover:bg-primary/90 transition-all duration-200 text-white px-6 py-1 rounded-full text-sm sm:text-base font-medium flex items-center gap-2"
                      onClick={() => SetSignInStatus(false)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Logout
                      <LogOut size="20" />
                    </motion.button>
                  </div>
                ) : (
                  <div className="px-3">
                    <motion.button
                      className="bg-primary min-[852px]:hidden flex hover:bg-primary/90 transition-all duration-200 text-white px-6 py-1 rounded-full text-sm sm:text-base font-medium items-center gap-2"
                      onClick={() => SetSignInStatus(true)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Sign in
                    </motion.button>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <motion.main
        className="bg-gray-50 font-display"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.main>

      <footer className="py-12 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          {/* Upper section - desktop */}
          <div className="md:flex hidden gap-4 sm:items-start w-full">
            <motion.div
              className="flex flex-col gap-1"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4">
                <h1 className="font-bold text-white">{companyName}</h1>
              </div>
              <p className="text-gray-400">
                Minimalism interior decorations and furniture design for your
                homes, offices, and more.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-5 sm:grid-cols-2 grid-cols-1 w-full">
              {["Services", "Furniture", "Connect"].map((section, index) => (
                <motion.div
                  key={section}
                  className="flex gap-1 flex-col"
                  variants={footerItemVariants}
                  initial="hidden"
                  whileInView="visible"
                  custom={index}
                  viewport={{ once: true }}
                >
                  <h1 className="text-sm font-bold text-white">{section}</h1>
                  <ul className="flex flex-col gap-2">
                    {section === "Services" && (
                      <>
                        <li>
                          <a
                            href="/"
                            className="text-sm text-gray-400 hover:underline"
                          >
                            Email Marketing
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            className="text-sm text-gray-400 hover:underline"
                          >
                            Campaigns
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            className="text-sm text-gray-400 hover:underline"
                          >
                            Branding
                          </a>
                        </li>
                      </>
                    )}
                    {section === "Furniture" && (
                      <>
                        <li>
                          <a
                            href="/"
                            className="text-sm text-gray-400 hover:underline"
                          >
                            Beds
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            className="text-sm text-gray-400 hover:underline"
                          >
                            Chairs
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            className="text-sm text-gray-400 hover:underline"
                          >
                            All
                          </a>
                        </li>
                      </>
                    )}
                    {section === "Connect" && (
                      <>
                        <li>
                          <a
                            href="/"
                            className="text-sm text-gray-400 hover:underline"
                          >
                            Contact Us
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            className="text-sm text-gray-400 hover:underline"
                          >
                            Investor Relations
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            className="text-sm text-gray-400 hover:underline"
                          >
                            Media Center
                          </a>
                        </li>
                      </>
                    )}
                  </ul>
                  {section === "Connect" && (
                    <div className="flex gap-2 items-center mt-2">
                      {[
                        {
                          href: "https://facebook.com/panto",
                          icon: <FaFacebook className="text-white" size={20} />,
                          label: "Facebook",
                        },
                        {
                          href: "https://instagram.com/panto",
                          icon: (
                            <IoLogoInstagram className="text-white" size={20} />
                          ),
                          label: "Instagram",
                        },
                        {
                          href: "https://twitter.com/panto",
                          icon: <FaXTwitter className="text-white" size={20} />,
                          label: "Twitter",
                        },
                        {
                          href: "https://linkedin.com/panto",
                          icon: <FaLinkedin className="text-white" size={20} />,
                          label: "LinkedIn",
                        },
                        {
                          href: "https://youtube.com/company/panto",
                          icon: <FaYoutube className="text-white" size={20} />,
                          label: "YouTube",
                        },
                      ].map((social, i) => (
                        <motion.a
                          key={social.label}
                          href={social.href}
                          aria-label={social.label}
                          variants={footerItemVariants}
                          initial="hidden"
                          whileInView="visible"
                          custom={i + 3}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.2, rotate: 5 }}
                        >
                          {social.icon}
                        </motion.a>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Upper section - mobile */}
          <div className="md:hidden grid sm:grid-cols-2 grid-cols-1 gap-4">
            {["Company", "Services", "Furniture", "Connect"].map(
              (section, index) => (
                <motion.div
                  key={section}
                  className="flex gap-1 flex-col"
                  variants={footerItemVariants}
                  initial="hidden"
                  whileInView="visible"
                  custom={index}
                  viewport={{ once: true }}
                >
                  {section === "Company" ? (
                    <>
                      <div className="flex items-center gap-4">
                        <h1 className="text-sm font-bold text-white">
                          {companyName}
                        </h1>
                      </div>
                      <p className="text-gray-400">
                        Defining possible advanced {companyName} technology and
                        innovative defense solutions.
                      </p>
                    </>
                  ) : (
                    <>
                      <h1 className="text-sm font-bold text-white">
                        {section}
                      </h1>
                      <ul className="flex flex-col gap-2">
                        {section === "Services" && (
                          <>
                            <li>
                              <a
                                href="/"
                                className="text-sm text-gray-400 hover:underline"
                              >
                                Email Marketing
                              </a>
                            </li>
                            <li>
                              <a
                                href="/"
                                className="text-sm text-gray-400 hover:underline"
                              >
                                Campaigns
                              </a>
                            </li>
                            <li>
                              <a
                                href="/"
                                className="text-sm text-gray-400 hover:underline"
                              >
                                Branding
                              </a>
                            </li>
                          </>
                        )}
                        {section === "Furniture" && (
                          <>
                            <li>
                              <a
                                href="/"
                                className="text-sm text-gray-400 hover:underline"
                              >
                                Beds
                              </a>
                            </li>
                            <li>
                              <a
                                href="/"
                                className="text-sm text-gray-400 hover:underline"
                              >
                                Chair
                              </a>
                            </li>
                            <li>
                              <a
                                href="/"
                                className="text-sm text-gray-400 hover:underline"
                              >
                                All
                              </a>
                            </li>
                          </>
                        )}
                        {section === "Connect" && (
                          <>
                            <li>
                              <a
                                href="/"
                                className="text-sm text-gray-400 hover:underline"
                              >
                                Contact Us
                              </a>
                            </li>
                            <li>
                              <a
                                href="/"
                                className="text-sm text-gray-400 hover:underline"
                              >
                                Investor Relations
                              </a>
                            </li>
                            <li>
                              <a
                                href="/"
                                className="text-sm text-gray-400 hover:underline"
                              >
                                Media Center
                              </a>
                            </li>
                          </>
                        )}
                      </ul>
                      {section === "Connect" && (
                        <div className="flex gap-2 items-center mt-2">
                          {[
                            {
                              href: "https://facebook.com/panto",
                              icon: (
                                <FaFacebook className="text-white" size={20} />
                              ),
                              label: "Facebook",
                            },
                            {
                              href: "https://instagram.com/panto",
                              icon: (
                                <IoLogoInstagram
                                  className="text-white"
                                  size={20}
                                />
                              ),
                              label: "Instagram",
                            },
                            {
                              href: "https://twitter.com/panto",
                              icon: (
                                <FaXTwitter className="text-white" size={20} />
                              ),
                              label: "Twitter",
                            },
                            {
                              href: "https://linkedin.com/panto",
                              icon: (
                                <FaLinkedin className="text-white" size={20} />
                              ),
                              label: "LinkedIn",
                            },
                            {
                              href: "https://youtube.com/company/panto",
                              icon: (
                                <FaYoutube className="text-white" size={20} />
                              ),
                              label: "YouTube",
                            },
                          ].map((social, i) => (
                            <motion.a
                              key={social.label}
                              href={social.href}
                              aria-label={social.label}
                              variants={footerItemVariants}
                              initial="hidden"
                              whileInView="visible"
                              custom={i + 4}
                              viewport={{ once: true }}
                              whileHover={{ scale: 1.2, rotate: 5 }}
                            >
                              {social.icon}
                            </motion.a>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </motion.div>
              )
            )}
          </div>

          {/* Below section */}
          <motion.div
            className="mt-6 pt-4 border-t border-gray-300 flex items-center md:justify-between justify-center gap-1 flex-wrap"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-50 text-xs">
              &copy; {new Date().getFullYear()}{" "}
              <span className="font-semibold">{companyName}</span> All rights
              reserved.
            </p>
            <div className="flex items-center sm:gap-4 gap-2 flex-wrap">
              {["Privacy Policy", "Terms of Service", "Accessibility"].map(
                (link, index) => (
                  <motion.a
                    key={link}
                    href={`/${link.toLowerCase().replace(" ", "-")}`}
                    className="text-gray-50 text-xs"
                    variants={footerItemVariants}
                    initial="hidden"
                    whileInView="visible"
                    custom={index}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {link}
                  </motion.a>
                )
              )}
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
