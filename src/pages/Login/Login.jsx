import { useContext } from "react";
import { useForm } from "react-hook-form"
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { AiFillGoogleCircle } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet-async";


const Login = () => {

    const {signIn, googleSignIn, githubSignIn} = useContext(AuthContext);
    const location = useLocation();
    console.log('Location in the login page',location);
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const onSubmit = (data) =>{ 
        console.log(data);
        const {email, password} = data;

        signIn(email, password)
        .then(result=>{
            console.log(result.user);

            // navigate after login
            navigate(location?.state ? location.state : '/');
        })
        .catch(error=>{
            console.error(error);
            toast.error("Email and Password did not match! Please try again!!");
        })
    }

    const googleLogin = ()=>{
        googleSignIn()
        .then(result=>{
            console.log(result.user);

            // navigate after login
            navigate(location?.state ? location.state : '/');
        })
        .catch(error=>{
            toast.error("Email and Password did not match! Please try again!!")
        })
    }

    const githubLogin = ()=>{
        githubSignIn()
        .then(result=>{
            console.log(result.user);

            // navigate after login
            navigate(location?.state ? location.state : '/');
        })
        .catch(toast.error("Email and Password did not match! Please try again!!"))
    }

    return (
        <div>
            <Helmet>
                <title>Serenity Eden | Login</title>
            </Helmet>
            <ToastContainer />
            <h2 className="text-center text-2xl font-semibold text-[#442537]">Please Login!</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" className="input input-bordered" {...register("email", { required: true })} />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" className="input input-bordered" {...register("password", { required: true })} />
                <label className="label">
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
                </div>
                <div className="form-control mt-6">
                <button className="btn bg-[#196680] text-white text-xl font-medium pb-10 pt-5 flex items-center justify-center">Login</button>
                </div>
            </form>
            <p className="text-center text-xl">Do not have an account?
                <Link className="text-blue-700 font-semibold " to="/register"> Register Here!</Link>
            </p>
            <div className="text-center mt-12  border-b-2 w-fit mx-auto py-4 px-10 rounded-2xl shadow-sm">
                <h2 className="mb-4 text-xl">Login with:</h2>
                <div className="flex gap-6 justify-center">
                    <button><AiFillGoogleCircle 
                        onClick={googleLogin} className="text-red-600 text-5xl"/></button>
                    <button><FaGithub 
                        onClick={githubLogin} className="text-[#2e4057] text-5xl"/></button>
                </div>
            </div>
        </div>
    );
};

export default Login;