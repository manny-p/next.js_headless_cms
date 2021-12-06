import Layout from '@/components/Layout'
import BlogPostCard from '@/components/blog/BlogPostCard'
import Author from '@/components/blog/Author'
import {getAllBlogs} from '/lib/api'
import {Flex} from '@chakra-ui/react'

export default function RenderBlog({blogs}) {

  return (
      <div>
        <Layout title="Blog" description="Manny Parra UI/UX Engineer Blog">
          <Author/>
          <Flex
              mt='1rem'
              mb='2rem'
              justify="flex-end"
              flexWrap="wrap"
          >
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
          </Flex>
        </Layout>
      </div>
  )
}

export async function getStaticProps() {

  const blogs = await getAllBlogs()
  return {props: {blogs}}
}

// function called during build time
// provides props to your page
// creates state page

// export async function getStaticProps() {
// return an object
//   return {
//     props: {message: 'Hello World!'}
//   }
// }

