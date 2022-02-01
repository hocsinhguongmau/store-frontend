import { client } from '@lib/client'

const price = `"price":defaultProductVariant.price,"priceDiscount":defaultProductVariant.price*(100-defaultProductVariant.discount)/100,"discount":defaultProductVariant.discount`

export const queryResult = `{"id":_id,"images":images[0].asset._ref,title,"slug":slug.current,"sales":discount,blurb,"vendor":{"title":vendor->title,"slug":vendor->slug.current},${price},"comments": *[_type=="comment" && references(^._id)]{"rating":rating}}`

const mainPage = `{"new_products":*[_type=="product" ]|order(_createdAt desc)[0...8]${queryResult},"weekly_offer":*[_type=="product" && discount][0...8]${queryResult},"best_selling":*[_type=="product" ]|order(sold desc)[0...8]${queryResult}}`

export const getMainPageProducts = async (): Promise<
  mainPageProductsType | undefined
> => {
  return await client.fetch(mainPage)
}

export const getAllProducts = async (
  sort: string,
  gender: string,
  discount: string,
  price: string[],
  brand: string,
): Promise<shopPageProductsType | undefined> => {
  let order = ''
  let sex = ''
  let costs = ''
  let sales = ''
  let vendor = ''

  if (sort === undefined || sort === '') {
    order = 'order(_createdAt desc)'
  } else if (sort === 'sell') {
    order = 'order(sold desc)'
  } else if (sort === 'price_desc') {
    order = 'order(defaultProductVariant.price desc)'
  } else if (sort === 'price_asc') {
    order = 'order(defaultProductVariant.price asc)'
  }

  if (discount === undefined || discount === 'false') {
    sales = ''
  } else {
    sales = ' && discount==true'
  }

  if (gender !== undefined && gender !== '') {
    sex = ` && gender[0]->slug.current=="${gender}"`
  }
  if (brand !== undefined && brand !== '') {
    vendor = ` && vendor->slug.current=="${brand}"`
  }
  if (price !== undefined) {
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

  const variables = sex + sales + vendor + costs
  const shopPage = `{"products":*[_type=="product" ${variables}]|${order}[0...12]${queryResult},"numberOfProducts": count(*[_type=="product" ${variables}])}`

  return await client.fetch(shopPage)
}

const sideBar = `*[_type=="product"]{"title":vendor->title,"slug":vendor->slug.current}`
export const getSideBar = async (): Promise<any | undefined> => {
  return await client.fetch(sideBar)
}

//get data for filter components
//shop pages and pagination
//detail page
//comment
//fav items
//cart
//checkout
//order history
//localized
