import React from 'react'
import LoaderStyle from './loading.module.css'

const Loader = ({type, color, data}) => {
    return (
        <div>
            {data ?
                <div className={LoaderStyle.main}>
                    <div className={LoaderStyle.loading}></div>
                </div>
                : ''}
        </div>
    )
}
export default Loader
