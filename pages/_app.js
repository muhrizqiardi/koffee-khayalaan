// Global CSS
import '../styles/style.scss'

import Head from 'next/head'
import AuthProvider from '../context/AuthContext'

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <>
        <Head>
          {/* Fonts */}
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&family=Playfair+Display:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
          <link rel="stylesheet" href="/css/style.css" />

          {/* Bootstrap Icon */}
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" />

          {/* Page Title */}
          <title>Koffee Khayalaan</title>
        </Head>

        <Component {...pageProps} />
      </>
    </AuthProvider>
  )
}

export default MyApp
