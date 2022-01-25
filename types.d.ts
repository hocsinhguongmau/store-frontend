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
  given_name: string
  family_name: string
  address: string
  zoneinfo: string
  phone_number: string
  email: string
}
interface IInput {}
