import React from 'react'
import ProfileCard from './ProfileCard'
import { Button } from './components/ui/button'
import { BorderBeam } from './components/ui/border-beam'
import { CoolMode } from './components/ui/cool-mode'

function Profile() {
  return (
    <div className="col-span-3 bg-stone-700 rounded-3xl flex flex-col items-center overflow-auto">

      <div className='h-56 w-56 bg-stone-600  mt-24 flex justify-center items-center rounded-3xl'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-36 text-yellow-300">
          <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
        </svg>

      </div>
      <h1 name className='text-white text-3xl font-bold pt-5'>Kuntal Majee</h1>
      <CoolMode>
        <div className='devide relative  text-white bg-stone-600 p-2 px-5 m-5 rounded-md'>Web Developer</div>
      </CoolMode>
      <style>{`
        .devide::after {
          
          content: '';
          display: inline-block;
          background-color: rgb(87 83 78);
          position: absolute;
          bottom: -25px;
          left: -75px;
          height: 3px;
          width: 300px;
          border-radius: 50px;
        }
      `}</style>

      <div className='border-red-600 flex flex-col w-96 gap-5 p-5'>
        <ProfileCard link={<path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />}
          title='Email' content='kuntalmajee338@gmail.com'></ProfileCard>
        <ProfileCard link={<path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
        } title='Phone' content='(+91) 7439002557'></ProfileCard>
        <ProfileCard link={<path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />

        } title='BirthDate' content='Feb 14, 2004'></ProfileCard>
        <ProfileCard link={<><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
        </>} title='Location' content='kuntalmajee338@gmail.com'></ProfileCard>



      </div>
    </div>
  )
}


export default Profile