import { withAuthenticator, Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import { useForm, SubmitHandler } from 'react-hook-form'

type Inputs = {
  firstName: string
  lastName: string
  street: string
  city: string
  region: string
  postCode: string
  telephone: string
}

function Profile() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  return (
    <Authenticator>
      {({ signOut, user }: any) => (
        <main>
          <h1>Hello {user.attributes.email}</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <p>
              <label htmlFor='firstName'>First name</label>
              <input {...register('firstName', { required: true })} />
            </p>
            <p>
              <label htmlFor='lastName'>Last name</label>
              <input {...register('lastName', { required: true })} />
            </p>
            <p>
              <label htmlFor='street'>Street</label>
              <input {...register('street', { required: true })} />
            </p>
            <p>
              <label htmlFor='city'>City</label>
              <input {...register('city', { required: true })} />
            </p>
            <p>
              <label htmlFor='region'>Region</label>
              <input {...register('region', { required: true })} />
            </p>
            <p>
              <label htmlFor='postCode'>Postal code</label>
              <input {...register('postCode', { required: true })} />
            </p>
            <p>
              <label htmlFor='telephone'>Phone</label>
              <input {...register('telephone', { required: true })} />
            </p>
            <button type='submit'>Submit</button>
          </form>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  )
}
export default withAuthenticator(Profile)
