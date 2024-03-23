"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useRouter } from "next/navigation"
import { Menu } from "lucide-react"

export function LoginSignupDropDown() {
const router = useRouter();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="rounded">
          <Menu size={15}/>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="rounded text-white">
        <DropdownMenuItem className="cursor-pointer flex gap-2 items-center" onClick={() => router.push('/login')}>
          Login
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer flex gap-2 items-center" onClick={() => router.push('/signup')}>
          Signup
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
