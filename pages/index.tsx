import Link from 'next/link'

const Home = () => {
  return (
    <div>
      <h1>My App</h1>
      <Link href='/profile'>
        <a>go to profile</a>
      </Link>
    </div>
  )
}

export default Home
