import React from 'react'
import { useState } from 'react'

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className='w-full mt-5 mb-5 flex flex-wrap'>
            <div className='h-[400px] w-[300px] rounded-md bg-slate-400 m-auto flex flex-col  justify-center'>
                <div className='w-full m-1 p-3'>
                    <label htmlFor="" className='text-white'>Username</label>
                    <input
                        type='text'
                        className='w-full outline-none mt-1 pl-3 p-1'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className='w-full m-1 p-3'>
                    <label htmlFor="" className='text-white'>Password</label>
                    <input
                        type='password'
                        className='w-full outline-none rouned-lg mt-1 pl-3 p-1'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
            </div>
        </div>
    )
}

export default Login