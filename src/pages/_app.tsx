import Header from "src/components/Header"
import { AppProps } from "next/app"

import 'public/css/styles.css'
import 'public/css/navbar.css'
import 'public/css/bootstrap.min.css'
import 'public/css/Minecraft.css'
import 'public/fonts/fontawesome-all.min.css'
import 'public/css/nprogress.css'
import Footer from "src/components/Footer"

import { useState } from "react"
import NProgress from "nprogress"
import { Router } from "next/router"
import Script from "next/script"
import Head from "next/head"

export default function Ban({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false)
  NProgress.configure({ showSpinner: false })
  Router.events.on("routeChangeStart", ()=> {
    NProgress.start()
    setLoading(true)
  })

  Router.events.on("routeChangeComplete", ()=> {
    NProgress.done()
    setLoading(false)
  })

  return (
    <>
      <Head>
        <link rel="icon" type="image/png" sizes="32x32" href="img/favicon-32x32.png" />
      </Head>
      <div className="main">
        <Header />
        <div id="particles" style={{ position: 'absolute', width: '100%', height: '80%'}} />
        <Component {...pageProps} />
      </div>
      <Footer />
      <Script strategy="beforeInteractive" src="/js/particles.min.js" />
      <Script id="particles-loader" dangerouslySetInnerHTML={{__html: "particlesJS.load('particles', '/particles/config.json', function() {console.log('callback - particles.js config loaded')})"}}/>
    </>
  )
}