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
        <div className='flex flex-col w-[90%] self-center mt-[5%]'>
            <h3>This is UBS</h3>
            <div className='flex gap-5 '>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className="rounded-t-lg" src="/images/oldman.jpg" alt="" />
                </a>
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                </div>
            </div>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#" className=''>
                    <img className="rounded-t-lg h-[250px] w-full object-cover bg-top " src="/images/convo.jpg" alt="" />
                </a>
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                </div>
            </div>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className="rounded-t-lg" src="/images/oldman.jpg" alt="" />
                </a>
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                </div>
            </div>
            </div>          
        </div>
    </div>
  )
}

export default Index