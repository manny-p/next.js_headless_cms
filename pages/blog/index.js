import Layout from '@/components/Layout';
import Card from '@/components/Card';
import AuthorIntro from '@/components/blog/AuthorIntro';


export default function RenderBlog() {

    return (
        <>
            <Layout title="Blog" description="Manny Parra UI/UX Engineer Blog">
                <AuthorIntro/>
                {/*<Card/>*/}
            </Layout>
        </>
    )
}

