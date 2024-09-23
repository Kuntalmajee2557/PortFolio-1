import React from "react"
import Profile from "./Profile"
import { Container } from "postcss"
import Description from "./Description"
function App() {
  

  return (
    <div className="relative grid grid-cols-12  w-full h-screen bg-red-800 gap-4 p-4 ">
      <Profile></Profile>
      <Description></Description>
    
    </div>
  )
}







export default App
