import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const trustIcons = [
  {
    id: 1,
    name: 'BBB Accredited',
    image: '/trust-icons/bbb.svg',
    alt: 'BBB Accredited Business'
  },
  {
    id: 2,
    name: 'HomeAdvisor',
    image: '/trust-icons/homeadvisor.svg',
    alt: 'HomeAdvisor Approved'
  },
  {
    id: 3,
    name: 'Angi',
    image: '/trust-icons/angi.svg',
    alt: 'Angi Super Service Award'
  },
  {
    id: 4,
    name: 'GAF',
    image: '/trust-icons/gaf.svg',
    alt: 'GAF Certified'
  },
  {
    id: 5,
    name: 'Owens Corning',
    image: '/trust-icons/owens-corning.svg',
    alt: 'Owens Corning Preferred Contractor'
  },
  {
    id: 6,
    name: 'CertainTeed',
    image: '/trust-icons/certainteed.svg',
    alt: 'CertainTeed SELECT ShingleMaster'
  }
];

export default function TrustIcons() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={2}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
              1024: {
                slidesPerView: 5,
              },
            }}
            className="py-8"
          >
            {trustIcons.map((icon) => (
              <SwiperSlide key={icon.id}>
                <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                  <img
                    src={icon.image}
                    alt={icon.alt}
                    className="h-16 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="absolute top-1/2 -left-4 transform -translate-y-1/2 swiper-button-prev !w-8 !h-8 !bg-white !rounded-full !shadow-md after:!text-primary"></div>
          <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 swiper-button-next !w-8 !h-8 !bg-white !rounded-full !shadow-md after:!text-primary"></div>
        </div>
      </div>
    </section>
  );
}