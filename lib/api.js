import client from './sanity'

const blogFields = `
  title,
  subtitle,
  'slug': slug.current
`

export async function getAllBlogs() {
  return await client.fetch(`*[_type == "blog"]{${blogFields}}`)
}

export async function getBlogBySlug(slug) {
  const result = await client
      .fetch(`*[_type == "blog" && slug.current == $slug] {
      ${blogFields}
    }`, {slug})
      .then(res => res?.[0])

  return result

}