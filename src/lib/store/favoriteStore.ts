import create from 'zustand'

type FavoriteType = {
  favoriteItems: string[]
  initialItems: (arrayString: string) => void
  setFavoriteItems: (id: string, favoriteItems: string[]) => void
  removeFavoriteItems: (id: string, favoriteItems: string[]) => void
}

const useFavoriteStore = create<FavoriteType>((set) => ({
  favoriteItems: [''],
  initialItems: (arrayString) => {
    set({ favoriteItems: arrayString.split(',') })
  },
  setFavoriteItems: (id, favoriteItems) => {
    const newArray = [...favoriteItems, id]
    set({ favoriteItems: newArray })
  },
  removeFavoriteItems: (id, favoriteItems) => {
    const newArray = favoriteItems.filter((item) => item !== id)
    set({ favoriteItems: newArray })
  },
}))

export default useFavoriteStore
