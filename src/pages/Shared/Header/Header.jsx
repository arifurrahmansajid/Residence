import { Link } from "react-router-dom";
import user1 from "../../../assets/user1.png"
import { useContext } from "react";
import { AuthContext } from "../../../auth/AuthProvider/AuthProvider";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Header = () => {
    const { user, userLogOut } = useContext(AuthContext)

    const navMenu = <>
        <li className="text-base font-medium mr-3"><Link to="/">Home</Link></li>
        <li className="text-base font-medium mr-3"><Link to="/about">About</Link></li>
        {
            user && <li className="text-base font-medium mr-3"><Link to="/blogs">Blog</Link></li>
        }
        <li className="text-base font-medium mr-3"><Link to="/contact">Contact</Link></li>
        {
            user && <li className="text-base font-medium mr-3"><Link to="/updateprofile">Update Profile </Link></li>
        }
    </>

    const handleLogout = () => {
        userLogOut()
            .then(() => {
                console.log('LogOut')
                toast(" User Sign-Out successful");
            })
            .catch((error) => {
                console.error(error)
            })
    }

    return (
        <div className="navbar bg-base-100 shadow-md container mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navMenu}
                    </ul>
                </div>
                <a className="lg:text-2xl lg:font-bold text-base font-semibold text-[#69b99d]">Residence</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navMenu}
                </ul>
            </div>
            <div className="navbar-end">
           
                <div className="dropdown dropdown-end mr-2 relative group">

                    <div tabIndex="0" role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            {
                                user && user && <img alt="" src={user?.photoURL} /> || <img alt="" src={user1} />
                            }
                        </div>
                    </div>


                    <div className="absolute hidden border-2 w-60 text-center bg-white shadow-lg rounded-md p-2 group-hover:block z-10 top-[60px] right-0">

                        {
                            user && user.displayName
                        }
                    </div>
                </div>
                {
                    user && <button onClick={handleLogout} className="btn w-[120px] bg-[#69b99d] text-white text-base font-semibold">Sign Out</button> ||
                    <Link to="/login" className="btn w-[100px] bg-[#69b99d] text-white text-base font-semibold">Login</Link>
                }
            </div>
        </div>
    );
};

export default Header;