import { client } from '@lib/client'

export const queryResult =
  '{"id":_id,"images":images[0].asset._ref,title,"slug":slug.current,discount,blurb,"vendor":{"title":vendor->title,"slug":vendor->slug.current},defaultProductVariant,"comments": *[_type=="comment" && references(^._id)]{"rating":rating}}'

const mainPage = `{"new_products":*[_type=="product" ]|order(_createdAt desc)[0...8]${queryResult},"weekly_offer":*[_type=="product" && discount][0...8]${queryResult},"best_selling":*[_type=="product" ]|order(sold desc)[0...8]${queryResult}}`

const shopPage = `{"products":*[_type=="product" ]|order(_createdAt desc)[0...12]${queryResult}}`

export const getMainPageProducts = async (): Promise<
  mainPageProductsType | undefined
> => {
  return await client.fetch(mainPage)
}
// *[_type=="product" && vendor->slug.current=="chanel"]{title}

export const getAllProducts = async (): Promise<
  shopPageProductsType | undefined
> => {
  return await client.fetch(shopPage)
}
