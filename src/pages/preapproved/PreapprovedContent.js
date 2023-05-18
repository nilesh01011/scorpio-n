import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Buttons from '../../components/Buttons';
import DeskTopNavbar from '../../components/navbar/DeskTopNavbar';
import SelectStateCity from '../../components/SelectStateCity';
import Steppers from './Steppers';
import PopupDetails from './PopupDetails';

function PreapprovedContent({ setWidth }) {
    const widthSet = `${setWidth + 'px'}`;

    const titles = [
        {
            id: 1,
            title: 'Bank'
        },
        {
            id: 2,
            title: 'EMI'
        },
        {
            id: 3,
            title: 'Loan Amt. (opted)'
        },
        {
            id: 4,
            title: 'Loan Amt. (Max)'
        },
        {
            id: 5,
            title: 'Interest Rate'
        },
        {
            id: 6,
            title: 'Processing fees'
        },
        {
            id: 7,
            title: 'Tenure'
        },
    ];

    const contentsListOffers = [
        {
            id: 1,
            imgsrc: '/finance.svg',
            emi: '₹43 775',
            loanAmtOptd: '₹2 210 705',
            loanAmtMax: '₹2 210 705',
            interesRate: '6.99%',
            processingFees: '₹6 500',
            tenure: '60 Months'
        },
        {
            id: 2,
            imgsrc: '/finance2.svg',
            emi: '₹43 879',
            loanAmtOptd: '₹2 210 705',
            loanAmtMax: '₹2 210 705',
            interesRate: '7.1%',
            processingFees: '₹6 500',
            tenure: '60 Months'
        },
        {
            id: 3,
            imgsrc: '/finance3.svg',
            emi: '₹44 036',
            loanAmtOptd: '₹2 210 705',
            loanAmtMax: '₹2 210 705',
            interesRate: '7.25%',
            processingFees: '₹6 500',
            tenure: '60 Months'
        },
    ]

    const [isFirstActive, setIsFirstActive] = useState(1);

    const handleChooseVariant = (id) => {
        setIsFirstActive(id)
    }

    const handleClick = () => {
        const activeAccessories = true;
        localStorage.setItem("Loans", activeAccessories)
    }

    useEffect(() => {
        document.querySelector('body').style.backgroundColor = '#0B0B0C';
    })

    const [ActivePopover, setActivePopover] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <main className='w-full h-full text-white'>

                {/* navbar */}
                <DeskTopNavbar />

                {/* contents */}
                <div className='w-full h-full lg:px-0 px-[15px] max-w-[1264px] mx-auto'>
                    {/* Steps */}
                    <div className='flex items-center justify-center mt-[12px]'>
                        <Steppers Steps={2} />
                    </div>

                    {/* main contents */}

                    {/* 1x1:mb-0 mb-[90px] */}
                    <div className='w-full h-full'>
                        {/* select state and city */}
                        <div className='md:mt-[45px] mt-[40px] md:mb-[10px] mb-[7px]'>
                            <SelectStateCity />
                        </div>

                        <div className='w-full h-full'>
                            {/* titles */}
                            <div className='w-full mt-[12px] mb-[22px]'>
                                <h1 className='md:text-[26px] text-[20px] font-[700] mb-[2px]'>Pre-Approved Offers</h1>
                                <p className='md:text-[18px] text-[16px]'>Congratulations! You have 3 pre-approved offers*</p>
                            </div>

                            {/* desktops views */}
                            <div id="overFlowNone" className='w-full 1x1:h-auto h-[205px] lg:block hidden overflow-scroll'>
                                <table className='w-full h-full'>
                                    <tbody className='w-full flex items-center flex-col gap-[20px] mt-[40px]'>

                                        {
                                            contentsListOffers.map((ele) => {
                                                const { id, imgsrc, emi, loanAmtOptd, loanAmtMax, interesRate, processingFees, tenure } = ele;

                                                return (
                                                    <div onClick={() => handleChooseVariant(id)} key={id} className="flex items-center justify-between cursor-pointer w-full bg-[#333333] rounded-[10px] p-[14.5px_40px]">
                                                        {/* icons */}
                                                        <div className="w-[40px]">
                                                            {
                                                                isFirstActive && isFirstActive === id ? (
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                                                        <path d="M9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18Z" fill="#FF3E5B" />
                                                                        <path d="M6.59252 12.97C6.377 12.9698 6.17015 12.8851 6.01652 12.734L3.33352 10.051C3.25387 9.97623 3.19006 9.88626 3.14587 9.78639C3.10168 9.68652 3.07801 9.57878 3.07628 9.46959C3.07454 9.36039 3.09476 9.25196 3.13575 9.15073C3.17674 9.0495 3.23766 8.95755 3.31488 8.88032C3.3921 8.8031 3.48406 8.74218 3.58529 8.70119C3.68651 8.66021 3.79495 8.63998 3.90414 8.64172C4.01334 8.64346 4.12108 8.66712 4.22095 8.71131C4.32082 8.7555 4.41079 8.81932 4.48552 8.89896L6.57952 10.993L12.8495 4.80496C12.9248 4.72877 13.0145 4.66828 13.1134 4.62699C13.2123 4.58571 13.3184 4.56445 13.4255 4.56445C13.5327 4.56445 13.6387 4.58571 13.7376 4.62699C13.8365 4.66828 13.9262 4.72877 14.0015 4.80496C14.1525 4.95867 14.2371 5.16551 14.2371 5.38096C14.2371 5.59641 14.1525 5.80325 14.0015 5.95696L7.15552 12.721C7.0837 12.7988 6.99667 12.861 6.89984 12.9038C6.803 12.9467 6.6984 12.9692 6.59252 12.97Z" fill="white" />
                                                                    </svg>
                                                                ) : (
                                                                    <div className="w-[18px] h-[18px] rounded-full border-[1px] border-white"></div>
                                                                )
                                                            }
                                                        </div>

                                                        {/* imgs */}
                                                        <div className='w-[135px] flex items-center gap-[6px] relative'>
                                                            {/* imgs */}
                                                            <div className='w-max bg-white rounded-[10px] p-[12px_16px]'>
                                                                <img src={imgsrc} className={`h-[25px] w-[79px] ${id === 2 ? 'object-cover' : 'object-contain'}`} alt='finance-images' />
                                                            </div>

                                                            {
                                                                id === 1 &&
                                                                <span className='text-[#FF3E5B] text-[14px] absolute top-[30%] -right-[50px]'>
                                                                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                                                        <path d="M9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18Z" fill="#707070" />
                                                                        <path d="M8.3793 13.9841V7.38405H9.4933V13.9841H8.3793ZM8.9503 6.02105C8.74809 6.02746 8.55116 5.95585 8.4003 5.82105C8.32768 5.75651 8.27002 5.6769 8.23134 5.58778C8.19265 5.49866 8.17387 5.40217 8.1763 5.30505C8.17241 5.20671 8.1905 5.10873 8.22925 5.01826C8.268 4.92779 8.32643 4.84709 8.4003 4.78205C8.55179 4.64831 8.74828 4.57686 8.9503 4.58205C9.15231 4.57686 9.3488 4.64831 9.5003 4.78205C9.57417 4.84709 9.6326 4.92779 9.67135 5.01826C9.7101 5.10873 9.72819 5.20671 9.7243 5.30505C9.72673 5.40217 9.70795 5.49866 9.66926 5.58778C9.63057 5.6769 9.57291 5.75651 9.5003 5.82105C9.34944 5.95585 9.15251 6.02746 8.9503 6.02105Z" fill="white" />
                                                                        </svg> 
                                                                    */}
                                                                    Best Offer
                                                                </span>
                                                            }

                                                            {/* absolute */}

                                                            {
                                                                id === 1 &&
                                                                <span className='w-max absolute -top-[110%] left-[25%] text-[16px] font-[700]'>
                                                                    Bank
                                                                </span>
                                                            }
                                                        </div>

                                                        {/* emi */}
                                                        <div className='w-[135px] relative text-center'>
                                                            <span className='text-[16px] font-[400]'>{emi}</span>

                                                            {/* absolute */}

                                                            {
                                                                id === 1 &&
                                                                <span className='w-max absolute -top-[280%] left-[40%] text-[16px] font-[700]'>
                                                                    EMI
                                                                </span>
                                                            }
                                                        </div>

                                                        {/* loanAmtOptd */}
                                                        <div className='w-[135px] relative text-center'>
                                                            <span className='text-[16px] font-[400]'>{loanAmtOptd}</span>

                                                            {/* absolute */}

                                                            {
                                                                id === 1 &&
                                                                <span className='w-max absolute -top-[280%] -left-[5%] text-[16px] font-[700]'>
                                                                    Loan Amt. (opted)
                                                                </span>
                                                            }
                                                        </div>

                                                        {/* loanAmtMax */}
                                                        <div className='w-[135px] relative text-center'>
                                                            <span className='text-[16px] font-[400]'>{loanAmtMax}</span>

                                                            {/* absolute */}

                                                            {
                                                                id === 1 &&
                                                                <span className='w-max absolute -top-[280%] left-[5%] text-[16px] font-[700]'>
                                                                    Loan Amt. (Max)
                                                                </span>
                                                            }
                                                        </div>

                                                        {/* interesRate */}
                                                        <div className='w-[135px] text-center relative'>
                                                            <span className='text-[16px] font-[400]'>{interesRate}</span>

                                                            {/* absolute */}

                                                            {
                                                                id === 1 &&
                                                                <span className='w-max absolute -top-[280%] left-[10%] text-[16px] font-[700]'>
                                                                    Interest Rate
                                                                </span>
                                                            }
                                                        </div>

                                                        {/* processingFees */}
                                                        <div className='w-[135px] relative text-center'>
                                                            <span className='text-[16px] font-[400]'>{processingFees}</span>

                                                            {/* absolute */}

                                                            {
                                                                id === 1 &&
                                                                <span className='w-max absolute -top-[280%] left-[10%] text-[16px] font-[700]'>
                                                                    Processing fees
                                                                </span>
                                                            }
                                                        </div>

                                                        {/* tenure */}
                                                        <div className='w-[135px] relative text-center'>
                                                            <span className='text-[16px] font-[400]'>{tenure}</span>

                                                            {/* absolute */}

                                                            {
                                                                id === 1 &&
                                                                <span className='w-max absolute -top-[280%] left-[30%] text-[16px] font-[700]'>
                                                                    Tenure
                                                                </span>
                                                            }
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>

                            {/* mobiles views */}
                            <div className='w-full h-full lg:hidden block'>

                                <div className='flex items-center flex-col gap-[20px]'>
                                    {
                                        contentsListOffers.map((ele) => {
                                            const { id, imgsrc, emi, loanAmtOptd, loanAmtMax, interesRate, processingFees, tenure } = ele;

                                            return (
                                                <div onClick={() => handleChooseVariant(id)} key={id} className={`w-full h-[276px] bg-[#242424] rounded-[10px] ${isFirstActive === id && 'border-[1px] border-[#FF3E5B]'} p-[12.5px_14.5px] divide-y-[1px] divide-[#707070]`}>
                                                    {/* header */}
                                                    <div className='w-full flex items-center justify-between sm:pb-[15px] pb-[10px]'>
                                                        {/* imgs */}
                                                        <div className='w-max flex items-center gap-[6px]'>
                                                            {/* imgs */}
                                                            <div className='w-max bg-white rounded-[10px] p-[12px_16px]'>
                                                                <img src={imgsrc} className={`sm:h-[34px] h-[24px] sm:w-[121px] w-[80px] ${id === 2 ? 'object-cover' : 'object-contain'}`} alt='finance-images' />
                                                            </div>

                                                            {/* <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                    <path d="M9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18Z" fill="#707070" />
                                    <path d="M8.3793 13.9841V7.38405H9.4933V13.9841H8.3793ZM8.9503 6.02105C8.74809 6.02746 8.55116 5.95585 8.4003 5.82105C8.32768 5.75651 8.27002 5.6769 8.23134 5.58778C8.19265 5.49866 8.17387 5.40217 8.1763 5.30505C8.17241 5.20671 8.1905 5.10873 8.22925 5.01826C8.268 4.92779 8.32643 4.84709 8.4003 4.78205C8.55179 4.64831 8.74828 4.57686 8.9503 4.58205C9.15231 4.57686 9.3488 4.64831 9.5003 4.78205C9.57417 4.84709 9.6326 4.92779 9.67135 5.01826C9.7101 5.10873 9.72819 5.20671 9.7243 5.30505C9.72673 5.40217 9.70795 5.49866 9.66926 5.58778C9.63057 5.6769 9.57291 5.75651 9.5003 5.82105C9.34944 5.95585 9.15251 6.02746 8.9503 6.02105Z" fill="white" />
                                </svg>
                            </span> */}
                                                            {
                                                                id === 1 &&
                                                                <span className='text-[#FF3E5B] text-[14px] ml-[5px]'>
                                                                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                        <path d="M9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18Z" fill="#707070" />
                                        <path d="M8.3793 13.9841V7.38405H9.4933V13.9841H8.3793ZM8.9503 6.02105C8.74809 6.02746 8.55116 5.95585 8.4003 5.82105C8.32768 5.75651 8.27002 5.6769 8.23134 5.58778C8.19265 5.49866 8.17387 5.40217 8.1763 5.30505C8.17241 5.20671 8.1905 5.10873 8.22925 5.01826C8.268 4.92779 8.32643 4.84709 8.4003 4.78205C8.55179 4.64831 8.74828 4.57686 8.9503 4.58205C9.15231 4.57686 9.3488 4.64831 9.5003 4.78205C9.57417 4.84709 9.6326 4.92779 9.67135 5.01826C9.7101 5.10873 9.72819 5.20671 9.7243 5.30505C9.72673 5.40217 9.70795 5.49866 9.66926 5.58778C9.63057 5.6769 9.57291 5.75651 9.5003 5.82105C9.34944 5.95585 9.15251 6.02746 8.9503 6.02105Z" fill="white" />
                                        </svg> 
                                    */}
                                                                    Best Offer
                                                                </span>
                                                            }
                                                        </div>

                                                        {/* icons */}
                                                        <div className="w-[40px]">
                                                            {
                                                                isFirstActive && isFirstActive === id ? (
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                                                        <path d="M9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18Z" fill="#FF3E5B" />
                                                                        <path d="M6.59252 12.97C6.377 12.9698 6.17015 12.8851 6.01652 12.734L3.33352 10.051C3.25387 9.97623 3.19006 9.88626 3.14587 9.78639C3.10168 9.68652 3.07801 9.57878 3.07628 9.46959C3.07454 9.36039 3.09476 9.25196 3.13575 9.15073C3.17674 9.0495 3.23766 8.95755 3.31488 8.88032C3.3921 8.8031 3.48406 8.74218 3.58529 8.70119C3.68651 8.66021 3.79495 8.63998 3.90414 8.64172C4.01334 8.64346 4.12108 8.66712 4.22095 8.71131C4.32082 8.7555 4.41079 8.81932 4.48552 8.89896L6.57952 10.993L12.8495 4.80496C12.9248 4.72877 13.0145 4.66828 13.1134 4.62699C13.2123 4.58571 13.3184 4.56445 13.4255 4.56445C13.5327 4.56445 13.6387 4.58571 13.7376 4.62699C13.8365 4.66828 13.9262 4.72877 14.0015 4.80496C14.1525 4.95867 14.2371 5.16551 14.2371 5.38096C14.2371 5.59641 14.1525 5.80325 14.0015 5.95696L7.15552 12.721C7.0837 12.7988 6.99667 12.861 6.89984 12.9038C6.803 12.9467 6.6984 12.9692 6.59252 12.97Z" fill="white" />
                                                                    </svg>
                                                                ) : (
                                                                    <div className="w-[18px] h-[18px] rounded-full border-[1px] border-white"></div>
                                                                )
                                                            }
                                                        </div>

                                                    </div>

                                                    {/* bottom */}
                                                    <div className='pt-[14px] flex items-center justify-between'>
                                                        {/* left sides */}
                                                        <div className='w-max flex items-start flex-col gap-[8px]'>

                                                            {
                                                                titles.slice(1).map((ele) => {
                                                                    const { id, title } = ele;

                                                                    return (
                                                                        <span key={id} className='text-[14px] font-[400]'>{title}</span>
                                                                    )
                                                                })
                                                            }
                                                        </div>

                                                        {/* right sides */}
                                                        <div className='w-max flex items-start flex-col gap-[8px]'>
                                                            <span className='text-[14px] font-[400]'>{emi}</span>
                                                            <span className='text-[14px] font-[400]'>{loanAmtOptd}</span>
                                                            <span className='text-[14px] font-[400]'>{loanAmtMax}</span>
                                                            <span className='text-[14px] font-[400]'>{interesRate}</span>
                                                            <span className='text-[14px] font-[400]'>{processingFees}</span>
                                                            <span className='text-[14px] font-[400]'>{tenure}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>

                            {/* bottom skips */}

                            <div className='w-full mt-[20px] text-right mb-[90px]'>
                                <span className='text-[14px] font-[400] text-[#FF3E5B]'>Skip to Additional Offers</span>
                            </div>

                            {/* disclaimers */}
                            <div className="1x1:mb-[20px] 1x1:mt-[70px] fixed bottom-[70px] md:block hidden">
                                <p className="text-white md:text-[12px] text-[10px]">*Disclaimer: The information presented on this Website is made available solely for general information purposes. <span className='underline'>Read More</span></p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* footer */}
                {/* see disclaimers */}
                <div id='footer' className="fixed bottom-0 left-0 right-0 h-max w-full mt-0 bg-[#313131]">
                    {/* main footer */}
                    <div className="w-full h-[70px] px-[35px] flex items-center justify-center max-w-[1280px] mx-auto">
                        <div className="h-[44px] flex items-center justify-center gap-8">
                            <Buttons links="/scorpio-N/add-to-cart" title="back" outline={true} />
                            {/* <Buttons links="/xuv400/add-to-cart" title="continue" outline={false} /> */}

                            {/* to='/xuv400/add-to-cart' */}
                            <Link to='' onClick={() => setActivePopover(true)} type='button' className={`md:text-[16px] text-[14px] relative z-[5] capitalize ${setWidth ? `` : 'flex items-center justify-center xl:w-[150px] md:w-[150px] w-[116px]'} h-full before:content-[""] before:absolute before:left-0 before:right-0 before:bottom-0 before:top-0 ${setWidth ? `before:sm:w-auto before:w-[126px]` : 'before:md:w-[144px] before:w-[116px]'} before:h-[44px] before:border-[1px] before:bg-[#ff3e5b] before:border-[#ff3e5b] before:z-[-1] after:content-[""] after:absolute ${setWidth ? `after:md:-right-[10px] after:-right-[8px]` : 'after:md:right-[-3px] after:right-[-10px]'} after:bottom-0 after:top-0 after:bg-[#ff3e5b] after:w-[2px] after:h-full dark:text-white font-bold`}
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

            <PopupDetails ActivePopover={ActivePopover} setActivePopover={setActivePopover} />
        </>
    )
}

export default PreapprovedContent