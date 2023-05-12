import '../styles/globals.css';
import Layout from "../components/Layout"

export default function MyApp({ Component, pageProps, title, description }) {
    return (
      <div>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
          <Layout>
          <Component title={title} description={description} {...pageProps} className="flex flex-col" />
          </Layout>

      </div>
 
    );
  } 