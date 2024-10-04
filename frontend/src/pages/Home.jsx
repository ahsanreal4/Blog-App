import React from 'react'
import Navbar from '../components/Navbar'

function Home() {
  return (
    <>
      <Navbar/>
      <div className="relative w-full h-[500px] bg-[url('https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')] bg-no-repeat bg-cover bg-center mt-[100px]">
      <div className="absolute top-1 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
  <h3 className='text-[100px] text-[#444]'>BLOGS</h3>
</div>


</div>


    </>
)
}

export default Home