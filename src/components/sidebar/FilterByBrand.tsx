import Loading from '@components/Loading'
import { useBrand } from '@src/hooks/useBrand'
import { useFilteredBrand } from '@src/hooks/useFilteredBrand'
import { productPageContent } from '@src/lib/locale/product'
import useLanguageStore from '@src/lib/store/languageStore'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const FilterByBrand = () => {
  const router = useRouter()
  const language = useLanguageStore((state) => state.language)
  const [filterText, setFilterText] = useState<string>('')
  const { isLoading, isError, error, data } = useFilteredBrand()
  const showBrand = router.query.brand
  const [filteredBrands, setFilterBrands] = useState<FilteredBrandType[]>([])
  useEffect(() => {
    if (data) setFilterBrands(data)
  }, [data])
  const handleFilterBrands = (event: React.ChangeEvent<HTMLInputElement>) => {
    let hmm: FilteredBrandType[] = []
    setFilterText(event.target.value)
    if (data) {
      hmm = data.filter((brand) => brand.slug.includes(event.target.value))
      setFilterBrands(hmm)
    }
    setFilterBrands(hmm)
  }

  if (isLoading) {
    return <Loading />
  }

  if (isError) {
    return (
      <div>
        <p>{error?.message}</p>
      </div>
    )
  }

  if (data) {
    const handleBrandRouter = (brand: string) => {
      let path = router.pathname

      let hmm = { ...router.query, brand: brand, page_slug: '1' }
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
      <>
        <h3 className='font-bold text-lg pb-2 mt-2'>
          {productPageContent[language].brand}
        </h3>
        {!showBrand ? (
          <div>
            <input
              type='text'
              className='text-sm border-2 border-solid border-gray-300 w-full p-2'
              placeholder={productPageContent[language].filterBrand}
              onChange={handleFilterBrands}
              value={filterText}
              data-testid='filter-by-brand'
            />
            <div className='max-h-72 overflow-auto mt-4'>
              <ul className='brand-list'>
                {filteredBrands.map((brand) =>
                  brand.count > 0 ? (
                    <li
                      key={brand.slug}
                      className='text-xs mb-4 cursor-pointer capitalize'
                      onClick={() => handleBrandRouter(brand.slug)}>
                      {brand.title}{' '}
                      <span className='text-gray-400 ml-2 '>{brand.count}</span>
                    </li>
                  ) : null,
                )}
              </ul>
            </div>
          </div>
        ) : (
          <p
            className='cursor-pointer text-sm text-gray-500 inline-block mb-2'
            onClick={() => handleBrandRouter('')}>
            {router.query.brand}{' '}
            <span className='text-xl text-red-500 inline-block align-middle -mt-1 remove-filter'>
              x
            </span>
          </p>
        )}
      </>
    )
  } else {
    return <Loading />
  }
}

export default FilterByBrand
