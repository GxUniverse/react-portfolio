import React from 'react';

const Contact = () => {
  return (
    <div id='contact' className='max-w-[1040px] mx-auto md:pl-20 md:pr-20 p-4 py-16'>
        <h1 className='py-4 text-4xl font-bold text-center text-[#001b5e]'>Contact</h1>
        <div className='grid md:grid-cols-1 w-full py-2'>
            <div className='flex flex-col items-center border border-gray-300 rounded-lg'>
                <div className='bg-[#001b5e] w-full py-2 rounded-t-lg'>
                    <label className='uppercase text-sm mb-2 text-white font-semibold'>Name</label>
                </div>
                <div className="p-4">
                    <p className='text-center text-gray-800'>Manin Gauba</p>
                </div>
            </div>
            <div className='flex flex-col items-center border border-gray-300 rounded-lg'>
                <div className='bg-[#001b5e] w-full py-2'>
                    <label className='uppercase text-sm mb-2 text-white font-semibold'>Phone Number</label>
                </div>
                <div className="p-4">
                    <p className='text-center text-gray-800'>732-288-8897</p>
                </div>
            </div>
            <div className='flex flex-col items-center border border-gray-300 rounded-lg'>
                <div className='bg-[#001b5e] w-full py-2 rounded-b-lg'>
                    <label className='uppercase text-sm mb-2 text-white font-semibold'>Email</label>
                </div>
                <div className="p-4">
                    <p className='text-center text-gray-800'>manindgauba@gmail.com</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact;

