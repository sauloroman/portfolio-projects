import React from 'react'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'

interface Props {
    images: string[]
}

export const HeroSlice: React.FC<Props> = ({ images }) => {
    return (
        <Swiper
            className='swiper-portfolio'
            modules={[Autoplay]}
            autoplay
            spaceBetween={10}
            loop
            slidesPerView={1}
        >
            {
                images.map((image, i) => (
                    <SwiperSlide key={`${image}-${i}`}>
                        <img
                            className='swiper-portfolio__img'
                            src={image}
                            alt="Porfolio Image Saulo Román Santillán Nava"
                        />
                    </SwiperSlide>
                ))
            }
        </Swiper>
    )
}
