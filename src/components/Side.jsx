

export function Side() {
    return (
        <div>

            <div className=" flex">

                <div><img className=" mt-5 ml-2 h-7" src="../src/images/userLogo.svg" alt="" /></div>

                <div className="mt-4 text-2xl text-black ml-2 font-bold hover:text-blue-600 transition duration-300 ease-in-out">
                    Kapil workspace
                </div>

            </div>

            <div className=" mt-4 ml-1 mr-2">

                <div className="  text-zinc-500">Automation</div>

                <div
                    className="mt-2 ml-7 p-2 bg-gray-100 rounded hover:bg-gray-300 cursor-pointer transition duration-300 ease-in-out flex items-center justify-center"
                    onClick={() => window.location.href = '/target-page'}
                >
                   <img className=" h-4 mr-2" src="../src/images/workFlow.svg" alt="" />    Workflows
                </div>



            </div>



        </div>
    )
}