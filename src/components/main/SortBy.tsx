import { productPageContent } from '@src/lib/locale/product'
import useLanguageStore from '@src/lib/store/languageStore'
import { useRouter } from 'next/router'
import React from 'react'

const SortBy = () => {
  const router = useRouter()
  const language = useLanguageStore((state) => state.language)
  const handleOrderProducts = (event: React.ChangeEvent<HTMLSelectElement>) => {
    let path = router.pathname
    const params = event.target.value
    let hmm = { ...router.query, order: params, page_slug: '1' }

    router.push(
      {
        pathname: path,
        query: hmm,
      },
      undefined,
      { shallow: true },
    )
  }
  return (
    <select
      className='outline-none mt-4 lg:mt-0 text-sm'
      onChange={handleOrderProducts}
      defaultValue={router.query.order}>
      <option value=''>{productPageContent[language].sortDate}</option>
      <option value='sell'>{productPageContent[language].sortSell}</option>
      <option value='price_asc'>
        {productPageContent[language].sortPriceUp}
      </option>
      <option value='price_desc'>
        {productPageContent[language].sortPriceDown}
      </option>
    </select>
  )
}

export default SortBy
