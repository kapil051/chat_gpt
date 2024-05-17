

export function WorkCard({ heading }) {
    return (
        <div className="mt-2 h-64 w-64 bg-zinc-100 border-2 border-gray-300 rounded-lg hover:border-indigo-600 hover:shadow-lg transition-all duration-300 text-gray-700 flex flex-col justify-between p-4">
            <div className="text-xl font-bold hover:font-extrabold hover:text-gray-700">{heading}</div>
            <div className="flex-grow">Research a company: industry, news, size, and ..</div>
            <button
                className="bg-indigo-600 border border-indigo-600 rounded-lg text-white px-4 py-2 hover:bg-indigo-700"
                onClick={() => window.location.href = '/workflows/try'}
            >
                Try This
            </button>
        </div>
    )
}