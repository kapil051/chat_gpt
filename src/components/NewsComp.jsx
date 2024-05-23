

import { useEffect, useState } from "react";
import axios from "axios";
import 'tailwindcss/tailwind.css';

export function NewsComp({ input }) {
    const [newsData, setNewsData] = useState([]);
    const [loading, setLoading] = useState(true);

    const key = "b6e37a974ece438f919ac87dedb9adc0";

    useEffect(() => {

        async function fetchNews() {
           
            try {

                  if(input==""){
                    setLoading(true);
                       return;
                  }

                const res = await axios.get(`https://newsapi.org/v2/everything?q=${input}&apiKey=${key}`);
                setNewsData(res.data.articles);
                setLoading(false);

            } catch (error) {
                console.error(error);
                setLoading(false);
            }
            
        }

        fetchNews();
    }, [input]);

    return (
        <div className="p-4 max-w-2xl mx-auto bg-white rounded-xl shadow-md">
            <h2 className="text-2xl font-bold mb-4">Summarize News: {input}</h2>
            {loading ? (
                <div className="flex justify-center items-center mt-4">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
                </div>
            ) : newsData && newsData.length > 0 ? (
                <div className="p-4 bg-gray-100 rounded-lg">
                    <ul className="list-disc ml-4 space-y-2">
                        {newsData.slice(0, 10).map((curr, index) => (
                            <li key={index} className="p-2 bg-zinc-100 border rounded-lg">
                                {curr.description}
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <div className="mt-4 text-gray-700">No related news</div>
            )}
        </div>
    );
}
