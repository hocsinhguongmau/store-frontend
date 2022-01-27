import { client } from '@lib/client'

const query =
  '{"id":_id,"images":images[0].asset._ref,title,"slug":slug.current,discount,blurb,"vendor":{"title":vendor->title,"slug":vendor->slug.current},defaultProductVariant,"comments": *[_type=="comment" && references(^._id)]{"rating":[].rating}}'

export const mainPage = `{"new_products":*[_type=="product" ]|order(_createdAt desc)[0...8]${query},"weekly_offer":*[_type=="product" && discount][0...8]${query},"best_selling":*[_type=="product" ]|order(sold desc)[0...8]${query}}`

export const getMainPageProducts = async (): Promise<
  mainPageProductsType | undefined
> => {
  return await client.fetch(mainPage)
}
// *[_type=="product" && vendor->slug.current=="chanel"]{title}
