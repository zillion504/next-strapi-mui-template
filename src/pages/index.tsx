import Head from "next/head"
import React, { type FC } from "react"
import NavigationBar from "../components/NavigationBar"

const Home: FC = () => {
  return (
    <>
      <Head>
        <title>App</title>
        <meta name="description" content="App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <NavigationBar />
      </main>
      <footer>
      </footer>
    </>
  )
}

export default Home
