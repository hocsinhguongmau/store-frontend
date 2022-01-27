type LanguageType = 'en' | 'fi' | 'sw'
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

type AllBrandsType = {
  brands: BrandType[]
}

type BrandType = {
  title: string
  slug: string
}

type ProductVariant = {
  _type: string
  ml: number
  price: number
  sku: number
  title: string
}

type ProductType = {
  id: string
  images: string
  title: string
  slug: string
  sold: number
  vendor: {
    title: string
    slug: string
  }
  defaultProductVariant: ProductVariant
  comments: [rating: number]
}

type CommentType = {
  id: string
  approved: boolean
  comment: string[]
  name: string
  email: string
  rating: number
}

type LocaleStringType = {
  en: string
  fi: string
  sw: string
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
  body: {
    en: string[]
    fi: string[]
    sw: string[]
  }
  vendor: {
    title: string
    slug: string
  }
  defaultProductVariant: ProductVariant
  variants: ProductVariant[]
  comments: CommentType[]
}
