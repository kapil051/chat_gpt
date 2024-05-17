
export function WorkNav({heading}) {

    return (
        <div>

            <div className="flex justify-between items-center p-4 bg-gray-100 rounded-lg shadow-md mt-1 ">
                <div className="text-lg font-semibold text-gray-800">{heading}</div>
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg border-2 border-indigo-600 hover:bg-indigo-700 hover:border-indigo-700 transition-colors duration-300">
                    Add Workflow
                </button>
            </div>

        </div>
    )

}