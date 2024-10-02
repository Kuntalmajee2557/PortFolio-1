import React from 'react'
import Card from './Card'
import Navbar from './Navbar'
function Description() {
  return (
    <div className="col-span-9 bg-stone-700 rounded-3xl text-white">
      <div top className='top flex justify-between items-center  border-fuchsia-300 p-5 relative h-32'>
        <style>{`
        .top::after {
          content: '';
          background-color: #ff1111;
          position: absolute;
          bottom: 0;
          left: 0;
          width: 20px
        }
      `}</style>
        <h2 className='font-bold text-5xl' >Porfolio</h2>

        <div main-navbar className='w-7/12  border-fuchsia-50 rounded-bl-3xl rounded-tr-3xl bg-stone-600  py-8 absolute right-0 top-0 h-24'>
          <ul className='flex justify-around  border-green-600 text-2xl font-bold'>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Fdsl</li>
            <li>Fdsf</li>
          </ul>
        </div>

      </div>

      <Navbar />
      <Card />
    </div>
  )
}

export default Description