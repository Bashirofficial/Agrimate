import React from 'react'
import MainNavBar from './MainNavBar'
import LeftSideBar from './LeftSideBar'
import PostBox from './PostBox'
import Post from './Post'

function HomePage() {
  return (
    <main className='bg-[#f3f2f0] min-h-screen'>
      <section >
        <MainNavBar />
      </section>
      <section className=" flex   ">
          <div className='w-1/3'>
             <LeftSideBar />
          </div>
          <div className=" w-2/3 relative justify-center items-center">
            <PostBox />
            <Post />
          </div>
      </section>
      <section className=" w-1/3">
        
      </section>
    </main>
    
  )
}

export default HomePage