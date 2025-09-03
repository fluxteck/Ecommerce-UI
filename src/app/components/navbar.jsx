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
import { useUserContext, useAuthContext } from "ecom-user-sdk/context";
import useMessage from "../hook/messageHook";
import { getInitials } from "./functions/initials";
import { useCartContext } from "ecom-user-sdk/context";
import { useCartActions } from "ecom-user-sdk/cart";

export default function Navbar({ navClass, navlight }) {
  let [scrolling, setScrolling] = useState(false);
  let [isToggle, setToggle] = useState(false);
  let [manu, setManu] = useState("");
  let [subManu, setSubManu] = useState("");
  let [isOpen, setIsOpen] = useState(false);
  let [cartManu, setCartManu] = useState(false);
  const [cart, setCart] = useState(null);
  let [userManu, setUserManu] = useState(false);
  let dropdownRef = useRef(null);
  let cartRef = useRef(null);
  let userRef = useRef(null);
  const { user, loading, removeUser } = useUserContext();
  // console.log(user);
  // console.log(loading);

  const { logout } = useAuthContext();

  const { closeMessage, openMessage } = useMessage();

  const {
    cart: cartData,
    // deleteProductInCartContext,
  } = useCartContext();
  const { fetchCart } = useCartActions();
  // console.log(user);

  useEffect(() => {
    setCart(cartData);
  }, [cartData]);
  const logoutUser = async () => {
    closeMessage("Logout successful", "success");
    await Promise.all([logout(), removeUser()]);
    window.location.reload();
  };
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

  useEffect(() => {
    if (!loading && !user) {
      console.log("Not authenticated user");
    }
    if (user && cart && cart.length === 0) {
      // console.log("in");

      fetchCart({ userId: user.id });
    }
  }, [user, loading]);
  return (
    <nav id="topnav" className={`${navClass} ${scrolling ? "nav-sticky" : ""}`}>
      <div className="container relative">
        {navlight === true ? (
          <Link className="logo" href="/">
            <span className="inline-block dark:hidden">
              <Image
                src="/images/logo-main-blk.png"
                width={120}
                height={65}
                className="l-dark"
                alt=""
              />
              <Image
                src="/images/logo-main-blk.png"
                width={120}
                height={65}
                className="l-light"
                alt=""
              />
            </span>
            <Image
              src="/images/logo-main-blk.png"
              width={120}
              height={65}
              className="hidden dark:inline-block"
              alt=""
            />
          </Link>
        ) : (
          <Link className="logo" href="/">
            <div>
              <Image
                src="/images/logo-main-blk.png"
                width={120}
                height={65}
                className="h-[65px] inline-block dark:hidden"
                alt=""
              />
              <Image
                src="/images/logo-main-blk.png"
                width={120}
                height={65}
                className="h-[65px] hidden dark:inline-block"
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
          {/* <li className="dropdown inline-block relative pe-1" ref={dropdownRef}>
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
          </li> */}
          <li
            className="dropdown inline-block relative ps-0.5 mx-1"
            ref={cartRef}
          >
            <Link
              href={"/shop-cart"}
              data-dropdown-toggle="dropdown"
              className="dropdown-toggle size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-white border border-black relative"
              type="button"
              onClick={() => setCartManu(!cartManu)}
            >
              <FiShoppingCart className="h-4 w-4" />

              {/* Cart count badge */}
              {cartData?.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-black text-white text-xs font-bold rounded-full px-1.5 py-0.5 shadow">
                  {cartData.length}
                </span>
              )}
            </Link>
          </li>
          {/* <li
            className="dropdown inline-block relative ps-0.5 mx-1"
            ref={cartRef}
          >
            <Link
              href={"/shop-cart"}
              data-dropdown-toggle="dropdown"
              className="dropdown-toggle size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-red-600 border border-red-600 text-white"
              type="button"
              onClick={() => setCartManu(!cartManu)}
            >
              <FiShoppingCart className="h-4 w-4"></FiShoppingCart>
            </Link>
          </li> */}

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

          <li
            className="dropdown inline-block relative ps-0.5 mx-1"
            ref={userRef}
          >
            <button
              data-dropdown-toggle="dropdown"
              className="dropdown-toggle items-center"
              type="button"
              onClick={() => setUserManu(!userManu)}
            >
              <span className="size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full font-semibold text-sm md:text-base dark:shadow-gray-800  bg-white border border-black relative">
                {/* {getInitials(user?.name || " ")} */}
                {user?.name?.trim() ? (
                  getInitials(user.name)
                ) : (
                  <FiUser className="w-4 h-4" />
                )}
              </span>
            </button>
            {userManu &&
              (user ? (
                <div className="dropdown-menu absolute end-0 m-0 mt-4 z-10 w-48 rounded-md overflow-hidden bg-white dark:bg-slate-900 shadow dark:shadow-gray-700">
                  <ul className="py-2 text-start">
                    <li className="ms-0">
                      {/* <p className="text-slate-400 pt-2 px-4">Welcome User</p> */}
                    </li>

                    <li className="ms-0">
                      <Link
                        href="/user-account"
                        // href="#"
                        className="flex items-center font-medium py-2 px-4 dark:text-white/70 hover:text-red-600 dark:hover:text-white"
                      >
                        <FiUser className="h-4 w-4 me-2"></FiUser>Account
                      </Link>
                    </li>
                    <li className="border-t border-gray-100 dark:border-gray-800 my-2"></li>
                    <li className="ms-0">
                      <button
                        onClick={logoutUser}
                        // href="/"
                        className="flex items-center font-medium py-2 px-4 dark:text-white/70 hover:text-red-600 dark:hover:text-white"
                      >
                        <FiLogOut className="h-4 w-4 me-2"></FiLogOut>Logout
                      </button>
                    </li>
                  </ul>
                </div>
              ) : (
                <div className="dropdown-menu absolute end-0 m-0 mt-4 z-10 w-48 rounded-md overflow-hidden bg-white dark:bg-slate-900 shadow dark:shadow-gray-700">
                  <ul className="py-2 text-start">
                    {/* <li className="ms-0">
                  <p className="text-slate-400 pt-2 px-4">Welcome User</p>
                </li> */}

                    <li className="ms-0">
                      <Link
                        href="/login"
                        className="flex items-center font-medium py-2 px-4 dark:text-white/70 hover:text-red-600 dark:hover:text-white"
                      >
                        <FiUser className="h-4 w-4 me-2"></FiUser>Login
                      </Link>
                    </li>
                    <li className="border-t border-gray-100 dark:border-gray-800 my-2"></li>
                    <li className="ms-0">
                      <Link
                        // href="/user-account"
                        href="/signup"
                        className="flex items-center font-medium py-2 px-4 dark:text-white/70 hover:text-red-600 dark:hover:text-white"
                      >
                        <FiUser className="h-4 w-4 me-2"></FiUser>SignUp
                      </Link>
                    </li>
                  </ul>
                </div>
              ))}
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
              <Link href="/shop" className="sub-menu-item">
                Shop
              </Link>
            </li>

            {/* <li className={`${manu === '/contact' ? 'active' : ''}`}><Link href="/contact" className="sub-menu-item">Business</Link></li> */}
            <li className={`${manu === "/aboutus" ? "active" : ""}`}>
              <Link href="/aboutus" className="sub-menu-item">
                About
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
