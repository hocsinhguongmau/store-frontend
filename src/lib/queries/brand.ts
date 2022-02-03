import { client } from '@lib/client'
import { queryResult } from './product'

const commonBrands =
  '*[_type=="vendor" && popular==true]|order(title asc){title,"slug":slug.current}'

const allBrands =
  '*[_type=="vendor"]|order(title asc){title,"slug":slug.current}'

export const getCommonBrands = async (): Promise<BrandType[]> => {
  return await client.fetch(commonBrands)
}
export const getAllBrands = async (): Promise<BrandType[]> => {
  return await client.fetch(allBrands)
}

export const getBrandDetail = async (
  brand_slug: string,
): Promise<BrandDetailType | undefined> => {
  return await client.fetch(`*[_type=="vendor" && slug.current=="${brand_slug}"][0]{
    body,'slug':slug.current,title,"products":*[_type=="product" && references(^._id)][0...5]${queryResult}
  }`)
}
