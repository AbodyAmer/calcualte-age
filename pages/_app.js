import '../styles/globals.css'
import Script from 'next/script'

function MyApp ({ Component, pageProps }) {
  return (
    <div className='text-black h-screen'>
      {/* <Script
        src='https://unpkg.com/flowbite@1.4.7/dist/datepicker.js'
        onError={(e) => {
      console.error('Script failed to load', e)
    }}
      /> */}
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
