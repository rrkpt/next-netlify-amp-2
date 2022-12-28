import '@styles/globals.css'
import Analytics from 'analytics'
import googleTagManager from '@analytics/google-tag-manager'

const analytics = Analytics({
  app: 'ke-app',
  plugins: [
    googleTagManager({
      containerId: 'G-0Y62RSDECD'
    })
  ]
})
analytics.page()

function Application({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default Application
