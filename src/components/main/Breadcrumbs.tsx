import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { AiOutlineHome } from 'react-icons/ai'
import { RiArrowRightSFill } from 'react-icons/ri'

const convertBreadcrumb = (string: string) => {
  return string
    .replace(/-/g, ' ')
    .replace(/oe/g, 'ö')
    .replace(/ae/g, 'ä')
    .replace(/ue/g, 'ü')
}
type PathArray = {
  breadcrumb: string
  href: string
}
const Breadcrumbs = () => {
  const router = useRouter()
  const [breadcrumbs, setBreadcrumbs] = useState<PathArray[]>([])

  useEffect(() => {
    if (router) {
      const linkPath = router.route.split('/')
      linkPath.shift()

      const pathArray: PathArray[] = linkPath.map((path, i) => {
        return {
          breadcrumb: path,
          href: '/' + linkPath.slice(0, i + 1).join('/'),
        }
      })

      setBreadcrumbs(pathArray)
    }
  }, [router])

  if (!breadcrumbs) {
    return null
  }

  return (
    <nav aria-label='breadcrumbs'>
      <ol className='flex flex-row'>
        <li className=''>
          <Link href='/'>
            <a className='flex flex-row'>
              <AiOutlineHome className='mr-1 mt-0.5' />
              Home
            </a>
          </Link>
        </li>
        {breadcrumbs.map((breadcrumb, i) => {
          console.log()
          return (
            <React.Fragment key={breadcrumb.href}>
              {router.query.brand_slug && !router.query.product_slug ? (
                <li className='ml-2 flex flex-row'>
                  <RiArrowRightSFill
                    className='text-2xl mr-1'
                    style={{ marginTop: '-1px' }}
                  />
                  <Link href='/brand'>
                    <a className='capitalize'>Brand</a>
                  </Link>
                </li>
              ) : null}

              <li key={breadcrumb.href} className='ml-2 flex flex-row'>
                <RiArrowRightSFill
                  className='text-2xl mr-1'
                  style={{ marginTop: '-1px' }}
                />
                <Link href={breadcrumb.href}>
                  <a className='capitalize'>
                    {convertBreadcrumb(breadcrumb.breadcrumb)}
                  </a>
                </Link>
              </li>
            </React.Fragment>
          )
        })}
      </ol>
    </nav>
  )
}

export default Breadcrumbs
