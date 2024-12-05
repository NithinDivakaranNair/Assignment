import React from 'react'

const ProductCard = () => {
  return (
    <div className="container  my-5 px-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1 */}
        <div className="bg-lightwhite w-full relative group">
          <div className="relative inline-block w-full">
            <img src="/products/image 1.svg" alt="Product" className="w-full" />
            <img
              src="/products/Discount.svg"
              alt="Discount"
              className="absolute top-10 right-12 transform translate-x-1/2 -translate-y-1/2 w-12 h-12"
            />
          </div>
          <div className="mt-2 px-4 pb-4">
            <h1 className="text-lg font-semibold">Syltherine</h1>
            <h4 className="text-md text-gray-700">Stylish cafe chair</h4>
            <div className="flex mt-2">
              <p className="text-sm font-bold text-gray-800 pr-3">Rp 2.500.000</p>
              <p className="text-sm text-gray-500 line-through">Rp 3.500.000</p>
            </div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 group-hover:flex items-center justify-center flex-col opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-white p-2 shadow-lg flex gap-4 mb-5">
              <button className="bg-white-500 text-red-500 px-4 py-2 font-extrabold font-poppins">Add to Cart</button>
            </div>
            <div className="flex justify-between w-full px-4">
              <img src="/card/gridicons_share.svg" alt="" className="" />
              <h3 className="text-white mr-4">Share</h3>
              <img src="/card/compare-svgrepo-com 1.svg" alt="" />
              <h3 className="text-white mr-4">Compare</h3>
              <img src="/card/Heart.svg" alt="" />
              <h3 className="text-white mr-4">Like</h3>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-lightwhite w-full relative group">
          <div className=" w-full">
            <img src="/products/image 2.svg" alt="Product" className="w-full" />

          </div>
          <div className="mt-2 px-4 pb-4">
            <h1 className="text-lg font-semibold">Leviosa</h1>
            <h4 className="text-md text-gray-700">Stylish cafe chair</h4>
            <div className="flex mt-2">
              <p className="text-sm font-bold text-gray-800 pr-3">Rp 2.500.000</p>
            </div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 group-hover:flex items-center justify-center flex-col opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-white p-2 shadow-lg flex gap-4 mb-5">
              <button className="bg-white-500 text-red-500 px-4 py-2 font-extrabold font-poppins">Add to Cart</button>
            </div>
            <div className="flex justify-between w-full px-4">
              <img src="/card/gridicons_share.svg" alt="" className="" />
              <h3 className="text-white mr-4">Share</h3>
              <img src="/card/compare-svgrepo-com 1.svg" alt="" />
              <h3 className="text-white mr-4">Compare</h3>
              <img src="/card/Heart.svg" alt="" />
              <h3 className="text-white mr-4">Like</h3>
            </div>
          </div>
        </div>



        {/* Card 3 */}
        <div className="bg-lightwhite w-full relative group">
          <div className="relative inline-block w-full">
            <img src="/products/image 3.svg" alt="Product" className="w-full" />
            <img
              src="/products/Label.svg"
              alt="Label"
              className="absolute top-10 right-12 transform translate-x-1/2 -translate-y-1/2 w-12 h-12"
            />
          </div>
          <div className="mt-2 px-4 pb-4">
            <h1 className="text-lg font-semibold">Lolito</h1>
            <h4 className="text-md text-gray-700">Luxury big sofa</h4>
            <div className="flex mt-2">
              <p className="text-sm font-bold text-gray-800 pr-3">Rp 7.000.000</p>
              <p className="text-sm text-gray-500 line-through">Rp 14.000.000</p>
            </div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 group-hover:flex items-center justify-center flex-col opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-white p-2 shadow-lg flex gap-4 mb-5">
              <button className="bg-white-500 text-red-500 px-4 py-2 font-extrabold font-poppins">Add to Cart</button>
            </div>
            <div className="flex justify-between w-full px-4">
              <img src="/card/gridicons_share.svg" alt="" className="" />
              <h3 className="text-white mr-4">Share</h3>
              <img src="/card/compare-svgrepo-com 1.svg" alt="" />
              <h3 className="text-white mr-4">Compare</h3>
              <img src="/card/Heart.svg" alt="" />
              <h3 className="text-white mr-4">Like</h3>
            </div>
          </div>
        </div>



        {/* Card 4 */}


        <div className="bg-lightwhite w-full relative group">
          <div className="relative inline-block w-full">
            <img src="/products/image 4.svg" alt="Product" className="w-full" />
            <img
              src="/products/Label 1.svg"
              alt="Label"
              className="absolute top-10 right-12 transform translate-x-1/2 -translate-y-1/2 w-12 h-12"
            />
          </div>
          <div className="mt-2 px-4 pb-4">
            <h1 className="text-lg font-semibold">Respira</h1>
            <h4 className="text-md text-gray-700">Outdoor bar table and stool</h4>
            <div className="flex mt-2">
              <p className="text-sm font-bold text-gray-800 pr-3">Rp 5000.000</p>
            </div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 group-hover:flex items-center justify-center flex-col opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-white p-2 shadow-lg flex gap-4 mb-5">
              <button className="bg-white-500 text-red-500 px-4 py-2 font-extrabold font-poppins">Add to Cart</button>
            </div>
            <div className="flex justify-between w-full px-4">
              <img src="/card/gridicons_share.svg" alt="" className="" />
              <h3 className="text-white mr-4">Share</h3>
              <img src="/card/compare-svgrepo-com 1.svg" alt="" />
              <h3 className="text-white mr-4">Compare</h3>
              <img src="/card/Heart.svg" alt="" />
              <h3 className="text-white mr-4">Like</h3>
            </div>
          </div>
        </div>

                {/* Card 5 */}
                <div className="bg-lightwhite w-full relative group">
          <div className="relative inline-block w-full">
            <img src="/products/image 1.svg" alt="Product" className="w-full" />
            <img
              src="/products/Discount.svg"
              alt="Discount"
              className="absolute top-10 right-12 transform translate-x-1/2 -translate-y-1/2 w-12 h-12"
            />
          </div>
          <div className="mt-2 px-4 pb-4">
            <h1 className="text-lg font-semibold">Syltherine</h1>
            <h4 className="text-md text-gray-700">Stylish cafe chair</h4>
            <div className="flex mt-2">
              <p className="text-sm font-bold text-gray-800 pr-3">Rp 2.500.000</p>
              <p className="text-sm text-gray-500 line-through">Rp 3.500.000</p>
            </div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 group-hover:flex items-center justify-center flex-col opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-white p-2 shadow-lg flex gap-4 mb-5">
              <button className="bg-white-500 text-red-500 px-4 py-2 font-extrabold font-poppins">Add to Cart</button>
            </div>
            <div className="flex justify-between w-full px-4">
              <img src="/card/gridicons_share.svg" alt="" className="" />
              <h3 className="text-white mr-4">Share</h3>
              <img src="/card/compare-svgrepo-com 1.svg" alt="" />
              <h3 className="text-white mr-4">Compare</h3>
              <img src="/card/Heart.svg" alt="" />
              <h3 className="text-white mr-4">Like</h3>
            </div>
          </div>
        </div>

        {/* Card 6 */}
        <div className="bg-lightwhite w-full relative group">
          <div className=" w-full">
            <img src="/products/image 2.svg" alt="Product" className="w-full" />

          </div>
          <div className="mt-2 px-4 pb-4">
            <h1 className="text-lg font-semibold">Leviosa</h1>
            <h4 className="text-md text-gray-700">Stylish cafe chair</h4>
            <div className="flex mt-2">
              <p className="text-sm font-bold text-gray-800 pr-3">Rp 2.500.000</p>
            </div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 group-hover:flex items-center justify-center flex-col opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-white p-2 shadow-lg flex gap-4 mb-5">
              <button className="bg-white-500 text-red-500 px-4 py-2 font-extrabold font-poppins">Add to Cart</button>
            </div>
            <div className="flex justify-between w-full px-4">
              <img src="/card/gridicons_share.svg" alt="" className="" />
              <h3 className="text-white mr-4">Share</h3>
              <img src="/card/compare-svgrepo-com 1.svg" alt="" />
              <h3 className="text-white mr-4">Compare</h3>
              <img src="/card/Heart.svg" alt="" />
              <h3 className="text-white mr-4">Like</h3>
            </div>
          </div>
        </div>



        {/* Card 7 */}
        <div className="bg-lightwhite w-full relative group">
          <div className="relative inline-block w-full">
            <img src="/products/image 3.svg" alt="Product" className="w-full" />
            <img
              src="/products/Label.svg"
              alt="Label"
              className="absolute top-10 right-12 transform translate-x-1/2 -translate-y-1/2 w-12 h-12"
            />
          </div>
          <div className="mt-2 px-4 pb-4">
            <h1 className="text-lg font-semibold">Lolito</h1>
            <h4 className="text-md text-gray-700">Luxury big sofa</h4>
            <div className="flex mt-2">
              <p className="text-sm font-bold text-gray-800 pr-3">Rp 7.000.000</p>
              <p className="text-sm text-gray-500 line-through">Rp 14.000.000</p>
            </div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 group-hover:flex items-center justify-center flex-col opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-white p-2 shadow-lg flex gap-4 mb-5">
              <button className="bg-white-500 text-red-500 px-4 py-2 font-extrabold font-poppins">Add to Cart</button>
            </div>
            <div className="flex justify-between w-full px-4">
              <img src="/card/gridicons_share.svg" alt="" className="" />
              <h3 className="text-white mr-4">Share</h3>
              <img src="/card/compare-svgrepo-com 1.svg" alt="" />
              <h3 className="text-white mr-4">Compare</h3>
              <img src="/card/Heart.svg" alt="" />
              <h3 className="text-white mr-4">Like</h3>
            </div>
          </div>
        </div>



        {/* Card 8*/}


        <div className="bg-lightwhite w-full relative group">
          <div className="relative inline-block w-full">
            <img src="/products/image 4.svg" alt="Product" className="w-full" />
            <img
              src="/products/Label 1.svg"
              alt="Label"
              className="absolute top-10 right-12 transform translate-x-1/2 -translate-y-1/2 w-12 h-12"
            />
          </div>
          <div className="mt-2 px-4 pb-4">
            <h1 className="text-lg font-semibold">Respira</h1>
            <h4 className="text-md text-gray-700">Outdoor bar table and stool</h4>
            <div className="flex mt-2">
              <p className="text-sm font-bold text-gray-800 pr-3">Rp 5000.000</p>
            </div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 group-hover:flex items-center justify-center flex-col opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-white p-2 shadow-lg flex gap-4 mb-5">
              <button className="bg-white-500 text-red-500 px-4 py-2 font-extrabold font-poppins">Add to Cart</button>
            </div>
            <div className="flex justify-between w-full px-4">
              <img src="/card/gridicons_share.svg" alt="" className="" />
              <h3 className="text-white mr-4">Share</h3>
              <img src="/card/compare-svgrepo-com 1.svg" alt="" />
              <h3 className="text-white mr-4">Compare</h3>
              <img src="/card/Heart.svg" alt="" />
              <h3 className="text-white mr-4">Like</h3>
            </div>
          </div>
        </div>


        {/* Card 9 */}
        <div className="bg-lightwhite w-full relative group">
          <div className="relative inline-block w-full">
            <img src="/products/image 1.svg" alt="Product" className="w-full" />
            <img
              src="/products/Discount.svg"
              alt="Discount"
              className="absolute top-10 right-12 transform translate-x-1/2 -translate-y-1/2 w-12 h-12"
            />
          </div>
          <div className="mt-2 px-4 pb-4">
            <h1 className="text-lg font-semibold">Syltherine</h1>
            <h4 className="text-md text-gray-700">Stylish cafe chair</h4>
            <div className="flex mt-2">
              <p className="text-sm font-bold text-gray-800 pr-3">Rp 2.500.000</p>
              <p className="text-sm text-gray-500 line-through">Rp 3.500.000</p>
            </div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 group-hover:flex items-center justify-center flex-col opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-white p-2 shadow-lg flex gap-4 mb-5">
              <button className="bg-white-500 text-red-500 px-4 py-2 font-extrabold font-poppins">Add to Cart</button>
            </div>
            <div className="flex justify-between w-full px-4">
              <img src="/card/gridicons_share.svg" alt="" className="" />
              <h3 className="text-white mr-4">Share</h3>
              <img src="/card/compare-svgrepo-com 1.svg" alt="" />
              <h3 className="text-white mr-4">Compare</h3>
              <img src="/card/Heart.svg" alt="" />
              <h3 className="text-white mr-4">Like</h3>
            </div>
          </div>
        </div>

        {/* Card 10 */}
        <div className="bg-lightwhite w-full relative group">
          <div className=" w-full">
            <img src="/products/image 2.svg" alt="Product" className="w-full" />

          </div>
          <div className="mt-2 px-4 pb-4">
            <h1 className="text-lg font-semibold">Leviosa</h1>
            <h4 className="text-md text-gray-700">Stylish cafe chair</h4>
            <div className="flex mt-2">
              <p className="text-sm font-bold text-gray-800 pr-3">Rp 2.500.000</p>
            </div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 group-hover:flex items-center justify-center flex-col opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-white p-2 shadow-lg flex gap-4 mb-5">
              <button className="bg-white-500 text-red-500 px-4 py-2 font-extrabold font-poppins">Add to Cart</button>
            </div>
            <div className="flex justify-between w-full px-4">
              <img src="/card/gridicons_share.svg" alt="" className="" />
              <h3 className="text-white mr-4">Share</h3>
              <img src="/card/compare-svgrepo-com 1.svg" alt="" />
              <h3 className="text-white mr-4">Compare</h3>
              <img src="/card/Heart.svg" alt="" />
              <h3 className="text-white mr-4">Like</h3>
            </div>
          </div>
        </div>



        {/* Card 11 */}
        <div className="bg-lightwhite w-full relative group">
          <div className="relative inline-block w-full">
            <img src="/products/image 3.svg" alt="Product" className="w-full" />
            <img
              src="/products/Label.svg"
              alt="Label"
              className="absolute top-10 right-12 transform translate-x-1/2 -translate-y-1/2 w-12 h-12"
            />
          </div>
          <div className="mt-2 px-4 pb-4">
            <h1 className="text-lg font-semibold">Lolito</h1>
            <h4 className="text-md text-gray-700">Luxury big sofa</h4>
            <div className="flex mt-2">
              <p className="text-sm font-bold text-gray-800 pr-3">Rp 7.000.000</p>
              <p className="text-sm text-gray-500 line-through">Rp 14.000.000</p>
            </div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 group-hover:flex items-center justify-center flex-col opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-white p-2 shadow-lg flex gap-4 mb-5">
              <button className="bg-white-500 text-red-500 px-4 py-2 font-extrabold font-poppins">Add to Cart</button>
            </div>
            <div className="flex justify-between w-full px-4">
              <img src="/card/gridicons_share.svg" alt="" className="" />
              <h3 className="text-white mr-4">Share</h3>
              <img src="/card/compare-svgrepo-com 1.svg" alt="" />
              <h3 className="text-white mr-4">Compare</h3>
              <img src="/card/Heart.svg" alt="" />
              <h3 className="text-white mr-4">Like</h3>
            </div>
          </div>
        </div>



        {/* Card 12 */}


        <div className="bg-lightwhite w-full relative group">
          <div className="relative inline-block w-full">
            <img src="/products/image 4.svg" alt="Product" className="w-full" />
            <img
              src="/products/Label 1.svg"
              alt="Label"
              className="absolute top-10 right-12 transform translate-x-1/2 -translate-y-1/2 w-12 h-12"
            />
          </div>
          <div className="mt-2 px-4 pb-4">
            <h1 className="text-lg font-semibold">Respira</h1>
            <h4 className="text-md text-gray-700">Outdoor bar table and stool</h4>
            <div className="flex mt-2">
              <p className="text-sm font-bold text-gray-800 pr-3">Rp 5000.000</p>
            </div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 group-hover:flex items-center justify-center flex-col opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-white p-2 shadow-lg flex gap-4 mb-5">
              <button className="bg-white-500 text-red-500 px-4 py-2 font-extrabold font-poppins">Add to Cart</button>
            </div>
            <div className="flex justify-between w-full px-4">
              <img src="/card/gridicons_share.svg" alt="" className="" />
              <h3 className="text-white mr-4">Share</h3>
              <img src="/card/compare-svgrepo-com 1.svg" alt="" />
              <h3 className="text-white mr-4">Compare</h3>
              <img src="/card/Heart.svg" alt="" />
              <h3 className="text-white mr-4">Like</h3>
            </div>
          </div>
        </div>


  
      </div>
    </div>


  )
}

export default ProductCard