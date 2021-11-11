import Layout from '@/components/Layout'
import BlogPostCard from '@/components/blog/BlogPostCard'
import Author from '@/components/blog/Author'
import {getAllBlogs} from '/lib/api'
import BlogPostContainer from '@/components/blog/BlogPostContainer'


export default function RenderBlog({blogs}) {
    // console.log(blogs)

    return (
        <>
            <Layout title="Blog" description="Manny Parra UI/UX Engineer Blog">
                <Author/>

                <BlogPostContainer>
                    {blogs.map(({slug, subtitle, title}) =>
                        <BlogPostCard
                            key={slug}
                            title={title}
                            subtitle={subtitle}
                            link={{
                                href: `/blog/[slug]`,
                                as: `/blog/${slug}`
                            }}
                        />)}
                </BlogPostContainer>

            </Layout>
        </>
    )
}

export async function getStaticProps() {

    const blogs = await getAllBlogs()
    return {
        props: {
            blogs
            // blogs: blogs
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

