import Head from "next/head"
import type { AppProps } from "next/app"
import createEmotionCache from "@/createEmotionCache"
import { CacheProvider, type EmotionCache } from "@emotion/react"
import { CssBaseline, ThemeProvider } from "@mui/material"
import { type FC } from "react"

import "../style.css"
import { theme } from "../theme"

const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

const App: FC<MyAppProps> = ({ Component, pageProps, emotionCache = clientSideEmotionCache }) => {
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  )
}

export default App
