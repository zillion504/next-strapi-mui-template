import { Container } from "@mui/material"
import Head from "next/head"
import React, { type FC } from "react"
import NavigationBar from "../components/NavigationBar"

const Home: FC = () => {
  return (
    <>
      <Head>
        <title>App Name | Not found</title>
        <meta name="description" content="Page not found" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <NavigationBar />
        <Container>
        </Container>

      </main>
      <footer>
      </footer>
    </>
  )
}

export default Home
