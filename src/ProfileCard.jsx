import React from 'react'

function ProfileCard({ link, title, content }) {
  return (
    <div className='text-white flex flex-row justify-start items-center gap-5  border-fuchsia-600 h-16'>
      <div className='flex justify-center items-center bg-stone-600 rounded-2xl size-16  border-fuchsia-600'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="rounded-2xl size-7 p-0 m-0">
          {link}
        </svg>
      </div>

      <div className='flex flex-col items-start justify-center'>
        <h2>{title}</h2>
        <p>{content}</p>
      </div>

    </div>
  )
}

export default ProfileCard