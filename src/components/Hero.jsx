import React from 'react'

const Hero = () => {
  return ( 
    <div className='max-w-[1640px] mx-auto p-4'>
        <div className='max-h-[500px] relative'>
            {/* Overlay */}
            <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center'>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>The <span className=' text-green-600'>Best</span></h1>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'> <span className=' text-green-600'>Foods</span> Devlivered</h1>
            </div>
            <img className='w-full max-h-[500px] object-cover' src="https://images.unsplash.com/photo-1569058242252-623df46b5025?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8am9sbG9mJTIwcmljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt="/" />
        </div>
    </div>
  )
}

export default Hero