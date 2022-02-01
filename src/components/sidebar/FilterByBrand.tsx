import Loading from '@components/Loading'
import { useBrand } from '@src/hooks/useBrand'
import { useShopProduct } from '@src/hooks/useShopProduct'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const FilterByBrand = () => {
  const router = useRouter()
  const { isLoading, isError, error, data } = useBrand()
  const showBrand = router.query.brand
  const [filteredBrands, setFilterBrands] = useState<BrandType[]>([])
  useEffect(() => {
    if (data) setFilterBrands(data)
  }, [data])
  const handleFilterBrands = (event: React.ChangeEvent<HTMLInputElement>) => {
    let hmm: BrandType[] = []
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
      router.push({
        pathname: router.pathname,
        query: { ...router.query, brand: brand },
      })
    }

    return (
      <>
        <h3 className='font-bold text-lg pb-2 mt-2'>Brand</h3>
        {!showBrand ? (
          <div>
            <input
              type='text'
              className='text-sm border-2 border-solid border-gray-300 w-full p-2'
              placeholder='Filter brands'
              onChange={handleFilterBrands}
            />
            <div className='max-h-72 overflow-auto mt-4'>
              <ul>
                {filteredBrands.map((brand) => (
                  <li
                    key={brand.slug}
                    className='text-xs mb-4 cursor-pointer capitalize'
                    onClick={() => handleBrandRouter(brand.slug)}>
                    {brand.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          <p
            className='cursor-pointer text-sm text-gray-500 inline-block mb-2'
            onClick={() => handleBrandRouter('')}>
            {router.query.brand}{' '}
            <span className='text-xl text-red-500 inline-block align-middle -mt-1'>
              x
            </span>
          </p>
        )}
      </>
    )
  }
}

export default FilterByBrand
