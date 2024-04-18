import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet-async";
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const Profile = () => {
    const { user} = useContext(AuthContext);
    console.log(user);
    return (
        <div className="mt-16 flex flex-col items-center gap-5">
            <Helmet>
                <title>Serenity Eden | Register</title>
            </Helmet>
            <h2 className="text-center md:mt-16 text-2xl font-semibold text-[#442537]">{user.displayName}'s Profile</h2>
            <img className='w-9 h-9 md:w-10 md:h-10 lg:w-40 lg:h-40 rounded-full btn-circle avatar' src={user.photoURL} alt="" />
            <div className="overflow-x-auto">
                <table className="table text-xl">
                    <tbody>
                    {/* row 1 */}
                    <tr>
                        <th className='p-10'>Name:</th>
                        <td>{user.displayName}</td>
                    </tr>
                    {/* row 2 */}
                    <tr>
                        <th className='p-10'>Email:</th>
                        <td>{user.email}</td>
                    </tr>
                    {/* row 3 */}
                    <tr>
                        <th className='p-10'>Photo URL:</th>
                        <td>{user.photoURL}</td>
                    </tr>
                    {/* row 4 */}
                    <tr>
                        <th className='p-10'>Verified:</th>
                        <td>{user.emailVerified? "Yes" : "No"}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Profile;