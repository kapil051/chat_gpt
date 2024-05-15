// import React, { useState } from 'react';

// export function Top({message,setInput}) {

//         const [temp,setTemp]=useState("");
     
//     return (

//         <div>

//             <div className="h-96 bg-gray-400"> {/* Use bg-gray-100 for a light gray color */}
//                 {message}
//             </div>

//             <div className=' flex'> 
//                    <input  onChange={(e)=>{
//                       setTemp(e.target.value);
//                    }} className=' border border-slate-600   h-12 w-screen' type="text" placeholder='Enter to search' />
//                     <button onClick={()=>{
//                           setInput(temp);
//                     }} className='border border-slate-600 h-12 w-48 ' >Search</button>
//             </div>

//         </div>



//     );
// }


// import React, { useState } from 'react';

// export function Top({ message, setInput }) {
//     const [temp, setTemp] = useState("");

//     return (
//         <div>
//             <div className="h-96 bg-gray-400 p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
//                 {/* Use bg-gray-100 for a light gray color */}
//                 <div className="text-gray-800">{message}</div>
//             </div>

//             <div className='flex mt-4'>
//                 <input
//                     onChange={(e) => {
//                         setTemp(e.target.value);
//                     }}
//                     className='border border-gray-400 h-12 w-full px-4 rounded-l-lg focus:outline-none focus:border-blue-500'
//                     type="text"
//                     placeholder='Enter to search'
//                 />
//                 <button
//                     onClick={() => {
//                         setInput(temp);
//                     }}
//                     className='bg-blue-500 text-white h-12 w-24 rounded-r-lg ml-2 hover:bg-blue-600 transition duration-300'
//                 >
//                     Search
//                 </button>
//             </div>
//         </div>
//     );
// }

import React, { useState } from 'react';

export function Top({ message, setInput }) {
    const [temp, setTemp] = useState("");

    return (
        <div>
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300 mb-4">
                <div className="text-lg font-bold hover:text-blue-300">{message}</div>
            </div>

            <div className='flex'>
                <input
                    onChange={(e) => {
                        setTemp(e.target.value);
                    }}
                    className='border border-gray-400 h-12 w-full px-4 rounded-l-lg focus:outline-none focus:border-blue-500'
                    type="text"
                    placeholder='Write something...'
                />
                <button
                    onClick={() => {
                        setInput(temp);
                    }}
                    className='bg-blue-500 text-white h-12 w-24 rounded-r-lg ml-2 hover:bg-blue-600 transition duration-300'
                >
                    Search
                </button>
            </div>
        </div>
    );
}
