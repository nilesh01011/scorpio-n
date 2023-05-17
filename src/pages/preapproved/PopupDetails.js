import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Buttons from '../../components/Buttons';
import InputFields from '../../components/InputFields';

function PopupDetails({ theme = 'dark', setWidth, ActivePopover, setActivePopover }) {
    // const [isLoading, setIsLoading] = useState(true);

    const handleClose = () => {
        document.body.style.overflow = "auto"
        // setIsLoading(false)
        setActivePopover(false)
    }

    const [textValue, setTextValue] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <>

            {
                ActivePopover === true &&
                <div className='w-full h-full fixed top-0 left-0 bottom-0 right-0 z-[100]'>
                    {/* overlays */}
                    <div onClick={(e) => handleClose(e)} className='z-50 w-full h-full fixed left-0 right-0 top-0 bottom-0 bg-black/90'></div>
                    {/* select place menu content */}

                    <div className={`transition-opacity w-full h-full flex items-center justify-center`}>
                        <div className={`z-[100] sm:w-[388px] xs:w-[360px] w-[330px] h-max ${theme === "dark" ? 'bg-[#212121]' : 'bg-white'} rounded-[20px] p-[20px] relative border-[1px] border-white overflow-hidden`}>
                            {/* title */}
                            <div className='w-full flex items-center justify-between mb-[10px] relative'>
                                <div>
                                    <h2 className={`${theme === "dark" ? 'text-white' : 'text-black'} font-[700] md:text-[20px] text-[18px] capitalize`}>Share PAN Details</h2>
                                    <p className='md:text-[16px] text-[14px] text-white mt-[12px] mb-[20px]'>Please share your PAN number to verify your credentials.</p>
                                </div>
                                {/* cancle button */}
                                <div onClick={() => handleClose()} className={`font-bold absolute top-1 right-0 cursor-pointer`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                        <path d="M1 1.5L15 15.5" stroke={`${theme === "dark" ? 'white' : '#0B0B0C'}`} strokeWidth="2" strokeLinecap="round" />
                                        <path d="M15 1.5L1 15.5" stroke={`${theme === "dark" ? 'white' : '#0B0B0C'}`} strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                </div>
                            </div>

                            {/* contents */}
                            <div className='w-full h-max'>

                                <div className='w-full mt-[6px] mb-[12px]'>
                                    <p className={`${theme === "dark" ? 'text-white' : 'text-black'} 1x1:text-[14px] text-[12px] pl-[5px] relative before:absolute before:content-["*"] before:-left-[1px] before:top-0 before:text-[#FF3E5B]`}>
                                        Mandatory fields
                                    </p>
                                </div>

                                {/* send OTPs */}
                                <form className='w-full h-full' onSubmit={() => handleSubmit()}>
                                    <div className='w-full h-full'>
                                        <input value={textValue} maxLength='10' placeholder='PAN No*' onChange={(e) => setTextValue(e.target.value)} type='text' className={`uppercase w-full p-[11px_16px] rounded-[5px] placeholder:capitalize bg-[#F8F8F8] placeholder:text-[#A3A3A3] text-black`} />
                                        {/* <InputFields id="otpChecks" type="number" placeholder="Enter Mobile Number" maxLength={10} mandatory="*" /> */}
                                        {/* {
                                            validity === true &&
                                            <span className='text-[10px] text-[#FF3E5B] flex items-center gap-[4px] my-[6px]'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M8.62683 2.45819L14.0126 7.84398C14.0907 7.92209 14.0907 8.04872 14.0126 8.12683L8.62683 13.5126C8.54872 13.5907 8.42209 13.5907 8.34398 13.5126L2.95819 8.12683C2.88008 8.04872 2.88008 7.92209 2.95819 7.84398L8.34399 2.45819C8.42209 2.38008 8.54872 2.38008 8.62683 2.45819ZM7.7783 1.8925C8.16882 1.50198 8.80199 1.50198 9.19251 1.8925L14.5783 7.2783C14.9688 7.66882 14.9688 8.30199 14.5783 8.69251L9.19251 14.0783C8.80199 14.4688 8.16882 14.4688 7.7783 14.0783L2.3925 8.69251C2.00198 8.30199 2.00198 7.66882 2.3925 7.2783L7.7783 1.8925ZM8.88541 5.5854C8.88541 5.36448 8.70632 5.1854 8.48541 5.1854C8.26449 5.1854 8.08541 5.36448 8.08541 5.5854V8.98532C8.08541 9.20623 8.26449 9.38532 8.48541 9.38532C8.70632 9.38532 8.88541 9.20623 8.88541 8.98532V5.5854ZM8.88541 10.4513C8.88542 10.2304 8.70635 10.0513 8.48544 10.0513C8.26452 10.0513 8.08542 10.2303 8.08541 10.4512L8.08541 10.4731C8.08539 10.694 8.26446 10.8731 8.48538 10.8731C8.70629 10.8731 8.88539 10.694 8.88541 10.4731L8.88541 10.4513Z" fill="#FF3E5B" />
                                                </svg>
                                                Please enter 10 digits mobile number
                                            </span>
                                        } */}
                                    </div>

                                    {/* <div className='w-full mt-[8px] mb-[14px]'>
                                    <span className={`sm:text-[12px] text-[10px] ${theme === "dark" ? 'text-white' : 'text-[#342C2C]'}`}>Enter your 10 digit mobile number and click below to continue</span>
                                </div> */}

                                    <div className='w-full h-[44px] flex items-center justify-center mt-[24px]'>
                                        {/* <Buttons type="submit" theme={theme} title="View Offers" outline={true} /> */}

                                        <Link onClick={() => handleClose()} to='/own-online/finance/application/detail/expanded' type='button' className={`md:text-[16px] text-[14px] relative z-[5] capitalize ${setWidth ? `` : 'flex items-center justify-center xl:w-[150px] md:w-[150px] w-[120px]'} h-full before:content-[""] before:absolute before:left-0 before:right-0 before:bottom-0 before:top-0 ${setWidth ? `before:sm:w-auto before:w-[130px]` : 'before:md:w-[144px] before:w-[120px]'} before:h-[44px] before:border-[1px] before:border-white hover:before:bg-[#ff3e5b] hover:before:border-[#ff3e5b] before:z-[-1] after:content-[""] after:absolute ${setWidth ? `after:md:-right-[10px] after:-right-[8px]` : 'after:md:right-[-3px] after:right-[-10px]'} after:bottom-0 after:top-0 after:bg-[#ff3e5b] after:w-[2px] after:h-full text-white font-bold`}
                                        >
                                            Verify
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
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default PopupDetails