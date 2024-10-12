import React from 'react'
import Navbar from './Navbar'
import Maincontent from './Maincontent'
import About from './About'
import Resume from './Resume'

function Description() {
  return (
    <div className="col-span-9 bg-stone-700 rounded-3xl text-white">
      <div top className='top flex justify-between items-center border-fuchsia-300 p-5 relative h-32 mb-5'>
        <style>{`
        .top::after {
          
          content: '';
          display: inline-block;
          background-color: #ffff00;
          position: absolute;
          bottom: 0;
          left: 20px;
          height: 10px;
          width: 100px;
          border-radius: 50px;
        }
      `}</style>
        <h2 className='font-bold text-5xl' >About</h2>

        <div main-navbar className='w-7/12  border-fuchsia-50 rounded-bl-3xl rounded-tr-3xl bg-stone-600  py-8 absolute right-0 top-0 h-24'>
          <ul className='flex justify-around  border-green-600 text-2xl font-bold'>
            <li>About</li>
            <li>Resume</li>
            <li>Portfolio</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>

      </div>

      {/* <Navbar />
      <Maincontent />

      <About /> */}

      <Resume />



    </div>
  )
}

export default Description