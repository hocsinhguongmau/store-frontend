import { client } from '@lib/client'

const price = `"price":defaultProductVariant.price,"priceDiscount":defaultProductVariant.price*(100-defaultProductVariant.discount)/100,"discount":defaultProductVariant.discount`

export const queryResult = `{"id":_id,"images":images[0].asset._ref,title,"slug":slug.current,"sales":discount,blurb,"vendor":{"title":vendor->title,"slug":vendor->slug.current},${price},"comments": *[_type=="comment" && references(^._id)]{"rating":rating}}`

const mainPage = `{"new_products":*[_type=="product" ]|order(_createdAt desc)[0...8]${queryResult},"weekly_offer":*[_type=="product" && discount][0...8]${queryResult},"best_selling":*[_type=="product" ]|order(sold desc)[0...8]${queryResult}}`

export const getMainPageProducts = async (): Promise<mainPageProductsType> => {
  return await client.fetch(mainPage)
}

export const getAllProducts = async (
  sort: string,
  gender: string,
  discount: string,
  price: string[],
  brand: string,
  start: number,
  end: number,
): Promise<shopPageProductsType> => {
  let order = ''
  let sex = ''
  let costs = ''
  let sales = ''
  let vendor = ''

  if (sort === undefined || sort === '') {
    order = '| order(_createdAt desc)'
  } else if (sort === 'sell') {
    order = '| order(sold desc)'
  } else if (sort === 'price_desc') {
    order = '| order(defaultProductVariant.price desc)'
  } else if (sort === 'price_asc') {
    order = '| order(defaultProductVariant.price asc)'
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

  const variables = sex + sales + vendor + costs
  const shopPage = `{"products":*[_type=="product"${variables}]${order}[${start}...${end}]${queryResult},"numberOfProducts": count(*[_type=="product" ${variables}])}`
  return await client.fetch(shopPage)
}

const sideBar = `*[_type=="product"]{"title":vendor->title,"slug":vendor->slug.current}`
export const getSideBar = async (): Promise<BrandType[]> => {
  return await client.fetch(sideBar)
}

export const getProductDetail = async (
  brand_slug: string,
  slug: string,
): Promise<ProductDetailType> => {
  const query = `*[_type=="product" && slug.current == "${slug}"]{
      "id":_id,
      "images": images[0].asset._ref,
      title,
      "slug":slug.current,
      "vendor":{
        "title": vendor->title,
         "slug":vendor->slug.current
       },
      blurb,
      top_notes,
      middle_notes,
      base_notes,
      body,
      defaultProductVariant,
      variants,
      discount,
      "comments":  *[_type=="comment" && references(^._id)]{
       "date": _createdAt,
        "id":_id,
        approved,
        comment,
        email,
        rating,
      },
      "related": *[_type=="product" && vendor->slug.current == "${brand_slug}" && slug.current!="${slug}"][0...4]${queryResult}
   }[0]`
  return await client.fetch(query)
}

// "comment":comment[0].children,

//detail page
//comment into array of string
//fav items
//cart
//checkout
//order history
//localized
//search
