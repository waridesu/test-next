import '../styles/globals.css'
import NextNProgress from "nextjs-progressbar";

export default function MyApp({Component, pageProps}) {
    return (<>
        <NextNProgress
            color="yellow"
            startPosition={0}
            stopDelayMs={200}
            height={2}
            options={{showSpinner: false}}
        />
        <Component {...pageProps} />
    </>)
}


