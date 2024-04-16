import { MdLocationPin } from "react-icons/md";
import { FaDollarSign } from "react-icons/fa";
import { IoHome } from "react-icons/io5";


const Estate = ({estate}) => {
    const {id, estate_title, price, status, location, facilities, image_url} = estate;
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl">
                <figure><img src={image_url}  /></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl">{estate_title}</h2>
                    <p className="text-lg flex items-center gap-2"><MdLocationPin className="text-red-700 text-2xl" />{location}</p>
                    <p className="text-lg flex items-center gap-2"><IoHome className="text-blue-800 text-2xl" />For {status}</p>
                    <p className="text-lg flex items-center gap-2"><FaDollarSign className="text-green-700 text-2xl" />{price}</p>
                    
                    <div>
                        {/* {
                            facilities.map(facility =>
                                <span key={id} className="p-2 bg-base-300">{facility}</span>
                            )
                        } */}
                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn bg-[#99c24d] text-white text-lg">View Property</button>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Estate;