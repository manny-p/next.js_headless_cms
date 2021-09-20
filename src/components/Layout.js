import Head from 'next/head'
import styles from '@/styles/Layout.module.css'

import {Flex, Grid, GridItem} from '@chakra-ui/react'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Layout({title, description, keywords, children}) {

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description}/>
                <meta name="keywords" content={keywords}/>
                <link rel="icon" href={'/favicon.ico'}/>
            </Head>
            <body className={styles.container}>
            <Navbar/>
            <main className={styles.main}>
                {children}
            </main>
            <Footer/>
            </body>
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