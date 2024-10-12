import React from 'react'

function Card() {
  return (
    <div className='flex flex-col justify-start  border-fuchsia-50 rounded-3xl h-auto w-96 '>
      <img src="https://i.ytimg.com/vi/IoCaTgmUSvc/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCraX0qbyoTxvpGYHxRy2WkaFkCcA" className='border rounded-3xl m-0 h-72' alt="" />
      <div className='mt-1  border-purple-600'>
        <p name className='pl-6 font-bold text-lg'>Figma</p>
        <p domain className='pl-6'>Web dev</p>
      </div>

    </div>
  )
}

export default Card