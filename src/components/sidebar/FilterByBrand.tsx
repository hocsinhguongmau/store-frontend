import { useShopProduct } from '@src/hooks/useShopProduct'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

const FilterByBrand = () => {
  const router = useRouter()
  const showBrand = router.query.brand
  const { isLoading, isError, error, data } = useShopProduct()
  console.log(data?.products)
  const brands = ['chanel', 'dior', 'byredo', 'cc ne']
  const [filteredBrands, setFilteredBrands] = useState<string[]>(brands)
  const handleBrandRouter = (brand: string) => {
    if (brand === '') {
      setFilteredBrands(brands)
    }
    router.push({
      pathname: router.pathname,
      query: { ...router.query, brand: brand },
    })
  }

  const handleFilterBrands = (event: React.ChangeEvent<HTMLInputElement>) => {
    const hmm = brands.filter((brand) => brand.includes(event.target.value))
    setFilteredBrands(hmm)
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
                  key={brand}
                  className='text-xs mb-4 cursor-pointer'
                  onClick={() => handleBrandRouter(brand)}>
                  {brand} <span className='text-gray-500'> 123</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <p
          className='cursor-pointer text-sm text-gray-500 inline-block'
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

export default FilterByBrand
