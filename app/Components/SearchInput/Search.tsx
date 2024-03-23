"use client"

import { Input } from '@/components/ui/input';
import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface LocationData {
    title: string;
    secondaryText: string;
}

interface ResponseData {
    status: boolean;
    message?: string;
    data?: LocationData[];
}

const SearchInput = () => {
    const [location, setLocation] = useState("");
    const [responseData, setResponseData] = useState<ResponseData | null>(null);
    
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await fetch(`https://tripadvisor16.p.rapidapi.com/api/v1/hotels/searchLocation?query=${location}`, {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '5a150e53afmsh2c79a63d07c885fp13a612jsne80043866a64',
                    'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com'
                }
            });
            const data = await response.json();
            setResponseData(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div className='relative sm:block hidden'>
            <form onSubmit={handleSubmit}>
                <Input placeholder='Search Location' value={location} onChange={(e) => setLocation(e.target.value)} className='pl-10 rounded bg-primary/10'/>
                <button type='submit'>
                    <Search className='absolute h-4 w-4 top-3 left-4 text-muted-foreground'/>
                </button>
            </form>

            {responseData && responseData.data && responseData.data.length > 0 && (
                <div>
                    <h2>Locations:</h2>
                    <ul>
                        {responseData.data.map((locationData, index) => (
                            <li key={index}>
                                <div>Title: <b dangerouslySetInnerHTML={{ __html: locationData.title }} /></div>
                                <div>Secondary Text: {locationData.secondaryText}</div>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {responseData && responseData.message && (
                <div>Error: {responseData.message}</div>
            )}
        </div>
    );
}

export default SearchInput;
