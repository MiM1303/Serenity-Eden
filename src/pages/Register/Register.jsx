import { useContext, useState } from "react";
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet-async";

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);

    const {createUser, updateUserInfo, setUser} = useContext(AuthContext);    

    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const onSubmit = (data) => {
        console.log(data);
        const {email, name, password, photoURL} = data;
        if(password.length<6)
        {
            toast.error("Password must be at least 6 characters");
            return;
        }
        else if(!passwordRegex.test(password))
        {
            toast.error("Password must contain atleast one uppercase and lowercase letter");
            return;
        }

        createUser(email, password)
        .then(result =>{
            console.log(result.user);
            updateUserInfo(name, photoURL)
            .then(()=>{
                setUser({
                    displayName: name,
                    photoURL: photoURL,
                    email: email
                })
            })
            console.log(data);
            toast.success("Successfully Registered!");
        })
        .catch(error =>{
            console.error(error)
            toast.error(error.message)
        })
      }
      

    

    return (
        <div className="">
            <Helmet>
                <title>Serenity Eden | Register</title>
            </Helmet>
            <ToastContainer />
            <h2 className="text-center lg:text-4xl text-2xl mt-16 font-semibold text-[#442537]">Register Now!</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="mx-auto lg:w-3/5 card-body text-2xl">
                <div className="form-control">
                <label className="label">
                    <span className="label-text text-base lg:text-lg">Name</span>
                </label>
                <input type="text" placeholder="name" className="text-md input input-bordered" {...register("name", { required: true })} />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text text-base lg:text-lg">Photo URL</span>
                </label>
                <input type="text" placeholder="photo url" className="input input-bordered" {...register("photo", { required: true })} />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text text-base lg:text-lg">Email</span>
                </label>
                <input type="email" placeholder="email" className="input input-bordered" {...register("email", { required: true })} />
                </div>
                <div className="form-control relative">
                    <label className="label">
                        <span className="label-text text-base lg:text-lg">Password</span>
                    </label>
                    <input type={showPassword? "text" : "password"} placeholder="password" className="input input-bordered" {...register("password", { required: true })} />
                        <span className="absolute right-4 top-14 lg:right-[2.5rem]" onClick={()=>setShowPassword(!showPassword)}>
                                {showPassword ? <FaEyeSlash className="text-[#196680] font-semibold text-2xl"></FaEyeSlash> : <FaEye className="text-[#196680]  font-semibold text-2xl"></FaEye>}
                        </span>
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                <button className="btn bg-[#196680] hover:bg-[#50a9af] text-white text-base lg:text-xl font-medium pb-10 pt-4 flex items-center justify-center">Register</button>
                </div>
            </form>
            <p className="text-center mx-6 text-base lg:text-xl">Already have an account?
                <Link className="text-blue-700 font-semibold " to="/login"> Login Here!</Link>
            </p>
        </div>
    );
};

export default Register;