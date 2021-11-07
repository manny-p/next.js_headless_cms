require('dotenv').config()
import sanityClient from '@sanity/client'

const options = {
    projectId: process.env.SANITY_STUDIO_PROJECT_ID,
    dataset: process.env.SANITY_STUDIO_DATASET_NAME,
    useCdn: true,
    apiVersion: '2021-06-07',
}

console.log(options)

export default sanityClient(options);

