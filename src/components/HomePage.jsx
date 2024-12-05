import React from 'react'
import ProductCard from './ProductCard'

const HomePage = () => {
    return (
        <>
            <div className='flex flex-wrap justify-between px-4 lg:px-16 bg-lightwhite'>
                <div className='flex flex-wrap items-center w-full lg:w-auto'>
                    <img src='/homepage/system-uicons_filtering.svg' alt='' className='ml-3' />
                    <h1 className='ml-3'>Filter</h1>
                    <img src='/homepage/ci_grid-big-round.svg' alt='' className='ml-3' />
                    <img src='/homepage/bi_view-list.svg' alt='' className='ml-3' />
                    <img src='/homepage/Line 5.svg' alt='' className='ml-3' />
                    <h3 className='ml-3 font-poppins text-sm'>Showing 1–16 of 32 results</h3>
                </div>

                <div className='flex flex-wrap justify-center items-center py-4 w-full lg:w-auto'>
                    <h1 className='mb-2 lg:mb-0'>Show</h1>
                    <input
                        className='px-1 mx-4 py-2  md:w-12 border-none outline-none font-poppins text-center'
                        placeholder='16'
                    />
                    <h1 className='mb-2 lg:mb-0'>Short by</h1>
                    <input
                        className='mx-3 py-2 pl-8 w-full md:w-32 border-none outline-none font-poppins items-center'
                        placeholder='Default'
                    />
                </div>
            </div>

            <ProductCard />

            <div className='flex flex-row justify-center w-full gap-8 mb-8'>
                <button className=' py-2 px-4 rounded-md bg-red-500 text-white' >1</button>
                <button className='bg-lightwhite py-2 px-4 rounded-md'>2</button>
                <button className='bg-lightwhite py-2 px-4 rounded-md'>3</button>
                <button className='bg-lightwhite py-2 px-4 '>Next</button>

            </div>
        </>
    )
}

export default HomePage