"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

import {
  FiSearch,
  FiShoppingCart,
  FiHeart,
  FiDollarSign,
  FiUser,
  FiHelpCircle,
  FiSettings,
  FiLogOut,
} from "../assets/icons/vander";

export default function Navbar({ navClass, navlight }) {
  let [scrolling, setScrolling] = useState(false);
  let [isToggle, setToggle] = useState(false);
  let [manu, setManu] = useState("");
  let [subManu, setSubManu] = useState("");
  let [isOpen, setIsOpen] = useState(false);
  let [cartManu, setCartManu] = useState(false);
  let [userManu, setUserManu] = useState(false);
  let dropdownRef = useRef(null);
  let cartRef = useRef(null);
  let userRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolling = window.scrollY > 50;
      setScrolling(isScrolling);
    };
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    const cartOutsideClick = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setCartManu(false);
      }
    };
    const userOutsideClick = (e) => {
      if (userRef.current && !userRef.current.contains(e.target)) {
        setUserManu(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("click", handleOutsideClick);
    window.addEventListener("click", cartOutsideClick);
    window.addEventListener("click", userOutsideClick);

    let current = window.location.pathname;
    setManu(current);
    setSubManu(current);
    window.scrollTo(0, 0);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("click", handleOutsideClick);
      window.removeEventListener("click", cartOutsideClick);
      window.removeEventListener("click", userOutsideClick);
    };
  }, []);

  const toggleMenu = () => {
    setToggle(!isToggle);
  };

  return (
    <nav id="topnav" className={`${navClass} ${scrolling ? "nav-sticky" : ""}`}>
      <div className="container relative">
        {navlight === true ? (
          <Link className="logo" href="/">
            <span className="inline-block dark:hidden">
              <Image
                src="/images/logo-main.webp"
                width={50}
                height={50}
                className="l-dark"
                alt=""
              />
              <Image
                src="/images/logo-main.webp"
                width={50}
                height={50}
                className="l-light"
                alt=""
              />
            </span>
            <Image
              src="/images/logo-main.webp"
              width={50}
              height={50}
              className="hidden dark:inline-block"
              alt=""
            />
          </Link>
        ) : (
          <Link className="logo" href="/">
            <div>
              <Image
                src="/images/logo-main.webp"
                width={50}
                height={50}
                className="h-[50px] inline-block dark:hidden"
                alt=""
              />
              <Image
                src="/images/logo-main.webp"
                width={50}
                height={50}
                className="h-[50px] hidden dark:inline-block"
                alt=""
              />
            </div>
          </Link>
        )}

        <div className="menu-extras">
          <div className="menu-item">
            <Link
              href="#"
              className={`navbar-toggle ${isToggle ? "open" : ""}`}
              id="isToggle"
              onClick={() => toggleMenu()}
            >
              <div className="lines">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </Link>
          </div>
        </div>

        <ul className="buy-button list-none mb-0">
          <li className="dropdown inline-block relative pe-1" ref={dropdownRef}>
            <button
              data-dropdown-toggle="dropdown"
              className="dropdown-toggle align-middle inline-flex search-dropdown"
              type="button"
              onClick={() => setIsOpen(!isOpen)}
            >
              {navlight === true ? (
                <>
                  <FiSearch className="size-5 dark-icon"></FiSearch>
                  <FiSearch className="size-5 white-icon text-white"></FiSearch>
                </>
              ) : (
                <FiSearch className="size-5"></FiSearch>
              )}
            </button>
            {isOpen && (
              <div
                className={`dropdown-menu absolute overflow-hidden end-0 m-0 mt-5 z-10 md:w-52 w-48 rounded-md bg-white dark:bg-slate-900 shadow dark:shadow-gray-800`}
              >
                <div className="relative">
                  <FiSearch className="absolute size-4 top-[9px] end-3"></FiSearch>
                  <input
                    type="text"
                    className="h-9 px-3 pe-10 w-full border-gray-100 dark:border-gray-800 focus:ring-0 outline-none bg-white dark:bg-slate-900"
                    name="s"
                    id="searchItem"
                    placeholder="Search..."
                  />
                </div>
              </div>
            )}
          </li>

          <li className="dropdown inline-block relative ps-0.5 mx-1" ref={cartRef}>
            <Link
              href={"/shop-cart"}
              data-dropdown-toggle="dropdown"
              className="dropdown-toggle size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-red-600 border border-red-600 text-white"
              type="button"
              onClick={() => setCartManu(!cartManu)}
            >
              <FiShoppingCart className="h-4 w-4"></FiShoppingCart>
            </Link>


            {/* {cartManu && (
                            <div className="dropdown-menu absolute end-0 m-0 mt-4 z-10 w-64 rounded-md bg-white dark:bg-slate-900 shadow dark:shadow-gray-800">
                                <ul className="py-3 text-start" aria-labelledby="dropdownDefault">
                                    <li className='ms-0'>
                                        <Link href="#" className="flex items-center justify-between py-1.5 px-4">
                                            <span className="flex items-center">
                                                <Image src='/images/shop/trendy-shirt.jpg' width={36} height={46} className="rounded shadow dark:shadow-gray-800 w-9" alt=""/>
                                                <span className="ms-3">
                                                    <span className="block font-semibold">T-shirt (M)</span>
                                                    <span className="block text-sm text-slate-400">$320 X 2</span>
                                                </span>
                                            </span>

                                            <span className="font-semibold">$640</span>
                                        </Link>
                                    </li>

                                    <li className='ms-0'>
                                        <Link href="#" className="flex items-center justify-between py-1.5 px-4">
                                            <span className="flex items-center">
                                                <Image src='/images/shop/luxurious-bag2.jpg' width={36} height={46} className="rounded shadow dark:shadow-gray-800 w-9" alt=""/>
                                                <span className="ms-3">
                                                    <span className="block font-semibold">Bag</span>
                                                    <span className="block text-sm text-slate-400">$50 X 5</span>
                                                </span>
                                            </span>

                      <span className="font-semibold">$250</span>
                    </Link>
                  </li>

                  <li className="ms-0">
                    <Link
                      href="#"
                      className="flex items-center justify-between py-1.5 px-4"
                    >
                      <span className="flex items-center">
                        <Image
                          src="/images/shop/apple-smart-watch.jpg"
                          width={36}
                          height={46}
                          className="rounded shadow dark:shadow-gray-800 w-9"
                          alt=""
                        />
                        <span className="ms-3">
                          <span className="block font-semibold">
                            Watch (Men)
                          </span>
                          <span className="block text-sm text-slate-400">
                            $800 X 1
                          </span>
                        </span>
                      </span>

                      <span className="font-semibold">$800</span>
                    </Link>
                  </li>

                  <li className="border-t border-gray-100 dark:border-gray-800 my-2 ms-0"></li>

                  <li className="flex items-center justify-between py-1.5 px-4 ms-0">
                    <h6 className="font-semibold mb-0">Total($):</h6>
                    <h6 className="font-semibold mb-0">$1690</h6>
                  </li>

                                    <li className="py-1.5 px-4 ms-0">
                                        <span className="text-center block">
                                            <Link href="#" className="py-[5px] px-4 inline-block font-semibold tracking-wide align-middle duration-500 text-sm text-center rounded-md bg-red-600 border border-red-600 text-white me-1">View Cart</Link>
                                            <Link href="#" className="py-[5px] px-4 inline-block font-semibold tracking-wide align-middle duration-500 text-sm text-center rounded-md bg-red-600 border border-red-600 text-white">Checkout</Link>
                                        </span>
                                        <p className="text-sm text-slate-400 mt-1">*T&C Apply</p>
                                    </li>
                                </ul>
                            </div>
                        )} */}
          </li>



{/* WishList  */}

{/* 
          <li className="inline-block ps-0.5 mx-1">
            <Link
              href="#"
              className="size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-red-600 text-white"
            >
              <FiHeart data-feather="heart" className="h-4 w-4"></FiHeart>
            </Link>
          </li> */}

          <li className="dropdown inline-block relative ps-0.5 mx-1" ref={userRef}>
            <button
              data-dropdown-toggle="dropdown"
              className="dropdown-toggle items-center"
              type="button"
              onClick={() => setUserManu(!userManu)}
            >
              <span className="size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full border border-red-600 bg-red-600 text-white">
                <Image
                  src="/images/client/16.jpg"
                  width={34}
                  height={34}
                  className="rounded-full"
                  alt=""
                />
              </span>
            </button>
            {userManu && (
              <div className="dropdown-menu absolute end-0 m-0 mt-4 z-10 w-48 rounded-md overflow-hidden bg-white dark:bg-slate-900 shadow dark:shadow-gray-700">
                <ul className="py-2 text-start">
                  <li className="ms-0">
                    <p className="text-slate-400 pt-2 px-4">Welcome Jesus!</p>
                  </li>
                  {/* <li className='ms-0'>
                                        <p className="flex items-center font-medium py-2 px-4"><FiDollarSign className="h-4 w-4 me-2"></FiDollarSign> Balance: <span className="text-red-600 ms-2">$ 245.10</span></p>
                                    </li> */}
                  <li className="ms-0">
                    <Link
                      href="/user-account"
                      className="flex items-center font-medium py-2 px-4 dark:text-white/70 hover:text-red-600 dark:hover:text-white"
                    >
                      <FiUser className="h-4 w-4 me-2"></FiUser>Account
                    </Link>
                  </li>
                  {/* <li className='ms-0'>
                                        <Link href="/helpcenter" className="flex items-center font-medium py-2 px-4 dark:text-white/70 hover:text-red-600 dark:hover:text-white"><FiHelpCircle className="h-4 w-4 me-2"></FiHelpCircle>Helpcenter</Link>
                                    </li> */}
                  {/* <li className='ms-0'>
                                        <Link href="/user-setting" className="flex items-center font-medium py-2 px-4 dark:text-white/70 hover:text-red-600 dark:hover:text-white"><FiSettings className="h-4 w-4 me-2"></FiSettings>Settings</Link>
                                    </li> */}
                  <li className="border-t border-gray-100 dark:border-gray-800 my-2"></li>
                  <li className="ms-0">
                    <Link
                      href="/login"
                      className="flex items-center font-medium py-2 px-4 dark:text-white/70 hover:text-red-600 dark:hover:text-white"
                    >
                      <FiLogOut className="h-4 w-4 me-2"></FiLogOut>Logout
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </li>
        </ul>

        <div
          id="navigation"
          style={{ display: isToggle === true ? "block" : "none" }}
        >
          <ul
            className={`navigation-menu ${
              navlight === true ? "nav-light" : ""
            }`}
          >
            {/* <li className={`has-submenu parent-menu-item ${['/', '/index-fashion-two', '/index-fashion-three','/index-fashion-four','/index-item'].includes(manu) ? 'active' : ''}`}>
                            <Link href="#" onClick={()=>setSubManu(setManu === '/index-item' ? '' : '/index-item' )}>Mens</Link><span className="menu-arrow"></span>
                            <ul className={`submenu ${['/', '/index-fashion-two', '/index-fashion-three','/index-fashion-four','/index-item'].includes(subManu) ? 'open' : ''}`}>
                                <li className={`ms-0 ${manu === '/' ? 'active' : ''}`}><Link href="/" className="sub-menu-item">Leather Jackets</Link></li>
                                <li className={`ms-0 ${manu === '/index-fashion-two' ? 'active' : ''}`}><Link href="/index-fashion-two" className="sub-menu-item">Shoes</Link></li>
                                <li className={`ms-0 ${manu === '/index-fashion-three' ? 'active' : ''}`}><Link href="/index-fashion-three" className="sub-menu-item">Wallet</Link></li>
                            </ul>
                        </li> */}

            {/* <li className={`has-submenu parent-parent-menu-item ${['/product-item'].includes(manu) ? 'active' : ''}`}>
                            <Link href="#" onClick={()=>setSubManu(setManu === '/product-item' ? '' : '/product-item' )}>Womens</Link><span className="menu-arrow"></span>
                            <ul className={`submenu ${['/', '/index-fashion-two', '/index-fashion-three','/index-fashion-four','/index-item'].includes(subManu) ? 'open' : ''}`}>
                                <li className={`ms-0 ${manu === '/' ? 'active' : ''}`}><Link href="/" className="sub-menu-item">Leather Jackets</Link></li>
                                <li className={`ms-0 ${manu === '/index-fashion-two' ? 'active' : ''}`}><Link href="/index-fashion-two" className="sub-menu-item">Shoes</Link></li>
                                <li className={`ms-0 ${manu === '/index-fashion-three' ? 'active' : ''}`}><Link href="/index-fashion-three" className="sub-menu-item">Wallet</Link></li>
                            </ul>
                          
                        </li> */}

            {/* <li className={`has-submenu parent-parent-menu-item ${['/product-item'].includes(manu) ? 'active' : ''}`}>
                            <Link href="#" onClick={()=>setSubManu(setManu === '/product-item' ? '' : '/product-item' )}>Bags</Link><span className="menu-arrow"></span>
                            <ul className={`submenu ${['/', '/index-fashion-two', '/index-fashion-three','/index-fashion-four','/index-item'].includes(subManu) ? 'open' : ''}`}>
                                <li className={`ms-0 ${manu === '/' ? 'active' : ''}`}><Link href="/" className="sub-menu-item">Womens Bags</Link></li>
                                <li className={`ms-0 ${manu === '/index-fashion-two' ? 'active' : ''}`}><Link href="/index-fashion-two" className="sub-menu-item">Backpack</Link></li>
                            </ul>
                          
                        </li> */}

            <li className={`${manu === "/products/clothing" ? "active" : ""}`}>
              <Link href="/products/clothing" className="sub-menu-item">
                Shop
              </Link>
            </li>

            {/* <li className={`${manu === '/contact' ? 'active' : ''}`}><Link href="/contact" className="sub-menu-item">Business</Link></li> */}
            <li className={`${manu === "/aboutus" ? "active" : ""}`}>
              <Link href="/aboutus" className="sub-menu-item">
                About Us
              </Link>
            </li>
            <li className={`${manu === "/contact" ? "active" : ""}`}>
              <Link href="/contact" className="sub-menu-item">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
