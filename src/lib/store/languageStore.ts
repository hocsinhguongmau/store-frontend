import create from 'zustand'

const languageObj: Languages[] = [
  {
    value: 'en',
    label: '🇬🇧',
  },
  { value: 'fi', label: '🇫🇮' },
  { value: 'sw', label: '🇸🇪' },
]

const languages: LanguageType[] = ['en', 'fi', 'sw']
const defaultLanguage: LanguageType = languages[0]

type LanguageState = {
  languageObj: Languages[]
  language: LanguageType
  setLanguage: (lang: LanguageType) => void
}
const useLanguageStore = create<LanguageState>((set) => ({
  languageObj: languageObj,
  language: defaultLanguage,
  setLanguage: (lang) => set(() => ({ language: lang })),
}))

export default useLanguageStore
