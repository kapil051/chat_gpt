import { useEffect, useState } from "react";
import axios from "axios";

export function InfoOutput({ input }) {
    const [data, setData] = useState([]);
    const key = "b6e37a974ece438f919ac87dedb9adc0";

    useEffect(() => {
        async function get_data() {
            try {
                const res = await fetch(`https://newsapi.org/v2/everything?q=${input}&apiKey=${key}`);
                const temp = await res.json();
                setData(temp.articles);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        get_data();
    }, [input]);

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4">News about {input}</h2>
            {data && data.length > 0 ? (
                data.map((curr, index) => (
                    <div key={index} className="mb-4 p-4 border rounded-lg bg-zinc-100">
                        {curr.description}
                    </div>
                ))
            ) : (
                <div>No related news</div>
            )}
        </div>
    );
}
