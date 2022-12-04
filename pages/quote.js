import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Quote() {
  return (
    <div className="container">
      <Head>
        <title>Get Quote</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Quote - please fill your data" />
        <form name="contact" method="POST" data-netlify="true">
          <p>
            <label>Your Name: <input type="text" name="name" /></label>
          </p>
          <p>
            <label>Your Email: <input type="email" name="email" /></label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </main>

      <Footer />
    </div>
  )
}
