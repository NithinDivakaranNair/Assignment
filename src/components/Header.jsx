import React from 'react'



const Header = () => {
    return (
        <>
        <div className="flex flex-wrap justify-between mx-4 lg:mx-24 my-4 items-center text-center ">
  <div className="flex items-center justify-start">
    <img
      src="/header/Meubel House_Logos-05.svg"
      alt="icone"
      className="w-[40px] h-auto opacity-100"
    />
    <h1 className="font-montserrat text-[20px] md:text-[28px] font-bold ml-2">
      Furniro
    </h1>
  </div>

  <div className="flex flex-wrap gap-4 md:gap-10 items-center font-poppins text-sm md:text-base font-medium">
    <h2 className="text-black font-semibold cursor-pointer hover:text-gray-700">Home</h2>
    <h2 className="text-black font-semibold cursor-pointer hover:text-gray-700">Shop</h2>
    <h2 className="text-black font-semibold cursor-pointer hover:text-gray-700">About</h2>
    <h2 className="text-black font-semibold cursor-pointer hover:text-gray-700">Contact</h2>
  </div>

  <div className="flex items-center justify-end gap-10">
    <img
      src="/header/mdi_account-alert-outline.svg"
      alt="Account"
      className="w-5 h-5 md:w-6 md:h-6 cursor-pointer"
    />
    <img
      src="/header/Vector.svg"
      alt="Search"
      className="w-5 h-5 md:w-6 md:h-6 cursor-pointer"
    />
    <img
      src="/header/Vector love.svg"
      alt="Wishlist"
      className="w-5 h-5 md:w-6 md:h-6 cursor-pointer"
    />
    <img
      src="/header/ant-design_shopping-cart-outlined.svg"
      alt="Cart"
      className="w-5 h-5 md:w-6 md:h-6 cursor-pointer"
    />
  </div>
</div>

<div className="relative">
  <img
    src="/headerbottom/Rectangle 1.svg"
    alt="Background"
    className="w-full  "
  />

  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center p-4 gap-4">
    <h1 className="text-xl md:text-3xl font-medium font-poppins">Shop</h1>
    <img src="/header/Group 56 .svg" alt="Icon" className="w-10 md:w-16" />
  </div>
</div>


        </>

    )
}

export default Header