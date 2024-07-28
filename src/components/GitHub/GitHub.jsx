import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

function GitHub() {
  const data= useLoaderData()
  // const [data, setData] = useState(null); // Initialize data as null

  // useEffect(() => {
  //   fetch('https://api.github.com/users/Yash-Bhamania') // Corrected API endpoint
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log(data);
  //       setData(data);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching GitHub data:', error);
  //     });
  // }, []);

  return (
    <div className='text-center bg-gray-600 text-white p-4 text-3xl'>
      {/* Access followers correctly */}
      GitHub Followers: {data && data.followers} 
      <img src={data.avatar_url} alt="Git hub Picture" width={300} />
    </div>
  );
}

export default GitHub;
export const gitHubInfoLoder = async  () =>{
 const response = await fetch('https://api.github.com/users/Yash-Bhamania')
 return response.json()
}
