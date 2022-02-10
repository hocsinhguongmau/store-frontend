import Loading from '@components/Loading'
import { useFavoriteItems } from '@src/hooks/useFavoriteItems'
import { mainPageContent } from '@src/lib/locale/shop'
import useFavoriteStore from '@src/lib/store/favoriteStore'
import useLanguageStore from '@src/lib/store/languageStore'
import { Auth } from 'aws-amplify'
import React, { useEffect, useState } from 'react'
import ProductItem from './ProductItem'

const FavoriteItems = () => {
  const [profile, setProfile] = useState<IProfile>()
  const language = useLanguageStore((state) => state.language)
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const user = await Auth.currentAuthenticatedUser()
        setProfile(user.attributes)
      } catch (error) {
        console.log(error)
      }
    }

    checkAuth()
  }, [])

  const { isLoading, isError, error, data } = useFavoriteItems(
    profile?.email as string,
  )

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

  if (data) {
    return (
      <>
        {data.products.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}
      </>
    )
  } else {
    return <div>{mainPageContent[language].noFav}</div>
  }
}

export default FavoriteItems
