import { getServerSideSitemap } from 'next-sitemap'
import { GetServerSideProps } from 'next'
import { API_HOST } from '../../env'

const UrlDomain = `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_BASE_PATH}`

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const blogAPI = await fetch(`${API_HOST}blog/getAllBlogs`)
    const blogUrlList = await blogAPI.json()
    const blogUrls =
        blogUrlList &&
        blogUrlList.result &&
        blogUrlList.result.content &&
        blogUrlList.result.content.length &&
        blogUrlList.result.content.map(val => {
        return{
            loc: `${UrlDomain}/blog/${val.uniqueUrl}`,
            lastmod: new Date(val.date).toISOString()
        }
    })

    const productAPI = await fetch(`${API_HOST}product-page/getAllCategoriesByType`)
    const productUrlList = await productAPI.json()
    const productUrls = []
        productUrlList &&
        productUrlList.length &&
        productUrlList.map(product => {
            product.categories &&
            product.categories &&
            product.categories.length &&
            product.categories.map(val => {
                productUrls.push({
                    loc: `${UrlDomain}/product/${val.categoryName}`,
                    lastmod: new Date().toISOString()
                })
            })
        })

    const pressUrlList =  blogUrlList &&
    blogUrlList.result &&
    blogUrlList.result.content &&
    blogUrlList.result.content.length &&
    blogUrlList.result.content.filter(item => item.category === 'Press')
    const pressUrls =
        pressUrlList &&
        pressUrlList.length &&
        pressUrlList.map(val => {
            return{
                loc: `${UrlDomain}/press/${val.uniqueUrl}`,
                lastmod: new Date(val.date).toISOString()
            }
        })

    const caseStudysAPI = await fetch(`${API_HOST}case-study/getAll`)
    const caseStudysUrlList = await caseStudysAPI.json()
    const caseStudysUrls =
        caseStudysUrlList &&
        caseStudysUrlList.content &&
        caseStudysUrlList.content.length &&
        caseStudysUrlList.content.map(val => {
            return{
                loc: val.fileUrl,
                lastmod: new Date(val.updatedAt).toISOString()
            }
        })


    const fields = [
        {
            loc: UrlDomain,
            lastmod: new Date().toISOString()
        },
        {
            loc: `${UrlDomain}/about-marra-forni`,
            lastmod: new Date().toISOString()
        },
        {
            loc: `${UrlDomain}/tools-and-accessories`,
            lastmod: new Date().toISOString()
        },
        {
            loc: `${UrlDomain}/gallery`,
            lastmod: new Date().toISOString()
        },
        {
            loc: `${UrlDomain}/market-segment-gallery`,
            lastmod: new Date().toISOString()
        },
        {
            loc: `${UrlDomain}/contact`,
            lastmod: new Date().toISOString()
        },
        {
            loc: `${UrlDomain}/resources`,
            lastmod: new Date().toISOString()
        },
        {
            loc: `${UrlDomain}/events`,
            lastmod: new Date().toISOString()
        },
        {
            loc: `${UrlDomain}/privacy-policy`,
            lastmod: new Date().toISOString()
        },
        {
            loc: `${UrlDomain}/terms-and-conditions`,
            lastmod: new Date().toISOString()
        },
        {
            loc: `${UrlDomain}/careers`,
            lastmod: new Date().toISOString()
        },
        {
            loc: `${UrlDomain}faqs`,
            lastmod: new Date().toISOString()
        },
        {
            loc:`${UrlDomain}/register`,
            lastmod: new Date().toISOString()
        },
        {
            loc: 'https://www.facebook.com/marraforni/',
            lastmod: new Date().toISOString()
        },
        {
            loc: 'https://twitter.com/MarraForni/',
            lastmod: new Date().toISOString()
        },
        {
            loc: 'https://www.instagram.com/marraforni/',
            lastmod: new Date().toISOString()
        },
        {
            loc: 'https://www.linkedin.com/company/marraforni/',
            lastmod: new Date().toISOString()
        },
        {
            loc: 'https://www.youtube.com/user/marraforni',
            lastmod: new Date().toISOString()
        },
        {
            loc: 'https://www.pinterest.com/marraforni/',
            lastmod: new Date().toISOString()
        },
        {
            loc: `${UrlDomain}/press`,
            lastmod: new Date().toISOString()
        },
        {
            loc: `${UrlDomain}/case-studies`,
            lastmod: new Date().toISOString()
        },
        {
            loc: `${UrlDomain}/product`,
            lastmod: new Date().toISOString()
        },
        {
            loc: `${UrlDomain}/blog`,
            lastmod: new Date().toISOString()
        },
        {
            loc: `${UrlDomain}/blog`,
            lastmod: new Date().toISOString(),
        },
        ...blogUrls,
        ...productUrls,
        ...pressUrls,
        ...caseStudysUrls

    ]
    return getServerSideSitemap(ctx, fields)
}

export default () => {}