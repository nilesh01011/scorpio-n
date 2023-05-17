import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AddToCart from '../components/AddToCart'
import Badge from '../components/Badge'
import DeskTopNavbar from '../components/navbar/DeskTopNavbar'
import ProductDetails from '../components/ProductDetails'
import SelectStateCity from '../components/SelectStateCity'
import Steppers from '../components/Steppers'

function Cart({ setWidth }) {
    useEffect(() => {
        document.body.style.backgroundColor = "#212121"
    });

    const widthSet = `${setWidth + 'px'}`;

    const [showPopups, setShowPopups] = useState(false);

    // // const handleClicks = () => {
    // //     setShowPopups(true)
    // // }

    // const [showroomPlace, setShowroomPlace] = useState(true);
    const [successfull, setSuccessfull] = useState(false);
    const [getSuccessfull, setGetSuccessfull] = useState('');

    useEffect(() => {
        const success = localStorage.getItem('successfull');

        setGetSuccessfull(success);
    }, [])

    const handleClicks = () => {
        // popups div
        // setShowroomPlace(true);
        setShowPopups(true);
        // document.body.style.overflow = "hidden"

        // congratulations shows

        setSuccessfull(true);
        localStorage.setItem('successfull', true);

        setGetSuccessfull('true')
    }


    const handleClose = () => {
        // setShowroomPlace(false)
        setShowPopups(false);
        // console.log(showroomPlace)
        document.body.style.overflow = "auto"
    }


    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setIsOpen(true)
        }, 300)
    }, [isOpen]);

    // confirmations

    return (
        <>
            <main className='w-full h-full text-white'>
                {/* navbar */}
                <DeskTopNavbar />
                {/* badges */}
                {/* {
                    getSuccessfull === null &&
                    <div className='w-full mb-[16px]'>
                        <Badge />
                    </div>
                } */}

                {/* contents */}
                <div className='w-full h-full 1x1:px-0 px-[15px] max-w-[1260px] mx-auto'>
                    {/* Steps */}
                    {/* {
                        getSuccessfull === 'true' ? (
                            <div className='w-full h-max flex items-center gap-[8px] mt-[10px]'>
                                successfull-images
                                <div className='h-[50px] w-[60px]'>
                                    <img className={`w-full h-full object-cover`} src='/Congratulations-loader.gif' alt="successfull-buying" />
                                </div>

                                user names
                                <div className='w-max'>
                                    <h1 className={`md:text-[26px] xss:text-[22px] text-[20px] font-[700] capitalize`}>
                                        Congratulations!
                                    </h1>

                                    cars name
                                    <p className={`sm:text-[14px] text-[12px] font-[700]`}>Your XUV400 is booked</p>
                                </div>
                            </div>
                        ) : (
                            <div className='flex items-center justify-center mt-[12px]'>
                                <Steppers Steps={4} />
                            </div>
                        )
                    } */}
                    {
                        !getSuccessfull &&
                        <div className='flex items-center justify-center mt-[12px]'>
                            <Steppers Steps={4} />
                        </div>
                    }


                    {/* main contents */}
                    <div className='w-full h-full'>

                        {/* contents */}

                        <div className='w-full h-full'>
                            <AddToCart successfull={successfull} getSuccessfull={getSuccessfull} />
                        </div>
                    </div>
                </div>


                {/* footer */}
                {/* see disclaimers */}
                <div className="fixed bottom-0 left-0 right-0 h-max w-full bg-[#313131] mt-0 z-10">

                    {/* main footer */}
                    <div className="w-full h-[70px] px-[35px] max-w-[1280px] mx-auto flex items-center justify-center">
                        <div className="h-[44px] flex items-center justify-center gap-8">
                            {
                                getSuccessfull === null &&
                                <Link to='/scorpio-N/details-verification' type='button' className={`md:text-[16px] text-[14px] relative z-[5] capitalize ${setWidth ? `` : 'flex items-center justify-center xl:w-[150px] md:w-[150px] w-[120px]'} h-full before:content-[""] before:absolute before:left-0 before:right-0 before:bottom-0 before:top-0 ${setWidth ? `before:sm:w-auto before:w-[130px]` : 'before:md:w-[144px] before:w-[120px]'} before:h-[44px] before:border-[1px] before:border-white hover:before:bg-[#ff3e5b] hover:before:border-[#ff3e5b] before:z-[-1] after:content-[""] after:absolute ${setWidth ? `after:md:-right-[10px] after:-right-[8px]` : 'after:md:right-[-3px] after:right-[-10px]'} after:bottom-0 after:top-0 after:bg-[#ff3e5b] after:w-[2px] after:h-full text-white font-bold`}
                                    style={{ width: `${setWidth ? widthSet : ''}` }}
                                >
                                    back
                                    <style jsx="true">
                                        {`
                                        a::after,
                                        a:before {
                                            transform:skew(-13deg);
                                        }
                                    `}
                                    </style>
                                </Link>
                            }

                            {
                                getSuccessfull === 'true' ? (
                                    <Link to='/my-booking/listings' type='button' className={`md:text-[16px] text-[14px] relative z-[5] capitalize ${setWidth ? `` : 'flex items-center justify-center w-[180px]'} h-full before:content-[""] before:absolute before:left-0 before:right-0 before:bottom-0 before:top-0 ${setWidth ? `before:sm:w-auto before:w-[126px]` : 'before:w-[178px]'} before:h-[44px] before:border-[1px] before:bg-[#ff3e5b] before:border-[#ff3e5b] before:z-[-1] after:content-[""] after:absolute ${setWidth ? `after:md:-right-[10px] after:-right-[8px]` : 'after:right-[-7px]'} after:bottom-0 after:top-0 after:bg-[#ff3e5b] after:w-[2px] after:h-full dark:text-white font-bold`}
                                        style={{ width: `${setWidth ? widthSet : ''}` }}
                                    >
                                        Go to My Bookings
                                        <style jsx="true">
                                            {`
                                        a::after,
                                        a:before {
                                            transform:skew(-13deg);
                                        }
                                    `}
                                        </style>
                                    </Link>
                                ) : (
                                    <Link onClick={() => handleClicks()} type='button' className={`md:text-[16px] text-[14px] relative z-[5] capitalize ${setWidth ? `` : 'flex items-center justify-center xl:w-[150px] md:w-[150px] w-[120px]'} h-full before:content-[""] before:absolute before:left-0 before:right-0 before:bottom-0 before:top-0 ${setWidth ? `before:sm:w-auto before:w-[130px]` : 'before:md:w-[144px] before:w-[120px]'} before:h-[44px] before:border-[1px] before:bg-[#ff3e5b] before:border-[#ff3e5b] before:z-[-1] after:content-[""] after:absolute ${setWidth ? `after:md:-right-[10px] after:-right-[8px]` : 'after:md:right-[-3px] after:right-[-10px]'} after:bottom-0 after:top-0 after:bg-[#ff3e5b] after:w-[2px] after:h-full text-white font-bold`}
                                        style={{ width: `${setWidth ? widthSet : ''}` }}
                                    >
                                        Pay ₹21 000.00
                                        <style jsx="true">
                                            {`
                                        a::after,
                                        a:before {
                                            transform:skew(-13deg);
                                        }
                                    `}
                                        </style>
                                    </Link>
                                )
                            }

                        </div>
                    </div>
                </div>
            </main>

            {/* popups */}

            {
                showPopups === true &&
                <div className='w-full h-screen fixed top-0 left-0 bottom-0 right-0 z-[1005]'>
                    {/* overlays */}
                    <div onClick={() => handleClose()} className='z-[1] w-full h-screen fixed left-0 right-0 top-0 bottom-0 bg-[#0B0B0C] opacity-[0.9]'></div>

                    {/* contents */}
                    <div className={`${isOpen ? 'opacity-1' : 'opacity-0'} transition-opacity w-full h-full flex items-center justify-center`}>
                        <div className='sm:w-[388px] xss:w-[330px] w-[90%] mx-auto h-max bg-[#212121] rounded-[10px] p-[25px] z-[100] border-[1px] border-white relative'>
                            {/* cancle button */}
                            <div onClick={() => handleClose()} className='text-[35px] text-white absolute right-[22px] top-[25px] cursor-pointer'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                    <path d="M15.2929 15.5858L0.999878 1.29285" stroke="white" strokeWidth="1.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M15.2929 0.999861L0.999878 15.2928" stroke="white" strokeWidth="1.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div className='w-full h-[86px]'>
                                <img src="/Congratulations-loader.gif" className='w-full h-full object-contain' alt="gif" />
                            </div>

                            {/* contents */}

                            <div className='flex flex-col items-center justify-center gap-[12px] text-white'>
                                <div className='mt-[12px]'>
                                    <h2 className='text-[20px] font-bold'>Congratulation's Ashish!</h2>
                                </div>
                                <div className='text-center'>
                                    <p className='text-[14px]'>Your <b className='text-[16px]'>Scorpio-N</b> is booked successfully. You will receive booking confirmation shortly on your registered mobile, email.</p>
                                </div>
                                <div className='w-[46%] mx-auto h-[1px] bg-white'></div>
                                <div className='text-center'>
                                    <p className='text-[14px]'>To continue with post booking updates and SUV tracking etc. please download and start using <b className='text-[16px]'>M4U App</b></p>
                                </div>
                                <div className='w-full h-auto flex items-center justify-center gap-[10px]'>
                                    <div className='h-[32px]'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="94" height="32" viewBox="0 0 94 32" fill="none">
                                            <path d="M86.5144 0.000104H7.4898C7.20175 0.000104 6.91715 0.000104 6.62985 0.001704C6.38936 0.003304 6.15079 0.007952 5.90799 0.011864C5.38051 0.0181854 4.85428 0.065445 4.33386 0.153232C3.81417 0.24293 3.31076 0.412037 2.84066 0.654832C2.37113 0.899681 1.94211 1.21784 1.56916 1.59776C1.19425 1.97661 0.881731 2.41452 0.643626 2.89463C0.404864 3.37379 0.239305 3.88725 0.152668 4.41729C0.0652078 4.94665 0.0181445 5.48212 0.0119008 6.01889C0.00461108 6.26417 0.00384125 6.51026 0 6.75558V25.247C0.00384125 25.4954 0.00461108 25.736 0.0119008 25.9845C0.0181464 26.5212 0.0652097 27.0567 0.152668 27.586C0.239066 28.1164 0.404634 28.6301 0.643626 29.1095C0.881623 29.588 1.19418 30.0242 1.56916 30.4009C1.94069 30.7825 2.36999 31.1009 2.84066 31.3439C3.31076 31.5873 3.81411 31.7574 4.33386 31.8485C4.85437 31.9356 5.38055 31.9829 5.90799 31.9899C6.15079 31.9954 6.38936 31.9985 6.62985 31.9985C6.91714 32.0001 7.20176 32.0001 7.4898 32.0001H86.5144C86.7967 32.0001 87.0836 32.0001 87.3659 31.9985C87.6053 31.9985 87.8508 31.9954 88.0901 31.9899C88.6166 31.9832 89.1418 31.936 89.6612 31.8485C90.1826 31.7568 90.6878 31.5867 91.1601 31.3439C91.6304 31.1007 92.0593 30.7824 92.4305 30.4009C92.8045 30.0227 93.1177 29.5869 93.3587 29.1095C93.5959 28.6298 93.7599 28.1161 93.845 27.586C93.9326 27.0566 93.9813 26.5213 93.9908 25.9845C93.9939 25.736 93.9939 25.4954 93.9939 25.247C94 24.9563 94 24.6673 94 24.3719V7.62901C94 7.33604 94 7.04541 93.9939 6.75558C93.9939 6.51026 93.9939 6.26417 93.9908 6.01886C93.9813 5.48204 93.9326 4.94669 93.845 4.41726C93.7596 3.88753 93.5957 3.37411 93.3587 2.8946C92.8738 1.93226 92.1049 1.14892 91.1601 0.65476C90.6878 0.412558 90.1826 0.243496 89.6612 0.15316C89.1418 0.0649862 88.6166 0.0177102 88.0901 0.011752C87.8508 0.007848 87.6053 0.00316 87.3659 0.0016C87.0836 0 86.7967 0.000104 86.5144 0.000104Z" fill="#A6A6A6" />
                                            <path d="M6.6337 31.3C6.39436 31.3 6.16081 31.2969 5.92335 31.2915C5.43144 31.2849 4.94067 31.2413 4.45508 31.161C4.00229 31.0816 3.56366 30.9338 3.15366 30.7227C2.74741 30.5132 2.37689 30.2386 2.05627 29.9094C1.73101 29.584 1.46022 29.2066 1.25463 28.7922C1.04677 28.375 0.902914 27.9279 0.828082 27.4664C0.74727 26.9705 0.703548 26.4691 0.697291 25.9664C0.692311 25.7977 0.685791 25.2359 0.685791 25.2359V6.75548C0.685791 6.75548 0.692735 6.20236 0.697331 6.03985C0.703321 5.538 0.746789 5.03733 0.82736 4.5422C0.90233 4.07941 1.04629 3.63101 1.25427 3.21252C1.4591 2.79837 1.72839 2.4207 2.05169 2.09416C2.37463 1.76451 2.74634 1.4885 3.15327 1.27618C3.56234 1.06569 4.00014 0.918998 4.45201 0.841028C4.9392 0.759881 5.43166 0.716009 5.92528 0.70978L6.63409 0.700012H87.3621L88.0794 0.710172C88.5685 0.716092 89.0565 0.759572 89.5392 0.840244C89.9957 0.919192 90.438 1.0669 90.8518 1.27852C91.667 1.7064 92.3304 2.38334 92.7488 3.21447C92.9535 3.63007 93.0952 4.07482 93.1692 4.5336C93.2508 5.03281 93.2964 5.5374 93.3058 6.04337C93.308 6.26993 93.308 6.51329 93.308 6.75548C93.3143 7.05548 93.3142 7.34103 93.3142 7.62892V24.3719C93.3142 24.6625 93.3143 24.9461 93.308 25.232C93.308 25.4922 93.308 25.7305 93.305 25.9758C93.2958 26.4727 93.2509 26.9683 93.1707 27.4586C93.0974 27.9234 92.9544 28.374 92.7465 28.7946C92.5395 29.2045 92.2703 29.5786 91.9488 29.9031C91.6279 30.2342 91.2567 30.5104 90.8495 30.7211C90.4369 30.9339 89.9952 31.0822 89.5392 31.161C89.0537 31.2417 88.5629 31.2854 88.0709 31.2915C87.8408 31.2969 87.5999 31.3 87.366 31.3L86.5145 31.3016L6.6337 31.3Z" fill="black" />
                                            <path d="M19.4568 16.2405C19.4652 15.5728 19.6394 14.9181 19.963 14.3373C20.2867 13.7566 20.7493 13.2686 21.3079 12.9189C20.9531 12.4028 20.4849 11.978 19.9407 11.6784C19.3965 11.3787 18.7911 11.2125 18.1727 11.1928C16.8536 11.0517 15.5748 11.9966 14.9027 11.9966C14.2175 11.9966 13.1825 11.2068 12.0681 11.2301C11.3472 11.2538 10.6447 11.4673 10.0289 11.8498C9.41313 12.2322 8.90515 12.7706 8.55444 13.4124C7.03522 16.0911 8.16842 20.028 9.6237 22.1933C10.3518 23.2535 11.2028 24.4379 12.3162 24.3959C13.4058 24.3499 13.8127 23.6883 15.128 23.6883C16.431 23.6883 16.8128 24.3959 17.9488 24.3692C19.118 24.3499 19.8546 23.3042 20.5572 22.2339C21.0803 21.4784 21.4829 20.6434 21.7499 19.7599C21.0707 19.4673 20.491 18.9776 20.0832 18.3517C19.6754 17.7259 19.4576 16.9916 19.4568 16.2405Z" fill="white" />
                                            <path d="M17.311 9.76869C17.9485 8.98933 18.2626 7.98758 18.1865 6.9762C17.2126 7.08037 16.3129 7.55442 15.6669 8.30388C15.351 8.67002 15.109 9.09597 14.9549 9.55738C14.8007 10.0188 14.7374 10.5066 14.7684 10.993C15.2556 10.9981 15.7375 10.8906 16.1779 10.6785C16.6183 10.4664 17.0058 10.1554 17.311 9.76869Z" fill="white" />
                                            <path d="M33.2298 21.7117H29.5116L28.6187 24.3969H27.0438L30.5656 14.4625H32.2019L35.7237 24.3969H34.122L33.2298 21.7117ZM29.8967 20.4726H32.844L31.3911 16.1148H31.3504L29.8967 20.4726Z" fill="white" />
                                            <path d="M43.3297 20.7758C43.3297 23.0266 42.1468 24.4727 40.3617 24.4727C39.9095 24.4967 39.4598 24.3907 39.0641 24.1665C38.6683 23.9424 38.3426 23.6094 38.124 23.2055H38.0903V26.793H36.6304V17.1539H38.0435V18.3586H38.0703C38.2989 17.9566 38.6302 17.6253 39.0289 17.3998C39.4277 17.1743 39.879 17.0631 40.3349 17.0781C42.1399 17.0781 43.3297 18.5312 43.3297 20.7758ZM41.8292 20.7758C41.8292 19.3094 41.0851 18.3453 39.9498 18.3453C38.8344 18.3453 38.0841 19.3297 38.0841 20.7758C38.0841 22.2352 38.8344 23.2125 39.9498 23.2125C41.0851 23.2125 41.8292 22.2555 41.8292 20.7758Z" fill="white" />
                                            <path d="M51.1574 20.7758C51.1574 23.0266 49.9745 24.4726 48.1894 24.4726C47.7372 24.4967 47.2875 24.3907 46.8918 24.1665C46.496 23.9424 46.1703 23.6094 45.9517 23.2054H45.918V26.7929H44.4581V17.1539H45.8712V18.3586H45.898C46.1266 17.9566 46.4578 17.6253 46.8566 17.3998C47.2554 17.1743 47.7067 17.0631 48.1626 17.0781C49.9676 17.0781 51.1574 18.5312 51.1574 20.7758ZM49.6569 20.7758C49.6569 19.3094 48.9128 18.3453 47.7775 18.3453C46.6621 18.3453 45.9118 19.3297 45.9118 20.7758C45.9118 22.2351 46.6621 23.2125 47.7775 23.2125C48.9128 23.2125 49.6569 22.2555 49.6569 20.7758Z" fill="white" />
                                            <path d="M56.3309 21.6289C56.4391 22.614 57.3788 23.2609 58.663 23.2609C59.8934 23.2609 60.7787 22.614 60.7787 21.7257C60.7787 20.9546 60.2448 20.4929 58.9806 20.1765L57.7164 19.8663C55.9251 19.4257 55.0936 18.5726 55.0936 17.1882C55.0936 15.4742 56.5603 14.2968 58.643 14.2968C60.7043 14.2968 62.1173 15.4742 62.1649 17.1882H60.6912C60.603 16.1968 59.7983 15.5984 58.6223 15.5984C57.4463 15.5984 56.6416 16.2039 56.6416 17.0851C56.6416 17.7874 57.1556 18.2007 58.4129 18.5171L59.4876 18.7859C61.489 19.2679 62.3206 20.0867 62.3206 21.5398C62.3206 23.3984 60.8669 24.5624 58.5548 24.5624C56.3915 24.5624 54.9309 23.4257 54.8365 21.6288L56.3309 21.6289Z" fill="white" />
                                            <path d="M65.4711 15.4398V17.1539H66.8236V18.3312H65.4711V22.3242C65.4711 22.9445 65.7419 23.2336 66.3365 23.2336C66.497 23.2307 66.6573 23.2192 66.8167 23.1992V24.3695C66.5494 24.4203 66.2777 24.4434 66.0058 24.4382C64.5659 24.4382 64.0044 23.8875 64.0044 22.4828V18.3312H62.9703V17.1539H64.0044V15.4398H65.4711Z" fill="white" />
                                            <path d="M67.6069 20.7758C67.6069 18.4969 68.9248 17.0648 70.9799 17.0648C73.0419 17.0648 74.3537 18.4968 74.3537 20.7758C74.3537 23.0609 73.0488 24.4867 70.9799 24.4867C68.9117 24.4867 67.6069 23.0609 67.6069 20.7758ZM72.8663 20.7758C72.8663 19.2125 72.1628 18.2898 70.9799 18.2898C69.797 18.2898 69.0943 19.2195 69.0943 20.7758C69.0943 22.3453 69.797 23.2609 70.9799 23.2609C72.1628 23.2609 72.8663 22.3453 72.8663 20.7758Z" fill="white" />
                                            <path d="M75.5573 17.1539H76.9496V18.3867H76.9834C77.0776 18.0017 77.2991 17.6614 77.6106 17.4231C77.9222 17.1848 78.3048 17.063 78.6941 17.0781C78.8623 17.0775 79.0301 17.0961 79.1943 17.1336V18.5242C78.9819 18.4581 78.7603 18.4278 78.5383 18.4344C78.3263 18.4256 78.1148 18.4637 77.9186 18.546C77.7223 18.6283 77.5459 18.7529 77.4014 18.9112C77.2568 19.0695 77.1477 19.2578 77.0814 19.4631C77.015 19.6685 76.9931 19.886 77.0171 20.1008V24.3969H75.5573L75.5573 17.1539Z" fill="white" />
                                            <path d="M85.925 22.2695C85.7286 23.5843 84.4713 24.4867 82.8626 24.4867C80.7937 24.4867 79.5095 23.075 79.5095 20.8101C79.5095 18.5383 80.8006 17.0648 82.8012 17.0648C84.7689 17.0648 86.0063 18.4414 86.0063 20.6375V21.1469H80.9832V21.2367C80.96 21.5033 80.9928 21.7718 81.0793 22.0245C81.1658 22.2771 81.3042 22.5082 81.4851 22.7022C81.6661 22.8962 81.8855 23.0488 82.1288 23.1499C82.3721 23.2509 82.6338 23.2981 82.8964 23.2883C83.2413 23.3212 83.5875 23.2398 83.8835 23.0562C84.1794 22.8727 84.4092 22.5968 84.5388 22.2695L85.925 22.2695ZM80.9901 20.1078H84.5457C84.5588 19.8681 84.5231 19.6283 84.4409 19.4033C84.3586 19.1783 84.2316 18.9731 84.0678 18.8005C83.904 18.6279 83.707 18.4916 83.489 18.4002C83.271 18.3089 83.0369 18.2644 82.8012 18.2695C82.5635 18.2681 82.3279 18.3146 82.1079 18.4064C81.8879 18.4982 81.6879 18.6334 81.5196 18.8043C81.3512 18.9752 81.2177 19.1784 81.1268 19.4021C81.0359 19.6259 80.9895 19.8657 80.9901 20.1078Z" fill="white" />
                                            <path d="M29.7137 6.98479C30.0198 6.96242 30.3269 7.00951 30.6129 7.12265C30.8989 7.2358 31.1567 7.41218 31.3677 7.63908C31.5787 7.86598 31.7376 8.13774 31.833 8.43476C31.9283 8.73178 31.9578 9.04665 31.9192 9.35666C31.9192 10.8817 31.1099 11.7583 29.7137 11.7583H28.0207V6.98479H29.7137ZM28.7487 11.0832H29.6324C29.8511 11.0965 30.07 11.06 30.2731 10.9763C30.4761 10.8926 30.6584 10.7638 30.8064 10.5994C30.9545 10.4349 31.0647 10.2389 31.129 10.0256C31.1933 9.81234 31.2101 9.58713 31.1782 9.36639C31.2078 9.14652 31.1893 8.9227 31.124 8.71097C31.0587 8.49924 30.9482 8.30484 30.8005 8.14169C30.6528 7.97855 30.4714 7.8507 30.2695 7.76731C30.0675 7.68392 29.85 7.64706 29.6324 7.65935H28.7487V11.0832Z" fill="white" />
                                            <path d="M32.7415 9.95547C32.7193 9.71873 32.7459 9.47988 32.8196 9.25422C32.8933 9.02857 33.0125 8.82109 33.1696 8.64511C33.3266 8.46912 33.5181 8.32851 33.7316 8.23229C33.9452 8.13607 34.1761 8.08636 34.4096 8.08636C34.6432 8.08636 34.8741 8.13607 35.0876 8.23229C35.3012 8.32851 35.4926 8.46912 35.6497 8.64511C35.8068 8.82109 35.926 9.02857 35.9997 9.25422C36.0734 9.47988 36.1 9.71873 36.0777 9.95547C36.1004 10.1924 36.0741 10.4316 36.0006 10.6576C35.9271 10.8837 35.808 11.0915 35.6509 11.2679C35.4937 11.4442 35.3022 11.5851 35.0884 11.6815C34.8746 11.778 34.6434 11.8278 34.4096 11.8278C34.1758 11.8278 33.9446 11.778 33.7309 11.6815C33.5171 11.5851 33.3255 11.4442 33.1684 11.2679C33.0113 11.0915 32.8922 10.8837 32.8187 10.6576C32.7451 10.4316 32.7189 10.1924 32.7415 9.95547ZM35.3597 9.95547C35.3597 9.17461 35.0153 8.71797 34.4108 8.71797C33.804 8.71797 33.4627 9.17461 33.4627 9.95548C33.4627 10.7426 33.804 11.1957 34.4108 11.1957C35.0153 11.1957 35.3597 10.7395 35.3597 9.95547Z" fill="white" />
                                            <path d="M40.5125 11.7582H39.7884L39.0573 9.10504H39.0021L38.2741 11.7582H37.5568L36.5818 8.15582H37.2898L37.9235 10.9046H37.9757L38.7029 8.15582H39.3726L40.0998 10.9046H40.155L40.7856 8.15582H41.4837L40.5125 11.7582Z" fill="white" />
                                            <path d="M42.3037 8.15585H42.9757V8.72811H43.0279C43.1164 8.52257 43.2656 8.35028 43.4548 8.23523C43.644 8.12019 43.8638 8.06813 44.0834 8.08631C44.2555 8.07313 44.4284 8.09956 44.5891 8.16364C44.7498 8.22771 44.8943 8.3278 45.0119 8.45647C45.1295 8.58515 45.2171 8.73912 45.2683 8.90697C45.3195 9.07483 45.333 9.25227 45.3078 9.42615V11.7581H44.6097V9.60468C44.6097 9.02577 44.3627 8.73788 43.8464 8.73788C43.7295 8.73234 43.6129 8.75259 43.5044 8.79725C43.396 8.84192 43.2983 8.90994 43.2181 8.99664C43.1379 9.08335 43.077 9.1867 43.0397 9.2996C43.0023 9.41251 42.9894 9.5323 43.0018 9.65077V11.7582H42.3037L42.3037 8.15585Z" fill="white" />
                                            <path d="M46.4201 6.74957H47.1182V11.7582H46.4201V6.74957Z" fill="white" />
                                            <path d="M48.0886 9.95547C48.0663 9.71872 48.0929 9.47986 48.1667 9.25419C48.2404 9.02853 48.3596 8.82105 48.5167 8.64506C48.6738 8.46907 48.8653 8.32845 49.0788 8.23223C49.2924 8.13601 49.5233 8.0863 49.7569 8.0863C49.9904 8.0863 50.2213 8.13601 50.4349 8.23223C50.6485 8.32845 50.8399 8.46907 50.997 8.64506C51.1541 8.82105 51.2733 9.02853 51.347 9.25419C51.4208 9.47986 51.4474 9.71872 51.4252 9.95547C51.4478 10.1925 51.4215 10.4316 51.3479 10.6577C51.2744 10.8837 51.1552 11.0915 50.9981 11.2679C50.841 11.4442 50.6494 11.5851 50.4356 11.6815C50.2219 11.7779 49.9907 11.8277 49.7569 11.8277C49.5231 11.8277 49.2918 11.7779 49.0781 11.6815C48.8643 11.5851 48.6727 11.4442 48.5156 11.2679C48.3585 11.0915 48.2393 10.8837 48.1658 10.6577C48.0922 10.4316 48.0659 10.1925 48.0886 9.95547ZM50.7067 9.95547C50.7067 9.17462 50.3623 8.71798 49.7578 8.71798C49.151 8.71798 48.8097 9.17462 48.8097 9.95548C48.8097 10.7426 49.151 11.1957 49.7578 11.1957C50.3623 11.1957 50.7067 10.7395 50.7067 9.95547Z" fill="white" />
                                            <path d="M52.1601 10.7394C52.1601 10.091 52.6342 9.71716 53.4757 9.66403L54.4338 9.60778V9.29685C54.4338 8.91638 54.1868 8.70154 53.7097 8.70154C53.32 8.70154 53.05 8.84724 52.9725 9.10193H52.2966C52.368 8.48318 52.9395 8.0863 53.7419 8.0863C54.6287 8.0863 55.1289 8.5359 55.1289 9.29685V11.7582H54.4569V11.2519H54.4016C54.2895 11.4335 54.1321 11.5816 53.9454 11.6809C53.7588 11.7803 53.5496 11.8274 53.3392 11.8175C53.1907 11.8333 53.0406 11.8171 52.8986 11.7702C52.7566 11.7232 52.6258 11.6465 52.5148 11.5449C52.4037 11.4433 52.3147 11.3192 52.2536 11.1804C52.1925 11.0417 52.1607 10.8915 52.1601 10.7394ZM54.4338 10.4316V10.1304L53.5701 10.1867C53.0829 10.2199 52.862 10.3886 52.862 10.7062C52.862 11.0304 53.1382 11.2191 53.5179 11.2191C53.6292 11.2306 53.7416 11.2191 53.8484 11.1855C53.9553 11.1518 54.0544 11.0966 54.1398 11.0231C54.2253 10.9496 54.2953 10.8594 54.3458 10.7578C54.3964 10.6562 54.4263 10.5452 54.4338 10.4316Z" fill="white" />
                                            <path d="M56.0463 9.95544C56.0463 8.81716 56.6209 8.09607 57.5146 8.09607C57.7357 8.0857 57.9551 8.13962 58.1471 8.25153C58.3392 8.36345 58.4961 8.52873 58.5993 8.72807H58.6515V6.74957H59.3496V11.7582H58.6806V11.189H58.6254C58.5142 11.387 58.3519 11.5502 58.1561 11.661C57.9603 11.7718 57.7384 11.8259 57.5146 11.8175C56.6148 11.8176 56.0463 11.0965 56.0463 9.95544ZM56.7674 9.95544C56.7674 10.7195 57.1211 11.1793 57.7125 11.1793C58.3009 11.1793 58.6645 10.7129 58.6645 9.95857C58.6645 9.20779 58.2971 8.73474 57.7125 8.73474C57.1249 8.73474 56.7674 9.19763 56.7674 9.95544Z" fill="white" />
                                            <path d="M62.2377 9.95547C62.2155 9.71873 62.2421 9.47988 62.3158 9.25422C62.3895 9.02857 62.5087 8.82109 62.6658 8.64511C62.8229 8.46912 63.0143 8.32851 63.2279 8.23229C63.4414 8.13607 63.6723 8.08636 63.9059 8.08636C64.1394 8.08636 64.3703 8.13607 64.5839 8.23229C64.7974 8.32851 64.9888 8.46912 65.1459 8.64511C65.303 8.82109 65.4222 9.02857 65.4959 9.25422C65.5696 9.47988 65.5962 9.71873 65.574 9.95547C65.5966 10.1924 65.5703 10.4316 65.4968 10.6576C65.4233 10.8837 65.3042 11.0915 65.1471 11.2679C64.99 11.4442 64.7984 11.5851 64.5846 11.6815C64.3709 11.778 64.1396 11.8278 63.9059 11.8278C63.6721 11.8278 63.4409 11.778 63.2271 11.6815C63.0133 11.5851 62.8217 11.4442 62.6646 11.2679C62.5075 11.0915 62.3884 10.8837 62.3149 10.6576C62.2414 10.4316 62.2151 10.1924 62.2377 9.95547ZM64.8559 9.95547C64.8559 9.17461 64.5115 8.71797 63.907 8.71797C63.3002 8.71797 62.9589 9.17461 62.9589 9.95548C62.9589 10.7426 63.3002 11.1957 63.907 11.1957C64.5115 11.1957 64.8559 10.7395 64.8559 9.95547Z" fill="white" />
                                            <path d="M66.5106 8.15585H67.1826V8.72811H67.2348C67.3233 8.52257 67.4725 8.35028 67.6617 8.23523C67.851 8.12019 68.0707 8.06813 68.2903 8.08631C68.4625 8.07313 68.6353 8.09956 68.796 8.16364C68.9567 8.22771 69.1012 8.3278 69.2188 8.45647C69.3364 8.58515 69.424 8.73912 69.4752 8.90697C69.5265 9.07483 69.5399 9.25227 69.5147 9.42615V11.7581H68.8166V9.60468C68.8166 9.02577 68.5696 8.73788 68.0533 8.73788C67.9365 8.73234 67.8198 8.75259 67.7114 8.79725C67.6029 8.84192 67.5052 8.90994 67.425 8.99664C67.3448 9.08335 67.2839 9.1867 67.2466 9.2996C67.2092 9.41251 67.1963 9.5323 67.2087 9.65077V11.7582H66.5106V8.15585Z" fill="white" />
                                            <path d="M73.4592 7.25897V8.17225H74.2256V8.77108H73.4592V10.6234C73.4592 11.0008 73.6119 11.166 73.9594 11.166C74.0484 11.1657 74.1372 11.1602 74.2256 11.1496V11.7418C74.1002 11.7646 73.9732 11.7768 73.8459 11.7781C73.0695 11.7781 72.7604 11.5 72.7604 10.8055V8.77105H72.1989V8.17222H72.7604V7.25897H73.4592Z" fill="white" />
                                            <path d="M75.1791 6.74957H75.871V8.73473H75.9262C76.019 8.52728 76.1724 8.354 76.3654 8.23853C76.5584 8.12305 76.7817 8.07098 77.0048 8.08942C77.176 8.07993 77.3472 8.10904 77.5061 8.17468C77.665 8.24031 77.8077 8.34085 77.924 8.46912C78.0404 8.59739 78.1275 8.75023 78.1792 8.91674C78.2309 9.08325 78.2458 9.25932 78.223 9.43239V11.7582H77.5242V9.60777C77.5242 9.03238 77.261 8.74097 76.7678 8.74097C76.6478 8.73095 76.5271 8.74775 76.4142 8.79019C76.3013 8.83264 76.1988 8.8997 76.114 8.98669C76.0291 9.07368 75.964 9.17849 75.9231 9.2938C75.8822 9.40911 75.8665 9.53213 75.8772 9.65425V11.7582H75.1791L75.1791 6.74957Z" fill="white" />
                                            <path d="M82.2934 10.7855C82.1986 11.1148 81.9931 11.3995 81.7129 11.5901C81.4327 11.7806 81.0956 11.8647 80.7607 11.8277C80.5276 11.834 80.2961 11.7885 80.082 11.6945C79.8679 11.6005 79.6765 11.4601 79.5211 11.2832C79.3656 11.1063 79.2498 10.8971 79.1817 10.67C79.1136 10.4429 79.0948 10.2035 79.1267 9.96834C79.0957 9.73243 79.1148 9.49248 79.1827 9.26474C79.2507 9.03701 79.3659 8.82679 79.5205 8.64833C79.6751 8.46987 79.8656 8.32734 80.0791 8.23037C80.2925 8.1334 80.5239 8.08427 80.7576 8.0863C81.7418 8.0863 82.3356 8.7711 82.3356 9.9023V10.1504H79.8378V10.1902C79.8269 10.3224 79.8432 10.4555 79.8857 10.5809C79.9283 10.7063 79.996 10.8212 80.0847 10.9184C80.1734 11.0156 80.2811 11.0928 80.4008 11.1451C80.5205 11.1974 80.6496 11.2237 80.7799 11.2222C80.9468 11.2426 81.116 11.212 81.2659 11.1342C81.4157 11.0565 81.5395 10.9351 81.6214 10.7855L82.2934 10.7855ZM79.8378 9.62458H81.6244C81.6332 9.50368 81.6171 9.38224 81.5771 9.26807C81.5371 9.15389 81.474 9.04951 81.392 8.96162C81.31 8.87374 81.2109 8.80429 81.101 8.75775C80.991 8.71121 80.8728 8.6886 80.7538 8.69138C80.633 8.68984 80.5132 8.71292 80.4014 8.75928C80.2895 8.80564 80.1879 8.87432 80.1026 8.96129C80.0172 9.04826 79.9498 9.15176 79.9044 9.26567C79.8589 9.37959 79.8362 9.50162 79.8378 9.62458Z" fill="white" />
                                        </svg>
                                    </div>
                                    <div className='h-[47px]'>
                                        <img src="/google-play-badge.svg" className='w-full h-full object-contain' alt="gif" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Cart