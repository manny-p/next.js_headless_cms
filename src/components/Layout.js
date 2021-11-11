import Head from 'next/head'
import {useRouter} from 'next/router'
import styles from '@/styles/Layout.module.scss'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'


const Layout = ({title, description, keywords, children}) => {

    const {pathname} = useRouter()

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

                {pathname === '/' && <Hero/>}

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

export default Layout
