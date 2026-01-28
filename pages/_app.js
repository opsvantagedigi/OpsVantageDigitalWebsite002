import '../branding/colors.css'
import '../branding/typography.css'
import '../branding/layout.css'
import '../branding/components.css'
import '../branding/header.css'
import '../branding/footer.css'
import '../assets/css/style.css'
import { Toaster } from 'react-hot-toast'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Toaster position="top-right" />
    </>
  )
}

export default MyApp
