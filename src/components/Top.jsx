import React, { useState, useRef } from 'react';
import { jsPDF } from "jspdf";

export function Top({ message, setInput }) {

    const [temp, setTemp] = useState("");

    const textareaRef = useRef(null);

    const handleSubmit = () => {
        const textarea = textareaRef.current;
        const val = textarea.innerHTML.trim(); // Trim whitespace from the text

        if (val === "") {
            alert("Please enter some text.");
            return;
        }

        const pdf = new jsPDF();

        const pageWidth = pdf.internal.pageSize.getWidth();
        const pageHeight = pdf.internal.pageSize.getHeight();
        const margin = 15;
        const maxLineWidth = pageWidth - 2 * margin;
        const textLines = pdf.splitTextToSize(val, maxLineWidth);
        const startY = margin;

        pdf.text(textLines, margin, startY);

        pdf.save("output.pdf");
    };

    ///////////////////////////////////////////////////


    const [language, setLanguage] = useState('en-US');


    const handleSpeak = () => {
        const textarea = textareaRef.current;
        const text = textarea.innerText.trim(); // Use innerText to get text content
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = language;
            speechSynthesis.speak(utterance);
        } else {
            alert('Speech synthesis is not supported in your browser.');
        }
    };



    ////////////////////////////////////////////////////



    return (
        <div>
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300 mb-4">
                <div className="text-lg font-bold hover:text-blue-200">Responce:</div>
                <div ref={textareaRef} className="text-lg font-bold hover:text-blue-200">{message}</div>
            </div>

            <div className=' flex gap-20' >

                <button onClick={handleSubmit} className="bg-indigo-400 text-white px-4 py-2 rounded-lg hover:bg-indigo-500 transition duration-300 mb-4">
                    Generate PDF
                </button>

                <button onClick={handleSpeak} className="bg-indigo-400 text-white px-4 py-2 rounded-lg hover:bg-indigo-500 transition duration-300 mb-4">
                    Speak
                </button>

                <select
                    className="border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                >
                    <option value="en-US">English</option>
                    <option value="hi-IN">Hindi</option>
                    <option value="es-ES">Spanish</option>
                </select>



            </div>



            <div className='flex'>
                <input
                    onChange={(e) => {
                        setTemp(e.target.value);
                    }}
                    className='border border-gray-400 h-12 w-full px-4 rounded-l-lg focus:outline-none focus:border-blue-500'
                    type="text"
                    placeholder='Write something...'
                />
                <button
                    onClick={() => {
                        setInput(temp);
                    }}
                    className='bg-blue-500 text-white h-12 w-24 rounded-r-lg ml-2 hover:bg-blue-600 transition duration-300'
                >
                    Search
                </button>
            </div>
        </div>
    );
}


