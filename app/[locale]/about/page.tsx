"use client"
import React from 'react'
import {TbPick} from 'react-icons/tb'
import {BsFlag, BsFillGearFill} from 'react-icons/bs'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import Header from '../components/Header/Header'
import { FaCircleArrowDown, FaCircleArrowUp } from "react-icons/fa6";

function Index() {
    const t = useTranslations("About")
  return (
    <div className='flex min-h-screen flex-col bg-[#FBFFFE]'>
        <Header currentUser={undefined} />
        <div className='flex '>
            <div className='flex flex-col justify-center items-center  p-3 w-[50%]'>
                <div className='w-[90%] flex flex-col gap-2 border-l-2 p-3 border-[#e60000]'>
                <h3 className='text-2xl'>A new CHAPTER</h3>
                    <p className='text-xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit animi molestias adipisci quidem dolore accusantium, magnam necessitatibus tempore assumenda at.</p>
                    <Link href={"/#"} className='bg-[#e60000]  text-white p-2 text-md self-start '>More</Link>
                </div>
                 
            </div>
            <img src='/images/europe.jpg' className='w-[50%] object-cover'/>
        </div>
        <div className='flex flex-col items-center mt-[5%]'>
                <div className='flex flex-col w-[90%]'>
                    <h2 className='text-2xl text-gray-600'>Our Capabilities</h2>

                    <div className='flex mt-[5%] gap-3'>
                        <div className='flex flex-col w-[40%]'>
                            <h2 className='text-xl'>Wealth Management</h2>
                            <p>UBS offers high net worth and affluent individuals around the world a complete range of tailored advice and investment services. Our spectrum ranges from investment management to estate planning and corporate finance advice, in addition to specific wealth management products and services.</p>
                            <Link href={"/"} style={{transition:"0.5s"}} className='hover:underline hover:decoration-[#e60000] text-xl'>Overview</Link>
                        </div>
                        <div className='flex flex-col w-[40%]'>
                            <h2 className='text-xl'>Asset Management</h2>
                            <p>UBS offers investment capabilities across traditional and alternative asset classes for private clients, intermediaries and institutional investors.</p>
                            <Link href={"/"} style={{transition:"0.5s"}} className='hover:underline hover:decoration-[#e60000] text-xl'>Overview</Link>
                        </div>
                        <div className='flex flex-col w-[40%]'>
                            <h2 className='text-xl'>Investment Bank</h2>
                            <p>A global financial services firm with a focused model built around clients and their needs, with an emphasis on informed advice, tailored ideas and solutions and best-in-class execution.</p>
                            <Link href={"/"} style={{transition:"0.5s"}} className='hover:underline hover:decoration-[#e60000] text-xl'>Overview</Link>
                        </div>
                    </div>
                    <h3 className='mt-[5%] text-2xl'>Investment views and financial market data</h3>
                    <div className='flex justify-between gap-5'>
                        <div  style={{transition:"0.5s"}} className='cursor-pointer flex justify-between w-[20%] bg-gray-300 hover:bg-gray-400 p-2 rounded-md'>
                            <div className='flex flex-col'>
                                <h2 className='text-md'>Hang Seng</h2>
                                <p className='text-sm'>Hong Kong</p>
                            </div>
                            <div className='flex flex-col items-center '>
                                <h2>16340.41</h2>
                                <FaCircleArrowDown size={15} color='red'/>

                            </div>
                        </div>
                        <div  style={{transition:"0.5s"}} className='cursor-pointer flex justify-between w-[20%] bg-gray-300 hover:bg-gray-400 p-2 rounded-md'>
                            <div className='flex flex-col'>
                                <h2 className='text-sm'>DJ INDUSTRIAL Aver</h2>
                                <p className='text-sm'>New York</p>
                            </div>
                            <div className='flex flex-col items-center '>
                                <h2>37405.05</h2>
                                <FaCircleArrowUp size={15} color='green' />
                            </div>
                        </div>
                        <div  style={{transition:"0.5s"}} className='cursor-pointer flex justify-between w-[20%] bg-gray-300 hover:bg-gray-400 p-2 rounded-md'>
                            <div className='flex flex-col'>
                                <h2 className='text-md'>DAX</h2>
                                <p className='text-sm'>Frankfurt</p>
                            </div>
                            <div className='flex flex-col items-center '>
                                <h2>16681.54</h2>
                                <FaCircleArrowDown size={15} color='red'/>

                            </div>
                        </div>
                        <div  style={{transition:"0.5s"}} className='cursor-pointer flex justify-between w-[20%] bg-gray-300 hover:bg-gray-400 p-2 rounded-md'>
                            <div className='flex flex-col'>
                                <h2 className='text-md'>EUROSTOXX</h2>
                                <p className='text-sm'>Zurich</p>
                            </div>
                            <div className='flex flex-col items-center '>
                                <h2>4515.45</h2>
                                <FaCircleArrowDown size={15} color='red'/>

                            </div>
                        </div>
                        <div  style={{transition:"0.5s"}} className='cursor-pointer flex justify-between w-[20%] bg-gray-300 hover:bg-gray-400 p-2 rounded-md'>
                            <div className='flex flex-col'>
                                <h2 className='text-md'>STOXX Europe50</h2>
                                <p className='text-sm'>Zurich</p>
                            </div>
                            <div className='flex flex-col items-center '>
                                <h2>4077.077</h2>
                                <FaCircleArrowDown size={15} color='red'/>

                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col w-[90%] justify-center  mt-[5%] h-[500px] object-contain bg-center' style={{backgroundImage:"url(/images/businessman.jpg)"}}>
                    <h3 className='text-2xl ml-[5%]'>About us</h3>
                    <p className='text-xl mt-[5%] w-[40%] ml-[5%]'>
                    We want to create superior value for our clients, shareholders and employees. And we want to stand out as a winner in our industry: for our expertise, advice and execution, our contribution to society, our work environment, and our business success.
                    </p>
                    <Link href={"/"} style={{transform:"0.4s"}} className='ml-[5%] mt-[4%] hover:underline hover:decoration-[#e60000]'>More about us </Link>
                </div>
        </div>
        
    </div>
  )
}

export default Index