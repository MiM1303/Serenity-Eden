import { MdLocationPin } from "react-icons/md";
import { FaDollarSign } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { Link } from "react-router-dom";

// #e2f0ca --> green from gradient
// #adeedd --> teal from gradient
// #caf0e0 --> another green


const Estate = ({estate}) => {
    const {id, estate_title, price, status, location, facilities, image_url} = estate;
    return (
        <div>
            <div className="card bg-gradient-to-b from-[#caf0e0] to-[#e2edfa] shadow-xl mb-3">
                <figure><img src={image_url} className="md:w-11/12 lg:w-11/12 rounded-xl mt-5   lg:h-[335px]"  /></figure>
                <div className="flex flex-col gap-4 card-body">
                    <h2 className="card-title md:text-xl lg:text-2xl">{estate_title}</h2>
                    <p className="md:text-base lg:text-lg flex items-center gap-2"><IoHome className="text-blue-800 text-2xl" />For {status}</p>
                    <p className="md:text-base lg:text-lg flex items-center gap-2"><MdLocationPin className="text-red-700 text-2xl" />{location}</p>
                    <p className="md:text-base lg:text-lg flex items-center gap-2"><FaDollarSign className="text-green-700 text-2xl" />{price}</p>
                    
                    <div>
                        {
                            facilities.map(facility =>
                                <span key={id} className="grid grid-cols-1 mb-3 w-fit  bg-[#93d6db] rounded-xl shadow-md py-1 px-3">{facility}</span>
                            )
                        }
                    </div>
                    <div className="card-actions justify-end">
                        <Link to={`/estate-details/${id}`}>
                            <button className="btn bg-[#50a9af] text-white text-lg hover:bg-[#2e4057]">View Property</button>
                        </Link>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Estate;