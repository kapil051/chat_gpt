import { useEffect, useState } from "react"

export function InfoInput({setInput}){

           const [temp,setTemp]=useState("");
       

     return (
        <div className="h-64 m-2 bg-zinc-100 border border-gray-300 rounded-lg hover:border-indigo-600 transition-all duration-300">

                       {temp}
          
                <div className=" flex gap-1"> 
                      <div><img className="mt-1" src="../src/images/input.svg" alt="" /></div>
                          <div>Input</div>
                </div>

                    <div>COMPANY NAME</div>
                    <div>The Name Of The Company To Research</div>
                    
                      <input onChange={(e)=>{
                            setTemp(e.target.value)
                      }} className=" border border-gray-300 rounded-md w-full " type="text" />
                         

                       <button onClick={()=>{
                           setInput(temp)
                       }} className="border border-gray-300 rounded-md w-full" > Run Workflow </button>


        </div>        
     ) 
}