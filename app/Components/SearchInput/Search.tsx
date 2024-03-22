"use client"
import { Input } from '@/components/ui/input'
import React from 'react'
import { Search } from 'lucide-react'

const SearchInput = () => {
  return (
    <div className='relative sm:block hidden'>
      <Search className='absolute h-4 w-4 top-3 left-4 text-muted-foreground'/>
      <Input placeholder='Search' className='pl-10 rounded bg-primary/10'/>
    </div>
  )
}

export default SearchInput
