import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SliderStyle from './slider.module.css'

const SliderPage = () => {
    var settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false
    };
    return (
            <section className={SliderStyle.main_section}>
                <div className={SliderStyle.inner_section}>
                    <Slider {...settings}>
                        <div className={SliderStyle.main_content}>
                            <img
                                src='https://marraforni.com/wp/wp-content/uploads/2017/10/speech-bubble-4-xxl.png'/>
                            <h2 className='text-white'>Anthony Cerimele</h2>
                            <p>
                                Phasellus vitae suscipit justo. Mauris pharetra feugiat ante id lacinia.
                                Etiam faucibus mauris id tempor egestas. Duis luctus turpis at accumsan
                                tincidunt. Phasellus risus risus, volutpat vel tellus ac, tincidunt
                                fringilla massa. Etiam hendrerit dolor eget rutrum
                            </p>
                            <h4 className='text-white'>Leo Varchetta</h4>
                        </div>
                        <div className={SliderStyle.inner_section}>
                            <img
                                src='https://marraforni.com/wp/wp-content/uploads/2017/10/speech-bubble-4-xxl.png'/>
                            <h2 className='text-white'>Pizza Antica</h2>
                            <p>
                                Phasellus vitae suscipit justo. Mauris pharetra feugiat ante id lacinia.
                                Etiam faucibus mauris id tempor egestas. Duis luctus turpis at accumsan
                                tincidunt. Phasellus risus risus, volutpat vel tellus ac, tincidunt
                                fringilla massa. Etiam hendrerit dolor eget rutrum
                            </p>
                            <h4 className='text-white'>Leo Varchetta</h4>
                        </div>
                        <div className={SliderStyle.inner_section}>
                            <img
                                src='https://marraforni.com/wp/wp-content/uploads/2017/10/speech-bubble-4-xxl.png'/>
                            <h2 className='text-white'>Kyle Schutte</h2>
                            <p>
                                Phasellus vitae suscipit justo. Mauris pharetra feugiat ante id lacinia.
                                Etiam faucibus mauris id tempor egestas. Duis luctus turpis at accumsan
                                tincidunt. Phasellus risus risus, volutpat vel tellus ac, tincidunt
                                fringilla massa. Etiam hendrerit dolor eget rutrum
                            </p>
                            <h5 className='text-white'>Leo Varchetta</h5>
                        </div>
                    </Slider>
                </div>
            </section>
    )
}
export default SliderPage