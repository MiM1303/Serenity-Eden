import { NavLink } from "react-router-dom";


const Navbar = () => {

    const navLinks = <>
        <li className="font-medium font-3xl text-white"><NavLink to="/">Home</NavLink></li>
        <li className="font-medium font-3xl text-white"><NavLink to="/login">Login</NavLink></li>
        <li className="font-medium font-3xl text-white"><NavLink to="/register">Register</NavLink></li>

    </>

    return (
        <div className="">
            <div className="navbar p-6 bg-gradient-to-r from-[#2e4057] via-[#196680] to-[#048ba8] rounded-xl">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost p-0 lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="text-white h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm  dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                    </div>
                    <a className="btn btn-ghost font-exo2 font-semibold text-xl lg:text-3xl text-white">Serenity Eden</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn border-none p-2 text-sm bg-[#2e4057] text-white">Button</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;