import { Auth } from 'aws-amplify'
import { useEffect, useState } from 'react'

const useGetFavorite = () => {
  const [favoriteItems, setFavoriteItems] = useState<string>('')
  useEffect(() => {
    const getUser = async () => {
      try {
        const user = await Auth.currentAuthenticatedUser()
        if (user.attributes['custom:favorite_items'].length) {
          const newArray = user.attributes['custom:favorite_items'].split(',')
          setFavoriteItems("'" + newArray.join("','") + "'")
        }
      } catch (error) {
        console.log(error)
      }
    }
    getUser()
  }, [])

  return { favoriteItems }
}

export default useGetFavorite
