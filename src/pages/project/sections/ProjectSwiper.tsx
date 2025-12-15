import React from 'react'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/swiper-bundle.css'

interface Props {
    from?: number,
    slidesPerView?: number,
    items: string[]
}

export const ProjectSwiper: React.FC<Props> = ({ items, slidesPerView = 2, from = 1 }) => {
  return (
    <Swiper
        className='swiper'
        modules={[ Autoplay, Pagination ]}
        autoplay
        pagination
        spaceBetween={50}
        loop
        slidesPerView={slidesPerView}
    >
        { items.map( (item, i) => (
            <SwiperSlide key={`${item}-${i}`}>
                { i >= from && 
                    <div className='swiper__slide'>
                        <img
                            src={item} 
                            className='swiper__img' 
                            alt='Swiper Image' 
                        />
                    </div>
                }   
            </SwiperSlide>
        ))}
    </Swiper>
  )
}
