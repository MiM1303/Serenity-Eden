import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const EstateDetails = () => {
    // const [estateStatus, setEstateStatus] = useState(true);
    const properties = useLoaderData();
    const {id} = useParams();
    console.log(id);
    const idInt = parseInt(id)
    const estate = properties.find(property => property.id === idInt);
    const {estate_title, segment_name, description, price, status, location, facilities, image_url} = estate;
    // if(status==='rent')
    // {
    //     setEstateStatus(true)
    // }
    // else if(status==='sale')
    // {
    //     setEstateStatus(false)
    // }
    // console.log(estate_title);
    return (
        <div>
            <Helmet>
                <title>Serenity Eden | Estate Details-{id}</title>
            </Helmet>
            <div className="mx-2 lg:mx-10">
                <div className="flex justify-center items-center flex-col gap-10 lg:flex-row">
                    <img src={image_url} className=" rounded-lg shadow-2xl" />
                    <div className=''>
                    <h1 className="text-3xl lg:text-5xl font-bold">{estate_title}</h1>
                    <p className="py-6 text-lg lg:text-xl">{description}</p>
                    <div className='flex flex-col gap-5 mb-10'>
                        <p className='text-lg lg:text-xl'><span className='font-bold'>Property Type:</span> {segment_name}</p>
                        <p className='text-lg lg:text-xl'><span className='font-bold '>Location:</span> {location}</p>
                        <p className='font-bold text-lg lg:text-xl'>Facilities:</p>
                        <div className='flex flex-col md:flex-row lg:flex-row gap-2 lg:gap-4'>
                            {
                                facilities.map(facility =>
                                    <span key={id} className=" mb-3 w-fit  bg-[#C3E681] rounded-xl shadow-md py-1 px-3 text-base lg:text-lg">{facility}</span>
                                )
                            }
                        </div>
                        <p className='text-lg lg:text-xl'><span className='font-bold '>Status:</span> {status}</p>
                        <p className='text-lg lg:text-xl'><span className='font-bold '>Price:</span> {price}</p>
                    </div>
                    <Link to={`/estate-details/${id}/book`}><button className='hover:bg-[#99c24d] btn w-full  bg-[#196680] text-white text-xl font-medium pb-10 pt-5 flex items-center justify-center'>Book</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EstateDetails;