import create from 'zustand'

type FavoriteType = {
  favoriteItems: string[]
  initialItems: (array: string[]) => void
  setFavoriteItems: (id: string, favoriteItems: string[]) => void
  removeFavoriteItems: (id: string, favoriteItems: string[]) => void
}

const useFavoriteStore = create<FavoriteType>((set) => ({
  favoriteItems: [],
  initialItems: (array) => {
    set({ favoriteItems: array })
  },
  setFavoriteItems: (id, favoriteItems) => {
    set({ favoriteItems: favoriteItems.concat(id) })
  },
  removeFavoriteItems: (id, favoriteItems) => {
    const newArray = favoriteItems.filter((item) => item !== id)
    set({ favoriteItems: newArray })
  },
}))

export default useFavoriteStore
