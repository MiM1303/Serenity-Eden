import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet-async";
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import app from "../../firebase/firebase.config"
import { getAuth } from "firebase/auth";
import { useContext, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const UpdateProfile = () => {

    const {updateUserInfo, user, setUser} = useContext(AuthContext);
    const [updatedName, setUpdatedName] = useState(user.displayName);
    const [updatedPhoto, setUpdatedPhoto] = useState(user.photoURL);
    
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const onSubmit = () =>{
        console.log(updatedPhoto, updatedName);
        updateUserInfo(updatedName, updatedPhoto);
        toast.success("Successfully Updated!");
      }


    return (
        <div className="">
            <Helmet>
                <title>Serenity Eden | Register</title>
            </Helmet>
            <ToastContainer />
            <h2 className="text-center md:mt-16 text-2xl font-semibold text-[#442537]">Profile Update</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="mx-auto w-full md:w-11/12 lg:w-3/5 card-body text-2xl">
                <div className="form-control">
                <label className="label">
                    <span className="label-text text-lg">Name</span>
                </label>
                <input type="text" value={updatedName} placeholder='' className="text-md input input-bordered" {...register("name", { required: true })} onChange={(e) => setUpdatedName(e.target.value)}/>
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text text-lg">Photo URL</span>
                </label>
                <input type="text" value={updatedPhoto} className="input input-bordered" {...register("photo", { required: true })} onChange={(e) => setUpdatedPhoto(e.target.value)}/>
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text text-lg">Email</span>
                </label>
                <input type="email" value={user.email} className="input input-bordered" {...register("email", { required: true })} />
                </div>
                <div className="form-control mt-6">
                <button className="btn bg-[#196680] text-white text-xl font-medium pb-10 pt-5 flex items-center justify-center">Update</button>
                </div>
            </form>
        </div>
    );
};

export default UpdateProfile;