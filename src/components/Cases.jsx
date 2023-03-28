/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'


const Cases = () => {
  return (
    <div className='max-w-[1240px] m-auto p-4'>
        <div>
            <h2 className='flex text-[40px] font-bold py-4'>Case Studies / Interfaces</h2>
            <p className=' text-[20px] font-medium text-[#5F5F5F]'>
                Discover my product design projects that aim to enhance user experience through potential feature identification. <br />
                Check out my <span className='text-[#FF477E] font-medium underline'><Link href='https://dribbble.com/uxbypalash'>Dribbble</Link></span> and <span className='text-[#F99D23] font-medium underline'><Link href='https://www.instagram.com/uxbypalash'>Instagram</Link></span> for my hobby explorations of color palettes and UI trends.
            </p>
        </div>

        <div className='mt-4'>
            <div className='flex flex-nowrap gap-6'>
                <div className='flex-col'p-4>
                    <div className='py-1'>
                        <Link href='/'><img src="./assets/Debicover.svg" alt="" /></Link>
                    </div>
                    
                    <h5 className='text-[24px] font-bold py-[12px]'>Debi - A Safe transaction Application</h5>
                    <p className='text-[20px] font-medium text-[#5F5F5F]'>
                        Debi is the faster, safer way to send and receive money or make <br />
                        an online payment. Get started or create a merchant account to <br />
                        accept payments.
                    </p>
                </div>

                <div className='flex-col'p-4>
                    <div className='py-1'>
                        <Link href='/'><img src="./assets/Upnetcover.svg" alt="" /></Link>
                    </div>
                    
                    <h5 className='text-[24px] font-bold py-[12px]'>Upnet - UI Design Challenge</h5>
                </div>

            </div>
            
            <div className='flex flex-nowrap gap-6 mt-4'>
                <div className='flex-col'p-4>
                    <div className='py-1'>
                        <Link href='/'><img src="./assets/Docsaabcover.svg" alt="" /></Link>
                    </div>
                    
                    <h5 className='text-[24px] font-bold py-[12px]'>Upnet - UI Design Challenge</h5>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cases