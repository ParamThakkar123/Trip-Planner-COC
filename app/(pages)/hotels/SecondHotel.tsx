import React from 'react'
import SearchInput from '@/app/Components/SearchInput/Search'
import { Navmenu } from '@/app/Components/Navmenu/Navmenu'

const SecondHotel = () => {
  return (
    <div>
        <div className='flex items-center justify-center rounded p-6 gap-4'>
            <SearchInput />
            <Navmenu />
        </div>
    </div>
  )
}

export default SecondHotel
