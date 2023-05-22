import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import Buttons from '../../components/Buttons'
import DeskTopNavbar from '../../components/navbar/DeskTopNavbar'
import Steppers from './Steppers'

function InsuranceQuote({ setWidth }) {

    const insuranceList = [
        {
            id: 1,
            imgsrc: '/insurance3.svg',
            price: '₹91 500',
            // textOne: 'Lorem Ipsum dolor amet,Consetrtur',
            // textTwo: 'Lorem Ipsum dolor amet,Consetrtur',
        },
        {
            id: 2,
            imgsrc: '/insurance4.svg',
            price: '₹92 100',
            // textOne: 'Lorem Ipsum dolor amet,Consetrtur',
            // textTwo: 'Lorem Ipsum dolor amet,Consetrtur',
        },
        {
            id: 3,
            imgsrc: '/insurance5.svg',
            price: '₹92 830',
            // textOne: 'Lorem Ipsum dolor amet,Consetrtur',
            // textTwo: 'Lorem Ipsum dolor amet,Consetrtur',
        }
    ];

    const widthSet = `${setWidth + 'px'}`;

    const handleClick = () => {
        const activeAccessories = true;
        localStorage.setItem("Insurance", activeAccessories)
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <main className='w-full h-full text-white'>
                {/* navbar */}
                <DeskTopNavbar />

                <div className='w-full h-full max-w-[1260px] 1x1:px-0 px-[15px] mx-auto'>
                    {/* Steps */}
                    <div className='flex items-center justify-center mt-[12px]'>
                        <Steppers Steps={2} />
                    </div>

                    <div className='w-full h-full mt-[40px]'>
                        {/* cars details */}
                        <div className='md:block hidden'>
                            <div className='w-full h-[171px] bg-[#333333] rounded-[10px] p-[4px_27px] flex items-center gap-[40px]'>
                                {/* left sides images */}
                                <div className=''>
                                    <img src='/image 14.png' className='h-[160px] object-contain' alt='product-images' />
                                </div>

                                {/* right sides contents */}
                                <div className='w-full h-full py-[16px]'>
                                    <div className='w-full divide-y-[1px] divide-[#8E8585]'>
                                        {/* titles */}
                                        <div className='pb-[20px]'>
                                            <h4 className='lg:text-[20px] text-[18px] font-[700]'>Scorpio-N • Z8 L D AT • Deep Forest</h4>
                                        </div>

                                        {/* contents */}
                                        <div className='grid grid-cols-3 pt-[20px]'>
                                            <div className='flex items-start flex-col'>
                                                <div className='w-full flex items-center gap-[40px]'>
                                                    <span className='lg:text-[16px] text-[14px]'>RTO City</span>
                                                    <span className='cursor-pointer lg:h-[20px] h-[18px] lg:w-[20px] w-[18px]'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 22 22" fill="none">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M18.8057 3.7968L10.5928 12.1506L10.3993 13.9928L12.1412 13.5236L20.0192 5.51042C20.0319 5.49747 20.0452 5.4851 20.0591 5.47336C20.209 5.34625 20.3509 5.08645 20.3902 4.75654C20.4288 4.43248 20.3575 4.13047 20.2003 3.92488C20.0566 3.7369 19.8138 3.61925 19.5189 3.60237C19.2282 3.58573 18.9637 3.67259 18.8057 3.7968ZM19.5875 2.40433C20.1483 2.43643 20.7515 2.67014 21.1536 3.19598C21.5422 3.70421 21.6484 4.33966 21.5818 4.89853C21.517 5.44184 21.2784 6.00018 20.8577 6.36914L12.8826 14.4812C12.8077 14.5573 12.7139 14.6121 12.6108 14.6399L9.86732 15.3789C9.67638 15.4304 9.47236 15.3844 9.32191 15.2561C9.17145 15.1278 9.09388 14.9335 9.11454 14.7369L9.42131 11.8168C9.4355 11.6818 9.49502 11.5556 9.59017 11.4588L17.9724 2.93277C17.9851 2.91982 17.9984 2.90746 18.0123 2.89572C18.4416 2.53179 19.0336 2.37263 19.5875 2.40433ZM2.40039 3.94825C2.40039 3.61688 2.66902 3.34825 3.00039 3.34825H11.8137C12.145 3.34825 12.4137 3.61688 12.4137 3.94825C12.4137 4.27963 12.145 4.54825 11.8137 4.54825H3.60039V20.4004H19.1648V12.0823C19.1648 11.7509 19.4334 11.4823 19.7648 11.4823C20.0961 11.4823 20.3648 11.7509 20.3648 12.0823V21.0004C20.3648 21.3317 20.0961 21.6004 19.7648 21.6004H3.00039C2.66902 21.6004 2.40039 21.3317 2.40039 21.0004V3.94825Z" fill={`white`} />
                                                        </svg>
                                                    </span>
                                                </div>
                                                <span className='font-[700] lg:text-[16px] text-[14px]'>
                                                    Mumbai MH-01
                                                </span>
                                            </div>

                                            <div className='flex items-start flex-col'>
                                                <div className='w-full flex items-center justify-between'>
                                                    <span className='lg:text-[16px] text-[14px]'>Insurance IDV</span>
                                                </div>
                                                <span className='font-[700] lg:text-[16px] text-[14px]'>
                                                    ₹21 10 000
                                                </span>
                                            </div>

                                            <div className='flex items-start flex-col'>
                                                <div className='w-full flex items-center justify-between'>
                                                    <span className='lg:text-[16px] text-[14px]'>On-Road Price</span>
                                                </div>
                                                <span className='font-[700] lg:text-[16px] text-[14px]'>
                                                    ₹26 24 294
                                                </span>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* mobiles devices */}
                        <div className='md:hidden block'>
                            <div className='w-full h-full bg-[#333333] rounded-[10px] p-[16px] flex flex-col gap-[20px]'>
                                {/* titles */}
                                <div className=''>
                                    <h4 className='lg:text-[20px] text-[18px] font-[700]'>Scorpio-N • Z8 L D AT • Deep Forest</h4>
                                </div>

                                {/* bottoms */}
                                <div className='w-full divide-y-[1px] divide-[#8E8585]'>
                                    {/* images */}
                                    <div className='flex items-center justify-center'>
                                        <img src='/image 14.png' className='h-[160px] object-contain' alt='product-images' />
                                    </div>

                                    <div className='w-full pt-[12px]'>
                                        {/* rto citys */}
                                        <div className='flex items-center justify-between'>
                                            {/* rto title */}
                                            <div className='flex flex-col'>
                                                <span className='sm:text-[14px] text-[12px]'>RTO City</span>
                                                <span className='font-[700] sm:text-[14px] text-[12px]'>
                                                    Mumbai MH-01
                                                </span>
                                            </div>

                                            {/* svg */}
                                            <span>
                                                <span className='cursor-pointer lg:h-[20px] h-[18px] lg:w-[20px] w-[18px]'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 22 22" fill="none">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M18.8057 3.7968L10.5928 12.1506L10.3993 13.9928L12.1412 13.5236L20.0192 5.51042C20.0319 5.49747 20.0452 5.4851 20.0591 5.47336C20.209 5.34625 20.3509 5.08645 20.3902 4.75654C20.4288 4.43248 20.3575 4.13047 20.2003 3.92488C20.0566 3.7369 19.8138 3.61925 19.5189 3.60237C19.2282 3.58573 18.9637 3.67259 18.8057 3.7968ZM19.5875 2.40433C20.1483 2.43643 20.7515 2.67014 21.1536 3.19598C21.5422 3.70421 21.6484 4.33966 21.5818 4.89853C21.517 5.44184 21.2784 6.00018 20.8577 6.36914L12.8826 14.4812C12.8077 14.5573 12.7139 14.6121 12.6108 14.6399L9.86732 15.3789C9.67638 15.4304 9.47236 15.3844 9.32191 15.2561C9.17145 15.1278 9.09388 14.9335 9.11454 14.7369L9.42131 11.8168C9.4355 11.6818 9.49502 11.5556 9.59017 11.4588L17.9724 2.93277C17.9851 2.91982 17.9984 2.90746 18.0123 2.89572C18.4416 2.53179 19.0336 2.37263 19.5875 2.40433ZM2.40039 3.94825C2.40039 3.61688 2.66902 3.34825 3.00039 3.34825H11.8137C12.145 3.34825 12.4137 3.61688 12.4137 3.94825C12.4137 4.27963 12.145 4.54825 11.8137 4.54825H3.60039V20.4004H19.1648V12.0823C19.1648 11.7509 19.4334 11.4823 19.7648 11.4823C20.0961 11.4823 20.3648 11.7509 20.3648 12.0823V21.0004C20.3648 21.3317 20.0961 21.6004 19.7648 21.6004H3.00039C2.66902 21.6004 2.40039 21.3317 2.40039 21.0004V3.94825Z" fill={`white`} />
                                                    </svg>
                                                </span>
                                            </span>
                                        </div>

                                        {/* insurances */}
                                        <div className='w-full grid grid-cols-2 mt-[12px]'>
                                            <div className='flex flex-col'>
                                                <span>Insurance IDV</span>
                                                <span className='font-[700]'>₹8 10 000</span>
                                            </div>

                                            <div className='flex flex-col'>
                                                <span>On-Road Price</span>
                                                <span className='font-[700]'>₹11 90 000</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* bottom sides */}
                        <div className='w-full'>
                            {/* titles */}
                            <div className='mt-[30px]'>
                                <h4 className='text-[20px] font-[700] mb-[8px]'>Hi Ashish, here are the best Insurance offers for you</h4>
                                <div className='flex items-center'>
                                    {/* <h5 className='md:flex hidden items-center gap-[4px]'>
                                        <span className='font-[700]'>
                                            Policy Type :
                                        </span>
                                        <span className='font-[400]'>
                                            Comprehensive Insurance  (1st Year Own Damage + 3 Years Third Party)
                                        </span>
                                    </h5> */}

                                    <h5 className='font-[700]'>
                                        Policy Type :
                                        <span className='font-[400] ml-[4px]'>
                                            Comprehensive Insurance  (1st Year Own Damage + 3 Years Third Party)
                                        </span>
                                    </h5>
                                </div>
                            </div>

                            <div id="overFlowNone" className='w-full h-full grid md:grid-cols-2 md:grid-rows-1 gap-[20px] mt-[25px] overflow-scroll mb-[90px]'>
                                {
                                    insuranceList.map((ele) => {
                                        const { id, imgsrc, price, textOne, textTwo } = ele;

                                        return (
                                            <div key={id} className='w-full h-max bg-[#333333] rounded-[10px] p-[20px] divide-y-[1px] divide-[#8E8585]'>
                                                {/* header */}
                                                <div className='w-full flex items-center justify-between pb-[12px]'>
                                                    {/* images */}
                                                    <div className='w-[120px] bg-white rounded-[10px] flex items-center justify-center p-[6px_22px]'>
                                                        <img src={imgsrc} className='h-[42px] object-contain' alt='insurances' />
                                                    </div>

                                                    {/* prices */}
                                                    <div className=''>
                                                        <h4 className='text-[20px] font-[700]'>{price}</h4>
                                                    </div>
                                                </div>
                                                {/* middle */}
                                                {
                                                    textOne && textTwo && (
                                                        <div className='py-[12px]'>
                                                            <ul className='w-full list-disc pl-[16px] flex items-center justify-between'>
                                                                <li>{textOne}</li>
                                                                <li>{textTwo}</li>
                                                            </ul>
                                                        </div>
                                                    )
                                                }
                                                {/* bottom */}
                                                <div className='w-full flex items-center justify-between pt-[12px]'>
                                                    {/* polices */}
                                                    <div>
                                                        <span className='text-[#FF3E5B] font-[700]'>Policy Details</span>
                                                    </div>

                                                    {/* buttons selected */}
                                                    <div className="h-[44px] flex items-center justify-center gap-8">
                                                        <Buttons links="" title="Select" outline={true} />
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>

                {/* footer */}
                {/* see disclaimers */}
                <div id='footer' className="fixed bottom-0 left-0 right-0 h-max w-full mt-0 bg-[#313131] z-50">
                    {/* main footer */}
                    <div className="w-full h-[70px] px-[35px] flex items-center justify-center max-w-[1280px] mx-auto">
                        <div className="h-[44px] flex items-center justify-center gap-8">
                            <Buttons links="/scorpio-N/add-to-cart" title="back" outline={true} />
                            {/* <Buttons links="/xuv400/add-to-cart" title="continue" outline={false} /> */}

                            <Link to='/scorpio-N/add-to-cart' onClick={() => handleClick()} type='button' className={`md:text-[16px] text-[14px] relative z-[5] capitalize ${setWidth ? `` : 'flex items-center justify-center xl:w-[150px] md:w-[150px] w-[116px]'} h-full before:content-[""] before:absolute before:left-0 before:right-0 before:bottom-0 before:top-0 ${setWidth ? `before:sm:w-auto before:w-[126px]` : 'before:md:w-[144px] before:w-[116px]'} before:h-[44px] before:border-[1px] before:bg-[#ff3e5b] before:border-[#ff3e5b] before:z-[-1] after:content-[""] after:absolute ${setWidth ? `after:md:-right-[10px] after:-right-[8px]` : 'after:md:right-[-3px] after:right-[-10px]'} after:bottom-0 after:top-0 after:bg-[#ff3e5b] after:w-[2px] after:h-full dark:text-white font-bold`}
                                style={{ width: `${setWidth ? widthSet : ''}` }}
                            >
                                continue
                                <style jsx="true">
                                    {`
                                        a::after,
                                        a:before {
                                            transform:skew(-13deg);
                                        }
                                    `}
                                </style>
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default InsuranceQuote