import { NavBar } from './NavBar';
import { Top } from './Top';
import { Speak } from './Speak';
import { Query } from './Query';
import { ImageText } from './ImageText';
import { Side } from './Side';
import { useEffect, useState } from 'react';




export function Home(){

    const [res, setRes] = useState("hello from server");
    const [input, setInput] = useState("how can i help you!!!");
  
  
    const options = {
      method: "POST",
      url: "https://chat-gpt26.p.rapidapi.com/",
      headers: {
        "content-type": "application/json",
        "Content-Type": "application/json",
        "X-RapidAPI-Key": '8cbca8fe6fmshdd91d0eb1aa1939p1fb444jsn07d2da422234',
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
          // console.log("1", response.data);
          // console.log("2", response.data.choices);
          // console.log("3", response.data.choices[0]);
          // console.log("4", response.data.choices[0].message);
          // console.log("5", response.data.choices[0].message.content);
  
          setRes(response.data.choices[0].message.content);
  
        } catch (error) {
          console.error(error);
        }
  
  
      }
  
      // get_data();
  
    }, [input])

       return (

        <div className=" h-screen w-screen flex">
    
          <div className="flex-none w-1/5 resize-x overflow-auto bg-white">
            <Side />
          </div>
    
          <div className="flex-1">
            <NavBar />
            <Query input={input} />
            <Top message={res} setInput={setInput} />
            <Speak setInput={setInput} />
            <ImageText setInput={setInput} />
          </div>
    
        </div>
    
    
        );

}