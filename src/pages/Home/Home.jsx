import { useLoaderData } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Slider from "./Slider";
import Estate from "./Estate";


const Home = () => {
    const estates = useLoaderData();
    console.log(estates)
    return (
        <div>
            <Navbar></Navbar>
            <Slider></Slider>
            <div className="text-center mt-10 mb-10 lg:mt-12">
                <h2 className="mb-4 text-2xl md:text-3xl lg:text-4xl font-semibold text-[#264369]">Our Estates</h2>
                <p className="w-10/12 md:w-10/12 lg:w-3/4 text-xl font-normal text-[#196680] mx-auto">Welcome to our curated collection of exceptional properties, where luxury meets tranquility. Explore our portfolio of beachfront villas, private island retreats, modern penthouses, and more. Each property is meticulously selected for its unique charm, breathtaking views, and lavish amenities. Discover your dream sanctuary with us.</p>
            </div>

            {/* Estates Container */}
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {
                        estates.map(estate => <Estate key={estate.id} estate={estate}></Estate>)
                    }
            </div>

        </div>
    );
};

export default Home;