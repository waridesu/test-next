import MainLayout from "../components/MainLayout";
import Link from "next/link";
import s from '../styles/404.module.css'

export default function ErrorPage() {
    return <MainLayout>
        <h1 className={s.header}>Error 404</h1>
        <p>Please <Link href={'/'}>go back</Link> safety</p>
    </MainLayout>
}