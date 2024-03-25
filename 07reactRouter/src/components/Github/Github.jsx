import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
function Github() {
    const data = useLoaderData();
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //         .then((res) => res.json())
    //         .then((data) => {
    //             console.log(data);
    //             setData(data);
    //         })
    // }, []);

    return (
        <div className='text-center m-auto bg-gray-600 max-w-[1000px] text-3xl text-white p-4'>Github Followers: {data?.followers}
            <img src={data?.avatar_url} alt="git avatar" width={200} />
        </div>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = fetch('https://api.github.com/users/hiteshchoudhary');
    return response;
}