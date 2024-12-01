import { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../auth/AuthProvider/AuthProvider";
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false)

    const location = useLocation()
    const navigate = useNavigate()

    const { signUser, createUserGoogle, createUserGitHub } = useContext(AuthContext)
    const handleSign = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        // console.log(email, password)

        if(!/@gmail\.com$/.test(email)){
            toast('example@example.com')
            return
        }
        if(password.length < 6) {
            toast('Password should be at least 6 characters')
            return
        }
        if (!/[A-Z]/.test(password)) {
            toast('Your password must contain at least one uppercase letter')
            return;
        }
        else if (!/[a-z]/.test(password)) {
            toast('Your password must contain at least one Lowercase letter')
            return;
        }


        signUser(email, password)
            .then((result) => {
                console.log(result.user)
                toast('Your Login successful')
                navigate(location?.state ? location.state : "/")
            })
            .catch((error) => {
                console.error(error)
                toast('Invalid Email or password')
            })
    }

    const handleGoogle = () => {
        createUserGoogle()
            .then((result) => {
                console.log(result.user)
                 toast('Your Login successful')
                navigate(location?.state ? location.state : "/")
            })
            .catch((error) => {
                console.error(error)
            })
    }

    const handleGitHub = () => {
        createUserGitHub()
            .then((result) => {
                console.log(result.user)
                toast('Your Login successful')
                navigate(location?.state ? location.state : "/")
            })
            .catch((error) => {
                console.error(error)
            })
    }

    return (
        <div className="border-2 lg:w-[500px] mx-auto my-10 p-5 rounded-lg bg-base-200">
            <Helmet>
                <title> Residence | Login</title>
            </Helmet>
            <h2 className="text-center text-base font-semibold">Pleace Login Your Accoutn</h2>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className=" w-full max-w-sm shadow-2xl bg-base-100 p6">
                    <form onSubmit={handleSign} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-base font-medium">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter Your Email"
                                className="input input-bordered"
                                required />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text text-base font-medium">Password</span>
                            </label>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                placeholder="Enter Your Password"
                                className="input input-bordered"
                                required />
                            <div className="absolute top-[52px] right-4 cursor-pointer " onClick={() => setShowPassword(!showPassword)}>
                                {
                                    showPassword ? <FaEye className="text-2xl"></FaEye> : <FaEyeSlash className="text-2xl"></FaEyeSlash>
                                }
                            </div>
                            
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover text-blue-500">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#69b99d] text-white">Login</button>
                        </div>
                    </form>
                    <div className="my-5">
                        <div className="flex items-center pt-4 space-x-1">
                            <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                            <p className="px-3 text-base text-center dark:text-gray-600">Login with social accounts</p>
                            <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                        </div>
                        <div className="flex justify-center space-x-4">
                            <button onClick={handleGoogle} className="p-3 rounded-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                                    <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                                </svg>
                            </button>
                            <button onClick={handleGitHub} className="p-3 rounded-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                                    <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                                </svg>
                            </button>
                        </div>
                        <h2 className="text-center text-base mt-3 my-5">Do not have an account yet? <Link to="/register" className="text-blue-500 font-semibold">Register</Link></h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
