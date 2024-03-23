"use client"
import React, { useState } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';

const Chatbot = () => {
    const genai = new GoogleGenerativeAI("AIzaSyBB8Muh1qQjUDmtF6vBy9PyECRQyXlSzFY");
    const model = genai.getGenerativeModel({ model: 'gemini-pro' });
    const [search, setSearch] = useState('');
    const [aiResponse, setResponse] = useState('');
    const [loading, setLoading] = useState(false);

    async function aiRun() {
        setLoading(true);
        const prompt = `Generate a travel itinerary based on ${search}. Also suggest the best hotels where the user can stay, best flights along with price comparison from various other booking websites on the internet if possible.Give the total budget required as well in various currencies`;
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        setResponse(text);
        setLoading(false);
    }

    const handleSearch = (e:any) => {
        setSearch(e.target.value);
    }

    const handleClick = () => {
        aiRun();
    }

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
            <h1 className="text-3xl font-semibold mb-8 mt-10">Ask AI how you should plan your trip</h1>
            <div className="flex items-center">
                <input
                    className="py-2 px-4 rounded-l-lg border border-gray-300 focus:outline-none focus:border-gray-500"
                    type="text"
                    placeholder="Where Do You want to go ?"
                    onChange={(e) => handleSearch(e)}
                />
                <button
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-r-lg"
                    onClick={handleClick}
                >
                    Search
                </button>
            </div>
            {loading && search !== '' ? (
                <p className="mt-4 text-gray-600">Loading...</p>
            ) : (
                <div className="mt-4 p-4">
                    <pre className="text-gray-800 whitespace-pre-wrap">{aiResponse}</pre>
                </div>
            )}
        </div>
    );
}

export default Chatbot;