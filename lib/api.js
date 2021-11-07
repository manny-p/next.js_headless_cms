

import client from './sanity'

export async function getAllBlogs() {
    return await client.fetch(`*[_type == "blog"]`)
}