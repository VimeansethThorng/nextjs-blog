import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';
import Layout from '../../components/layout';

export default function SecondPost() {
    return (
        <Layout>
            <Head>
                <title>Second Post</title>
                
            </Head>
            
            <h1>Second Post</h1>
            <h2>
                <Link href="/posts/first-post"> ← Previous</Link>
            </h2>
        </Layout>
    );
}