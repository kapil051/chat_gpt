import { useEffect, useState } from "react";
import axios from "axios";
import 'tailwindcss/tailwind.css';

export function ComponyInfoGPT({ input }) {
    const [info, setInfo] = useState("");
    const [loading, setLoading] = useState(true);

    const options = {
        method: "POST",
        url: "https://chat-gpt26.p.rapidapi.com/",
        headers: {
            "content-type": "application/json",
            "Content-Type": "application/json",
            "X-RapidAPI-Key": '79ae641156msha263db6ffee6e3ep195297jsn33ec6df2e5c9',
            "X-RapidAPI-Host": 'chat-gpt26.p.rapidapi.com',
        },
        data: {
            model: "gpt-3.5-turbo",
            messages: [
                {
                    role: "user",
                    content: input,
                },
            ],
        },
    };

    useEffect(() => {
        async function get_data() {
            
            try {
                const response = await axios.request(options);
               // console.log("Response:", response.data.choices[0].message.content);
                setInfo(response.data.choices[0].message.content);
                    setLoading(false);
            } catch (error) {
                  console.error(error);
                setInfo("Error fetching data");
                  setLoading(false);
            }
           
        }

    //get_data();
    }, [input]);

    return (
        <div className="p-4 max-w-lg mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">

            <div className="text-2xl font-bold">Company Summary: {input}</div>
            
            {loading ? (
                <div className="flex justify-center items-center mt-4 ">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
                </div>
            ) : (
                <div className="mt-4 text-gray-700 text-base">
                    {info}
                </div>
            )}
        </div>
    );
}
