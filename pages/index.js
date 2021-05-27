import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi, how are you doing?</p>
        <p>
          (This is a sample website built on the{' '}
          <a href="https://nextjs.org/learn">Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  )
}
