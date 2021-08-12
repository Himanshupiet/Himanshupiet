import React from 'react'
import Link from 'next/link'
import Head from '../Head'
import styles from './PageNotFound.module.css'

const PageNotFound = props => {
    return (
        <React.Fragment>
            <Head
                title={'Page not found'}
                description={
                    'Sorry, but the page you are looking for does not exist, have been removed, has its name changed or is\n' +
                    ' temporarily unavailable. Please find and contact us on Marra Foroni.'
                }
                keywords={'Page not found'}
            />
            <div className='container'>
                <div id={styles['notfound']}>
                    <div className={styles['notfound']}>
                        <div className={styles['notfound-404']} />
                        <h1>404</h1>
                        <h2>404</h2>
                        <p>
                            Sorry, but the page you are looking for does not exist, have been
                            removed, has its name changed or is temporarily unavailable.
                            Please find and contact us on Marra Foroni.
                        </p>

                        <Link href={'/'}>
                            <a>Back to Homepage</a>
                        </Link>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default PageNotFound
