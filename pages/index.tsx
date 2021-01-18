import styles from '../styles/404.module.css'
import MainLayout from "../components/MainLayout";
import Router from "next/router";

export default function Home() {
  return <MainLayout>
    <h1>Home Page</h1>
    <button onClick={()=>Router.push('/')}>Go back to home</button>
    <button onClick={()=>Router.push('/about')}>Go to about</button>
  </MainLayout>

}
