import Layout from '@/components/Layout'
// import {useRouter} from 'next/router'
import {Box} from '@chakra-ui/react'
import {getBlogBySlug} from '/lib/api'


export default function RenderBlogPost({blog}) {
    // const {query} = useRouter()


    return (
        <Layout>
            <Box pt={5} px={20} color={'white'}>
                <h1>RenderBlogPost</h1>
                <h1>Blog Page - {blog?.slug}</h1>
            </Box>
        </Layout>
    )
}

export async function getServerSideProps({params}) {
    const blog = await getBlogBySlug(params.slug)
    console.log(blog)

    return {
        props: {blog}
    }
}

