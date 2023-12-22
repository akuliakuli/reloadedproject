"use client"
import React from 'react'
import { useTranslations } from 'next-intl'
import Header from '../../components/Header/Header'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import './styles.css';
import Link from 'next/link';

function Index() {
    const t = useTranslations("About")
  return (
    <div className='flex min-h-screen flex-col bg-[#FBFFFE]'>
        <Header currentUser={undefined} />
        <div className=' self-stretch'>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide className='bg-contain bg-center flex flex-col justify-center' style={{backgroundImage:"url(/images/mountains.jpg)"}}>
                <div className='flex flex-col gap-2 bg-white rounded-md h-[250px] w-[35%] justify-center items-start p-3'>
                    <h3 className='text-2xl border-b-2	border-[#e60000]'>Secure and Modern </h3>
                    <p>UBS and credit Issue</p>
                    <a href="https://www.forbes.com/companies/ubs/" className='bg-[#e60000] p-2 text-white rounded-md'>Learn more</a>
                </div>
        </SwiperSlide>
        <SwiperSlide className='bg-contain bg-center' style={{backgroundImage:"url(/images/lecture.jpg)"}}>
        <div className='flex flex-col gap-2 bg-white rounded-md h-[250px] w-[35%] justify-center items-start p-3'>
                    <h3 className='text-2xl border-b-2	border-[#e60000]'>Secure and Modern </h3>
                    <p>UBS and credit Issue</p>
                    <a href="https://www.forbes.com/companies/ubs/" className='bg-[#e60000] p-2 text-white rounded-md'>Learn more</a>
                </div>
        </SwiperSlide>
        <SwiperSlide className='bg-contain bg-center' style={{backgroundImage:"url(/images/ubsbuild.jpg)"}}>
        <div className='flex flex-col gap-2 bg-white rounded-md h-[250px] w-[35%] justify-center items-start p-3'>
                    <h3 className='text-2xl border-b-2	border-[#e60000]'>Secure and Modern </h3>
                    <p>UBS and credit Issue</p>
                    <a href="https://www.forbes.com/companies/ubs/" className='bg-[#e60000] p-2 text-white rounded-md'>Learn more</a>
                </div>
        </SwiperSlide>
      </Swiper>
    </div>
        <div className='flex w-[90%] self-center'>
            <h3>This is UBS</h3>
        </div>
    </div>
  )
}

export default Index