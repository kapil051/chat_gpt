import { useEffect, useState } from "react";
import axios from "axios";
import { CompanyInfo } from "./ComponyInfo";

export function InfoOutput({ input }) {
    const [newsData, setNewsData] = useState([]);
    const key = "b6e37a974ece438f919ac87dedb9adc0";

    useEffect(() => {
        async function get_data() {
            try {
                const res = await axios.get(`https://newsapi.org/v2/everything?q=${input}&apiKey=${key}`);
                setNewsData(res.data.articles);

            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        get_data();
    }, [input]);

    return (
        <div >

            <div className="p-4">

                <h2 className="text-xl font-bold mb-4">Summarize News {input}</h2>
                {newsData && newsData.length > 0 ? (
                    newsData.slice(0, 10).map((curr, index) => (
                        <div key={index} className="mb-4 p-4 border rounded-lg bg-zinc-100">
                            <li className="list-disc ml-4">{curr.description}</li>
                        </div>
                    ))
                ) : (
                    <div>No related news</div>
                )}

            </div>


           <CompanyInfo input={input}></CompanyInfo>

        </div>
    );
}
