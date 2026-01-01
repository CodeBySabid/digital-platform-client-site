import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router';
import image from '../../assets/Log & icon/logo.png'
import { HiXMark } from 'react-icons/hi2';
import { IoMenuOutline, IoMoonSharp, IoSunny } from 'react-icons/io5';
import '../ButtonStyle/loginbutton.css'
import UseAuth from '../../hooks/UseAuth';
import { FaUserCircle } from 'react-icons/fa';

const Navbar = ({ theme, setTheme }) => {
    const [open, setOpen] = useState(false);
    const dropDown = useRef(null);
    const [hideNav, setHidenav] = useState(false);
    const lastScrolly = useRef(0);
    const {user, LogOut} = UseAuth()
    // const [theme, setTheme] = useState("dark")

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > lastScrolly.current) {
                setHidenav(true)
            }
            else {
                setHidenav(false)
            }
            lastScrolly.current = window.scrollY;
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    useEffect(() => {
        const handleScrollOutside = () => {
            if (open) {
                setOpen(false);
            }
        }
        window.addEventListener("scroll", handleScrollOutside);
        return () => window.removeEventListener("scroll", handleScrollOutside)
    }, [open])

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setOpen(false);
            }
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [])

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (open && dropDown.current && !dropDown.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [open])

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
    }

    useEffect(() => {
        document.documentElement.setAttribute("dark-theme", theme)
    }, [theme])

    const links = <>
        <NavLink to={'/'} onClick={() => setOpen(false)} className={({ isActive }) => isActive ? "text-[#606060] rounded-4xl bg-[#CAEB66] py-1.5 px-3 font-semibold" : "hover:text-blue-700"}>Services</NavLink>
        <NavLink to={'coverage'} onClick={() => setOpen(false)} className={({ isActive }) => isActive ? "text-[#606060] rounded-4xl bg-[#CAEB66] py-1.5 px-3 font-semibold" : "hover:text-blue-700"}>Coverage</NavLink>
        <NavLink to={'about'} onClick={() => setOpen(false)} className={({ isActive }) => isActive ? "text-[#606060] rounded-4xl bg-[#CAEB66] py-1.5 px-3 font-semibold" : "hover:text-blue-700"}>About Us</NavLink>
        <NavLink to={'parcel_send'} onClick={() => setOpen(false)} className={({ isActive }) => isActive ? "text-[#606060] rounded-4xl bg-[#CAEB66] py-1.5 px-3 font-semibold" : "hover:text-blue-700"}>Pricing</NavLink>
        <NavLink to={'rider'} onClick={() => setOpen(false)} className={({ isActive }) => isActive ? "text-[#606060] rounded-4xl bg-[#CAEB66] py-1.5 px-3 font-semibold" : "hover:text-blue-700"}>Be a Rider</NavLink>
    </>

    console.log(user)

    const loginAndRegister = <>
        <Link to={'login'} className="btn-53">
            <div className="original">Login</div>
            <div className="letters">
                <span>L</span>
                <span>O</span>
                <span>G</span>
                <span>I</span>
                <span>N</span>
            </div>
        </Link>
        <Link to={'register'} className="btn-53">
            <div className="original">Register</div>
            <div className="letters">
                <span>R</span>
                <span>E</span>
                <span>G</span>
                <span>I</span>
                <span>S</span>
                <span>T</span>
                <span>E</span>
                <span>R</span>
            </div>
        </Link>
    </>

    const logout = < >
        <Link onClick={() => LogOut()} className="btn-53">
            <div className="original">Log Out</div>
            <div className="letters">
                <span>L</span>
                <span>O</span>
                <span>G</span>
                <span>O</span>
                <span>U</span>
                <span>T</span>
            </div>
        </Link>
    </>

    const userProfile = <>
        <Link>
            <img className="rounded-full w-10 h-10 object-cover cursor-pointer" src={user?.photoURL || <FaUserCircle></FaUserCircle>} alt="" />
        </Link>
    </>


    return (
        <div className={`fixed top-0 left-1/2 transform -translate-x-1/2 w-full z-50 transition-transform duration-300 ${hideNav ? "-translate-y-full" : "translate-y-0"} bg-white/40 dark:bg-gray-900/40 backdrop-blur-xl border-b border-white/10 shadow-lg `}>
            <div className='flex justify-between px-4 py-2 items-center'>
                <Link className='relative w-37'>
                    <img className='max-sm:h-11' src={image} alt="" />
                    <h1 className='absolute font-bold -bottom-1 left-5  text-3xl max-sm:text-2xl'>ZapShift</h1>
                </Link>
                <div className='hidden lg:flex gap-4'>
                    {links}
                </div>
                {
                    user ? <div className='lg:flex gap-3 hidden'>
                        {userProfile}
                        <div className='hidden lg:flex'>{logout}</div>
                    </div> : <div className='hidden lg:flex gap-2'>{loginAndRegister}</div>
                }
                <button onClick={toggleTheme} className={`${user ? 'absolute lg:right-48 right-14 text-2xl': 'absolute lg:right-64 right-14 text-2xl'}`}>
                    {
                        theme === "dark" ? <IoSunny></IoSunny> : <IoMoonSharp></IoMoonSharp>
                    }
                </button>
                <button className='lg:hidden' onClick={() => setOpen(!open)}>
                    {
                        open ? <HiXMark size={32}></HiXMark> : <IoMenuOutline size={32}></IoMenuOutline >
                    }
                </button>
            </div>
            {
                open && (
                    <div ref={dropDown} className='w-full pb-3.5 flex flex-col items-center justify-center gap-3'>
                        {links}
                        {
                            user ? <div className='flex gap-3 items-center'> <div>{userProfile}</div> <div>{logout}</div></div> :
                                <div className='flex items-center gap-2.5'>{loginAndRegister}</div>
                        }
                    </div>
                )
            }
        </div>
    );
};

export default Navbar;