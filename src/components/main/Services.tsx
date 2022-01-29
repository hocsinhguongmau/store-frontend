import React from 'react'

const Services = () => {
  return (
    <div className='container grid grid-cols-1 md:grid-cols-3 gap-0 uppercase mt-12 text-center'>
      <div className='py-6 border-b border-gray-500 md:border-b-0'>
        <h3 className='font-bold text-sm'>90 day return</h3>
        <p className='text-xs mt-1'>warranty</p>
      </div>
      <div className='py-6 border-b md:border-l border-gray-500 md:border-b-0'>
        <h3 className='font-bold text-sm'>we are here for you</h3>
        <p className='text-xs mt-1'>every weekday</p>
      </div>
      <div className='py-6 md:border-l border-gray-500 '>
        <h3 className='font-bold text-sm'>The best collection</h3>
        <p className='text-xs mt-1'>perfumes in europe</p>
      </div>
    </div>
  )
}

export default Services
