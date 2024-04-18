import { useEffect, useState } from "react";
import Review from "./Review";
import { FaUserCircle } from "react-icons/fa";


const Reviews = () => {
    const[reviews, setReviews]=useState([]);
    

    useEffect(()=>{
        fetch('reviews.json')
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[]);
    console.log(reviews);
    return (
        <div className="flex flex-col mt-4 md:mt-14 lg:mt-16 justify-center items-center mb-16">
            <div className="text-center mt-16 mb-10 lg:mt-12">
                    <h2 className="mb-4 text-xl md:text-2xl lg:text-4xl font-semibold text-[#264369]">Customer Reviews</h2>
                    <p className="w-10/12 md:w-10/12 lg:w-3/4 md:text-lg lg:text-xl font-normal text-[#196680] mx-auto">Swipe to see some reviews from our esteemed customers</p>
            </div>
            <div className="lg:carousel md:carousel carousel-center w-full p-4 space-x-4 rounded-box hidden bg-[#24536c] ">
            {/* LARGE DEVICE */}
                {
                    reviews.map(rev=> <div key={rev.id} className="carousel-item md:w-[545px] lg:w-[568px] rounded-box flex flex-col gap-6 text-center p-20 bg-gradient-to-b from-[#caf0e0] to-[#bedef4]"> 
                    <FaUserCircle className="mx-auto text-5xl"></FaUserCircle>
                    <h2 className="text-2xl font-semibold text-[#275590]">{rev.name}</h2>
                    <p className="text-xl leading-relaxed"><span className="text-2xl font-bold">"</span>{rev.review}<span className="text-2xl font-bold">"</span></p> </div> )
                }
            </div>
            {/* SMALL DEVICE */}
            <div className="h-[450px] carousel carousel-vertical rounded-box md:hidden lg:hidden">
                {
                    reviews.map(rev=> <div key={rev.id} className="carousel-item w-[200px] h-full rounded-box flex flex-col gap-4 text-center p-10 bg-gradient-to-b from-[#e2f0ca] to-[#e2edfa]"> 
                    <FaUserCircle className="mx-auto text-5xl"></FaUserCircle>
                    <h2 className="text-2xl font-semibold text-[#275590]">{rev.name}</h2>
                    <p className="text-xl leading-relaxed"><span className="text-2xl font-bold">"</span>{rev.review}<span className="text-2xl font-bold">"</span></p> </div> )
                }
            </div>    

                {/* <div className="carousel-item w-[600px] bg-blue-300 rounded-box">
                    <div className="text-center p-10">
                        <FaUserCircle className="text-6xl mx-auto mb-4"></FaUserCircle>
                        <h2 className="text-2xl mb-4">{reviews[0].name}</h2>
                        <p className="text-xl">{reviews[0].review}</p>
                    </div>
                </div> 
                <div className="carousel-item w-[600px] bg-pink-300 rounded-box">
            
                </div> 
                <div className="carousel-item w-[600px] bg-yellow-300 rounded-box">
                        
                </div> 
                <div className="carousel-item w-[600px] bg-green-300 rounded-box">
                    
                </div> 
                <div className="carousel-item w-[600px] bg-purple-300 rounded-box">
                    
                </div> 
                <div className="carousel-item w-[600px] bg-red-300 rounded-box">
                    
                </div> 
                <div className="carousel-item w-[600px] bg-teal-300 rounded-box">
                    
                </div> */}
            
        </div>
    );
};

export default Reviews;