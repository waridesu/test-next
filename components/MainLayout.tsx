import Link from "next/link";
import Head from "next/head";

export default function MainLayout({children, title="Home"}) {
    return <>
        <Head>
            <title>NEXT | {title} </title>
        </Head>
        <nav>
            <Link href={'/'}>Home</Link>
            <Link href={'/about'}>About</Link>
            <Link href={'/posts'}>Posts</Link>
        </nav>
        <main>{children}</main>
    </>
}