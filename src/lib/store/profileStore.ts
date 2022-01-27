import { CognitoUserAmplify } from '@aws-amplify/ui'
import create from 'zustand'

type ProfileType = {}

type ProfileState = {
  profile: string
  setProfile: (user: any) => void
  clearProfile: () => void
}
const useProfileStore = create<ProfileState>((set) => ({
  profile: '',
  setProfile: async (user) => {
    set({ profile: await user })
  },
  clearProfile: () => set({ profile: '' }),
  magicLogout: (signOut: any) => signOut(),
}))

// const useProfileStore = create<ProfileState>((set) => ({
//   profile: {},
//   setProfile: (user) => set(() => ({ profile: user })),
// }))

export default useProfileStore
