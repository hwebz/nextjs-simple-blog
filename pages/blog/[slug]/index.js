import { getBlogPostsByIdAPI } from '../../../api';
import { linkResolver } from '../../../helpers';

import DefaultLayout from '../../../layouts';

const Blog = ({ post }) => (
    <DefaultLayout>
        <article>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </article>
    </DefaultLayout>
);

Blog.getInitialProps = async ({ query }) => {
    const { slug } = query;
    const response = await getBlogPostsByIdAPI(slug);

    return {
        post: response
    };
};

export default Blog;