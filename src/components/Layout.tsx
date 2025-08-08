import { useState } from "react";
import type { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import { AlignRight, ShoppingBag, X } from "lucide-react";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { companyName } from "../utils/constants";

const Layout = ({ children }: { children: ReactNode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown] = useState<string | null>(null);

  const navItems = [
    {
      label: "Furniture",
      path: "/",
      id: "who",
      links: [
        "Company Leadership",
        "The Facts",
        "Global Presence",
        "Investors",
        "News",
        "Supplies",
        "Sustainability",
      ],
    },
    {
      label: "Shop",
      path: "/",
      id: "what",
      links: [
        "Advanced Weapons",
        "Aircraft",
        "Missile Defense",
        "Mission Solutions",
        "Space",
      ],
    },
    {
      label: "About Us",
      path: "/",
      id: "careers",
      links: [
        "Student and Entry Level",
        "Experienced Professionals",
        "Veterans",
        "Search Jobs by Location",
      ],
    },
    {
      label: "Contact",
      path: "/",
      id: "blog-posts",
      // links: [],
    },
    // {
    //   label: "Newsletter",
    //   path: "/newsletter",
    //   id: "news-letter",
    // },
  ];

  return (
    <div className="max-w-[2100px] mx-auto">
      <header className="md:py-8 py-6 px-8 absolute z-50 left-0 right-0">
        <nav className="mx-auto md:my-2 max-w-7xl flex justify-between items-center gap-4">
          <a href="/">
            <h1 className="font-bold  text-2xl text-white">Panto</h1>
          </a>

          {/* Desktop Nav */}
          <ul className="hidden min-[852px]:flex lg:gap-16 gap-3">
            {navItems?.map((item) => (
              <li key={item.id} className="relative group text-white">
                <div className="flex items-center gap-1 cursor-pointer">
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      isActive
                        ? "text-sm font-medium " // other active colors
                        : "text-sm font-medium "
                    }
                  >
                    {item.label}
                  </NavLink>
                </div>
              </li>
            ))}
          </ul>

          {/* Search - Desktop */}
          <div className="relative">
            <ShoppingBag color="white" />
            <div className="h-5 w-5 -top-1 -right-3 absolute rounded-full text-white bg-primary grid place-content-center">
              0
            </div>
          </div>
          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="min-[852px]:hidden px-2 py-1 border-2 border-white rounded-md"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? (
              <X size={20} color="white" />
            ) : (
              <AlignRight size={20} color="white" />
            )}
          </button>
        </nav>

        {/* Mobile Nav Panel */}
        <div
          className={`min-[852px]:hidden rounded-xl transition-all duration-300 ease-in-out overflow-hidden ${
            menuOpen ? "max-h-[1000px] mt-4 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-white px-3 py-6 space-y-2 shadow-inner">
            {navItems?.map((item) => (
              <div key={item.id}>
                <button
                  className="w-full flex justify-between items-center text-sm font-semibold text-left p-5"
                  aria-label={`Toggle ${item.label} dropdown`}
                >
                  <a href={item.path}>{item.label}</a>
                  {/* {openDropdown === item.id ? (
                    <ChevronUp
                      size={16}
                      onClick={() => toggleDropdown(item.id)}
                    />
                  ) : (
                    <ChevronDown
                      size={16}
                      onClick={() => toggleDropdown(item.id)}
                    />
                  )} */}
                </button>

                <div
                  className={`transition-all duration-300 ease-in-out ${
                    openDropdown === item.id ? "mt-2" : "h-0 overflow-hidden"
                  }`}
                >
                  {openDropdown === item.id && (
                    <ul className="space-y-2 mt-1 pl-5 border-l border-gray-200">
                      {item.links?.map((link, i) => (
                        <li key={i}>
                          <NavLink
                            to="/"
                            className="block text-sm py-1 hover:text-primary transition"
                          >
                            {link}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </header>

      <main className="bg-gray-50 font-display">{children}</main>

      <footer className="py-12 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          {/* upper section - desktop */}
          <div className="md:flex hidden gap-4 sm:items-start w-full">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-4">
                <h1 className="font-bold text-white">{companyName}</h1>
              </div>
              <p className="text-gray-400">
                Minimalism interior decorations and furniture design for your
                homes, offices, and more.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-5 sm:grid-cols-2 grid-cols-1 w-full">
              <div className="flex gap-1 flex-col">
                <h1 className="text-sm font-bold text-white">Company</h1>
                <ul className="flex flex-col gap-2">
                  <a
                    href="/who-we-are"
                    className="text-sm text-gray-400 cursor-pointer hover:underline transition-all ease-in-out duration-300"
                  >
                    About Us
                  </a>
                  <a
                    href="/who-we-are#leadership"
                    className="text-sm text-gray-400 cursor-pointer hover:underline transition-all ease-in-out duration-300"
                  >
                    Leadership
                  </a>
                  <a
                    href="/careers"
                    className="text-sm text-gray-400 cursor-pointer hover:underline transition-all ease-in-out duration-300"
                  >
                    Careers
                  </a>
                  <a
                    href="/newsletter"
                    className="text-sm text-gray-400 cursor-pointer hover:underline transition-all ease-in-out duration-300"
                  >
                    News
                  </a>
                </ul>
              </div>
              <div className="flex gap-1 flex-col">
                <h1 className="text-sm font-bold text-white">Solutions</h1>
                <ul className="flex flex-col gap-2">
                  <a
                    href="/what-we-do#advanced-weapons"
                    className="text-sm text-gray-400 cursor-pointer hover:underline transition-all ease-in-out duration-300"
                  >
                    Defense Systems
                  </a>
                  <a
                    href="/what-we-do#space"
                    className="text-sm text-gray-400 cursor-pointer hover:underline transition-all ease-in-out duration-300"
                  >
                    Space Technology
                  </a>
                  <a
                    href="/what-we-do#aircraft"
                    className="text-sm text-gray-400 cursor-pointer hover:underline transition-all ease-in-out duration-300"
                  >
                    Aircraft
                  </a>
                  <a
                    href="/what-we-do#missile-defense"
                    className="text-sm text-gray-400 cursor-pointer hover:underline transition-all ease-in-out duration-300"
                  >
                    Missile Defense
                  </a>
                </ul>
              </div>
              <div className="flex gap-1 flex-col">
                <h1 className="text-sm font-bold text-white">Connect</h1>
                <ul className="flex flex-col gap-2">
                  <a
                    href="/contact"
                    className="text-sm text-gray-400 cursor-pointer hover:underline transition-all ease-in-out duration-300"
                  >
                    Contact Us
                  </a>
                  <a
                    href="/investors"
                    className="text-sm text-gray-400 cursor-pointer hover:underline transition-all ease-in-out duration-300"
                  >
                    Investor Relations
                  </a>
                  <a
                    href="/media"
                    className="text-sm text-gray-400 cursor-pointer hover:underline transition-all ease-in-out duration-300"
                  >
                    Media Center
                  </a>
                  {/* <a
                    href="/supplies"
                    className="text-sm text-gray-400 cursor-pointer hover:underline transition-all ease-in-out duration-300"
                  >
                    Supplies Portal
                  </a> */}
                </ul>
                <div className="flex gap-2 items-center mt-2">
                  <a
                    href="https://facebook.com/yourcompany"
                    aria-label="Facebook"
                  >
                    <FaFacebook className="text-white" size={20} />
                  </a>
                  <a
                    href="https://instagram.com/yourcompany"
                    aria-label="Instagram"
                  >
                    <IoLogoInstagram className="text-white" size={20} />
                  </a>
                  <a
                    href="https://twitter.com/yourcompany"
                    aria-label="Twitter"
                  >
                    <FaXTwitter className="text-white" size={20} />
                  </a>
                  <a
                    href="https://linkedin.com/company/yourcompany"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin className="text-white" size={20} />
                  </a>
                  <a
                    href="https://youtube.com/company/yourcompany"
                    aria-label="LinkedIn"
                  >
                    <FaYoutube className="text-white" size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* upper section - mobile */}
          <div className="md:hidden grid sm:grid-cols-2 grid-cols-1 gap-4">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-4">
                <h1 className="text-sm font-bold text-white">{companyName}</h1>
              </div>
              <p className="text-gray-400">
                Defining possible advanced {companyName} technology and
                innovative defense solutions.
              </p>
            </div>
            <div className="flex gap-1 flex-col">
              <h1 className="text-sm font-bold text-white">Company</h1>
              <ul className="flex flex-col gap-2">
                <li>
                  <a
                    href="/who-we-are"
                    className="text-sm text-gray-400 hover:underline"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/who-we-are#leadership"
                    className="text-sm text-gray-400 hover:underline"
                  >
                    Leadership
                  </a>
                </li>
                <li>
                  <a
                    href="/careers"
                    className="text-sm text-gray-400 hover:underline"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="/newsletter"
                    className="text-sm text-gray-400 hover:underline"
                  >
                    News
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex gap-1 flex-col">
              <h1 className="text-sm font-bold text-white">Solutions</h1>
              <ul className="flex flex-col gap-2">
                <li>
                  <a
                    href="/what-we-do#advanced-weapons"
                    className="text-sm text-gray-400 hover:underline"
                  >
                    Defense Systems
                  </a>
                </li>
                <li>
                  <a
                    href="/what-we-do#space"
                    className="text-sm text-gray-400 hover:underline"
                  >
                    Space Technology
                  </a>
                </li>
                <li>
                  <a
                    href="/what-we-do#aircraft"
                    className="text-sm text-gray-400 hover:underline"
                  >
                    Aircraft
                  </a>
                </li>
                <li>
                  <a
                    href="/what-we-do#missile-defense"
                    className="text-sm text-gray-400 hover:underline"
                  >
                    Missile Defense
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex gap-1 flex-col">
              <h1 className="text-sm font-bold text-white">Connect</h1>
              <ul className="flex flex-col gap-2">
                <li>
                  <a
                    href="/contact"
                    className="text-sm text-gray-400 hover:underline"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="/investors"
                    className="text-sm text-gray-400 hover:underline"
                  >
                    Investor Relations
                  </a>
                </li>
                <li>
                  <a
                    href="/media"
                    className="text-sm text-gray-400 hover:underline"
                  >
                    Media Center
                  </a>
                </li>
                {/* <li>
                  <a
                    href="/supplies"
                    className="text-sm text-gray-400 hover:underline"
                  >
                    Supplies Portal
                  </a>
                </li> */}
              </ul>
              <div className="flex gap-2 items-center mt-2">
                <a
                  href="https://facebook.com/yourcompany"
                  aria-label="Facebook"
                >
                  <FaFacebook className="text-white" size={20} />
                </a>
                <a
                  href="https://instagram.com/yourcompany"
                  aria-label="Instagram"
                >
                  <IoLogoInstagram className="text-white" size={20} />
                </a>
                <a href="https://twitter.com/yourcompany" aria-label="Twitter">
                  <FaXTwitter className="text-white" size={20} />
                </a>
                <a
                  href="https://linkedin.com/company/yourcompany"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="text-white" size={20} />
                </a>
                <a
                  href="https://youtube.com/company/yourcompany"
                  aria-label="LinkedIn"
                >
                  <FaYoutube className="text-white" size={20} />
                </a>
              </div>
            </div>
          </div>
          {/* below section */}
          <div className="mt-6 pt-4 border-t border-gray-300 flex items-center md:justify-between justify-center gap-1 flex-wrap">
            <p className=" text-gray-50 text-xs">
              &copy; {new Date().getFullYear()}{" "}
              <span className="font-semibold">{companyName}</span> All rights
              reserved.
            </p>
            <div className="flex items-center sm:gap-4 gap-2 flex-wrap">
              <a href="/privacy-policy" className="text-gray-50 text-xs">
                Privacy Policy
              </a>
              <a href="/terms-of-service" className="text-gray-50 text-xs">
                Terms of Service
              </a>
              <a href="/accessibility" className="text-gray-50 text-xs">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
