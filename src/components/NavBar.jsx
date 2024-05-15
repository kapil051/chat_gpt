
export function NavBar({ input }) {
    return (
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 px-6 rounded-lg hover:shadow-xl transition duration-300 mb-2">
            <div className="text-lg font-bold">Query:</div>
            <div className="overflow-auto max-h-48">{input}</div>
        </div>
    );
}
