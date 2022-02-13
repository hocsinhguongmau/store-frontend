import React, { ChangeEvent, useEffect, useState } from 'react'
import Autosuggest from 'react-autosuggest'
import AutosuggestHighlightMatch from 'autosuggest-highlight/match'
import AutosuggestHighlightParse from 'autosuggest-highlight/parse'
import Link from 'next/link'
import { useQuery, UseQueryResult } from 'react-query'
import { getAllBrands } from '@src/lib/queries/brand'
import { getSearchProducts } from '@src/lib/queries/product'

const Search = () => {
  const brandQuery: UseQueryResult<BrandType[] | undefined, Error> = useQuery<
    BrandType[] | undefined,
    Error
  >(['all_brands'], getAllBrands)
  const productQuery: UseQueryResult<SearchProductType[] | undefined, Error> =
    useQuery<SearchProductType[] | undefined, Error>(
      ['search_products'],
      getSearchProducts,
    )

  const [data, setData] = useState<SearchDataType[]>([])
  useEffect(() => {
    const getData = async () => {
      let brandData: SearchItemType[] = []
      if (brandQuery.data) {
        brandQuery.data.map((brand: BrandType) =>
          brandData.push({ title: brand.title, slug: brand.slug }),
        )
      }
      let productData: SearchItemType[] = []
      if (productQuery.data) {
        productQuery.data.map((product: SearchProductType) =>
          productData.push({
            title: product.title,
            slug: `${product.vendor}/${product.slug}`,
          }),
        )
      }
      console.log(productData)
      setData([
        {
          title: 'Brands',
          items: brandData,
        },
        {
          title: 'Products',
          items: productData,
        },
      ])
    }
    getData()
  }, [brandQuery.data, productQuery.data])

  const escapeRegexCharacters = (str: string) => {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  }

  const getSuggestions = (value: string) => {
    const escapedValue = escapeRegexCharacters(value.trim())

    if (escapedValue === '') {
      return []
    }

    const regex = new RegExp('^' + escapedValue, 'i')

    return data
      .map((section) => {
        return {
          title: section.title,
          items: section.items.filter((item) => regex.test(item.title)),
        }
      })
      .filter((section) => section.items.length > 0)
  }

  const getSuggestionValue = (suggestion: SearchItemType) => {
    return suggestion.title
  }

  const renderSuggestion = (suggestion: SearchItemType, { query }: any) => {
    const matches = AutosuggestHighlightMatch(suggestion.title, query)
    const parts = AutosuggestHighlightParse(suggestion.title, matches)

    return (
      <Link href={`/${suggestion.slug}`}>
        <a className='w-full p-2 text-sm block'>
          <span className=''>
            {parts.map((part: PartType, index: number) => {
              const className = part.highlight
                ? 'react-autosuggest__suggestion-match'
                : null

              return (
                <span className={className!} key={index}>
                  {part.text}
                </span>
              )
            })}
          </span>
        </a>
      </Link>
    )
  }

  const renderSectionTitle = (section: any) => {
    return <h3>{section.title}</h3>
  }

  const getSectionSuggestions = (section: any) => {
    return section.items
  }
  const [value, setValue] = useState<string>('')

  const [suggestions, setSuggestions] = useState<any>([])

  const handleChange = (event: any, { newValue }: any) => {
    setValue(newValue)
  }

  const onSuggestionsFetchRequested = ({ value }: any) => {
    setSuggestions(getSuggestions(value))
  }
  const onSuggestionsClearRequested = () => {
    setSuggestions([])
  }

  const inputProps = {
    placeholder: 'Type a programming language',
    value,
    onChange: handleChange,
  }

  return (
    <div className='container w-1/2 mt-4 relative'>
      <Autosuggest
        multiSection={true}
        suggestions={suggestions}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        renderSectionTitle={renderSectionTitle}
        getSectionSuggestions={getSectionSuggestions}
        inputProps={inputProps}
      />
    </div>
  )
}

export default Search
