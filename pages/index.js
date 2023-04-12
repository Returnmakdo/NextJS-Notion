import Layout from '@/components/Layout'
import Head from 'next/head'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>My Blog</title>
        <meta name="description" content="myblog"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-3xl font-bold underline">홈 입니다</h1>
    </Layout>
  )
}
