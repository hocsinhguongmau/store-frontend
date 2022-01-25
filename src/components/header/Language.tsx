import React, { useState } from 'react'

import useLanguageStore from '@lib/store/languageStore'

const Language = () => {
  const language = useLanguageStore((state) => state.language)
  const languageObj = useLanguageStore((state) => state.languageObj)
  const setLanguage = useLanguageStore((state) => state.setLanguage)
  const handleChangeLanguage = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    if (
      event.target.value === 'en' ||
      event.target.value === 'fi' ||
      event.target.value === 'sw'
    )
      setLanguage(event.target.value)
  }
  return (
    <select
      className='outline-none mr-2 text-3xl'
      onChange={handleChangeLanguage}
      defaultValue={language}>
      {languageObj.map((lang) => (
        <option key={lang.value} value={lang.value}>
          {lang.label}
        </option>
      ))}
    </select>
  )
}

export default Language
