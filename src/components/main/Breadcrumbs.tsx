import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { AiOutlineHome } from 'react-icons/ai'
import { RiArrowRightSFill } from 'react-icons/ri'
import { headerContent } from '@src/lib/locale/header'
import useLanguageStore from '@src/lib/store/languageStore'

const convertBreadcrumb = (string: string) => {
  return string.replace(/-/g, ' ')
}
type PathArray = {
  breadcrumb: string
  href: string
}
const Breadcrumbs = () => {
  const language = useLanguageStore((state) => state.language)
  const router = useRouter()
  const [breadcrumbs, setBreadcrumbs] = useState<PathArray[]>([])

  useEffect(() => {
    if (router) {
      const removeQuery = router.asPath.split('?')
      let linkPath = removeQuery.shift()?.split('/')

      linkPath?.shift()

      const pathArray: PathArray[] | undefined = linkPath?.map((path, i) => {
        return {
          breadcrumb: path,
          href: '/' + linkPath?.slice(0, i + 1).join('/'),
        }
      })
      if (pathArray) setBreadcrumbs(pathArray)
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
              {headerContent[language].home}
            </a>
          </Link>
        </li>
        {router.query.brand_slug && !router.query.product_slug ? (
          <li className='ml-2 flex flex-row'>
            <RiArrowRightSFill
              className='text-2xl mr-1'
              style={{ marginTop: '-1px' }}
            />
            <Link href='/brand'>
              <a className='capitalize'>{headerContent[language].brand}</a>
            </Link>
          </li>
        ) : null}
        {breadcrumbs.map((breadcrumb, i) => {
          let text = convertBreadcrumb(breadcrumb.breadcrumb).toLowerCase()

          if (
            text === 'home' ||
            text === 'shop' ||
            text === 'brand' ||
            text === 'about' ||
            text === 'service'
          ) {
            text = headerContent[language][text]
          } else if (text === 'page' || parseInt(text) > 0) {
            return null
          }
          return (
            <React.Fragment key={breadcrumb.href}>
              <li key={breadcrumb.href} className='ml-2 flex flex-row'>
                <RiArrowRightSFill
                  className='text-2xl mr-1'
                  style={{ marginTop: '-1px' }}
                />
                {breadcrumb.breadcrumb === 'shop' ? (
                  <Link href={`${breadcrumb.href}/page/1`}>
                    <a className='capitalize'>{text}</a>
                  </Link>
                ) : (
                  <Link href={breadcrumb.href}>
                    <a className='capitalize'>{text}</a>
                  </Link>
                )}
              </li>
            </React.Fragment>
          )
        })}
      </ol>
    </nav>
  )
}

export default Breadcrumbs
