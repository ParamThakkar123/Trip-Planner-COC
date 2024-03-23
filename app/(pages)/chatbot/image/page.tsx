"use client"
import React, { useState } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";
import { getBase64 } from '../../../../helpers/ImageHelper';

const AIwithImage = () => {
    const genAI = new GoogleGenerativeAI('AIzaSyDQDihbJT9HhWQ39Jowcz-I7udY5VZ4kHY');
    const [aiResponse, setResponse] = useState('');
    const [loading, setLoading] = useState(false);
    const [imageInlineData, setImageInlineData] = useState('');
    const [image, setImage] = useState('');

    async function aiImageRun() {
        setLoading(true);
        setResponse('');
        const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });
        const result = await model.generateContent([
            "What's in this photo?", imageInlineData
        ]);
        const response = await result.response;
        const text = response.text();
        setResponse(text);
        setLoading(false);
    }

    async function fileToGenerativePart(file:any) {
        const base64EncodedDataPromise = new Promise((resolve) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result.split(',')[1]);
            reader.readAsDataURL(file);
        });

        return {
            inlineData: { data: await base64EncodedDataPromise, mimeType: file.type },
        };
    }

    const handleClick = () => {
        aiImageRun();
    }

    const handleImageChange = (e:any) => {
        const file = e.target.files[0];

        // Getting base64 from file to render in DOM
        getBase64(file)
            .then((result:any) => {
                setImage(result);
            })
            .catch(e => console.log(e));

        // Generating content model for Gemini Google AI
        fileToGenerativePart(file).then((image:any) => {
            setImageInlineData(image);
        });
    }

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold mb-8">Ask AI The name of the beautiful place you just saw in the picture!</h1>
            <div className="flex items-center mb-4">
                <input type="file" onChange={(e) => handleImageChange(e)} className="border border-gray-300 py-2 px-4 rounded-lg mr-4" />
                <button onClick={handleClick} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg">Search</button>
            </div>
            {image && (
                <img src={image} alt="Uploaded" className="w-1/3" />
            )}
            {loading && !aiResponse && (
                <p className="my-4">Loading...</p>
            )}
            {!loading && aiResponse && (
                <div className="my-4">
                    <p>{aiResponse}</p>
                </div>
            )}
        </div>
    );
};

export default AIwithImage;
