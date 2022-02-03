import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Slider, { Range } from 'rc-slider'
import 'rc-slider/assets/index.css'
import { useQuery, UseQueryResult } from 'react-query'
import { getProductPrice } from '@src/lib/queries/product'
import Loading from '@components/Loading'

const FilterByPrice = () => {
  const router = useRouter()
  const { query } = useRouter()
  const gender = query.gender as string
  const discount = query.discount as string
  const brand = query.brand as string

  const {
    isLoading,
    isError,
    error,
    data,
  }: UseQueryResult<filterPrice[] | undefined, Error> = useQuery<
    filterPrice[] | undefined,
    Error
  >(
    [
      'product_price',
      gender ? 'gender:' + gender : 'gender',
      discount ? 'discount:' + discount : 'discount',
      brand ? 'brand:' + brand : 'brand',
    ],
    () => getProductPrice(gender, discount, brand),
  )
  useEffect(() => {
    max = data?.reduce(function (a, b) {
      return Math.max(a, b.price)
    }, 0)
    min = data?.reduce(function (a, b) {
      return Math.min(a, b.price)
    }, 1000)
  }, [data])
  let max = data?.reduce(function (a, b) {
    return Math.max(a, b.price)
  }, 0)

  let min = data?.reduce(function (a, b) {
    return Math.min(a, b.price)
  }, 1000)

  const [priceMin, setPriceMin] = useState<string>(
    router.query.price ? router.query.price[0] : min ? min.toString() : '0',
  )
  const [priceMax, setPriceMax] = useState<string>(
    router.query.price ? router.query.price[1] : max ? max.toString() : '1000',
  )

  const handlePriceRouter = (value: number[]) => {
    let path = router.pathname
    setPriceMin(value[0].toString())
    setPriceMax(value[1].toString())
    let hmm = {
      ...router.query,
      price: [value[0].toString(), value[1].toString()],
      page_slug: '1',
    }
    router.push({
      pathname: path,
      query: hmm,
    })
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
    return (
      <>
        <h3 className='font-bold text-lg pb-2 mt-2'>Price</h3>
        <div className='leading-8 text-sm text-gray-400 px-2 lg:w-48'>
          <Range
            min={min}
            max={max}
            defaultValue={[parseInt(priceMin), parseInt(priceMax)]}
            allowCross={false}
            draggableTrack={true}
            onAfterChange={(value) => handlePriceRouter(value)}
          />
          <p className='flex flex-row justify-between w-full'>
            <span>{priceMin}</span>
            <span>{priceMax}</span>
          </p>
        </div>
      </>
    )
  } else {
    return <Loading />
  }
}

export default FilterByPrice
