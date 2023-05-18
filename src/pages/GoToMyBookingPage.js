import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Buttons from '../components/Buttons';
import DeskTopNavbar from '../components/navbar/DeskTopNavbar'

function GoToMyBookingPage({ setWidth }) {
    // const widthSet = `${setWidth + 'px'}`;

    const cardsDetails = [
        {
            id: 1,
            name: 'Scorpio-N • Z8 L D AT • Deep Forest',
            dealerName: 'NBS International',
            bookingId: 'IdX31A2Bf3F1B7',
            customerName: 'Ashish Y',
            bookingAmount: '₹21 000.00',
            bookingDate: '25/04/2023',
            chargerType: '3.3kW AC',
            order: true
        },
        // {
        //     id: 2,
        //     name: 'XUV400 • Artic Blue With Copper',
        //     dealerName: 'NBS International',
        //     bookingId: 'IdX31A2Bf3F1B7',
        //     customerName: 'Ashish Y',
        //     bookingAmount: '₹21 000.00',
        //     bookingDate: '22/03/2023',
        //     chargerType: '3.3kW AC',
        //     order: true
        // },
    ];

    const footersDiv = [
        {
            id: 1,
            title: 'Mahindra Auto',
            lists: [
                {
                    id: 1.1,
                    text: 'About Company'
                },
                {
                    id: 1.2,
                    text: 'Global Presence'
                },
                {
                    id: 1.3,
                    text: 'Our Heritage'
                },
                {
                    id: 1.4,
                    text: 'Design @Mahindra'
                },
                {
                    id: 1.5,
                    text: 'CSR & Sustainability'
                }
            ]
        },
        {
            id: 2,
            title: 'Newsroom',
            lists: [
                {
                    id: 2.1,
                    text: 'View Events'
                },
                {
                    id: 2.2,
                    text: 'Articles / Blogs'
                },
                {
                    id: 2.3,
                    text: 'News & Media'
                },
            ]
        },
        {
            id: 3,
            title: 'Media Relations',
            lists: [
                {
                    id: 3.1,
                    text: 'Media Kit'
                },
                {
                    id: 3.2,
                    text: 'Press Releases'
                },
                {
                    id: 3.3,
                    text: 'Key Contacts'
                },
            ]
        },
        {
            id: 4,
            title: 'Investor Relations',
            lists: [
                {
                    id: 4.1,
                    text: 'Overview'
                },
                {
                    id: 4.2,
                    text: 'Performance Highlights'
                },
                {
                    id: 4.3,
                    text: 'Reports & Filings'
                },
                {
                    id: 4.4,
                    text: 'Directors'
                },
            ]
        },
        {
            id: 5,
            title: 'Vehicle Categories',
            lists: [
                {
                    id: 5.1,
                    text: 'SUV'
                },
                {
                    id: 5.2,
                    text: 'Pick Ups'
                },
                {
                    id: 5.3,
                    text: 'Light Commercial'
                },
                {
                    id: 5.4,
                    text: 'Electric'
                },
                {
                    id: 5.5,
                    text: 'Trucks'
                },
                {
                    id: 5.6,
                    text: 'Buses'
                },
            ]
        },
        {
            id: 6,
            title: 'Trending Pages',
            lists: [
                {
                    id: 6.1,
                    text: 'Lorem Ipsum 1'
                },
                {
                    id: 6.2,
                    text: 'Lorem Ipsum 2'
                },
                {
                    id: 6.3,
                    text: 'Lorem Ipsum 3'
                },
                {
                    id: 6.4,
                    text: 'Lorem Ipsum 4'
                },
                {
                    id: 6.5,
                    text: 'Lorem Ipsum 5'
                },
                {
                    id: 6.6,
                    text: 'Lorem Ipsum 6'
                },
            ]
        },
        {
            id: 7,
            title: 'Careers',
            lists: [
                {
                    id: 7.1,
                    text: 'Working for Mahindra Auto'
                },
                {
                    id: 7.2,
                    text: 'View All Openings'
                },
            ]
        }
    ]

    useEffect(() => {
        document.querySelector('body').style.background = '#0B0B0C';
    });

    const [getFooterContentId, setGetFooterContentId] = useState(3)

    const handleFooterClicks = (id) => {

        if (id === getFooterContentId) {
            setGetFooterContentId(0);
        } else {
            setGetFooterContentId(id)
        }
    }

    return (
        <>
            <main className='w-full h-full text-white'>
                {/* navbar */}
                <DeskTopNavbar />

                {/* contents */}
                <div className='w-full h-full 1x1:px-0 px-[15px] max-w-[1260px] mx-auto md:mt-3 mt-2'>
                    <div className='flex lg:flex-row flex-col items-start gap-[20px]'>
                        {/* left sides */}
                        <div className='w-[30%] h-full'>
                            {/* back to home */}
                            <Link to="/scorpio-N/add-to-cart" className='flex items-center gap-[8px] w-max'>
                                <span>
                                    <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.05176 1.396L1.21176 6.24L6.05176 11.084" stroke="white" strokeWidth="1.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>

                                <span className='font-[600]'>Back to Homepage</span>
                            </Link>

                            {/* top side back buttons */}

                            <div className='w-full h-full mt-[28px] lg:block hidden'>
                                <h6 className='text-[18px] font-[700]'>My Bookings</h6>

                                <span className='w-full block h-[1px] bg-[#FF3E5B] mt-[20px]'></span>
                            </div>
                        </div>

                        {/* right sides */}
                        <div className='lg:w-[70%] w-full h-full'>
                            {/* titles */}
                            <div className='w-full'>
                                <h2 className='text-[26px] font-bold'>My Bookings</h2>
                            </div>

                            {/* cars contents lists */}
                            <div className='md:block hidden'>
                                <div id="overFlowNone" className='w-full 1x1:h-[500px] h-[370px] overflow-scroll mt-[20px]'>
                                    <div className='flex flex-col items-center gap-[20px]'>
                                        {
                                            cardsDetails?.map((ele) => {
                                                const { id, name, dealerName, bookingId, customerName, bookingAmount, bookingDate, chargerType, order } = ele;

                                                return (
                                                    <div key={id} className="w-full h-max rounded-[10px] p-[20px] bg-[#242424]">
                                                        <div className='w-full h-full flex items-start gap-[10px]'>
                                                            {/* left side images */}
                                                            <div className='w-[25%] h-full flex flex-col justify-between'>
                                                                {/* images and status*/}
                                                                <div className='w-ful'>
                                                                    {/* images */}
                                                                    <img src='/image 14.png' alt="product-img" className='w-full h-full object-contain' />
                                                                    {/* status */}
                                                                    <div className='mt-[11px] flex items-start flex-col'>
                                                                        <span className='text-white'>Status:</span>
                                                                        <span className='text-[#00A310] font-bold capitalize'>booking completed</span>
                                                                    </div>

                                                                </div>
                                                            </div>

                                                            {/* right side images */}
                                                            <div className='w-[75%] h-full divide-y-[1px] divide-[#8E8585] border-b-[1px] border-[#8E8585]'>
                                                                {/* cars title name */}
                                                                <div className='w-full pb-[16px]'>
                                                                    <h3 className='font-bold text-[18px]'>{name}</h3>
                                                                </div>

                                                                {/* dealer name and booking refrence id */}
                                                                <div className='w-full flex items-start justify-between py-[16px]'>
                                                                    {/* dealer left sides */}
                                                                    <div className='flex flex-col'>
                                                                        {/* dealer title */}
                                                                        <span className='text-[#DEDEDE]'>Dealer</span>
                                                                        <span className='text-white font-bold'>{dealerName}</span>
                                                                    </div>

                                                                    {/* refrence id right sides */}
                                                                    <div className='flex flex-col md:pr-[24px]'>
                                                                        {/* refrence title */}
                                                                        <span className='text-[#DEDEDE]'>Booking Ref. ID.</span>
                                                                        <span className='text-white font-bold'>{bookingId}</span>
                                                                    </div>
                                                                </div>

                                                                {/* company name and booking amount and date */}
                                                                <div className='w-full h-full flex flex-col pb-[16px]'>
                                                                    <div className='w-full flex items-start justify-between py-[16px]'>
                                                                        {/* dealer left sides */}
                                                                        <div className='flex flex-col'>
                                                                            {/* dealer title */}
                                                                            <span className='text-[#DEDEDE] capitalize'>customer Name</span>
                                                                            <span className='text-white font-bold'>{customerName}</span>
                                                                        </div>

                                                                        {/* booking amount and date */}
                                                                        <div className='flex items-start gap-[20px]'>
                                                                            {/* booking amount */}
                                                                            <div className='flex flex-col md:pr-[24px]'>
                                                                                <span className='text-[#DEDEDE]'>Booking Amount Paid</span>
                                                                                <span className='text-white font-bold'>{bookingAmount}</span>
                                                                            </div>

                                                                            {/* booking date */}
                                                                            <div className='flex flex-col md:pr-[56px]'>
                                                                                <span className='text-[#DEDEDE]'>Booking Date</span>
                                                                                <span className='text-white font-bold'>{bookingDate}</span>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    {/* chager types */}
                                                                    {/* <div className='w-full'>
                                                                        charger type
                                                                        <div className='flex flex-col'>
                                                                            <span className='text-[#DEDEDE] capitalize'>charger type</span>
                                                                            <span className='text-white font-bold'>{chargerType}</span>
                                                                        </div>
                                                                    </div> */}
                                                                </div>
                                                            </div>
                                                        </div>

                                                        {/* bottom card contents */}

                                                        <div className='w-full flex items-center justify-between 1x1:gap-[4rem] gap-[3.7rem] pt-[16px]'>
                                                            {/* left sides buttons */}
                                                            <div className=''>
                                                                <div className="h-[44px] flex items-center justify-start gap-8">
                                                                    <Buttons links='' title="Track Order" outline={true} />
                                                                </div>
                                                            </div>
                                                            {/* right side button and last updates */}
                                                            <div className='w-full flex items-center justify-between'>
                                                                {/* last updates dates */}
                                                                <span className='text-[12px] text-[#DEDEDE]'>Last Updated : {bookingDate}</span>
                                                                <div className="h-[44px] flex items-center justify-center gap-8">
                                                                    <Buttons links='' title="View Details" outline={true} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>

                            {/* mobiles views */}
                            <div className='md:hidden block'>
                                <div className='w-full h-full mt-[20px]'>
                                    <div className='flex flex-col items-center gap-[20px]'>
                                        {
                                            cardsDetails?.map((ele) => {
                                                const { id, name, dealerName, bookingId, customerName, bookingAmount, bookingDate, chargerType, order } = ele;

                                                return (
                                                    <div key={id} className="w-full h-max rounded-[10px] p-[20px] bg-[#242424] divide-y-[1px] divide-[#8E8585]">
                                                        <div className='w-full pb-[16px]'>
                                                            {/* cars titles */}
                                                            <div className='w-full'>
                                                                <h4 className='font-bold'>{name}</h4>
                                                            </div>

                                                            {/* cars images */}
                                                            <div className='w-full flex flex-col '>
                                                                {/* images */}
                                                                <div className='h-[168px]'>
                                                                    <img src='/image 14.png' alt="product-img" className='w-full h-full object-contain' />
                                                                </div>

                                                                {/* status and last updates */}

                                                                <div className='w-full'>
                                                                    <p className='text-[14px] flex items-center gap-[4px]'>
                                                                        Status:
                                                                        <span className='font-bold text-[#00A310]'>Booking Completed</span>
                                                                    </p>

                                                                    <p className='text-[12px] text-[#DEDEDE]'>Last Updated: {bookingDate}</p>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        {/* dealer and booking ref. id */}
                                                        <div className='w-full flex flex-col gap-[13px] py-[16px]'>
                                                            {/* dealers */}
                                                            <div className='w-full flex flex-col'>
                                                                <span className='text-[14px] text-[#DEDEDE]'>Dealer</span>
                                                                <span className='font-bold text-[16px]'>{dealerName}</span>
                                                            </div>

                                                            {/* booking ref. id */}
                                                            <div className='w-full flex flex-col'>
                                                                <span className='text-[14px] text-[#DEDEDE]'>Booking Ref. ID.</span>
                                                                <span className='font-bold text-[16px]'>{bookingId}</span>
                                                            </div>
                                                        </div>

                                                        {/* customer name and booking amount and booking date and charger types */}
                                                        <div className='w-full flex flex-col gap-[12px] py-[16px]'>
                                                            {/* customer name */}
                                                            <div className='w-full flex flex-col'>
                                                                <span className='text-[14px] text-[#DEDEDE]'>Customer Name</span>
                                                                <span className='font-bold text-[16px]'>{customerName}</span>
                                                            </div>

                                                            {/* booking amount and booking date */}
                                                            <div className='w-full grid grid-cols-2 items-start justify-between'>
                                                                <div className='w-full flex flex-col'>
                                                                    <span className='text-[14px] text-[#DEDEDE]'>Booking Amount Paid</span>
                                                                    <span className='font-bold text-[16px]'>{bookingAmount}</span>
                                                                </div>

                                                                <div className='w-full flex flex-col'>
                                                                    <span className='text-[14px] text-[#DEDEDE]'>Booking Date</span>
                                                                    <span className='font-bold text-[16px]'>{bookingDate}</span>
                                                                </div>
                                                            </div>

                                                            {/* charger types */}
                                                            <div className='w-full flex flex-col'>
                                                                <span className='text-[14px] text-[#DEDEDE]'>Charger Type</span>
                                                                <span className='font-bold text-[16px]'>{chargerType}</span>
                                                            </div>
                                                        </div>

                                                        {/* bottom buttons */}
                                                        <div className='pt-[16px] pl-[0.5rem] pr-[1rem]'>
                                                            <div className="h-[44px] flex items-center justify-between gap-8">
                                                                <Buttons links='' title="Track Order" outline={true} />
                                                                <Buttons links='' title="View Details" outline={false} />
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
                    </div>

                    {/* bottom footer */}
                    <div className='w-full mt-[30px] pb-[20px]'>
                        <p className='text-white  md:text-[16px] text-[14px]'>
                            <span className='font-bold'>Disclaimer: </span>
                            All pictures & colours shown are for illustration purpose only. <span className='font-bold underline'>Read More</span>
                        </p>
                    </div>
                </div>

                {/* footer */}
                <div className='w-full h-full border-t-[3px] border-[#616161] 1x1:px-0 px-[15px] max-w-[1260px] mx-auto md:pt-[45px] mb-[85px]'>
                    <div className='flex md:flex-row flex-col items-start'>
                        {/* left sides */}
                        <div className='md:w-[40%] md:mb-0 mb-[26px] w-full flex flex-col md:items-start items-center md:justify-start justify-center pt-[44px]'>
                            {/* logo */}
                            <div className='md:hidden block mb-[23px]'>
                                <div className='h-[18px]'>
                                    <img src="/logoMobileView.svg" className='w-full h-full object-contain' alt='logoMobileView-logo' />
                                </div>
                            </div>
                            {/* socials icons */}
                            <div className='flex items-center gap-[15px]'>
                                <span>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 23.375C18.2822 23.375 23.375 18.2822 23.375 12C23.375 5.71776 18.2822 0.625 12 0.625C5.71776 0.625 0.625 5.71776 0.625 12C0.625 18.2822 5.71776 23.375 12 23.375Z" stroke="white" strokeWidth="1.25" />
                                        <path d="M13.5038 8.57303H14.3688V7.06703C13.9504 7.02097 13.5298 6.9986 13.1088 7.00003C12.8178 6.98353 12.5266 7.03087 12.2558 7.13872C11.9849 7.24657 11.7409 7.41233 11.5409 7.62439C11.3408 7.83644 11.1895 8.08967 11.0976 8.36634C11.0057 8.64301 10.9754 8.93642 11.0088 9.22603V10.552H9.63184V12.236H11.0078V16.473H12.6948V12.236H14.0148L14.2248 10.552H12.6938V9.39303C12.6938 8.90603 12.8248 8.57303 13.5038 8.57303Z" fill="white" />
                                    </svg>
                                </span>
                                <span>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 23.375C18.2822 23.375 23.375 18.2822 23.375 12C23.375 5.71776 18.2822 0.625 12 0.625C5.71776 0.625 0.625 5.71776 0.625 12C0.625 18.2822 5.71776 23.375 12 23.375Z" stroke="white" strokeWidth="1.25" />
                                        <path d="M17.428 9.00001C17.0357 9.17126 16.6208 9.28509 16.196 9.33801C16.6434 9.07233 16.9779 8.65177 17.136 8.15601C16.7168 8.40442 16.2582 8.57928 15.78 8.67301C15.4869 8.35945 15.1063 8.14134 14.6876 8.04708C14.2689 7.95281 13.8315 7.98675 13.4323 8.14447C13.0331 8.30219 12.6907 8.5764 12.4495 8.93142C12.2083 9.28643 12.0796 9.70582 12.08 10.135C12.0784 10.299 12.0952 10.4627 12.13 10.623C11.2802 10.5814 10.4487 10.3609 9.68987 9.97617C8.93101 9.5914 8.26183 9.05092 7.726 8.39001C7.45085 8.86028 7.36563 9.41786 7.48774 9.94885C7.60984 10.4798 7.93007 10.9442 8.383 11.247C8.04457 11.2381 7.71325 11.1479 7.417 10.984V11.007C7.4178 11.5006 7.58855 11.9788 7.90053 12.3613C8.2125 12.7437 8.64667 13.0071 9.13 13.107C8.94693 13.1551 8.75828 13.1787 8.569 13.177C8.43477 13.1793 8.30068 13.1672 8.169 13.141C8.30732 13.5656 8.57397 13.9369 8.93219 14.2036C9.2904 14.4703 9.72254 14.6193 10.169 14.63C9.41203 15.2216 8.47874 15.5427 7.518 15.542C7.34489 15.5436 7.17186 15.5339 7 15.513C7.97772 16.1429 9.11698 16.476 10.28 16.472C11.0805 16.4776 11.8741 16.3241 12.6148 16.0204C13.3554 15.7167 14.0283 15.2689 14.5945 14.7029C15.1606 14.137 15.6087 13.4642 15.9126 12.7236C16.2165 11.9831 16.3703 11.1895 16.365 10.389C16.365 10.294 16.365 10.203 16.357 10.113C16.7788 9.81029 17.1417 9.43311 17.428 9.00001Z" fill="white" />
                                    </svg>
                                </span>
                                <span>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 23.375C18.2822 23.375 23.375 18.2822 23.375 12C23.375 5.71776 18.2822 0.625 12 0.625C5.71776 0.625 0.625 5.71776 0.625 12C0.625 18.2822 5.71776 23.375 12 23.375Z" stroke="white" strokeWidth="1.25" />
                                        <path d="M16.4716 16.472V12.998C16.4716 11.298 16.1056 9.98904 14.1186 9.98904C13.7453 9.97604 13.3755 10.0646 13.0486 10.2453C12.7218 10.426 12.4501 10.692 12.2626 11.015H12.2346V10.148H10.3516V16.472H12.3136V13.34C12.3136 12.515 12.4696 11.718 13.4906 11.718C14.5116 11.718 14.5116 12.659 14.5116 13.393V16.472H16.4716Z" fill="white" />
                                        <path d="M7.16016 10.1479H9.12016V16.4709H7.16016V10.1479Z" fill="white" />
                                        <path d="M8.13825 7.00002C7.91172 6.99883 7.68995 7.06498 7.50109 7.19007C7.31223 7.31516 7.16479 7.49356 7.07751 7.7026C6.99023 7.91164 6.96703 8.1419 7.01086 8.36415C7.05469 8.5864 7.16357 8.79062 7.32368 8.95087C7.48379 9.11112 7.68791 9.22018 7.91012 9.26421C8.13233 9.30823 8.36262 9.28523 8.57174 9.19813C8.78085 9.11103 8.95937 8.96376 9.08463 8.77501C9.20989 8.58626 9.27624 8.36454 9.27525 8.13802C9.27525 7.83637 9.15549 7.54707 8.94229 7.33368C8.72909 7.12029 8.43989 7.00028 8.13825 7.00002Z" fill="white" />
                                    </svg>
                                </span>
                                <span>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 23.375C18.2822 23.375 23.375 18.2822 23.375 12C23.375 5.71776 18.2822 0.625 12 0.625C5.71776 0.625 0.625 5.71776 0.625 12C0.625 18.2822 5.71776 23.375 12 23.375Z" stroke="white" strokeWidth="1.25" />
                                        <path d="M17.5697 8.727C17.1347 8.21 16.3327 8 14.8007 8H9.23769C7.67069 8 6.85469 8.224 6.42169 8.774C6.02726 9.51527 5.87943 10.363 5.99969 11.194V13.283C5.99969 15.402 6.49969 16.477 9.23769 16.477H14.7997C15.6982 16.6004 16.6095 16.3703 17.3417 15.835C17.6249 15.4791 17.833 15.0694 17.9533 14.6308C18.0737 14.1921 18.1037 13.7336 18.0417 13.283V11.194C18.1648 10.342 17.9986 9.47336 17.5697 8.727ZM13.7287 12.527L11.1997 13.844C11.1405 13.875 11.0744 13.8902 11.0076 13.8881C10.9409 13.886 10.8758 13.8668 10.8187 13.8322C10.7616 13.7976 10.7143 13.7488 10.6816 13.6906C10.6488 13.6324 10.6316 13.5668 10.6317 13.5V10.868C10.6316 10.8013 10.6486 10.7356 10.6813 10.6775C10.7139 10.6193 10.761 10.5705 10.818 10.5358C10.875 10.5011 10.94 10.4817 11.0067 10.4795C11.0734 10.4772 11.1395 10.4922 11.1987 10.523L13.7247 11.835C13.7878 11.8677 13.8408 11.9171 13.8777 11.9779C13.9146 12.0387 13.9342 12.1084 13.9342 12.1795C13.9342 12.2506 13.9146 12.3203 13.8777 12.3811C13.8408 12.4419 13.7878 12.4913 13.7247 12.524L13.7287 12.527Z" fill="white" />
                                    </svg>
                                </span>
                                <span>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 23.375C18.2822 23.375 23.375 18.2822 23.375 12C23.375 5.71776 18.2822 0.625 12 0.625C5.71776 0.625 0.625 5.71776 0.625 12C0.625 18.2822 5.71776 23.375 12 23.375Z" stroke="white" strokeWidth="1.25" />
                                        <path d="M16.451 9.785C16.4434 9.39229 16.369 9.00374 16.231 8.636C16.1086 8.32092 15.9217 8.03488 15.6824 7.7962C15.443 7.55753 15.1564 7.37149 14.841 7.25C14.4732 7.11217 14.0847 7.03778 13.692 7.03C13.185 7.006 13.024 7 11.738 7C10.452 7 10.29 7.006 9.78498 7.028C9.39227 7.03562 9.00372 7.11002 8.63598 7.248C8.31887 7.36814 8.03209 7.5566 7.79598 7.8C7.55635 8.0355 7.37044 8.31999 7.25098 8.634C7.11316 9.00179 7.03877 9.39031 7.03098 9.783C7.00698 10.29 7.00098 10.451 7.00098 11.737C7.00098 13.023 7.00598 13.184 7.02798 13.69C7.03654 14.0829 7.11195 14.4714 7.25098 14.839C7.37255 15.1534 7.55832 15.4391 7.79644 15.6777C8.03456 15.9164 8.3198 16.1027 8.63398 16.225C9.00177 16.3628 9.39029 16.4372 9.78298 16.445C10.288 16.467 10.449 16.473 11.735 16.473C13.021 16.473 13.182 16.468 13.687 16.445C14.0797 16.4374 14.4682 16.363 14.836 16.225C15.151 16.1034 15.4371 15.9173 15.6759 15.6786C15.9148 15.4399 16.1011 15.1539 16.223 14.839C16.3608 14.4712 16.4351 14.0827 16.443 13.69C16.465 13.185 16.471 13.024 16.471 11.738C16.471 10.452 16.469 10.29 16.451 9.785ZM15.594 13.653C15.5908 13.9532 15.5357 14.2506 15.431 14.532C15.3521 14.7365 15.2312 14.9222 15.0762 15.0772C14.9212 15.2322 14.7355 15.3531 14.531 15.432C14.2496 15.5366 13.9522 15.5917 13.652 15.595C13.152 15.617 13.003 15.623 11.739 15.623C10.475 15.623 10.323 15.618 9.82598 15.595C9.52705 15.591 9.23105 15.5356 8.95098 15.431C8.74544 15.3557 8.55951 15.235 8.40698 15.078C8.24915 14.9252 8.12751 14.7389 8.05098 14.533C7.94642 14.2516 7.89127 13.9542 7.88798 13.654C7.86598 13.154 7.85998 13.004 7.85998 11.741C7.85998 10.478 7.86498 10.325 7.88798 9.828C7.89115 9.52779 7.9463 9.23039 8.05098 8.949C8.12536 8.7413 8.24648 8.55347 8.40498 8.4C8.55875 8.2445 8.74528 8.12527 8.95098 8.051C9.23177 7.94669 9.52845 7.89155 9.82798 7.888C10.327 7.866 10.477 7.86 11.741 7.86C13.005 7.86 13.157 7.866 13.651 7.888C13.9512 7.89118 14.2486 7.94632 14.53 8.051C14.7355 8.12631 14.9215 8.24696 15.074 8.404C15.2306 8.55684 15.3512 8.74268 15.427 8.948C15.5315 9.22943 15.5867 9.5268 15.59 9.827C15.612 10.327 15.618 10.476 15.618 11.74C15.618 13.004 15.616 13.153 15.594 13.653Z" fill="white" />
                                        <path d="M11.7377 9.3042C11.2565 9.3042 10.7861 9.44689 10.386 9.71423C9.98588 9.98157 9.67404 10.3616 9.48989 10.8061C9.30574 11.2507 9.25756 11.7399 9.35144 12.2119C9.44532 12.6838 9.67704 13.1173 10.0173 13.4576C10.3576 13.7979 10.7911 14.0296 11.263 14.1234C11.735 14.2173 12.2242 14.1691 12.6688 13.985C13.1133 13.8009 13.4933 13.489 13.7606 13.0889C14.028 12.6888 14.1707 12.2184 14.1707 11.7372C14.1704 11.092 13.914 10.4733 13.4578 10.0171C13.0016 9.56088 12.3829 9.30446 11.7377 9.3042ZM11.7377 13.3162C11.4256 13.3162 11.1205 13.2237 10.861 13.0503C10.6015 12.8769 10.3992 12.6304 10.2798 12.3421C10.1604 12.0537 10.1291 11.7364 10.19 11.4303C10.2509 11.1242 10.4012 10.8431 10.6219 10.6224C10.8426 10.4017 11.1237 10.2514 11.4298 10.1905C11.7359 10.1296 12.0532 10.1609 12.3416 10.2803C12.6299 10.3998 12.8763 10.602 13.0497 10.8615C13.2231 11.121 13.3157 11.4261 13.3157 11.7382C13.3154 12.1566 13.1491 12.5578 12.8532 12.8537C12.5573 13.1496 12.1561 13.3159 11.7377 13.3162Z" fill="white" />
                                        <path d="M14.8352 9.20789C14.8352 9.32023 14.8019 9.43005 14.7395 9.52346C14.6771 9.61687 14.5884 9.68967 14.4846 9.73266C14.3808 9.77565 14.2666 9.7869 14.1564 9.76498C14.0462 9.74307 13.945 9.68897 13.8656 9.60954C13.7861 9.5301 13.732 9.42888 13.7101 9.3187C13.6882 9.20852 13.6995 9.09432 13.7425 8.99053C13.7855 8.88674 13.8583 8.79803 13.9517 8.73562C14.0451 8.67321 14.1549 8.63989 14.2672 8.63989C14.4179 8.63989 14.5623 8.69974 14.6689 8.80626C14.7754 8.91278 14.8352 9.05725 14.8352 9.20789Z" fill="white" />
                                    </svg>
                                </span>
                            </div>
                            {/* download titles */}
                            <h6 className='md:text-[18px] text-[14px] font-bold mt-[32px]'>Download Apps</h6>
                        </div>

                        {/* right sides */}
                        <div className='md:w-[60%] w-full'>
                            {/* desktop  view */}

                            {/* top footers */}
                            <div className='md:block hidden'>
                                <div className='grid grid-cols-4 gap-y-[52px] items-start'>
                                    {
                                        footersDiv?.map((ele) => {
                                            const { id, title, lists } = ele;

                                            return (
                                                <div key={id} className=''>
                                                    {/* titles */}
                                                    <span className='text-[14px] font-bold'>{title}</span>

                                                    <div className='flex flex-col gap-[11px] mt-[26px]'>
                                                        {
                                                            lists?.map((el) => {
                                                                const { id, text } = el

                                                                return (
                                                                    <span key={id} className="xl:w-max">{text}</span>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>

                            {/* mobiles view */}

                            <div className='md:hidden block'>

                                <div className='flex flex-col gap-[18px]'>
                                    {
                                        footersDiv?.map((ele) => {
                                            const { id, title, lists } = ele;

                                            return (
                                                <div key={id} className='w-full'>
                                                    {/* titles */}
                                                    <div onClick={() => handleFooterClicks(id)} className='w-max flex items-center gap-[10px] cursor-pointer'>
                                                        <span className='text-[14px] font-bold'>{title}</span>
                                                        <span>
                                                            <svg className={`${getFooterContentId === id && 'rotate-180'} transition-all`} width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M0.775391 0.948242L5.61939 5.78824L10.4634 0.948242" stroke="white" strokeWidth="1.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                        </span>
                                                    </div>

                                                    {/* footer content text */}
                                                    {
                                                        getFooterContentId === id &&
                                                        <div className='flex flex-col gap-[11px] mt-[6px]'>
                                                            {
                                                                lists?.map((el) => {
                                                                    const { id, text } = el

                                                                    return (
                                                                        <span key={id} className="xl:w-max text-[14px]">{text}</span>
                                                                    )
                                                                })
                                                            }
                                                        </div>
                                                    }
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <footer className='w-full h-max p-[15px] bg-[#242424]'>
                    <div className='w-full max-w-[1260px] mx-auto flex md:flex-row flex-col items-center md:justify-between justify-center'>
                        <p className='text-[14px] md:order-1 order-2 md:mt-0 mt-[13px]'>Copyright © 2021 Mahindra & Mahindra Ltd</p>
                        <div className='flex items-center gap-[23px] md:order-2 order-1'>
                            {/* india flags */}
                            <div className='w-[136px] border-b-2 pb-[2px] border-white flex items-center justify-between'>
                                <div className='flex items-center gap-[10px]'>
                                    <img src='/Indian Flag.svg' alt='Indian Flag' />
                                    <span className='text-[14px]'>India</span>
                                </div>

                                <span>
                                    <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.39648 0.948242L6.24048 5.78824L11.0845 0.948242" stroke="white" strokeWidth="1.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                            </div>

                            {/* Mahindra Corporate */}
                            <div className='md:block hidden'>
                                <span className='text-[14px] font-[600]'>Mahindra Corporate</span>
                                <span className='text-[14px] font-[600]'>T&C</span>
                                <span className='text-[14px] font-[600]'>Privacy Policy</span>
                                <span className='text-[14px] font-[600]'>Site Map</span>
                            </div>
                        </div>
                    </div>
                </footer>
            </main>
        </>
    )
}

export default GoToMyBookingPage