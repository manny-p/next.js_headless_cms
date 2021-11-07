import Layout from '@/components/Layout'
import BlogPostCard from '@/components/blog/BlogPostCard'
import Author from '@/components/blog/Author'
import {getAllBlogs} from '/lib/api'
import {Box} from '@chakra-ui/react'
// import Card from '@/components/Card'

export default function RenderBlog({blogs}) {

    console.log(blogs)

    return (
        <>
            <Layout title="Blog" description="Manny Parra UI/UX Engineer Blog">
                <Author/>
                <BlogPostCard/>
                <Box
                    bg="white"
                    color="black"
                >
                    {/*<p>{JSON.stringify(blogs[0].title)}</p>*/}
                    {/*<p>{JSON.stringify(blogs[0].subtitle)}</p>*/}
                    {/*<p>{JSON.stringify(blogs[0].slug.current)}</p>*/}

                    {/*<p>{blogs[0].title}</p>*/}
                    {/*<p>{blogs[0].subtitle}</p>*/}
                    {/*<p>{blogs[0].slug.current}</p>*/}

                </Box>
            </Layout>
        </>
    )
}

export async function getStaticProps() {

    const blogs = await getAllBlogs()
    return {
        props: {
            // blogs: blogs
            blogs
        }
    }
}


// function called during build time
// provides props to your page
// creates state page

// export async function getStaticProps() {
//     // return an object
//     return {
//         props: {
//             message: 'Hello World!'
//         }
//     }
// }

