import BreadcrumbsComponent from '@components/main/Breadcrumbs'
import Link from 'next/link'
import React, { useState } from 'react'

const Brand = () => {
  const [brands, setBrands] = useState<string[]>([
    '18.21 Man Made',
    '4711',
    'Abercrombie & Fitch',
    'Ajmal',
    'Amouage',
    'Antonio Puig',
    'Armaf',
    'Armani',
    'Balenciaga',
    'Banana Republic',
    'Bentley',
    'Bottega Veneta',
    'Burberry',
    'Bvlgari',
    'Byredo',
    'Calvin Klein',
    'Carolina Herrera',
    'Caron',
    'Cerruti',
    'Chanel',
    'Davidoff',
    'Diesel',
    'Dolce & Gabbana',
    'Dsquared2',
    'Dunhill',
    'Ermenegildo Zegna',
    'Etat Libre d’Orange',
    'Ferrari',
    'Franck Boclet',
    'Franck Olivier',
    'Geoffrey Beene',
    'Guerlain',
    'Guess',
    'Halloween',
    'Hermès',
    'Hugo Boss',
    'Issey Miyake',
    'Jacques Bogart',
    'Jaguar',
    'Jimmy Choo',
    'John Varvatos',
    'Karl Lagerfeld',
    'Kenzo',
    'L’Occitane',
    'Lanvin',
    'Liz Claiborne',
    'Lolita Lempicka',
    'Mancera',
    'Mercedes-Benz',
    'Michael Kors',
    'Montale',
    'Mugler',
    'Nasomatto',
    'Nautica',
    'Parfums De Marly',
    'Perry Ellis',
    'Prada',
    'Puma',
    'Ralph Lauren',
    'Rochas',
    'Roja Parfums',
    'Taylor of Old Bond Street',
    'Ted Lapidus',
    'Tommy Hilfiger',
    'Van Cleef & Arpels',
    'Vera Wang',
    'Versace',
    'Viktor & Rolf',
    'Yves Saint Laurent',
    'Zadig & Voltaire',
  ])

  type AlphabetType = {
    alphabet: string
    record: string[]
  }

  const data = brands.reduce((r: any, e: any) => {
    let alphabet: any = e[0]
    if (!r[alphabet]) r[alphabet] = { alphabet, record: [e] }
    else r[alphabet].record.push(e)
    return r
  }, {})

  const result = Object.values(data)
  return (
    <div className='container'>
      <BreadcrumbsComponent />
      <h1 className='no-underline mt-4 text-xl md:text-2xl'>
        Kosmetiikan ja Hajuvesien brändit
      </h1>
      <div className='mt-8'>
        {result.map((alphabet: any) => (
          <div
            className='border-t border-solid border-gray-400 pb-8'
            key={alphabet.alphabet}>
            <h2 className='text-2xl mt-8 text-center'>{alphabet.alphabet}</h2>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-8'>
              {alphabet.record.map((brand: any) => (
                <Link href='/' key={brand}>
                  <a>
                    <span className='text-sm'>{brand}</span>
                  </a>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Brand
