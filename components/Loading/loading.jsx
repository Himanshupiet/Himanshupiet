import React from 'react';
import LoaderStyle from './loading.module.css'

const LoaderPage = (props) => {
    return (
        <>
            {props.loading ?
                <div className={`${LoaderStyle.main_laoder} text-center`}>
                    <div className="spinner-border text-primary" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
                : ''}
        </>
    );
}
export default LoaderPage
