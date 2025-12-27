import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router';
import image from '../../assets/Log & icon/logo.png'
import { HiXMark } from 'react-icons/hi2';
import { IoMenuOutline, IoMoonSharp, IoSunny } from 'react-icons/io5';
import '../ButtonStyle/loginbutton.css'

const Navbar = ({theme, setTheme}) => {
    const [open, setOpen] = useState(false);
    const dropDown = useRef(null);
    const [hideNav, setHidenav] = useState(false);
    const lastScrolly = useRef(0);
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
        <NavLink to={'/'} onClick={() => setOpen(false)} className={({isActive}) => isActive ? "text-[#606060] rounded-4xl bg-[#CAEB66] py-1.5 px-3 font-semibold" : "hover:text-blue-700"}>Services</NavLink>
        <NavLink to={'coverage'} onClick={() => setOpen(false)} className={({isActive}) => isActive ? "text-[#606060] rounded-4xl bg-[#CAEB66] py-1.5 px-3 font-semibold" : "hover:text-blue-700"}>Coverage</NavLink>
        <NavLink to={'about'} onClick={() => setOpen(false)} className={({isActive}) => isActive ? "text-[#606060] rounded-4xl bg-[#CAEB66] py-1.5 px-3 font-semibold" : "hover:text-blue-700"}>About Us</NavLink>
        <NavLink to={''} onClick={() => setOpen(false)} className={({isActive}) => isActive ? "text-[#606060] rounded-4xl bg-[#CAEB66] py-1.5 px-3 font-semibold" : "hover:text-blue-700"}>Pricing</NavLink>
        <NavLink to={''} onClick={() => setOpen(false)} className={({isActive}) => isActive ? "text-[#606060] rounded-4xl bg-[#CAEB66] py-1.5 px-3 font-semibold" : "hover:text-blue-700"}>Be a Rider</NavLink>
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
                <div className='hidden w-71 lg:justify-end lg:flex gap-2.5'>
                    <button className="btn-53">
                        <div className="original">Log in</div>
                        <div className="letters">
                            <span>L</span>
                            <span>O</span>
                            <span>G I</span>
                            <span>N</span>
                        </div>
                    </button>
                    <button className="btn-53">
                        <div className="original">Sing up</div>
                        <div className="letters">

                            <span>S</span>
                            <span>I</span>
                            <span>N</span>
                            <span>G U</span>
                            <span>P</span>
                        </div>
                    </button>
                </div>
                <button onClick={toggleTheme} className='absolute lg:right-64 right-14 text-2xl'>
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
                    <div ref={dropDown} className='flex flex-col items-center pb-4'>
                        <div className='w-57.5 mb-3 flex flex-col gap-3 text-center'>
                            {links}
                        </div>
                        <div className='flex gap-2.5'>
                            <button className="btn-53">
                                <div className="original">Log in</div>
                                <div className="letters">

                                    <span>L</span>
                                    <span>O</span>
                                    <span>G I</span>
                                    <span>N</span>
                                </div>
                            </button>
                            <button className="btn-53">
                                <div className="original">Sing up</div>
                                <div className="letters">

                                    <span>S</span>
                                    <span>I</span>
                                    <span>N</span>
                                    <span>G U</span>
                                    <span>P</span>
                                </div>
                            </button>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Navbar;