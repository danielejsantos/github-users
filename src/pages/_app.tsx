import "../styles/global.css";
import type { AppProps } from "next/app";

import { GitHubProvider } from "../contexts/userData";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GitHubProvider>
      <Component {...pageProps} />
    </GitHubProvider>
  );
}
