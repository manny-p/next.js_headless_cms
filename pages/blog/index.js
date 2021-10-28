import Layout from '@/components/Layout';
import Card from '@/components/Card';

export default function RenderBlog() {

    return (
        <>
            <Layout
                title="Blog"
                description="Manny Parra UI/UX Engineer Blog"
            >
                {/*<li style={style}>Blog (WIP)</li>*/}
                <Card/>
            </Layout>
        </>
    )
}

