import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { BsSearch, BsPersonCircle } from 'react-icons/bs'
import { BiLogIn, BiLogOut } from 'react-icons/bi'
import { AiOutlineShoppingCart, AiOutlineCloseCircle } from 'react-icons/ai'
import Language from './Language'
import useProfileStore from '@src/lib/store/profileStore'
import { Auth } from 'aws-amplify'

const Profile = () => {
  const profile = useProfileStore((state) => state.profile)

  const [searchActive, setSearchActive] = useState<boolean>(false)
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSearchActive(false)
  }

  return (
    <div className='flex flex-row items-center text-xl gap-4 mt-2 lg:mt-0'>
      <div className='relative z-10 mt-1'>
        <Language />
        <button
          className='mt-2 align-top'
          onClick={() => setSearchActive(!searchActive)}>
          {searchActive ? <AiOutlineCloseCircle /> : <BsSearch />}
        </button>
        <div
          className={`absolute left-0 md:left-auto md:right-0 mt-8 lg:mt-9 ${
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
      {profile.email ? (
        <>
          <div className='text-sm overflow-hidden w-24 lg:w-36 overflow-ellipsis mt-1'>
            <Link href='/profile'>
              <a className=''>{profile.email}</a>
            </Link>
          </div>
          <div>
            <Link href='/cart'>
              <a className='text-2xl mt-1'>
                <AiOutlineShoppingCart />
              </a>
            </Link>
          </div>
        </>
      ) : (
        <Link href='/profile'>
          <a className='text-2xl mt-1'>
            <BsPersonCircle />
          </a>
        </Link>
      )}
    </div>
  )
}

export default Profile
