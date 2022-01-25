import Link from 'next/link'
import React, { useState } from 'react'
import { BsSearch, BsPersonCircle } from 'react-icons/bs'
import { BiLogIn, BiLogOut } from 'react-icons/bi'
import { AiOutlineShoppingCart, AiOutlineCloseCircle } from 'react-icons/ai'
import Image from 'next/image'
import Language from './Language'

const Profile = () => {
  const [searchActive, setSearchActive] = useState<boolean>(false)
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSearchActive(false)
  }
  return (
    <div className='flex flex-row items-center text-xl gap-4 mt-2 lg:mt-0'>
      <div className='relative z-10 mt-1'>
        <Language />
        <button onClick={() => setSearchActive(!searchActive)}>
          {searchActive ? <AiOutlineCloseCircle /> : <BsSearch />}
        </button>
        <div
          className={`absolute right-0 mt-8 lg:mt-9 ${
            searchActive ? 'block' : 'hidden'
          }`}>
          <form onSubmit={handleSubmit} className='flex'>
            <input
              type='text'
              placeholder='Search our store'
              className='text-sm bg-white p-3 border-none outline-none'
            />
            <button className='bg-red-500 text-white px-4' type='submit'>
              <BsSearch />
            </button>
          </form>
        </div>
      </div>
      {/* not logged in */}
      <Link href='/profile'>
        <a className='text-2xl mt-1'>
          <BiLogIn />
        </a>
      </Link>
      {/* logged in */}
      {/* <BsPersonCircle />
      <a className='text-2xl mt-1'>
          <AiOutlineShoppingCart />
          </a>
          <a className='text-2xl mt-1'>
          <BiLogOut /></a> */}
    </div>
  )
}

export default Profile
