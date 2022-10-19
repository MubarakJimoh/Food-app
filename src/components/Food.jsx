import React, { useState } from 'react'
import { data } from "../data";

const Food = () => {
    const[foods, setFoods]= useState(data);
    const filterType = (category) => (
        setFoods(
            data.filter((item) => {
                return item.category === category;
            })
        )
    );
    const filterprice = (price) => (
        setFoods(
            data.filter((item) => {
                return item.price === price;
            })
        )
    );
    console.log(data)
  return (
    <div className='max-w-[1640x] py-12 px-6'>
        <h1 className=' text-green-600 font-bold text-4xl text-center'>MENU</h1>
        <div className='flex flex-col lg:flex-row justify-between'>
            <div>
            <p className=' font-bold text-gray-500'>Filter Type </p>
                <div className='flex justify-between flex-wrap'>
                    <button onClick={()=> setFoods(data) } className='m-1 border-green-600 text-green-600 hover:bg-green-600 hover:text-white'>All</button>
                    <button onClick={()=> filterType('Meals') }  className='m-1 border-green-600 text-green-600 hover:bg-green-600 hover:text-white'>Meals</button>
                    <button onClick={()=> filterType('Meat') }  className='m-1 border-green-600 text-green-600 hover:bg-green-600 hover:text-white'>Meat</button>
                    <button onClick={()=> filterType('Sides') } className='m-1 border-green-600 text-green-600 hover:bg-green-600 hover:text-white'>Sides</button>
                    <button onClick={()=> filterType('Soups') } className='m-1 border-green-600 text-green-600 hover:bg-green-600 hover:text-white'>Soups</button>

                </div>

            </div>
            <div>
                <p className=' font-bold text-gray-500'>Filter Price</p>
                <div className='flex justify-between flex-wrap'>
                    <button onClick={()=> filterprice('500') } className='m-1 border-green-600 text-green-600 hover:bg-green-600 hover:text-white'>500</button>
                    <button onClick={()=> filterprice('1000') } className='m-1 border-green-600 text-green-600 hover:bg-green-600 hover:text-white'>1000</button>
                    <button onClick={()=> filterprice('1500') }className='m-1 border-green-600 text-green-600 hover:bg-green-600 hover:text-white'>1500</button>
                    <button onClick={()=> filterprice('2000') }className='m-1 border-green-600 text-green-600 hover:bg-green-600 hover:text-white'>2000</button>
                </div>
            </div>
        </div>
    <div className=' max-w-[1640px] mx-auto p-4 py-12 grid grid-cols-2 lg:grid-cols-4 gap-6'>
     {foods.map((item, index)=>(
         <div key={item.index} className='border shadow-lg hover:scale-105 duration-300'>
            <img src={item.image} alt={item.name} 
                 className='w-full h-[200px] object-cover rounded-t-lg' />
                 <div className='flex justify-between px-2 py-4'>
                    <p className='font-bold'>{item.name}</p>
                    <p>
                    <span className=' bg-green-600 text-white p-1 rounded-full'>{item.price}</span>
                    </p>
                    
                 </div>
        </div>

     ) )}
    </div>

    </div>


  )
}

export default Food