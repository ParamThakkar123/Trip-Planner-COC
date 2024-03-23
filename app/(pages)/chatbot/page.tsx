"use client"

import React, { useState } from 'react'
import {GoogleGenerativeAI} from '@google/generative-ai'

const Chatbot = () => {

    const genai = new GoogleGenerativeAI("AIzaSyDQDihbJT9HhWQ39Jowcz-I7udY5VZ4kHY")
    const model = genai.getGenerativeModel({model: 'gemini-pro'});
    const [search, setSearch] = useState('')
    const [aiResponse, setResponse] = useState('');
    const [loading, setLoading] = useState(false);

    async function aiRun() {
        setLoading(true);
        const prompt = `Generate a travel itinerary based on ${search}. Also suggest the best hotels where the user can stay, best flights along with comparison from various other booking websites on the internet if possible.`;
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
    <div>
      <h1>Ask AI how you should plan your trip</h1>
      <div style={{ display: 'flex' }}>
          <input placeholder='ma' onChange={(e) => handleSearch(e)} />
          <button style={{ marginLeft: '20px' }} onClick={() => handleClick()}>Search</button>
        </div>

        {
      loading == true && search != '' ?
        <p style={{ margin: '30px 0' }}>Loading ...</p>
        :
        <div style={{ margin: '30px 0' }}>
          <p>{aiResponse}</p>
        </div>
    }
    </div>
  )
}

export default Chatbot
