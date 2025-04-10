"use client"


const CartModal = () => {


    const cartItems = false;

  return (
    <div className="absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20 bg-white top-12 right-0 flex flex-col gap-6">
        {!cartItems? (
            <div className="">Cart is Empty</div>
        ):(
            <div className=""></div>
        )}
    </div>
  )
  }
    export default CartModal
