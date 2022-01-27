import { CognitoUserAmplify } from '@aws-amplify/ui'
import create from 'zustand'

type ProfileState = {
  profile: IProfile
  setProfile: (user: IProfile) => void
  clearProfile: () => void
}
const useProfileStore = create<ProfileState>((set) => ({
  profile: {},
  setProfile: (user) => {
    set({ profile: user })
  },
  clearProfile: () => set({ profile: {} }),
}))

export default useProfileStore
