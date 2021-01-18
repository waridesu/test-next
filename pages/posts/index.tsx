import MainLayout from "../../components/MainLayout";
import Link from "next/link";

export default function Posts({posts}) {

    return <MainLayout title={'Posts'}>
        <h2>Posts</h2>
        <ul>
            {posts.map(p=><li key={p.id}><Link href={`/posts/[id]`} as={`/posts/${p.id}`}>{p.title}</Link></li>)}
        </ul>
    </MainLayout>
}
Posts.getInitialProps = async () => {
    const res = await fetch('http://localhost:4200/posts')
    const json = await res.json()
    return {
        posts: json
    }
}