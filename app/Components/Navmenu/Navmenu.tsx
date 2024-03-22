"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { BookOpenCheck, ChevronsUpDown, Hotel, Plus } from "lucide-react"
import { useRouter } from "next/navigation"

export function Navmenu() {
    const router = useRouter();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="rounded">
          <ChevronsUpDown/>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="rounded text-white">
        <DropdownMenuItem className="cursor-pointer flex gap-2 items-center" onClick={() => router.push('/addHotel')}>
          <Plus size={15}/> <span>Add Hotel</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer flex gap-2 items-center" onClick={() => router.push('/myHotels')}>
         <Hotel size={15}/> <span>My Hotels</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer flex gap-2 items-center" onClick={() => router.push('/myBookings')}>
          <BookOpenCheck size={15}/> <span>My Bookings</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
