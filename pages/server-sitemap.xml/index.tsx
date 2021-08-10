import { getServerSideSitemap } from 'next-sitemap'
import { GetServerSideProps } from 'next'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    // Method to source urls from cms
    // const urls = await fetch('https//example.com/api')

    const fields = [
        {
            loc: 'http://localhost:3005/', // Absolute url
            lastmod: new Date().toISOString(),
            // changefreq
            // priority
        },
        {
            loc: 'https://jdev.decipherzone.com/marraforni', // Absolute url
            lastmod: new Date().toISOString(),
            // changefreq
            // priority
        },
    ]

    return getServerSideSitemap(ctx, fields)
}

// Default export to prevent next.js errors
export default () => {}