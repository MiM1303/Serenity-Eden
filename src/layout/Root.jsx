import { Outlet } from "react-router-dom";


const Root = () => {
    return (
        <div className=" container md:mt-4 mx-auto  lg:mt-16 font-poppins">
            <Outlet></Outlet>      
        </div>
    );
};

export default Root;