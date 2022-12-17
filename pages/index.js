import Head from 'next/head'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className='text'>Hero banner</section>
        <section className='text'>
          <p className='text'>Hero content</p>
          <button href='/quote'>ОТРИМАТИ ПРОПОЗИЦІЮ</button>
        </section>
        <section className='text'>How it works</section>
        <section className='text'>Features</section>
        <section className='text'>Why we</section>
        <section className='text'>Cross sell</section>
      </main>

      <Footer />
    </div>
  )
}
