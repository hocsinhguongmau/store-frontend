import React, { useState } from 'react'

import { useRouter } from 'next/router'
import useLanguageStore from '@src/lib/store/languageStore'

type LanguageType = {
  value: string
  label: string
}
const languages: LanguageType[] = [
  {
    value: 'en',
    label: 'en',
  },
  { value: 'fi', label: 'fi' },
  { value: 'se', label: 'se' },
]

const Language = () => {
  const { locale, asPath } = useRouter()
  const router = useRouter()
  const setLanguage = useLanguageStore((state) => state.setLanguage)
  const handleChangeLanguage = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const href = event.target.value
    if (href === 'en' || href === 'fi' || href === 'se') {
      router.push(asPath, asPath, { locale: href, shallow: true })
      setLanguage(href)
    }
  }
  return (
    <select
      className='outline-none align-top bg-transparent none shadow-none appearance-none uppercase text-sm mt-1 select-language'
      onChange={handleChangeLanguage}
      defaultValue={locale}>
      {languages?.map((language) => (
        <option key={language.value} value={language.value}>
          {language.label}
        </option>
      ))}
    </select>
  )
}

export default Language
