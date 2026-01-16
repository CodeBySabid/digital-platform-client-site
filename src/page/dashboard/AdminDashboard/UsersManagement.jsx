
import UseAxiosSecure from '../../../hooks/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { FaUserShield } from 'react-icons/fa';
import { FiShieldOff } from "react-icons/fi";
import { MdDeleteForever } from "react-icons/md";



const UsersManagement = () => {
    const axiosSecure = UseAxiosSecure();
    const { data: user = [], } = useQuery({
        queryKey: ['user', 'email'],
        queryFn: (async () => {
            const res = await axiosSecure.get(`/users`);
            return res.data;
        })
    })
    return (
        <div>
            <h2 className='text-4xl'>Manage Users{user.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            user.map((u, index) => <tr key={u._id}>
                                <td>{index + 1}</td>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={u.photoURL}
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{u.name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {u.email}
                                </td>
                                <td>{u.role}</td>
                                <td>
                                    {
                                        u.role === "user" ? <button><FaUserShield className='btn' size={28}></FaUserShield></button> : <button><FiShieldOff size={28}></FiShieldOff></button>
                                    }
                                    <button className='mx-1 btn'><MdDeleteForever size={28} /></button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UsersManagement;