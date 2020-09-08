import { Hero } from '../components/Hero'
import { Details } from '../components/Details'
import { Depoiment } from '../components/Depoiment'
import { Contact } from '../components/Contact'
import { Footer } from '../components/Footer'
import Head from 'next/head'

export default function Index() {
  return (
    <>
      <Head>
        <title>Personal Trainer</title>
      </Head>
      <div>
        <div className="min-h-screen">
          <Hero />
          <Details />
          <Depoiment />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  )
}
