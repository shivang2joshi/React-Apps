import {useRouter} from 'next/router';
import Layout from '../comps/layout';

const Post = ()=>{
    const router = useRouter();

    return (
        <Layout>
            <h2>{router.query.title}</h2>
            <p>He he he...</p>
        </Layout>
        );
};

export default Post;