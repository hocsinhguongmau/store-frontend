import { useState, useEffect } from 'react'
import { Auth } from 'aws-amplify'

import { Authenticator } from '@aws-amplify/ui-react'

function Profile() {
  return (
    <Authenticator socialProviders={['facebook', 'google']}>
      {({ signOut, user }) => (
        <main>
          {console.log(user)}
          <h1>Hello {user.username}</h1>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  )
}

export default Profile
