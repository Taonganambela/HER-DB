import { Table } from '@mui/material';
import { useState } from 'react';


const Test = () => {

  // useEffect(() => {
  //   const script = document.createElement('script');
  //   script.src = 'https://static-bundles.visme.co/forms/vismeforms-embed.js';
  //   script.async = true;
  //   document.body.appendChild(script);

  //   return () => {
  //     document.body.removeChild(script);
  //   };flex-initial 
  // }, []);

  return (
  <div>

    <div className='flex flex-col  sm:flex-row'>

     <div className='bg-green-600 flex-1 m-8 basis-full'>01</div>
     <div className='bg-blue-600 flex-1 m-8 basis-full'>02</div>
     <div className='bg-yellow-600 flex-1 m-8 basis-full'>03</div>
     <div className='bg-purple-600 flex-1 m-8 basis-full'>04</div>
   

    </div>
  </div>
    // <div className="visme_d" data-title="Untitled Project" data-url="n08mmg1n-untitled-project?fullPage=true" data-domain="forms" data-full-page="true" data-min-height="100vh" data-form-id="47851"></div>
  )
};

export default Test;
