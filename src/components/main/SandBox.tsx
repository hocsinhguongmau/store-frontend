import React from 'react'
import { AiOutlineCopy } from 'react-icons/ai'
import { toast } from 'react-toastify'

type Props = {}

function SandBox({}: Props) {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    toast.success('Copied to clipboard')
  }
  return (
    <div className='mt-6 text-sm'>
      <div>
        <h3 className='text-xl font-bold mb-3'>Testing Paypal</h3>
        <p>
          <span className='font-bold'>Username:</span>
          <button
            className='ml-2 relative pr-5'
            onClick={() =>
              copyToClipboard('sb-rwx5f13286997@personal.example.com')
            }>
            <span className='mr-2'>sb-rwx5f13286997@personal.example.com</span>
            Click to copy
            <AiOutlineCopy className='absolute top-1 right-0' />
          </button>
        </p>
        <p className='mt-2'>
          <span className='font-bold'>Password:</span>
          <button
            className='ml-2 relative pr-5'
            onClick={() => copyToClipboard('XC&mIQ82')}>
            <span className='mr-2'>XC&amp;mIQ82</span> Click to copy
            <AiOutlineCopy className='absolute top-1 right-0' />
          </button>
        </p>
      </div>
      <div>
        <h3 className='text-xl font-bold mb-3 mt-8'>Testing with card</h3>
        <p className='mt-2'>
          <span className='font-bold'>Card number:</span>
          <button
            className='ml-2 relative pr-5'
            onClick={() => copyToClipboard('4222222222222')}>
            <span className='mr-2'>4222222222222</span> Click to copy
            <AiOutlineCopy className='absolute top-1 right-0' />
          </button>
        </p>
        <p className='mt-2'>
          <span className='font-bold'>Expires:</span> Any date in the future
        </p>
        <p className='mt-2'>
          <span className='font-bold'>CVV:</span>
          <button
            className='ml-2 relative pr-5'
            onClick={() => copyToClipboard('123')}>
            <span className='mr-2'>123</span> Click to copy
            <AiOutlineCopy className='absolute top-1 right-0' />
          </button>
        </p>
      </div>
    </div>
  )
}

export default SandBox
