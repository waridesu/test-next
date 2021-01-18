import MainLayout from "../../components/MainLayout";
import Link from "next/link";

export default function Post({post}) {
    return <MainLayout title={'Post'}>
        <h1>{post.title}</h1>
        <hr/>
        <p>{post.body}</p>
        <Link href={'/posts'}>Back to all posts</Link>
    </MainLayout>
}
Post.getInitialProps = async ({query}) => {

    const res = await fetch(`http://localhost:4200/posts/${query.id}`)
    const json = await res.json()
    return {
        post: json
    }
}