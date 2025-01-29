import React from 'react'
import type { AppProps } from 'next/app'
import '../app/globals.css'
import { Outfit } from "next/font/google"

const outfit = Outfit({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-outfit",
})

function MyApp({ Component, pageProps }: AppProps): React.ReactElement {
  return (
    <div className={outfit.className}>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp 