import React from 'react';
import Navbar from '@/app/Components/Navbar/Navbar';

const ItineraryTable = () => {
  return (
    <div>
        <div className='h-screen'>
      <div className='absolute z-10'>
            <Navbar />
          </div>
      <img src="./images/itinerary.jpg" alt="ny" className='h-screen w-screen absolute'/>
      <div className='relative flex flex-col items-center justify-center text-white'>
        <span className='mt-48 text-3xl'>Your Itineraries</span>
        <p className='mt-8 text-2xl text-center tracking-wide'>Checkout Your Recent Itineraries here</p>
      </div>
    </div>
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Travel Itinerary: Dubai Extravaganza</h1>
      <h2 className="text-2xl font-bold mb-4">Day 1</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Arrive at Dubai International Airport (DXB)</li>
        <li>Check into your luxurious hotel</li>
        <li>Visit the iconic Burj Khalifa for panoramic city views</li>
        <li>Explore The Dubai Mall, one of the largest malls in the world</li>
      </ul>
      
      {/* Additional days and activities go here */}

      <h2 className="text-2xl font-bold mb-4">Suggested Hotels:</h2>
      <ul className="list-disc pl-6 mb-4">
        <li><strong>Jumeirah Beach Hotel:</strong> From $550/night</li>
        <li><strong>Atlantis, The Palm:</strong> From $600/night</li>
        <li><strong>Burj Khalifa View Park Hyatt Dubai:</strong> From $700/night</li>
      </ul>

      <h2 className="text-2xl font-bold mb-4">Flight Details and Price Comparison:</h2>
      <table className="table-auto mb-4">
        <thead>
          <tr>
            <th className="px-4 py-2">Website</th>
            <th className="px-4 py-2">Economy Class</th>
            <th className="px-4 py-2">Business Class</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">Emirates</td>
            <td className="border px-4 py-2">From $1,200</td>
            <td className="border px-4 py-2">From $3,500</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Qatar Airways</td>
            <td className="border px-4 py-2">From $1,300</td>
            <td className="border px-4 py-2">From $3,800</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Etihad Airways</td>
            <td className="border px-4 py-2">From $1,400</td>
            <td className="border px-4 py-2">From $4,000</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-bold mb-4">Total Budget:</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Accommodation: $2,200-$3,500</li>
        <li>Flights: $1,200-$4,000</li>
        <li>Activities and dining: $500-$1,000</li>
      </ul>

      <h2 className="text-2xl font-bold mb-4">Total Estimated Budget:</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>AED 12,000 - 22,000</li>
        <li>USD 3,250 - 6,000</li>
        <li>EUR 2,900 - 5,400</li>
        <li>GBP 2,500 - 4,500</li>
      </ul>

      <h2 className="text-2xl font-bold mb-4">Tips:</h2>
      <ul className="list-disc pl-6">
        <li>Book your flights and hotel in advance, especially if traveling during peak season.</li>
        <li>Consider purchasing a Dubai Pass for access to multiple attractions at a discounted rate.</li>
        <li>Be prepared for warm weather and pack accordingly.</li>
        <li>Respect local customs and traditions.</li>
      </ul>
    </div>
    </div>
  );
};

export default ItineraryTable;
