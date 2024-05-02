import React, { useEffect } from 'react'
import Aos from 'aos'

export default function CommonTitle({ title, des, className = "text-center" }) {
    // useEffect(() => {
    //     Aos.init({ duration: '1600' });
    // }, []);
    return (
        <div className={`common-title ${className}`}>
            <h2 className='mb-0 text-uppercase' data-aos="fade-up">{title}</h2>
            {des ? (<p className='mt-3 mt-md-4 text-black' data-aos="fade-up" data-aos-duration="2000">{des}</p>) : ''}
        </div>
    )
}