import { Helmet } from "react-helmet";
import { updateProfile } from "firebase/auth";
import { useContext } from "react";
import { AuthContext } from "../../auth/AuthProvider/AuthProvider";
import auth from "../../firebase/firebase.config";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Profile = () => {

    const { user } = useContext(AuthContext);

    const update = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const photourl = e.target.photourl.value;

        updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photourl
        })
            .then(() => {
                console.log('Successfully Update Your Profile')
                toast("Your Profile Update Successfully");

            })
            .catch((error) => {
                console.error(error)
            })
    };

    return (
        <div className="px-2 lg:h-[500px]">
            <Helmet>
                <title> Residence | Update Profile</title>
            </Helmet>

            <div className="flex lg:flex-row flex-col justify-center items-center lg:w-[800px] h-[400px]  mx-auto border-2 rounded-lg p-5 gap-5 my-10">
                <div className="lg:w-[400px] p-5 space-y-3">
                    {

                        user && <img className="w-[100px] rounded-full mx-auto" src={user?.photoURL} alt="" /> ||
                        <p className="text-center border-2 w-[100px] h-[100px] mx-auto">No Image</p>
                    }
                    {
                        user && <h2 className="text-base text-center"><span className="font-bold">Name:</span>{user?.displayName}</h2> ||
                        <p className="text-center border-b-2">No Entry</p>
                    }
                </div>
                <div className="lg:w-[400px] text-center p-5">
                    <form onSubmit={update} className="space-y-3">
                        <input type="text" placeholder="Enter Your Name" name="name" defaultValue={user?.displayName} className="input input-bordered w-full max-w-xs" />
                        <input type="text" placeholder="Enter Your Photo-Url" name="photourl" defaultValue={user?.photoURL} className="input input-bordered w-full max-w-xs" />
                        <button type="submit" className="btn bg-[#69b99d] lg:w-full text-base text-white">Update Profile</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Profile;
