export const linkResolver = doc => {
    if (doc && doc.id) {
        return `/blog/${doc.id}`
    }
    return '/';
}