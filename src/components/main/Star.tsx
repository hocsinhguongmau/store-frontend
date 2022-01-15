import React, { ReactElement } from 'react'

type StarProps = {
  rating: number
}

const Star = ({ rating }: StarProps) => (
  <span className='star inline-block bg-repeat-x bg-left align-top mt-0.5 text-left leading-3'>
    <span
      className='rating inline-block bg-repeat-x bg-left'
      style={{ width: rating * 12 + 'px' }}></span>
  </span>
)

export default Star
