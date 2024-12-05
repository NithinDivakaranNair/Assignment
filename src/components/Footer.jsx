import React from 'react'

const Footer = () => {
  return (
    <>
      <div className='bg-lightwhite py-16 flex justify-center mb-3'>
        <div className="flex justify-between  items-center bg-lightwhite   opacity-100  ">

          <div className='flex flex-row justify-between items-center  mx-6 gap-1'>
            <div>
              <img src='/footer/trophy 1.svg' alt='' className="w-10 " />
            </div>
            <div >
              <h1 className='font-semibold font-poppins'>High Quality</h1>
              <h1 className="text-customGray font-poppins text-[13px]">craft from top materials</h1>
            </div>
          </div>

          <div className='flex flex-row justify-between items-center  mx-6 gap-1'>
            <div>
              <img src='/footer/guarantee.svg' alt='' className="w-10 " />

            </div>
            <div>
              <h1 className='font-semibold font-poppins'>Warrenty Protection</h1>
              <h1 className="text-customGray font-poppins text-[13px]">over 2 years</h1>
            </div>

          </div>

          <div className='flex flex-row justify-between items-center  mx-6 gap-1'>
            <div>
              <img src='/footer/trophy 1.svg' alt='' className="w-10 " />

            </div>
            <div>
              <h1 className='font-semibold font-poppins'>Free Shipping</h1>
              <h1 className="text-customGray font-poppins text-[13px]">Order over 150 $</h1>
            </div>

          </div>

          <div className='flex flex-row justify-between items-center  mx-6 gap-1'>
            <div>
              <img src='/footer/customer-support.svg' alt='' className="w-10 " />
            </div>
            <div>
              <h1 className='font-semibold font-poppins'>24/7 Support</h1>
              <h1 className="text-customGray font-poppins text-[13px]">Dedicated support</h1>
            </div>

          </div>

        </div>
      </div>

      <div className='border-t border-gray-150 w-full'></div>


      <div >
        <div className=' flex flex-row  justify-between  mx-20  py-10'>
          <div >
            <h1 className='mb-7 font-extrabold font-poppins'>Funiro.</h1>
            <p className="text-customGray font-poppins">400 University Drive Suite 200 Coral <br /> Gables,<br />
              FL 33134 USA</p>
          </div>

          <div>

            <ul>
              <li className='mb-7 text-customGray font-poppins' >Link</li>
              <li className='mb-7 font-poppins '>Home</li>
              <li className='mb-7 font-poppins'>Shop</li>
              <li className='mb-7 font-poppins'>About</li>
              <li className='mb-7 font-poppins'>Contact</li>

            </ul>

          </div>

          <div>
            <ul>
              <li className='mb-7 text-customGray font-poppins'>Help</li>
              <li className='mb-7 font-poppins' >Payment Option</li>
              <li className='mb-7 font-poppins'>Returns</li>
              <li className='mb-7 font-poppins'>Privacy Policies</li>
            </ul>

          </div>

          <div>
            <h3 className='mb-7 text-customGray font-poppins'>NewsLetter</h3>
            <div className='flex gap-3'>
              <input type='text' placeholder='Enter Your Email Address' className='border-b-[0.5px] border-black font-poppins' />
              <button className='border-b-[0.5px] border-black font-poppins'>SUBSCRIBE</button>
            </div>


          </div>
        </div>


      </div>
<div>
  
</div>

<div className='px-20 mb-20'>
<div className='border-t border-gray-150 w-full mb-3 '>    </div>

<h1>2023 furino. All rights reverved</h1>
</div>
     
    </>
  )
}

export default Footer