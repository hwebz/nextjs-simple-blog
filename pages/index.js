import Link from 'next/link';
import { getBlogPostsAPI } from '../api';

import DefaultLayout from '../layouts';
import { linkResolver } from '../helpers';

const Index = ({ posts = [] }) => (
    <DefaultLayout>
        <h2>Recent Blog Posts</h2>

        <ul>
            {posts.map((post, index) => (
                <li key={index}>
                    <Link
                        // as={linkResolver(post)}
                        // href={`/blog/slug=${post.id}`}
                        href={`/blog/${post.id}`}
                        passHref
                    >
                        <a>{post.title}</a>
                    </Link>
                    
                </li>
            ))}
        </ul>
    </DefaultLayout>
);

Index.getInitialProps = async () => {
    const response = await getBlogPostsAPI();
    return {
        posts: response
    };
};

export default Index;