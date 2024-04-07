import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';
import Layout from '../../components/layout';

export default function FristPost() {
    return (
        <Layout>
            <Head>
                <title>First Post</title>
                
            </Head>
            {/* Add third-party script */}
            {/* <Script src="https://connect.facebook.net/en_US/sdk.js" 
                strategy="lazyOnload"
                onLoad={() =>
                    console.log(`script loaded correctly, window.FB has been populated.`)
                }
                /> */}
            <h1>First Post</h1>
            <h2>
                <Link href="/"> ← Previous</Link>
                <Link href="/posts/second-post">Next →</Link>
            </h2>
        </Layout>
    );
}