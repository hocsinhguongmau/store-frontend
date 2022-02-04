import { postComment } from '@src/lib/queries/comment'
import { Auth, Hub } from 'aws-amplify'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import StarRatings from 'react-star-ratings'
import { toast } from 'react-toastify'

type Props = { id: string; title: string }

const Comment = ({ id, title }: Props) => {
  const [profile, setProfile] = useState<IProfile>({})
  const [commentRating, setCommentRating] = useState<number>(0)
  const [review, setReview] = useState<string>('')
  const [disableButton, setDisableButton] = useState<boolean>(true)
  const handleChangeReview = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setReview(event.target.value)
    if (event.target.value.length < 1) {
      setDisableButton(true)
    } else {
      setDisableButton(false)
    }
  }
  const handleChangeRating = (star: number) => {
    setCommentRating(star)
  }

  const handleSubmitReview = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (id && profile.email) {
      console.log(review)
      postComment(review, profile.email, commentRating, id)
    }
    setCommentRating(0)
    setReview('')
    setDisableButton(true)
    toast.success('Review successfully')
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
  return (
    <>
      <h3 className='text-xl md:text-3xl tracking-tight mb-2 md:mb-6'>
        <span className='font-bold'>Review {title}</span>
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
            onChange={handleChangeReview}
            value={review}
            placeholder='Write your review'></textarea>
          <p className='mt-4'>
            <button
              className={`button ${disableButton ? 'disabled' : ''}`}
              type='submit'
              disabled={disableButton}>
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
    </>
  )
}

export default Comment
