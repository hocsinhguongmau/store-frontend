import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import BreadcrumbsComponent from '@components/main/Breadcrumbs'
import Link from 'next/link'
import { AiOutlineHeart } from 'react-icons/ai'
import StarRatings from 'react-star-ratings'
import Star from '@components/main/Star'
import ProductItem from '@components/main/ProductItem'
import { useProductDetail } from '@src/hooks/useProductDetail'
import Loading from '@components/Loading'
import { GetServerSideProps } from 'next'
import { getProductDetail } from '@src/lib/queries/product'
import { dehydrate, QueryClient } from 'react-query'
import { useNextSanityImage } from 'next-sanity-image'
import { client } from '@src/lib/client'
import useLanguageStore from '@src/lib/store/languageStore'
import { postComment } from '@src/lib/queries/comment'
import { Auth, Hub } from 'aws-amplify'

const BlockContent = require('@sanity/block-content-to-react')
type linksType = {
  mark: { blank: boolean; href: string }
  children: HTMLElement
}
type alignmentType = {
  mark: { alignment: 'left' | 'right' | 'center' }
  children: HTMLElement
}
const serializers = {
  marks: {
    link: ({ mark, children }: linksType) => {
      const { blank, href } = mark
      return blank ? (
        <a href={href} target='_blank' rel='noopener'>
          {children}
        </a>
      ) : (
        <a href={href}>{children}</a>
      )
    },
    textAlignment: ({ mark, children }: alignmentType) => {
      if (mark.alignment === 'right') {
        return (
          <span
            style={{
              textAlign: 'right',
              display: 'inline-block',
              width: '100%',
            }}>
            {children}
          </span>
        )
      } else if (mark.alignment === 'center') {
        return (
          <span
            style={{
              textAlign: 'center',
              display: 'inline-block',
              width: '100%',
            }}>
            {children}
          </span>
        )
      } else {
        return <span>{children}</span>
      }
    },
  },
}

const ProductDetail = () => {
  const router = useRouter()
  const [profile, setProfile] = useState<IProfile>({})
  const slug = router.query.product_slug as string
  const brand_slug = router.query.brand_slug as string
  const { isLoading, isError, error, data } = useProductDetail(brand_slug, slug)

  const size = router.asPath
    .match(/#([a-z0-9]+)/gi)
    ?.toString()
    .slice(1)

  const [commentRating, setCommentRating] = useState<number>(0)
  const [review, setReview] = useState<string>('')

  const handleChangeRating = (star: number) => {
    setCommentRating(star)
  }

  const handleSubmitReview = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (data && profile.email)
      postComment(review, profile.email, commentRating, data?.id)
    setCommentRating(0)
    setReview('')
  }
  useEffect(() => {
    let getUser = async () => {
      try {
        let user = await Auth.currentAuthenticatedUser()
        setProfile(user.attributes)
      } catch {
        setProfile({})
      }
    }
    Hub.listen('auth', getUser)
    getUser()
    return () => Hub.remove('auth', getUser)
  }, [])
  const [swap, setSwap] = useState<boolean>(true)
  if (isLoading) {
    return <Loading />
  }

  if (isError) {
    return (
      <div>
        <p>{error?.message}</p>
      </div>
    )
  }
  if (data === undefined) {
    return (
      <div className='container text-center text-2xl font-bold mt-12'>
        aaaaaaaa
      </div>
    )
  } else {
    const imageProps = useNextSanityImage(client, data.images)
    const language = useLanguageStore((state) => state.language)
    let rating: number = 0
    let total: number = 0
    let count: number = 0
    data.comments.map((comment) => {
      if (comment.rating) {
        total += comment.rating
        count++
      }
    })
    rating = total / count

    const [selectedVariant, setSelectedVariant] = useState()

    return (
      <div className='container'>
        <div className='md:hidden'>
          <BreadcrumbsComponent />
        </div>
        <div className='md:hidden'>
          <h2 className='mt-4 text-xl'>
            <Link href={`/shop?brand=${data.vendor.slug}`}>
              <a>{data.vendor.title}</a>
            </Link>
          </h2>
          <h1 className='no-underline text-3xl mt-4 font-bold'>{data.title}</h1>
        </div>
        <div className='md:flex flex-row'>
          <div className='md:w-2/5 mt-6 md:mt-0 text-center'>
            <Image
              {...imageProps}
              layout='intrinsic'
              height={400}
              width={200}
              alt={data.title}
            />
          </div>
          <div className='md:w-3/5'>
            <div className='hidden md:block'>
              <BreadcrumbsComponent />
              <h2 className='mt-4 text-lg'>
                <Link href={`/shop?brand=${data.vendor.slug}`}>
                  <a>{data.vendor.title}</a>
                </Link>
              </h2>
              <h1 className='no-underline text-2xl font-bold'>{data.title}</h1>
              <h2 className=' text-lg mb-2 mt-2'>{data.blurb[language]}</h2>
              <Star rating={rating} />
            </div>
            {data.discount ? (
              <p>
                <span className='py-1 px-2 bg-red-500 text-white uppercase md:text-xs mt-2 inline-block'>
                  Sale
                </span>
              </p>
            ) : null}
            <p className='flex flex-row justify-between mt-6 pb-2'>
              <span className='text-xl leading-10'>100ml</span>
              <span className='text-4xl leading-8'>44,50&euro;</span>
            </p>
            <hr />
            <p className='mt-6 flex flex-row gap-1'>
              <Link href='#100'>
                <a className='relative inline-block pl-3 py-1.5 md:pr-8 border border-solid border-gray-400 w-1/3 md:w-auto'>
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
                <a className='relative inline-block pl-3 py-1.5 md:pr-8 border border-solid border-gray-100 bg-gray-100 hover:bg-gray-200 w-1/3 md:w-auto'>
                  <span className='text-sm'>50ml</span>
                  <br />
                  <span className='font-bold text-sm'>95,00&euro;</span>
                </a>
              </Link>
              <Link href='#50'>
                <a className='relative inline-block pl-3 py-1.5 md:pr-8 border border-solid border-gray-100 bg-gray-100 hover:bg-gray-200 w-1/3 md:w-auto'>
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
          <div
            className={`${
              swap ? 'block md:flex' : 'hidden'
            }  flex-row mt-4 md:mt-8 gap-8`}>
            <div className='content md:w-3/4'>
              <h3 className='text-lg md:text-3xl tracking-tight mb-2 md:mb-6'>
                <span className='font-bold'>Description</span> {data.title}
              </h3>
              <BlockContent
                blocks={data.body[language]}
                imageOptions={{ w: 640, fit: 'max' }}
                projectId={process.env.NEXT_PUBLIC_PROJECT_ID}
                dataset={process.env.NEXT_PUBLIC_DATASET}
                serializers={serializers}
              />
            </div>
            <div className='md:w-1/4 text-sm mt-6 md:mt-0'>
              <h3 className='text-xl md:text-3xl tracking-tight mb-6'>
                <span className='font-bold'>Ingredients</span>
              </h3>
              <h4 className='font-bold mt-2'>Top notes</h4>
              <p className='mt-2'>{data.top_notes[language]}</p>
              <h4 className='font-bold mt-2'>Middle notes</h4>
              <p className='mt-2'>{data.middle_notes[language]}</p>
              <h4 className='font-bold mt-2'>Base notes</h4>
              <p className='mt-2'>{data.base_notes[language]}</p>
            </div>
          </div>
          <div className={`${swap ? 'hidden' : 'block'} mt-4 md:mt-8`}>
            <h3 className='text-xl md:text-3xl tracking-tight mb-2 md:mb-6'>
              <span className='font-bold'>Review</span> {data.title}
            </h3>
            {profile.email ? (
              <form onSubmit={handleSubmitReview}>
                <div>
                  <StarRatings
                    starRatedColor='#EB4849'
                    changeRating={handleChangeRating}
                    rating={commentRating}
                    name='rating'
                    starSpacing='0'
                    starDimension='20px'
                  />
                </div>
                <textarea
                  className='resize-none w-full h-32 outline-none border border-solid border-gray-400 mt-6 p-2 text-sm'
                  onChange={(e) => setReview(e.target.value)}
                  value={review}
                  placeholder='Write your review'></textarea>
                <p className='mt-4'>
                  <button className='button' type='submit'>
                    Review
                  </button>
                </p>
              </form>
            ) : (
              <p>
                <Link href='/profile'>
                  <a>Please login to review</a>
                </Link>
              </p>
            )}

            <div className='mt-8 pt-2 border-t border-solid border-gray-400'>
              {data.comments.length > 0 ? (
                data.comments.map((comment) => (
                  <div className='mt-4' key={comment.id}>
                    <p className='text-sm'>{comment.comment}</p>
                    <p className='flex flex-row mt-2 text-xs leading-4'>
                      <Star rating={comment.rating} />
                      <span className='font-bold mr-2 ml-4'>
                        {comment.email}
                      </span>
                      {comment.date}
                    </p>
                  </div>
                ))
              ) : (
                <div className='mt-4 text-lg'>
                  There is no review for this product
                </div>
              )}
            </div>
          </div>
        </div>
        {data.related.length > 0 ? (
          <>
            <h2 className='text-xl md:text-2xl font-bold mt-8'>
              Related products
            </h2>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 md:mt-8'>
              {data.related.map((product) => (
                <ProductItem product={product} key={product.id} />
              ))}
            </div>
          </>
        ) : null}
      </div>
    )
  }
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const queryClient = new QueryClient()
  const slug = query.product_slug as string
  const brand_slug = query.brand_slug as string

  await queryClient.prefetchQuery(['product_detail: ' + slug], () =>
    getProductDetail(brand_slug, slug),
  )

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

export default ProductDetail
