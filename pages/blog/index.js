import Layout from '@/components/Layout';
import Card from '@/components/blog/Card';
import Author from '@/components/blog/Author';
// import Card from '@/components/Card';


export default function RenderBlog() {

    return (
        <>
            <Layout title="Blog" description="Manny Parra UI/UX Engineer Blog">
                <Author/>
                <Card/>
                {/*<Card/>*/}
            </Layout>
        </>
    )
}

