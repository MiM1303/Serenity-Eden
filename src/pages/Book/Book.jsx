import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from "react-hook-form"

const Book = () => {
    const properties = useLoaderData();
    const {id} = useParams();
    console.log(id);
    const idInt = parseInt(id)
    const estate = properties.find(property => property.id === idInt);
    const {estate_title, price, status, location, image_url} = estate;
    const {handleSubmit} = useForm();


    const onSubmit =()=>{
        toast.success("Estate booked successfully! Our team will be in touch with you soon");
    }

    return (
        <div>
            <ToastContainer />
            <div className="md:mx-6 lg:mx-10">
                <div className="flex flex-col lg:flex-row gap-4 md:gap-10 lg:gap-14 md:mt-16 mt-8">
                    {/* estate details */}
                    
                        <img src={image_url} alt="" className="opacity-75 relative rounded-xl " />
                        <div className="absolute top-44 left-8 md:top-72 md:left-28 lg:top-96 lg:left-96 text-[#2e4057] text-center">
                            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">{estate_title}</h1>
                            <p className="py-1 lg:py-6 text-lg md:text-2xl lg:text-2xl font-bold">In {location}</p>
                            <p className="py-1 lg:py-6 text-lg md:text-2xl lg:text-2xl font-bold">For {status}</p>
                            <p className="py-1 lg:py-6 text-lg md:text-3xl lg:text-3xl font-bold">Only at <span className="underline">{price}!</span></p>
                        </div>
                    
                    {/* form */}
                    <div className="card shrink-0 lg:w-2/5 shadow-2xl bg-[#7ab9c7]">
                    <form onSubmit={handleSubmit(onSubmit)} className="mx-auto w-full md:w-4/5 card-body text-2xl">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text text-base md:text-lg lg:text-lg">Name</span>
                        </label>
                        <input type="text" placeholder="Name" className="text-md input input-bordered bg-base-300"  required/>
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text text-base md:text-lg lg:text-lg">Payment Method</span>
                        </label>
                        <input type="text" placeholder="Payment Method" className="input input-bordered bg-base-300"  required/>
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text text-base md:text-lg lg:text-lg">Phone Number</span>
                        </label>
                        <input type="number" placeholder="Phone Number" className="input input-bordered bg-base-300 "   required/>
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text text-base md:text-lg lg:text-lg">Address</span>
                            </label>
                            <input type="text" placeholder="Address" className="input input-bordered bg-base-300"   required/>
                        </div>
                        <div className="form-control mt-6">
                        <button className="btn bg-[#196680] text-white lg:text-xl md:text-xl text-base font-medium lg:pb-10 lg:pt-5 pt-3 pb-4 mb:pb-10 mb:pt-5 flex items-center justify-center border-none">Confirm</button>
                        </div>
                    </form>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default Book;