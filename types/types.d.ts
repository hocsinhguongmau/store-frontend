type LanguageType = 'en' | 'fi' | 'se'
type Languages = {
  value: LanguageType
  label: string
}
type InputNameType =
  | 'given_name'
  | 'family_name'
  | 'address'
  | 'zoneinfo'
  | 'phone_number'
  | 'email'

interface IProfile {
  given_name?: string
  family_name?: string
  address?: string
  zoneinfo?: string
  phone_number?: string
  email?: string
}
type InputType = {
  value: string | undefined
  register: UseFormRegister<IProfile>
  handleChange: () => void
  name: InputNameType
  label: string
  errors: any
  errorMessage: string
  type: string
}

type BrandType = {
  title: string
  slug: string
}

type BrandDetailType = {
  title: string
  slug: string
  body: {
    en: string[]
    fi: string[]
    se: string[]
  }
  products: ProductType[]
}

type ProductVariant = {
  _type: string
  ml: number
  price: number
  sku: number
  title: string
  discount?: number
}

type ProductType = {
  id: string
  images: string
  title: string
  slug: string
  sold: number
  sales: boolean
  blurb: LocaleStringType
  discount: number
  vendor: {
    title: string
    slug: string
  }
  price: number
  priceDiscount: number
  comments: [{ rating: number }]
}

type CommentText = {
  key: string
  _type: string
  text: string
}

type CommentType = {
  date: string
  id: string
  approved: boolean
  comment: CommentText[]
  email: string
  rating: number
}

type LocaleStringType = {
  _type?: string
  en: string
  fi: string
  se: string
}
type ProductDetailType = {
  id: string
  images: string
  title: string
  slug: string
  blurb: LocaleStringType
  top_notes: LocaleStringType
  middle_notes: LocaleStringType
  base_notes: LocaleStringType
  discount: boolean
  body: {
    _type?: string
    en: string[]
    fi: string[]
    se: string[]
  }
  vendor: {
    title: string
    slug: string
  }
  defaultProductVariant: ProductVariant
  variants: ProductVariant[]
  comments: CommentType[]
  related: ProductType[]
}

type mainPageProductsType = {
  new_products: ProductType[]
  weekly_offer: ProductType[]
  best_selling: ProductType[]
}

type shopPageProductsType = {
  products: ProductType[]
  numberOfProducts: number
}

type shopPageQueryType = {
  sort: string
  gender: string
  discount: string
  price: string[]
  brand: string
}
