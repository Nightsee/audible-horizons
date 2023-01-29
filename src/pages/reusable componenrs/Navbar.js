import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
    const [phoneNav, setPhoneNav] = useState(false)

    const hidenav = "md:hidden xsm:hidden";
    const showNav = "text-black  md:hidden xsm:block h-[fit] py-7 rounded-b-[40px] bg-white opacity-75 backdrop-blur absolute z-40 top-20 left-0 w-fit ";

    const handleclickMenu = () => {
        setPhoneNav(!phoneNav);
    }
    return(
        <nav class="h-20 ">
            <div class="relative xlg:max-w-6xl mx-auto h-20 lg:max-w-[1024px] md:max-w-[820px] xsm:max-w-[w-screen]">
            <div class="absolute h-20 overflow-hidden -top-5">
                <img src={require('../../Assets/Audible (1).png')} alt="logo" width="120px" height="120px"/>
            </div>
            <div class="md:flex justify-end h-16 pt-[16px] xsm:hidden">
                <ul class="list-none flex flex-row items-center w-96 justify-evenly">
                    <Link to="/home"><spans className="font-medium">Home</spans></Link>
                    <Link to='/about'>About</Link>
                    <li><a href='#pricing'>Pricing</a></li>
                    <li><a href='#contact'>Contact</a></li>
                    <Link to='/authentification'>Sign up</Link>
                </ul>
            </div>
            <div class="md:hidden xsm:flex h-[72px] mr-4 justify-end ">
                <button class="menu-btn" onClick={()=> handleclickMenu()}>
                  {!phoneNav ? <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="White">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg> : <p className="text-[34px] text-white w-8">&times;</p>}
                </button>
            </div>
            <div className={phoneNav ? showNav : hidenav}>
            <ul class="list-none grid grid-rows-5 gap-5 items-start p-7 font-medium text-[28px] w-screen text-center">
                    <Link to="/"><spans className="font-semibold">Home</spans></Link>
                    <Link to=''>About</Link>
                    <li><a href='#pricing'>Pricing</a></li>
                    <li><a href='#contact'>Contact</a></li>
                    <Link to='/athentification'>Sign up</Link>
                </ul>
            </div>
        </div>
        
    </nav>
    );
}

export default Navbar;