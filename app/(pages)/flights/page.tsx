"use client"
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import Navbar from '@/app/Components/Navbar/Navbar';

const Flights = () => {
  const [sourceAirportCode, setSourceAirportCode] = useState('');
  const [destinationAirportCode, setDestinationAirportCode] = useState('');
  const [date, setDate] = useState('');
  const [itineraryType, setItineraryType] = useState('');
  const [classOfService, setClassOfService] = useState('');
  const [sortOrder, setSortOrder] = useState('DURATION');
  const [numAdults, setNumAdults] = useState('');
  const [numSeniors, setNumSeniors] = useState('');
  const [responseData, setResponseData] = useState(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://tripadvisor16.p.rapidapi.com/api/v1/flights/searchFlights?sourceAirportCode=${sourceAirportCode}&destinationAirportCode=${destinationAirportCode}&date=${date}&itineraryType=${itineraryType}&sortOrder=${sortOrder}&numAdults=${numAdults}&numSeniors=${numSeniors}&classOfService=${classOfService}&pageNumber=1&currencyCode=USD`, {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '0267b71b04mshb40fe9be89fb456p142510jsn8dde394521f5',
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
    <div>
        <div className='h-screen'>
      <div className='absolute z-10'>
            <Navbar />
          </div>
      <img src="./images/flight.jpg" alt="ny" className='h-screen w-screen absolute'/>
      <div className='relative flex flex-col items-center justify-center text-white'>
        <span className='mt-48 text-3xl'>Book Flights with ease</span>
        <p className='text-2xl mt-24 text-center tracking-wide'>Search all flights according to your requirements <br /> and get the cheapest flights here</p>
      </div>
    </div>
      <form onSubmit={handleSubmit} className='p-6 flex flex-col gap-4'>
        <div>
            <label htmlFor="sourceAirport">Enter Source Airport Code</label>
            <Input
                type="text"
                placeholder="Enter source airport code"
                value={sourceAirportCode}
                className='rounded'
                onChange={(e) => setSourceAirportCode(e.target.value)}
            />
        </div>
        <div>
            <label htmlFor="destcode">Enter Destination Airport Code : </label>
            <Input
                type="text"
                placeholder="Enter destination airport code"
                value={destinationAirportCode}
                className='rounded'
                onChange={(e) => setDestinationAirportCode(e.target.value)}
            />
        </div>
        <div>
            <label htmlFor="date">Enter Date (YYYY-MM-DD)</label>
            <Input
                type="text"
                placeholder="Enter date (YYYY-MM-DD)"
                value={date}
                className='rounded'
                onChange={(e) => setDate(e.target.value)}
            />
        </div>
        <div>
            <label htmlFor="itinerary">Enter Itinerary Type</label>
            <Input
                type="text"
                placeholder="Enter itinerary type (ONE_WAY or ROUND_TRIP)"
                value={itineraryType}
                className='rounded'
                onChange={(e) => setItineraryType(e.target.value)}
            />
        </div>
        <div>
            <label htmlFor="COS">Enter class of service (ECONOMY, PREMIUM_ECONOMY, BUSINESS, FIRST)</label>
            <Input
                type="text"
                placeholder="Enter class of service (ECONOMY, PREMIUM_ECONOMY, BUSINESS, FIRST)"
                value={classOfService}
                className='rounded'
                onChange={(e) => setClassOfService(e.target.value)}
            />
        </div>
        <div>
            <label htmlFor="sortorder">Enter sort order (DURATION, PRICE, ML_BEST_API)</label>
            <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
                <option value="DURATION">Duration</option>
                <option value="PRICE">Price</option>
                <option value="ML_BEST_API">ML Best API</option>
            </select>
        </div>
        <div>
            <label htmlFor="numadults">Enter number of adults</label>
            <Input
                type="number"
                placeholder="Enter number of adults"
                value={numAdults}
                className='rounded'
                onChange={(e) => setNumAdults(e.target.value)}
            />
        </div>
        <div>
            <label htmlFor="numseniors">Enter Number of Seniors</label>
            <Input
                type="number"
                placeholder="Enter number of seniors"
                value={numSeniors}
                className='rounded'
                onChange={(e) => setNumSeniors(e.target.value)}
            />
        </div>
        <button type="submit">Search Flights</button>
      </form>
      {responseData && (
        <div>
          <h2>Response Data:</h2>
          <pre>{JSON.stringify(responseData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default Flights;
