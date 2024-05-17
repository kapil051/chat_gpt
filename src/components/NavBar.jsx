
import React from 'react';

export function NavBar() {
    return (

        <div className="flex items-center mb-2 justify-between h-16  px-4 rounded-lg">

            <div className=' flex gap-1'>
                <img className='' src="../src/images/gptLogo.svg" alt="" />
                <h1 className="text-2xl font-semibold mt-1"> ChatMate</h1>
            </div>

        </div>

    );
}

export default NavBar;
