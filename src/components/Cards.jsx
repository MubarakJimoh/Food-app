import React from 'react'

const Cards = () => {
   return (
        <div className=' max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
         <div className='rounded-xl relative'>
    
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>Breakfast Meals</p>
          <p className='px-2'>Through 8/26</p>
          <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='https://images.unsplash.com/photo-1613769049987-b31b641f25b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGJyZWFrZmFzdHxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60'
          alt='/'
        />
        </div>
 <div className='rounded-xl relative'>
    <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
      <p className='font-bold text-2xl px-2 pt-4'>Snacks</p>
      <p className='px-2'>25% OFF</p>
      <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
    </div>
    <img
    className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
      src='https://media.istockphoto.com/photos/dougnuts-in-a-box-picture-id502420019?b=1&k=20&m=502420019&s=170667a&w=0&h=AswwBrf7OWkElsx4WzHbaulAVHPiZ3MBQJg93_A_3Vo='
      alt='/'
    />
    </div>
    <div className='rounded-xl relative'>
    <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
      <p className='font-bold text-2xl px-2 pt-4'>Drinks</p>
      <p className='px-2'>Through 8/26</p>
      <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
    </div>
    <img
    className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
      src='https://media.istockphoto.com/photos/delicious-freshly-squeezed-orange-juice-from-organic-oranges-from-the-picture-id1282705707?b=1&k=20&m=1282705707&s=170667a&w=0&h=KZ34-pSLkKo3vRoZV3yMkTBLpOLdRthmIxj0kTpMXTI='
      alt='/'
    />
    </div>
        </div>
      );
    }

export default Cards