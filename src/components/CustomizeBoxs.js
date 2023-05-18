import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

function CustomizeBoxs({ title, text, links, icons, isAdded }) {
    const navigate = useNavigate();

    const handleClicks = () => {
        navigate(links);
    }

    return (
        <>
            <div onClick={() => handleClicks()} className='bg-[#333333] p-[12px] rounded-[10px] cursor-pointer flex items-center justify-between flex-col'>
                {/* title */}
                <div>
                    <div className='w-full flex items-center gap-[8px] whitespace-nowrap'>
                        <h4 className='md:text-[18px] text-[16px] font-[700]'>{title}</h4>
                        {
                            isAdded === true &&
                            <span>
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 14C10.866 14 14 10.866 14 7C14 3.13401 10.866 0 7 0C3.13401 0 0 3.13401 0 7C0 10.866 3.13401 14 7 14Z" fill="#FF3E5B" />
                                    <path d="M5.49631 9.33348C5.36738 9.33341 5.24363 9.2827 5.15171 9.19229L3.54654 7.58712C3.49889 7.54241 3.46071 7.48858 3.43428 7.42883C3.40784 7.36908 3.39368 7.30463 3.39264 7.2393C3.3916 7.17397 3.4037 7.1091 3.42822 7.04854C3.45275 6.98797 3.48919 6.93296 3.53539 6.88676C3.58159 6.84056 3.63661 6.80411 3.69717 6.77959C3.75773 6.75507 3.8226 6.74297 3.88793 6.74401C3.95326 6.74505 4.01772 6.75921 4.07747 6.78564C4.13722 6.81208 4.19104 6.85026 4.23575 6.89791L5.48854 8.15069L9.23971 4.44858C9.28478 4.40299 9.33844 4.3668 9.3976 4.3421C9.45675 4.31741 9.52021 4.30469 9.58432 4.30469C9.64842 4.30469 9.71188 4.31741 9.77103 4.3421C9.83019 4.3668 9.88385 4.40299 9.92892 4.44858C10.0192 4.54054 10.0699 4.66428 10.0699 4.79318C10.0699 4.92208 10.0192 5.04583 9.92892 5.13779L5.83314 9.18451C5.79017 9.23106 5.73811 9.2683 5.68017 9.29392C5.62224 9.31954 5.55966 9.33301 5.49631 9.33348Z" fill="white" />
                                </svg>
                            </span>
                        }
                    </div>

                    {/* text */}
                    <div className='mt-[10px]'>
                        <p className='md:max-w-[74%] max-w-[86%] md:text-[14px] text-[10px]'>{text}</p>
                    </div>
                </div>

                <div className='w-full relative flex items-end justify-between'>
                    {/* left sides */}
                    <Link to={links}>
                        <span>
                            <svg width="32" height="18" viewBox="0 0 32 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M18.1559 1.94222C18.3259 1.76091 18.6106 1.75172 18.792 1.9217L25.992 8.6717C26.0827 8.75677 26.1342 8.87561 26.1342 8.99999C26.1342 9.12437 26.0827 9.24321 25.992 9.32828L18.792 16.0783C18.6106 16.2483 18.3259 16.2391 18.1559 16.0578C17.9859 15.8765 17.9951 15.5917 18.1764 15.4217L25.0262 8.99999L18.1764 2.57828C17.9951 2.4083 17.9859 2.12353 18.1559 1.94222Z" fill="#FF3E5B" />
                                <path d="M25.4385 9.04223C23.4507 9.04223 8.04705 9.04224 0.59375 9.04224" stroke="#FF3E5B" strokeLinecap="round" />
                            </svg>
                        </span>
                    </Link>
                    {/* right sides */}
                    <div>
                        <span className='md:h-auto h-[66px]'>
                            {icons}
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CustomizeBoxs