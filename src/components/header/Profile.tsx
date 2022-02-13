import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { BsPersonCircle } from 'react-icons/bs'
import { BiLogIn } from 'react-icons/bi'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import Language from './Language'
import { Auth, Hub } from 'aws-amplify'
import { useCart } from 'react-use-cart'

const Profile = () => {
  const [profile, setProfile] = useState<IProfile>({})

  useEffect(() => {
    let updateUser = async () => {
      try {
        let user = await Auth.currentAuthenticatedUser()
        setProfile(user.attributes)
      } catch {
        setProfile({})
      }
    }
    Hub.listen('auth', updateUser)
    updateUser()
    return () => Hub.remove('auth', updateUser)
  }, [])
  const { totalItems } = useCart()

  return (
    <div className='flex flex-row items-center text-xl gap-4 mt-2 lg:mt-0'>
      <div className='relative z-10 mt-1'>
        <Language />
      </div>
      {profile.email ? (
        <>
          <Link href='/profile'>
            <a className='text-2xl mt-1'>
              <BsPersonCircle />
            </a>
          </Link>
          <Link href='/cart'>
            <a className='text-2xl mt-1 relative'>
              <AiOutlineShoppingCart />
              {totalItems > 0 ? (
                <span className='absolute -top-4 -right-4 text-xs text-white bg-red-500 rounded-full h-6 w-6 text-center leading-6'>
                  {totalItems}
                </span>
              ) : null}
            </a>
          </Link>
        </>
      ) : (
        <Link href='/profile'>
          <a className='text-2xl mt-1'>
            <BiLogIn />
          </a>
        </Link>
      )}
    </div>
  )
}

export default Profile
