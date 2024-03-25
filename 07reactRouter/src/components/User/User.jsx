import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const { userid } = useParams();

    return (
        <div className='text-center bg-gray-700 text-white p-8 max-w-[1100px] m-auto'>User: {userid}</div>
    )
}

export default User