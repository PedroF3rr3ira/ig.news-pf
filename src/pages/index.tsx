import style from '../styles/home.module.css'
import Head from 'next/head'

export default function Home() {
  return (
    <>
    <Head>
      <title>Início | ig.news</title>
    </Head>
    <h1 className={style.title}>Home</h1>
    </>
  )
}
