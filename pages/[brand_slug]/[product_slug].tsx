import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import BreadcrumbsComponent from '@components/main/Breadcrumbs'
import Link from 'next/link'
import { AiOutlineHeart } from 'react-icons/ai'
import StarRatings from 'react-star-ratings'

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

  return (
    <div className='container'>
      <div className=' flex flex-row'>
        <div className=''>
          <Image
            src='/images/product-item-1.jpeg'
            height={800}
            width={355}
            // layout='responsive'
          />
        </div>
        <div>
          <BreadcrumbsComponent />
          <h2>
            <Link href='/'>
              <a>Montblanc</a>
            </Link>
          </h2>
          <h1>
            <Link href='/'>
              <a>Legend</a>
            </Link>
          </h1>
          <h2>
            <Link href='/'>
              <a>Eau de Parfum Miehille</a>
            </Link>
          </h2>
          <p>
            <span>Sale</span>
          </p>
          <p>
            <span>100ml</span>
            <span>44,50&euro;</span>
          </p>
          <p>
            <Link href='#100'>
              <a className='relative'>
                <span>100ml</span>
                <br />
                <span>95,00&euro;</span>
                <span>%</span>
              </a>
            </Link>
            <Link href='#50'>
              <a className='relative'>
                <span>50ml</span>
                <br />
                <span>95,00&euro;</span>
                <span>%</span>
              </a>
            </Link>
          </p>
          <p>
            <select>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
            <button>Add to cart</button>
          </p>
          <p>
            <button>
              <AiOutlineHeart />
              Add to favorite
            </button>
          </p>
        </div>
      </div>
      <div>
        <p>
          <button>Description</button>
          <button>Review 4</button>
        </p>
        <div className='flex flex-row'>
          <div>
            <h3>Description Montblanc Legend</h3>
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
            <p>The complete composition of the product</p>
            <p>
              ALCOHOL DENAT. (SD ALCOHOL 39-C), PARFUM (FRAGRANCE), AQUA
              (WATER), BENZYL SALICYLATE, CITRAL, CITRONELLOL, COUMARIN,
              LIMONENE, GERANIOL, LINALOOL. The manufacturer is responsible for
              the composition of the product. Due to any changes, we recommend
              checking the composition of the product directly from its
              packaging.
            </p>
          </div>
          <div>
            <h3>Ingredients</h3>
            <h4>Top notes</h4>
            <p>Violet</p>
            <h4>Middle notes</h4>
            <p>Violet</p>
            <h4>Base notes</h4>
            <p>Violet</p>
          </div>
        </div>
        <div>
          <form>
            <h3>Review Mancera Cedrat Boise</h3>
            <p>Rating</p>
            <StarRatings
              starRatedColor='#EB4849'
              changeRating={handleChangeRating}
              rating={rating}
              name='rating'
            />
            <textarea></textarea>
            <button type='submit'>Review</button>
          </form>
        </div>
      </div>
      <h2>Related products</h2>
      list product
    </div>
  )
}

export default ProductDetail
