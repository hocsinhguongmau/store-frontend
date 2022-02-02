import React, { ReactElement } from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

function Loading(): ReactElement {
  return (
    <div className='flex h-full flex-row justify-between'>
      <AiOutlineLoading3Quarters className='animate-spin m-auto my-10' />
    </div>
  )
}

export default Loading
