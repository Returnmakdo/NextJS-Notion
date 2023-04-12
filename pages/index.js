import Layout from '@/components/Layout'
import Hero from '@/components/home/hero'
import Head from 'next/head'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>My Blog</title>
        <meta name="description" content="myblog"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="flex min-h-screen flex-col items-center text-center text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <Hero />
        </div>
      </section>
    </Layout>
  )
}
