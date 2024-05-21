import React, { useState } from 'react';
import { useSpeechRecognition } from 'react-speech-kit';

export function Speak({ setInput }) {
    
    const [value, setValue] = useState('');

    const { listen, listening, stop } = useSpeechRecognition({
        onResult: (result) => {
            setValue(result);
        },
    });

    const handleMouseUp = () => {
          stop();
        setInput(value);
    };

    return (
        
        <div className='flex gap-2 mt-2 '>
           
                <input
                    className="border border-gray-400  h-12 w-full px-4 rounded-l-lg focus:outline-none focus:border-blue-500"
                    placeholder="Speak something..."
                    value={value}
                    readOnly
                />
            
            
                <button
                    onMouseDown={listen}
                    onMouseUp={handleMouseUp}
                    className="bg-blue-500 text-white h-12 px-4 rounded-r-lg hover:bg-blue-600 transition duration-300"
                >
                    {listening ? '🎤 Listening...' : '🎤 Press and Hold to Speak'}
                </button>
           
        </div>

    );
}
