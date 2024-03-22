import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Plus } from 'lucide-react'

const Second = () => {
  return (
    <div>
      <div className='flex items-center justify-between p-6'>
        <h1 className='text-3xl'>Recently Viewed and upcoming</h1>
        <Button className='text-white bg-blue-600 rounded hover:bg-blue-700 transition-all duration-300'>
          <Link href='/makeplan' className='flex items-center gap-2'>
            <Plus/>
            <span className='text-xl'>Plan a new Trip</span>
          </Link>
        </Button>
      </div>
    </div>
  )
}

export default Second
