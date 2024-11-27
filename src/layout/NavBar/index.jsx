import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import NavItem from './Sections/NavItem';
import logo from './../../assets/img/logo.png';

const NavBar = () => {
    const [ menu, setMenu ] = useState(false);

    const handleMenu = () => {
        setMenu(!menu);
    }

    return (
        <nav className='relative z-10 text-black text-lg bg-[#FAF9F8;] p-3' >
            <div className='w-full '>
                <div className='flex items-center justify-center mx-5 sm:mx-10 lg:mx-20'>
                    {/* logo */}
                    <div className='flex items-center text-2xl h-14'>
                        <Link to="./"><img className='w-16 h-10' src={logo} alt="logo" /></Link>
                    </div>
                    {/* menu button */}
                    <div className='text-5xl sm:hidden absolute right-5 top-0'>
                        <button onClick={handleMenu}>{menu ? "-" : "+" }</button>
                    </div>
                    {/* big screen nav-itmes */}
                    <div className='hidden sm:block absolute right-5'>
                        <NavItem />
                    </div>
                </div>
                
                {/* small screen nav-itmes */}
                <div className='block sm:hidden'>
                    {menu && <NavItem mobile/>}
                </div>

            </div>
        </nav>
    )
}

export default NavBar