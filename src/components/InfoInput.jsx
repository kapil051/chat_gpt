

import { useEffect, useState } from "react"

export function InfoInput({ setInput }) {
    const [temp, setTemp] = useState("");

    return (
        <div className="h-64 m-2 p-4 bg-zinc-100 border border-gray-300 rounded-lg hover:border-indigo-600 transition-all duration-300 flex flex-col justify-between">
            <div className="flex items-center gap-2 mb-2">
                <img className="h-6 w-6" src="../src/images/input.svg" alt="Input Icon" />
                <div className="text-lg font-semibold">Input</div>
            </div>
            <div className="mb-1 font-medium text-gray-700">COMPANY NAME</div>
            <div className="mb-4 text-sm text-gray-500">The Name Of The Company To Research</div>
            <input 
                onChange={(e) => setTemp(e.target.value)} 
                className="mb-4 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-indigo-500" 
                type="text" 
                placeholder="Enter company name"
            />
            <button 
                onClick={() => setInput(temp)} 
                className="py-2 bg-indigo-500 text-white rounded-md w-full hover:bg-indigo-600 transition-all duration-300"
            >
                Run Workflow
            </button>
        </div>
    );
}
