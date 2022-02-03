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

export const getFilteredBrands = async (
  gender: string,
  discount: string,
  price: string[],
): Promise<FilteredBrandType[]> => {
  let sex = ''
  let costs = ''
  let sales = ''

  if (discount === undefined || discount === 'false') {
    sales = ''
  } else {
    sales = ' && discount==true'
  }

  if (gender !== undefined && gender !== '') {
    sex = ` && gender[0]->slug.current=="${gender}"`
  }

  if (price !== undefined && price !== ['']) {
    if (price[0] === '' && price[1] === '') {
      costs = ''
    } else if (price[0] === '') {
      costs = `&& defaultProductVariant.price*(100-defaultProductVariant.discount)/100 <= ${price[1]}`
    } else if (price[1] === '') {
      costs = `&& defaultProductVariant.price*(100-defaultProductVariant.discount)/100 >= ${price[0]}`
    } else {
      costs = `&& defaultProductVariant.price*(100-defaultProductVariant.discount)/100 >= ${price[0]} && defaultProductVariant.price*(100-defaultProductVariant.discount)/100 <= ${price[1]} `
    }
  } else {
    costs = ''
  }

  const variables = sex + sales + costs
  const filteredBrands = `*[_type=="vendor"]|order(title asc){
    title,
    "slug":slug.current,
     "count": count(*[_type=="product" && references(^._id) ${variables}])
  }`

  return await client.fetch(filteredBrands)
}
