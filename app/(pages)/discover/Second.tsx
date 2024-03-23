import React from 'react'
import Link from 'next/link'

const Second = () => {
  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-center text-3xl font-semibold mb-6">Explore Our Services</h1>
        <div className="flex flex-col items-start md:items-center gap-8">
            <h2 className="text-2xl font-semibold mb-4">Bookings</h2>
            <ul className="space-y-2">
                <li className="text-blue-600 hover:underline">
                    <Link href='/hotels'>Hotels</Link>
                </li>
                <li className="text-blue-600 hover:underline">
                    <Link href='/flights'>Flight Tickets</Link>
                </li>
                <li className="text-blue-600 hover:underline">Home</li>
                <li className="text-blue-600 hover:underline">Homestays and Villas</li>
                <li className="text-blue-600 hover:underline">Trains</li>
                <li className="text-blue-600 hover:underline">Buses</li>
                <li className="text-blue-600 hover:underline">Cabs</li>
            </ul>
        </div>
        <div className="w-full md:w-1/2 mt-6 md:mt-0">
            <h2 className="text-2xl font-semibold text-center mb-4">Other Services</h2>
            <ul className="space-y-2">
                <li>Forex</li>
                <li>Travel Insurance</li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Second
