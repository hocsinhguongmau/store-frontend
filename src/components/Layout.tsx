import Header from '@components/header/Header'
import Footer from '@components/footer/Footer'

type Props = {
  children: JSX.Element
}

const Layout = ({ children }: Props) => {
  return (
    <div className='main'>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
