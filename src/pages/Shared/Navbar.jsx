import { NavLink } from "react-router-dom";
import { GiHummingbird } from "react-icons/gi";
import "../../App.css"
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";


const Navbar = () => {

    const {user, logOut} = useContext(AuthContext)
    
    const signOutUser = () => {
        logOut()
        .then(()=>{})
        .catch(()=>{})
    }

    const navLinks = <>
        <li className="font-medium font-3xl text-white"><NavLink to="/">Home</NavLink></li>
        <li className="font-medium font-3xl text-white"><NavLink to="/login">Login</NavLink></li>
        <li className="font-medium font-3xl text-white"><NavLink to="/register">Register</NavLink></li>

    </>

    return (
        <div className="mb-6 md:mb-8 lg:mb-12">
            <div className="navbar p-6 bg-gradient-to-r from-[#2e4057] via-[#196680] to-[#048ba8] rounded-xl">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost p-0 lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="text-white h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm z-10 dropdown-content mt-3  p-2 shadow bg-[#228c94]  rounded-box w-52">
                        {navLinks}
                    </ul>
                    </div>
                    <a className="flex items-center justify-center btn btn-ghost font-exo2 font-semibold text-xl lg:text-3xl text-white">Serenity Eden <GiHummingbird className="text-4xl font-semibold text-[#2CB1CF]"/></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                
                    {user? 
                    <div className="navbar-end">
                    <div tabIndex={0} className="flex gap-4 ">
                        <div className="tooltip" data-tip={user.displayName}>
                        <img alt="Tailwind CSS Navbar component" className=" w-12 rounded-full btn btn-ghost btn-circle avatar" src={user.photoURL}  />
                        </div>
                        <button onClick={signOutUser} className="btn hover:bg-[#99c24d] border-none p-3 text-sm bg-[#2e4057] text-white">Log Out</button>
                    </div>
                    </div>
                    :
                    <div className="navbar-end ">
                        <Link to={'/login'} className="hover:bg-[#99c24d] p-3 btn border-none text-sm bg-[#2e4057] text-white">Log In</Link>
                    </div>
                    }
                
            </div>
        </div>
    );
    // <a className="btn border-none p-2 text-sm bg-[#2e4057] text-white">Button</a>
};

export default Navbar;