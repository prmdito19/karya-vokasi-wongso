import { useState, useEffect, useRef } from "react";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  UserIcon,
  Squares2X2Icon,
  BookOpenIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/24/outline";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AppButton } from "@/components/ui/button";
import "@/index.css";

import wongso from "@/assets/images/wongso.png"
import pelajar from "@/assets/images/pelajar.png"

const navigation = [
  { name: "BERANDA", href: "/" },
  { name: "TENTANG KAMI", href: "/tentang-kami" },
  { name: "KONTAK", href: "/kontak" },
];

function classNames(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}

type User = { name: string; email: string } | null;

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const [user, setUser] = useState<User>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  // close dropdown when clicking outside or pressing Esc
  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!dropdownRef.current) return;
      if (dropdownOpen && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setDropdownOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [dropdownOpen]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setDropdownOpen(false);
    navigate("/login");
  };

  return (
    <Disclosure
      as="nav"
      className="fixed top-0 left-0 w-full bg-white z-50 flex justify-center"
    >
      {({ open }) => (
        <>
          {/* NAVBAR */}
          <div className="mx-5 md:mx-10 lg:mx-[120px] w-full">
            <div className="flex h-16 items-center justify-between">
              {/* Logo */}
              <div className="flex items-center">
                <Link to="/">
                  <img
                    alt="Karya Vokasi LMS"
                    src={wongso}
                    className="h-8 w-auto object-contain"
                  />
                </Link>
              </div>

              {/* Desktop Menu */}
              <div className="hidden min-[769px]:flex min-[769px]:flex-1 min-[769px]:justify-center">
                <nav aria-label="Main navigation">
                  <ul className="flex space-x-5 sm:space-x-15">
                    {navigation.map((item) => {
                      const isActive = location.pathname === item.href;
                      return (
                        <li key={item.name}>
                          <Link
                            to={item.href}
                            aria-current={isActive ? "page" : undefined}
                            className={classNames(
                              isActive
                                ? 'relative font-bold text-[16px] text-[#4BD270] after:content-[""] after:absolute after:left-0 after:-bottom-[22px] after:h-[2px] after:w-full after:bg-[#4BD270]'
                                : 'relative font-bold text-[16px] text-[#3A3A3A] hover:text-[#4BD270] hover:after:content-[""] hover:after:absolute hover:after:left-0 hover:after:-bottom-[22px] hover:after:h-[2px] hover:after:w-full hover:after:bg-[#4BD270]'
                            )}
                          >
                            {item.name}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              </div>

              {/* Right Section (Desktop) */}
              <div className="hidden min-[769px]:flex items-center space-x-3 mt-2">
                {user ? (
                  <div className="relative" ref={dropdownRef}>
                    <button
                      onClick={() => setDropdownOpen((s) => !s)}
                      aria-expanded={dropdownOpen}
                      aria-haspopup="true"
                      className="p-0 border-0 bg-transparent"
                    >
                      <img
                        src={pelajar}
                        alt="User avatar"
                        className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 cursor-pointer"
                      />
                    </button>

                    {/* USER DROPDOWN (Heroicons) */}
                    {dropdownOpen && (
                      <div
                        id="userDropdown"
                        className="absolute right-0 mt-3 w-60 bg-white rounded-2xl shadow-lg border border-gray-100 z-[101] overflow-hidden"
                      >
                        {/* header */}
                        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
                          <div>
                            <p className="text-sm font-semibold text-gray-900">
                              {user.name}
                            </p>
                            <p className="text-xs text-gray-500 truncate">
                              {user.email}
                            </p>
                          </div>
                          <img
                            src={pelajar}
                            alt="user avatar"
                            className="w-10 h-10 rounded-full"
                          />
                        </div>

                        {/* menu */}
                        <div className="py-2 text-sm text-gray-700">
                          <button
                            onClick={() => {
                              setDropdownOpen(false);
                              navigate("/profile");
                            }}
                            className="w-full flex items-center gap-3 px-4 py-2 hover:bg-gray-50 transition"
                          >
                            <UserIcon className="w-5 h-5 text-gray-500" />
                            <span>Profile</span>
                          </button>

                          <button
                            onClick={() => {
                              setDropdownOpen(false);
                              navigate("/dashboard");
                            }}
                            className="w-full flex items-center gap-3 px-4 py-2 hover:bg-gray-50 transition"
                          >
                            <Squares2X2Icon className="w-5 h-5 text-gray-500" />
                            <span>Dashboard</span>
                          </button>

                          <button
                            onClick={() => {
                              setDropdownOpen(false);
                              navigate("/course");
                            }}
                            className="w-full flex items-center gap-3 px-4 py-2 hover:bg-gray-50 transition"
                          >
                            <BookOpenIcon className="w-5 h-5 text-gray-500" />
                            <span>Course</span>
                          </button>
                        </div>

                        {/* sign out */}
                        <div className="border-t border-gray-100">
                          <button
                            onClick={handleLogout}
                            className="w-full flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition"
                          >
                            <ArrowRightCircleIcon className="w-5 h-5 text-gray-500" />
                            <span>Sign out</span>
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <>
                    <div className="mr-[24px]">
                      <AppButton
                        onClick={() => navigate("/register")}
                        label="Daftar"
                        color="success"
                        sx={{
                          backgroundColor: "#4BD270",
                          color: "#fff",
                          "&:hover": {
                            backgroundColor: "#3BB75D",
                          },
                        }}
                      />
                    </div>
                    <AppButton
                      onClick={() => navigate("/login")}
                      label="Login"
                      variant="outlined"
                      sx={{
                        borderColor: "#4BD270",
                        color: "#4BD270",
                        "&:hover": {
                          borderColor: "#3BB75D",
                          backgroundColor: "rgba(47, 172, 80, 0.2)",
                        },
                      }}
                    />
                  </>
                )}
              </div>

              {/* Mobile Menu Button */}
              <div className="flex min-[769px]:hidden">
                <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-gray-100 focus:outline-none">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>
            </div>
          </div>

          {/* MOBILE PANEL (z-index tertinggi) */}
          <DisclosurePanel
            static
            className={`min-[769px]:hidden fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-[9999] ${
              open ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex flex-col h-full p-6 space-y-6">
              <DisclosureButton className="self-end text-gray-600 hover:text-gray-900">
                <XMarkIcon className="h-6 w-6" />
              </DisclosureButton>

              <nav className="flex-1 space-y-1">
                {navigation.map((item) => {
                  const isActive = location.pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={classNames(
                        isActive
                          ? "block font-bold text-[16px] text-[#4BD270] mb-3"
                          : "block font-bold text-[16px] text-[#3A3A3A] hover:text-[#4BD270] mb-3"
                      )}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </nav>

              <div className="flex flex-col space-y-2 mb-[50px]">
                {user ? (
                  <>
                    <p className="text-sm text-gray-700 font-medium">{user.name}</p>
                    <button
                      onClick={handleLogout}
                      className="w-full px-5 py-2 text-center rounded-lg bg-red-500 text-white font-semibold hover:bg-red-600 transition"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <a
                      onClick={() => navigate("/register")}
                      className="w-full px-5 py-2 text-center rounded-lg bg-[#4BD270] text-white font-semibold hover:bg-[#3ac464] transition"
                    >
                      Daftar
                    </a>
                    <a
                      onClick={() => navigate("/login")}
                      className="w-full px-5 py-2 text-center rounded-lg border-2 border-[#4BD270] text-[#4BD270] font-semibold hover:bg-[#4BD270]/10 transition"
                    >
                      Login
                    </a>
                  </>
                )}
              </div>
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
