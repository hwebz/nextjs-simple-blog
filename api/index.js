import axios from 'axios';

export const getBlogPostsAPI = async () => {
    try {
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
        return data;
    } catch (error) {
        return error;
    }
}

export const getBlogPostsByIdAPI = async id => {
    try {
        const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        return data;
    } catch (error) {
        return error;
    }
}