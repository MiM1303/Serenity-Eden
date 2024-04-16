import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer"
import Navbar from "../pages/Shared/Navbar";


const Root = () => {
    return (
        <div className=" font-poppins">
            <div className=" container px-4 md:mt-4 mx-auto lg:mt-16">
                <Navbar></Navbar>
                <Outlet></Outlet> 
            </div>
            <Footer></Footer>
                 
        </div>
    );
};

export default Root;