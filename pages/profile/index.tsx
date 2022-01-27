import React, { useEffect, useState } from 'react'
import { Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import { useForm, SubmitHandler, UseFormRegister } from 'react-hook-form'
import { Auth } from 'aws-amplify'
import { toast } from 'react-toastify'
import { ErrorMessage } from '@hookform/error-message'
import ProductItem from '@components/main/ProductItem'
import { CognitoUserAmplify } from '@aws-amplify/ui'
import useProfileStore from '@lib/store/profileStore'
const Input = ({
  value,
  register,
  handleChange,
  name,
  label,
  errors,
  errorMessage,
  type,
}: InputType) => {
  return (
    <div>
      <label htmlFor={name}>
        {label}
        <span className='text-red-500 text-lg'>*</span>
      </label>
      <br />
      <input
        className='outline-none border border-solid border-gray-400 p-2 w-full mt-2'
        id={name}
        defaultValue={value}
        type={type}
        {...register(name, {
          required: true,
          onChange: () => handleChange(),
        })}
      />
      <ErrorMessage
        errors={errors}
        name={name}
        message={errorMessage}
        render={({ message }) => <p className='mt-2 text-red-500'>{message}</p>}
      />
    </div>
  )
}

function Profile() {
  const setProfile = useProfileStore((state) => state.setProfile)
  const clearProfile = useProfileStore((state) => state.clearProfile)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IProfile>()

  async function updateUser(data: IProfile) {
    const user = await Auth.currentAuthenticatedUser()
    try {
      await Auth.updateUserAttributes(user, {
        given_name: data.given_name,
        family_name: data.family_name,
        address: data.address,
        zoneinfo: data.zoneinfo,
      })
      toast.success('Information updated')
      setButtonDisabled(true)
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log(error.message)
        toast.error(error.message)
      }
    }
  }

  const onSubmit: SubmitHandler<IProfile> = async (data: IProfile) => {
    updateUser(data)
  }

  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true)

  const handleChange = () => {
    setButtonDisabled(false)
  }

  type TabType = 'contact' | 'favorite' | 'order'

  const [tab, setTab] = useState<TabType>('contact')

  interface MyCognitoUserAmplify extends CognitoUserAmplify {
    attributes?: IProfile
  }

  type AmplifyType = {
    signOut: () => void
    user: MyCognitoUserAmplify
  }
  const services = {
    async handleSignIn(formData: any) {
      let { username, password } = formData
      try {
        const user = await Auth.signIn({
          username,
          password,
        })
        setProfile(user.username)
        return user
      } catch (error) {
        console.log(error)
      }
    },
  }

  const handleSignOut = async (signOut: any) => {
    try {
      await signOut()
      await Auth.currentCredentials()
      clearProfile()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='flex-grow py-10 flex flex-row justify-center'>
      <Authenticator variation='default' services={services}>
        {({ signOut, user }: AmplifyType) => (
          <div className='container'>
            <div>
              <div className='md:flex flex-row justify-between'>
                <h1 className='no-underline text-sm md:text-2xl break-words'>
                  {user?.attributes?.given_name
                    ? user.attributes.given_name
                    : user?.attributes?.email}
                </h1>
                <button
                  className='text-sm md:text-lg'
                  onClick={() => handleSignOut(signOut)}>
                  Sign out
                </button>
              </div>
            </div>
            <p className='flex flex-row gap-8 mt-6 border-b border-solid border-gray-400'>
              <button
                onClick={() => setTab('contact')}
                className={`text-sm py-2  border-solid border-transparent hover:border-black ${
                  tab === 'contact' ? 'border-b border-black' : ''
                }`}>
                Contact information
              </button>
              <button
                onClick={() => setTab('favorite')}
                className={`text-sm py-2  border-solid border-transparent hover:border-black ${
                  tab === 'favorite' ? 'border-b border-black' : ''
                }`}>
                Favorite items
              </button>
              <button
                onClick={() => setTab('order')}
                className={`text-sm py-2  border-solid border-transparent hover:border-black ${
                  tab === 'order' ? 'border-b border-black' : ''
                }`}>
                My order
              </button>
            </p>
            {tab === 'contact' ? (
              <div>
                <h2 className='text-xl mt-8 font-bold'>
                  Update Personal information
                </h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-sm mt-4'>
                    <Input
                      value={user?.attributes?.given_name}
                      register={register}
                      handleChange={handleChange}
                      label='First name'
                      errors={errors}
                      errorMessage='First name is required'
                      name='given_name'
                      type='text'
                    />
                    <Input
                      value={user?.attributes?.family_name}
                      register={register}
                      handleChange={handleChange}
                      label='Last name'
                      errors={errors}
                      errorMessage='Last name is required'
                      name='family_name'
                      type='text'
                    />
                    <Input
                      value={user?.attributes?.address}
                      register={register}
                      handleChange={handleChange}
                      label='Address'
                      errors={errors}
                      errorMessage='Address is required'
                      name='address'
                      type='text'
                    />
                    <Input
                      value={user?.attributes?.zoneinfo}
                      register={register}
                      handleChange={handleChange}
                      label='Postal code'
                      errors={errors}
                      errorMessage='Postal code is required'
                      name='zoneinfo'
                      type='number'
                    />
                  </div>
                  <button
                    type='submit'
                    className={`button mt-8 ${
                      buttonDisabled ? 'disabled' : ''
                    }`}
                    disabled={buttonDisabled}>
                    Update
                  </button>
                </form>
              </div>
            ) : null}
            {tab === 'favorite' ? (
              <div>
                <h2 className='text-xl mt-8 font-bold'>Favorite</h2>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mt-8'>
                  <ProductItem button={true} />
                  <ProductItem button={true} />
                  <ProductItem button={true} />
                  <ProductItem button={true} />
                  <ProductItem button={true} />
                  <ProductItem button={true} />
                  <ProductItem button={true} />
                  <ProductItem button={true} />
                </div>
              </div>
            ) : null}
            {tab === 'order' ? (
              <div>
                <h2 className='text-xl mt-8 font-bold'>My order</h2>
              </div>
            ) : null}
          </div>
        )}
      </Authenticator>
    </div>
  )
}
export default Profile
