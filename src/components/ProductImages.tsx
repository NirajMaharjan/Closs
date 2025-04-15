"use client";

import Image from "next/image";
import { useState } from "react";


const images = [
    {
        id:1,
        url:"https://images.pexels.com/photos/30957661/pexels-photo-30957661/free-photo-of-serene-beach-portrait-of-a-smiling-woman.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
        id:2,
        url:"https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
        id:3,
        url:"https://images.pexels.com/photos/852860/pexels-photo-852860.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        id:4,
        url:"https://images.pexels.com/photos/2065195/pexels-photo-2065195.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
    

]

const ProductImages = () => {

    

const [index,setIndex] = useState(0);


  return (


    <div>
        {/* Main Image */}
        <div className="relative h-[500px]">
            <Image src={images[index].url}
             alt="image" fill sizes="50vw" className="object-cover rounded-md"></Image>
        </div>

        {/* Optional images */}
        <div className="flex justify-between gap-4 mt-8">
            {images.map((img,index) => (
                <div className="relative w-1/4 h-32 gap-4 mt-8 cursor-pointer" key={img.id} onClick={()=>{
                    setIndex(index)
                }}>
                    <Image src={img.url}
                    alt="image" fill sizes="30vw" className="object-cover rounded-md"></Image>
                </div>

            ))}

       
        </div>
    </div>
  )
}

export default ProductImages
