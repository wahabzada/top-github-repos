import "../styles/globals.css"
import type { AppProps } from "next/app"
import { ReposContextProvider } from "state/repos/ReposContext"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ReposContextProvider>
      <Component {...pageProps} />
    </ReposContextProvider>
  )
}
