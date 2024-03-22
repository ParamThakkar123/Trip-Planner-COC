"use client"
import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'

const Addhotel = () => {
    const [hoteldata, setHotelData] = useState({
        name: "",
        description: "",
        country: "",
        state: "",
        city: "",
        locationDescription: "",
        gym: false,
        spa: false,
        bar: false,
        laundry: false,
        restaurant: false,
        shopping: false,
        freeParking: false,
        bikeRental: false,
        freeWifi: false,
        movieNights: false,
        swimmingPool: false,
        coffeeShop: false
    })
  return (
    <div>
      <h1 className='text-center text-2xl mt-10'>Add Hotels</h1>
      <form action="">
        <div className='pl-4 pr-4'>
            <label htmlFor="name">Name</label>
            <Input type="text" value={hoteldata.name} onChange={(e) => setHotelData({...hoteldata, name: e.target.value})} className='rounded' />
        </div>
        <div className='flex flex-col pl-4 pr-4 mt-3'>
            <label htmlFor="description">Description</label>
            <Textarea name="description" value={hoteldata.description} onChange={(e) => setHotelData({...hoteldata, description: e.target.value})} className='rounded' cols={10} rows={10}/>
        </div>
        <div className='pl-4 pr-4 mt-4 flex items-center gap-12'>
            <div>
            <h2 className='text-xl'>Choose Amenities</h2>
            <ul className='mt-3'>
                <li className='flex gap-3'>
                    <Checkbox />
                    <label htmlFor="gym">Gym</label>
                </li>
                <li className='flex gap-3'>
                    <Checkbox />
                    <label htmlFor="spa">Spa</label>
                </li>
                <li className='flex gap-3'>
                    <Checkbox />
                    <label htmlFor="bar">Bar</label>
                </li>
                <li className='flex gap-3'>
                    <Checkbox />
                    <label htmlFor="laundry">Laundry</label>
                </li>
                <li className='flex gap-3'>
                    <Checkbox />
                    <label htmlFor="restaurant">Restaurant</label>
                </li>
                <li className='flex gap-3'>
                    <Checkbox />
                    <label htmlFor="shopping">Shopping</label>
                </li>
            </ul>
            </div>
            <div className='mt-10'>
                <ul>
                    <li className='flex gap-3'>
                    <Checkbox />
                    <label htmlFor="freeParking">Free Parking</label>
                </li>
                <li className='flex gap-3'>
                    <Checkbox />
                    <label htmlFor="bikeRental">Bike Rental</label>
                </li>
                <li className='flex gap-3'>
                    <Checkbox />
                    <label htmlFor="freewifi">Free Wifi</label>
                </li>
                <li className='flex gap-3'>
                    <Checkbox />
                    <label htmlFor="movienights">Movie Nights</label>
                </li>
                <li className='flex gap-3'>
                    <Checkbox />
                    <label htmlFor="swimmingpool">Swimming Pool</label>
                </li>
                <li className='flex gap-3'>
                    <Checkbox />
                    <label htmlFor="coffeeShop">Coffee Shop</label>
                </li>
                </ul>
            </div>
        </div>
        <div className='pl-4 pr-4 mt-3'>
            <label htmlFor="images">Upload Images of your hotel</label>
            <Input type='file' id='picture' className='rounded'/>
        </div>
      </form>
    </div>
  )
}

export default Addhotel
