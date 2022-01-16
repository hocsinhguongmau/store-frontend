import Breadcrumbs from 'nextjs-breadcrumbs'
import React from 'react'

const BreadcrumbsComponent = () => {
  return (
    <Breadcrumbs
      containerClassName='breadcrumbs'
      listClassName='breadcrumbs__list'
      activeItemClassName='breadcrumbs__item--active'
      replaceCharacterList={[{ from: '.', to: ' ' }]}
    />
  )
}

export default BreadcrumbsComponent
