import Header from '@components/header/Header'
import Footer from '@components/footer/Footer'

const Layout: React.FC = ({ children }) => {
  return (
    <div className='main'>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
