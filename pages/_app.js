import Navbar from '../components/Navbar/Navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
  <>
    <Navbar/> 
    <Component {...pageProps} dir="rtl"/>
  </>
  )
}

export default MyApp
