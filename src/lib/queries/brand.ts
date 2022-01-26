import { client } from '@lib/client'

const commonBrands =
  '*[_type=="vendor" && popular==true]|order(title asc){title,"slug":slug.current}'

const allBrands =
  '*[_type=="vendor"]|order(title asc){title,"slug":slug.current}'

export const getCommonBrands = async (): Promise<BrandType[] | undefined> => {
  return await client.fetch(commonBrands)
}
export const getAllBrands = async (): Promise<AllBrandsType | undefined> => {
  return await client.fetch(allBrands)
}
