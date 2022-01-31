import create from 'zustand'
import { persist } from 'zustand/middleware'

type ProfileState = {
  profile: IProfile
  setProfile: (user: IProfile) => void
  clearProfile: () => void
}

const useProfileStore = create<ProfileState>(
  persist(
    (set) => ({
      profile: {},
      setProfile: (user) => {
        set({ profile: user })
      },
      clearProfile: () => set({ profile: {} }),
    }),
    {
      name: 'profile-storage',
    },
  ),
)

export default useProfileStore
