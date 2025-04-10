import '../styles/globals.css';
import Script from 'next/script';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Google Analytics */}
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-EP1S6RW0QE" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-EP1S6RW0QE');
        `}
      </Script>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
