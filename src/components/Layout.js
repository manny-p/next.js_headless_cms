import Head from 'next/head'
import {useRouter} from 'next/router'
import styles from '@/styles/Layout.module.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Showcase from '@/components/Showcase';

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

                {router.pathname === '/' && <Showcase/>}

                <div className={styles.contentWrapper}>
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

{/*<div className={styles.container}>*/
}
{/*<Grid*/
}
{/*    h="100vh"*/
}
{/*    templateRows="repeat(1, 1fr)"*/
}
{/*    templateColumns="repeat(5, 1fr)"*/
}

{/*>*/
}
{/*<GridItem colSpan={1} bg="black">*/
}

{/*</GridItem>*/
}
{/*<GridItem rowSpan={2}>*/
}
{/*<Navbar/>*/
}
{/*</GridItem>*/
}

{/*<GridItem colSpan={5} bg="black">*/
}
{/*    <div className={`page-wrapper ${className}`}>*/
}
{/*        {children}*/
}
{/*    </div>*/
}
{/*</GridItem>*/
}
{/*<Footer/>*/
}

{/*</Grid>*/
}

{/*</div>*/
}