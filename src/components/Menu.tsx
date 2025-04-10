"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react"


const Menu = () => {
  const [open,setOpen] = useState(false);
  
  return (
    <div>
      <Image src="/menu.png" alt="" width={28} height={28} className="cursor-pointer" onClick={()=>setOpen((prev)=>!prev)}/>
     



    {/*        
    
      top-20 bcoz nav bar height is h-20
      h-[cal(100vh-80px)]   => top-20 is 80 px so full screen - navbar part
    
    */}


     {open && (
      <div className="absolute bg-black text-white left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col justify-center gap-8  items-center text-xl z-10">
       <Link href="">Homepage</Link>
       <Link href="">Shop</Link>
       <Link href="">Deals</Link>
       <Link href="">About</Link>
       <Link href="">Contact</Link>
       <Link href="">Log Out</Link>
       <Link href="">Cart(1)</Link>
      </div>
       )
     
     }
    </div>
  )
}
export default Menu
