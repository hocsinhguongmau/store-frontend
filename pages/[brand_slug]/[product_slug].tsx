import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import BreadcrumbsComponent from '@components/main/Breadcrumbs'
import Link from 'next/link'
import { AiOutlineHeart } from 'react-icons/ai'
import StarRatings from 'react-star-ratings'
import Star from '@components/main/Star'
import ProductItem from '@components/main/ProductItem'

const ProductDetail = () => {
  const router = useRouter()
  const size = router.asPath
    .match(/#([a-z0-9]+)/gi)
    ?.toString()
    .slice(1)
  console.log(size)

  const [rating, setRating] = useState<number>(0)

  const handleChangeRating = (star: number) => {
    setRating(star)
  }
  const handleSubmitReview = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  const [swap, setSwap] = useState<boolean>(true)

  return (
    <div className='container'>
      <div className='flex flex-row'>
        <div className='w-2/5 text-center'>
          <Image
            src='/images/product-item-1.jpeg'
            height={400}
            width={200}
            // layout='responsive'
          />
        </div>
        <div className='w-3/5'>
          <BreadcrumbsComponent />
          <h2 className='mt-4 text-lg'>
            <Link href='/'>
              <a>Montblanc</a>
            </Link>
          </h2>
          <h1 className='no-underline text-2xl font-bold'>
            <Link href='/'>
              <a>Legend</a>
            </Link>
          </h1>
          <h2 className=' text-lg mb-2 mt-2'>
            <Link href='/'>
              <a>Eau de Parfum Miehille</a>
            </Link>
          </h2>
          <Star rating={3} />
          <p>
            <span className='py-1 px-2 bg-red-500 text-white uppercase text-xs mt-2 inline-block'>
              Sale
            </span>
          </p>
          <p className='flex flex-row justify-between mt-6 pb-2'>
            <span className='text-xl leading-10'>100ml</span>
            <span className='text-4xl leading-8'>44,50&euro;</span>
          </p>
          <hr />
          <p className='mt-6 flex flex-row gap-1'>
            <Link href='#100'>
              <a className='relative inline-block pl-3 py-1.5 pr-8 border border-solid border-gray-400'>
                <span className='text-sm'>100ml</span>
                <br />
                <span className='font-bold text-sm'>95,00&euro;</span>
                <span className='absolute top-0 right-0 text-sm overflow-hidden h-8 w-8'>
                  <span className='inline-block h-11 w-11 bg-red-500 -rotate-45 transform origin-top-left'></span>
                  <span className='absolute left-1/2 top-1/2 text-white text-xs inline-block -mt-3 ml-0.5'>
                    %
                  </span>
                </span>
              </a>
            </Link>
            <Link href='#50'>
              <a className='relative inline-block pl-3 py-1.5 pr-8 border border-solid border-gray-100 bg-gray-100 hover:bg-gray-200'>
                <span className='text-sm'>50ml</span>
                <br />
                <span className='font-bold text-sm'>95,00&euro;</span>
              </a>
            </Link>
          </p>
          <p className='mt-4'>
            <span className='text-green-600'>In stock</span>
          </p>
          <p className='mt-4'>
            <select className='w-24 outline-none border border-solid border-gray-400 h-10 px-2'>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
            <button className='button ml-2'>Add to cart</button>
          </p>
          <p className='mt-4'>
            <button className='flex hover:text-red-500'>
              <AiOutlineHeart className='text-xl mr-2' />
              <span className='text-black text-sm'>Add to favorite</span>
            </button>
          </p>
        </div>
      </div>
      <div>
        <p className='flex flex-row gap-8 mt-6 border-b border-solid border-gray-400'>
          <button
            className={`text-sm py-2  border-solid border-transparent hover:border-black ${
              swap ? 'border-b-2 border-black' : 'border-b'
            }`}
            onClick={() => setSwap(true)}>
            Description
          </button>
          <button
            className={`text-sm py-2  border-solid border-transparent hover:border-black ${
              !swap ? 'border-b-2 border-black' : 'border-b'
            }`}
            onClick={() => setSwap(false)}>
            Review
          </button>
        </p>
        <div className={`${swap ? 'flex' : 'hidden'}  flex-row mt-8 gap-8`}>
          <div className='content w-3/4'>
            <h3 className='text-3xl tracking-tight mb-6'>
              <span className='font-bold'>Description</span> Montblanc Legend
            </h3>
            <p>
              You're waiting for an important business meeting, a party with
              friends or a dinner with a fatal woman, the perfume for a man in
              Montblanc Legend is always a great choice. It supports your
              self-confidence whenever you want to shine.
            </p>
            <ul>
              <li>aromatic scent with herbal nuances</li>
              <li>woody scent</li>
              <li>fabulous scent</li>
              <li>suitable for a man who is not afraid to be himself</li>
            </ul>
            <h4>The complete composition of the product</h4>
            <p>
              ALCOHOL DENAT. (SD ALCOHOL 39-C), PARFUM (FRAGRANCE), AQUA
              (WATER), BENZYL SALICYLATE, CITRAL, CITRONELLOL, COUMARIN,
              LIMONENE, GERANIOL, LINALOOL. The manufacturer is responsible for
              the composition of the product. Due to any changes, we recommend
              checking the composition of the product directly from its
              packaging.
            </p>
          </div>
          <div className='w-1/4 text-sm'>
            <h3 className='text-3xl tracking-tight mb-6'>
              <span className='font-bold'>Ingredients</span>
            </h3>
            <h4 className='font-bold mt-2'>Top notes</h4>
            <p className='mt-2'>Violet, Violet</p>
            <h4 className='font-bold mt-2'>Middle notes</h4>
            <p className='mt-2'>Violet</p>
            <h4 className='font-bold mt-2'>Base notes</h4>
            <p className='mt-2'>Violet, Violet, Violet</p>
          </div>
        </div>
        <div className={`${swap ? 'hidden' : 'block'} mt-8`}>
          <form onSubmit={handleSubmitReview}>
            <h3 className='text-3xl tracking-tight mb-6'>
              <span className='font-bold'>Review</span> Mancera Cedrat Boise
            </h3>
            <p>
              <StarRatings
                starRatedColor='#EB4849'
                changeRating={handleChangeRating}
                rating={rating}
                name='rating'
                starSpacing='0'
                starDimension='20px'
              />
            </p>
            <textarea
              className='resize-none w-full h-32 outline-none border border-solid border-gray-400 mt-6 p-2 text-sm'
              placeholder='Write your review'></textarea>
            <p className='mt-4'>
              <button className='button' type='submit'>
                Review
              </button>
            </p>
          </form>
        </div>
      </div>
      <h2 className='text-2xl font-bold mt-8'>Related products</h2>
      <div className='grid grid-cols-4 gap-4 mt-8'>
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </div>
    </div>
  )
}

export default ProductDetail
