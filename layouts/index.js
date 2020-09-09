import { useRouter } from 'next/router';
import { AppContextProvider, AppContext } from '../contexts/AppContext';
import { useContext, useEffect } from 'react';

const DefaultLayoutInline = ({ children }) => {
    const router = useRouter()
    const { loading, setLoading } = useContext(AppContext);

    useEffect(() => {
        const handleStart = (url) => (url !== router.pathname) && setLoading(true);
        // handleComplete event was not firing
        const handleComplete = (url) => (url === router.pathname) && setLoading(false);

        router.events.on('routeChangeStart', handleStart)
        router.events.on('routeChangeComplete', handleComplete)
        router.events.on('routeChangeError', handleComplete)

        return () => {
            router.events.off('routeChangeStart', handleStart)
            router.events.off('routeChangeComplete', handleComplete)
            router.events.off('routeChangeError', handleComplete)
        }
    }, []);

    return (
        <div>
            <header>
                <h1>Next.js Blog</h1>
            </header>
            <main>{loading ? <p>Loading...</p> : children}</main>
        </div>
    )
};

const DefaultLayout = ({ children }) => (
    <AppContextProvider>
        <DefaultLayoutInline>
            {children}
        </DefaultLayoutInline>
    </AppContextProvider>
);

export default DefaultLayout;