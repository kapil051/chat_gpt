import React, { useState } from 'react';
import Tesseract from 'tesseract.js';
import '../App.css'

export const ImageText = ({ setInput }) => {

    const [text, setText] = useState('');

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
            convertImageToText(reader.result);
        };
        reader.readAsDataURL(file);
    };

    const convertImageToText = (imageData) => {
        Tesseract.recognize(
            imageData,
            'eng',
            { logger: (m) => console.log(m) }
        ).then(({ data: { text } }) => {
            setText(text);
            setInput(text);
        });
    };

    return (
        // <div className=''>
        //   <input className='w-full  mt-2 ' type="file" onChange={handleImageChange} accept="image/*" />
        // </div>

        <div className='w-full mt-2'>
            <input className='w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500' type="file" onChange={handleImageChange} accept="image/*" />
        </div>

    );

};
