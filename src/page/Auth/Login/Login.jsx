import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash, FaUser } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router';
import UseAuth from '../../../hooks/UseAuth';

const Login = () => {
    const [showPassword, setshowPassword] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signInUser, signinGoogle, user } = UseAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const handleLogin = (data) => {
        signInUser(data.email, data.password)
            .then(() => {
                navigate(location?.state || '/')
            })
            .catch(error => {
                console.log(error);
            })
    }

    useEffect(() => {
        if(user) {
            navigate(location?.state || '/')
        }
    }, [user, navigate, location])

    const handleGoogleRegistration = () => {
        signinGoogle()
            .then(() => {
                navigate(location.state || '/')
            })
    }

    return (
        <div>
            <div className="w-[320px] max-w-md p-8 rounded-2xl bg-white/10 backdrop-blur-md shadow-xl">
                <div className='mb-6 text-center'>
                    <h2 className="text-3xl font-bold mb-1.5">
                        Welcome Back
                    </h2>
                    <p className='text-sm'>Login with ZapShift</p>
                </div>
                <form onSubmit={handleSubmit(handleLogin)}>
                    {/* Username */}
                    <div className=" mb-1">
                        <input
                            {...register("email", {
                                required: true,
                            })}
                            type="email"
                            placeholder="UserEmail"
                            name='email'
                            className="input input-bordered w-full bg-white/20 pr-10 rounded-3xl"
                        />
                    </div>
                    {
                        errors.email?.type === "required" && <p className='text-red-400 text-xs'>Email is required</p>
                    }

                    {/* Password */}
                    <div className="relative mt-3 mb-1">
                        <input
                            {...register('password', {
                                required: true,
                                minLength: 6,
                            })}
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Password"
                            name='password'
                            className="input input-bordered w-full bg-white/20 pr-12 rounded-3xl"
                        />
                        <span onClick={() => setshowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 opacity-70 font-bold cursor-pointer">
                            {
                                showPassword ? <FaEyeSlash size={20}></FaEyeSlash> : <FaEye size={20}></FaEye>
                            }
                        </span>
                    </div>
                    {
                        errors.password?.type === 'required' && <p className='text-red-400 text-xs'>password is required</p>
                    }
                    {
                        errors.password?.type === "minLength" && <p className='text-red-400 text-xs'>Password must be 6 characters or longer</p>
                    }

                    {/* Remember & Forgot */}
                    <Link href="#" className="hover:underline text-sm">
                        Forgot password?
                    </Link>

                    {/* Login Button */}
                    <button className="btn input-field w-full mt-3 rounded-full bg-white text-purple-700 hover:bg-gray-100">
                        Login
                    </button>
                </form>

                {/* Register */}
                <p className="text-center mt-2 text-sm">Don't have any account?<Link state={location.state} to={'/register'} className="font-semibold hover:text-[#3251ff] text-[#97b43e] cursor-pointer"> Register</Link></p>
                <h1 className='text-2xl my-2 text-center'>or</h1>
                <button onClick={handleGoogleRegistration} className="btn w-full bg-white text-black border-[#e5e5e5]">
                    <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                    Login with Google
                </button>
            </div>
        </div>
    );
};

export default Login;