import { useLoaderData } from "react-router-dom";
import Slider from "./Slider";
import Estate from "./Estate";
import { Helmet } from "react-helmet-async";


import "leaflet/dist/leaflet.css";
import { FaLocationDot } from "react-icons/fa6";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useMap } from 'https://cdn.esm.sh/react-leaflet/hooks'


const Home = () => {
    const estates = useLoaderData();
    console.log(estates)
    const position = [23.7983, 90.3876]
    return (
        <div>
            <Helmet>
                <title>Serenity Eden | Home</title>
            </Helmet>
            <Slider></Slider>
            <div className="text-center mt-16 mb-10 lg:mt-12">
                <h2 className="mb-4 text-2xl md:text-3xl lg:text-4xl font-semibold text-[#264369]">Our Estates</h2>
                <p className="w-10/12 md:w-10/12 lg:w-3/4 text-xl font-normal text-[#196680] mx-auto">Welcome to our curated collection of exceptional properties, where luxury meets tranquility. Explore our portfolio of beachfront villas, private island retreats, modern penthouses, and more. Each property is meticulously selected for its unique charm, breathtaking views, and lavish amenities. Discover your dream sanctuary with us.</p>
            </div>

            {/* Estates Container */}
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {
                        estates.map(estate => <Estate key={estate.id} estate={estate}></Estate>)
                    }
            </div>

            {/* Map Leaflet */}

            <div className="lg:flex lg:flex-col lg:justify-center lg:items-center lg:mt-16">
                <div className="text-center mt-16 mb-10 lg:mt-12">
                    <h2 className="mb-4 text-2xl md:text-3xl lg:text-4xl font-semibold text-[#264369]">Our Location</h2>
                </div>
                <div className="">
                    <MapContainer className="  h-[300px] md:h-[500px] lg:w-[800px] lg:h-[600px]" center={position} zoom={10} scrollWheelZoom={false}>
                        <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={position}>
                        <Popup>
                            Serenity Eden
                        </Popup>
                        </Marker>
                    </MapContainer>
                    </div>
                </div>
            </div>
        
    );
};

export default Home;