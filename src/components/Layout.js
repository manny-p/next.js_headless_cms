import Head from 'next/head'
import {useRouter} from 'next/router'
import styles from '@/styles/Layout.module.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero';

export default function Layout({title, description, keywords, children}) {

    const router = useRouter()

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description}/>
                <meta name="keywords" content={keywords}/>
                <link rel="icon" href={'/favicon.ico'}/>
            </Head>
            <div className={styles.layoutWrapper}>
                <Header/>
                {router.pathname === '/' && <Hero/>}
                <div>
                    {children}
                </div>
                <Footer/>
            </div>
        </>
    )
}

Layout.defaultProps = {
    title: 'Manny Parra',
    description: 'Manny Parra | UI/UX Engineer',
    keywords: 'Software Engineer, UX Engineer, UI Engineer, Manny Parra, Green Beret, Special Forces'
}
