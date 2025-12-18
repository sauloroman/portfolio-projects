import React from 'react'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/swiper-bundle.css'
import { useUI } from '../../../hooks'

interface Props {
    noMobile?: boolean,
    slidesPerView?: number,
    items: string[]
}

export const ProjectSwiper: React.FC<Props> = ({ items, slidesPerView = 2 }) => {

    const { onWatchImage } = useUI()
    const imagesRender = items.filter( (item, i) =>  i > 0 && item )

    return (
        <Swiper
            className='swiper'
            modules={[Autoplay, Pagination]}
            autoplay
            pagination
            spaceBetween={40}
            loop
            breakpoints={{
                0: {
                    slidesPerView: 1
                },
                801: {
                    slidesPerView
                }
            }}
        >
            {imagesRender.map((item, i) => (
                <SwiperSlide onClick={() => onWatchImage(item)} key={`${item}-${i}`}>
                    <div className='swiper__slide'>
                        <img
                            src={item}
                            className='swiper__img'
                            alt='Swiper Image'
                        />
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}
