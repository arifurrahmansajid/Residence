import { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../auth/AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const [showPassword, setShowPassword] = useState(false)
   
    const navigate = useNavigate()

    const { createNewUser, userLogOut} = useContext(AuthContext)
    const handleRegister = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value
        const photourl = e.target.photourl.value
        const password = e.target.password.value
        // console.log(name, email, photourl, password)

        if(!/@gmail\.com$/.test(email)){
            toast('Email must end with @gmail.com')
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
     
        createNewUser(email, password)
            .then((result) => {
                console.log(result.user)
                toast('Your sign-up successful')
              
                userLogOut()
                    .then(() => {
                        console.log('LogOut')
                        navigate("/login")
                    })
                    .catch((error) => {
                        console.error(error)
                    })

                updateProfile(auth.currentUser, {
                    displayName: name,
                    photoURL: photourl
                })
                    .then(() => {
                        console.log('Profile Update')
                    })
                    .catch((error) => {
                        console.error(error)
                    })
            })
            .catch((error) => {
                console.error(error)
                toast('Email already use')
            })
    }
    return (
        <div className="border-2 lg:w-[500px] mx-auto my-10 p-5 rounded-lg bg-base-200">
            <Helmet>
                <title> Residence | Register</title>
            </Helmet>
            <h2 className="text-center text-base font-semibold">Pleace Register Your Accoutn</h2>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-base font-medium">Name</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter Your Name"
                                className="input input-bordered"
                               required />
                        </div>
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
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-base font-medium">PhotoURL</span>
                            </label>
                            <input
                                type="url"
                                name="photourl"
                                placeholder="Enter Your Url"
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
                            <button className="btn bg-[#69b99d] text-white">Register</button>
                        </div>
                        <h2 className="text-center text-base mt-3">Already have an account? <Link to="/login" className="text-blue-500 font-semibold">Login</Link></h2>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;