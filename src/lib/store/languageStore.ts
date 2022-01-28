import create from 'zustand'

type LanguageState = {
  language: LanguageType
  setLanguage: (language: LanguageType) => void
}
const useLanguageStore = create<LanguageState>((set) => ({
  language: 'en',
  setLanguage: (lang) => {
    set({ language: lang })
  },
}))

export default useLanguageStore
