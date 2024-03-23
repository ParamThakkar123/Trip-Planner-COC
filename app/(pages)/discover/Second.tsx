import React from 'react'
import Link from 'next/link'

const Second = () => {
  return (
    <div>
      <div>
        <h1 className='text-center text-3xl mt-6'>Explore Our Services</h1>
        <div>
            <h2 className='text-2xl text-center mt-6'>Bookings</h2>
            <ul>
                <li>
                    <Link href='/hotels'>Hotels</Link>
                </li>
                <li>Flight Tickets</li>
                <li>Home</li>
                <li>Homestays and Villas</li>
                <li>Trains</li>
                <li>Buses</li>
                <li>Cabs</li>
            </ul>
        </div>
        <div>
            <h2 className='text-2xl text-center mt-3'>Other Services</h2>
            <ul>
                <li>Forex</li>
                <li>Travel Insurance</li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Second
