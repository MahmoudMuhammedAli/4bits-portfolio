import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
  <>
    <Component {...pageProps} dir="rtl"/>
  </>
  )
}

export default MyApp
