import Loading from '@components/Loading'
import { useFavoriteItems } from '@src/hooks/useFavoriteItems'
import { useFavoriteList } from '@src/hooks/useFavoriteList'
import { mainPageContent } from '@src/lib/locale/shop'
import useLanguageStore from '@src/lib/store/languageStore'
import { Auth } from 'aws-amplify'
import React, { useEffect, useState } from 'react'
import { focusManager } from 'react-query'

import ProductItem from './ProductItem'

// User has switched back to the tab
const onFocus = () => {
  focusManager.setFocused(true)
  setTimeout(() => {
    focusManager.setFocused(true)
  }, 200)
}

// User has switched away from the tab (AKA tab is hidden)
const onBlur = () => {
  focusManager.setFocused(undefined)
}

const FavoriteItems = () => {
  const [profile, setProfile] = useState<IProfile>()

  const language = useLanguageStore((state) => state.language)
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const user = await Auth.currentAuthenticatedUser()
        setProfile(user.attributes)
      } catch (error) {
        // console.log(error)
      }
    }

    checkAuth()
  }, [])

  const favoriteList = useFavoriteList(profile?.email as string)

  const { isLoading, isError, error, data } = useFavoriteItems(
    favoriteList.data?.products,
  )

  // useEffect(() => {
  //   window.addEventListener('focus', onFocus)
  //   window.addEventListener('blur', onBlur)
  //   // Calls onFocus when the window first loads
  //   onFocus()
  //   // Specify how to clean up after this effect:
  //   return () => {
  //     window.removeEventListener('focus', onFocus)
  //     window.removeEventListener('blur', onBlur)
  //   }
  // }, [])

  if (isLoading) {
    return <Loading />
  }
  if (isError) {
    return (
      <div>
        <p>{error?.message}</p>
      </div>
    )
  }

  if (data !== undefined) {
    if (data.length > 0) {
      return (
        <>
          {data.map((product) => (
            <ProductItem product={product} key={product.id} />
          ))}
        </>
      )
    } else {
      return <div>{mainPageContent[language].noFav}</div>
    }
  } else {
    return <div></div>
  }
}

export default FavoriteItems
