import React, { useState } from 'react'

import { useRouter } from 'next/router'
import Link from 'next/link'
import useLanguageStore from '@src/lib/store/languageStore'

type LanguageType = {
  value: string
  label: string
}
const languages: LanguageType[] = [
  {
    value: 'en',
    label: '🇬🇧',
  },
  { value: 'fi', label: '🇫🇮' },
  { value: 'se', label: '🇸🇪' },
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
      className='outline-none mr-4 align-top mt-0.5 text-3xl bg-transparent none shadow-none appearance-none'
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
