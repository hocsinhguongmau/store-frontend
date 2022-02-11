import { productPageContent } from '@src/lib/locale/product'
import useLanguageStore from '@src/lib/store/languageStore'
import React from 'react'
import { AiOutlineCopy } from 'react-icons/ai'
import { toast } from 'react-toastify'

type Props = {}

function SandBox({}: Props) {
  const language = useLanguageStore((state) => state.language)
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    toast.success(productPageContent[language].copied)
  }
  return (
    <div className='mt-6 text-sm'>
      <div>
        <h3 className='text-xl font-bold mb-3'>
          {productPageContent[language].testPaypal}
        </h3>
        <p>
          <span className='font-bold'>
            {productPageContent[language].userName}:
          </span>
          <button
            className='ml-2 relative pr-5'
            onClick={() =>
              copyToClipboard('sb-rwx5f13286997@personal.example.com')
            }>
            <span className='mr-2'>sb-rwx5f13286997@personal.example.com</span>
            {productPageContent[language].clickToCopy}
            <AiOutlineCopy className='absolute top-1 right-0' />
          </button>
        </p>
        <p className='mt-2'>
          <span className='font-bold'>
            {productPageContent[language].password}:
          </span>
          <button
            className='ml-2 relative pr-5'
            onClick={() => copyToClipboard('XC&mIQ82')}>
            <span className='mr-2'>XC&amp;mIQ82</span>{' '}
            {productPageContent[language].clickToCopy}
            <AiOutlineCopy className='absolute top-1 right-0' />
          </button>
        </p>
      </div>
      <div>
        <h3 className='text-xl font-bold mb-3 mt-8'>
          {productPageContent[language].testCard}
        </h3>
        <p className='mt-2'>
          <span className='font-bold'>
            {productPageContent[language].cardNumber}:
          </span>
          <button
            className='ml-2 relative pr-5'
            onClick={() => copyToClipboard('4222222222222')}>
            <span className='mr-2'>4222222222222</span>{' '}
            {productPageContent[language].clickToCopy}
            <AiOutlineCopy className='absolute top-1 right-0' />
          </button>
        </p>
        <p className='mt-2'>
          <span className='font-bold'>
            {productPageContent[language].expire}:
          </span>{' '}
          {productPageContent[language].anyDate}
        </p>
        <p className='mt-2'>
          <span className='font-bold'>CVV:</span>
          <button
            className='ml-2 relative pr-5'
            onClick={() => copyToClipboard('123')}>
            <span className='mr-2'>123</span>{' '}
            {productPageContent[language].clickToCopy}
            <AiOutlineCopy className='absolute top-1 right-0' />
          </button>
        </p>
      </div>
    </div>
  )
}

export default SandBox
