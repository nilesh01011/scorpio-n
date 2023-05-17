import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { carsDetails } from '../api/CarData'
import Badge from '../components/Badge'
import Buttons from '../components/Buttons'
// import DetailPages from '../components/DetailPages'
import InputFields from '../components/InputFields'
import DeskTopNavbar from '../components/navbar/DeskTopNavbar'
import Steppers from '../components/Steppers'

function Details({ theme = "dark" }) {
    useEffect(() => {
        document.body.style.backgroundColor = "#212121"
    });

    const [checked, setChecked] = useState(false);
    const [checked_2, setChecked_2] = useState(false);

    const [checkValidity, setCheckValidity] = useState(false);

    const getExistUserName = "ashish y";
    const getExistUserEmail = "ashishy@gmail.com";

    // emails and name checks
    const [userName, setUserName] = useState(false);

    const [userEmail, setUserEmail] = useState(false);

    // forms

    // const router = useHistory();

    const handleSubmits = (e) => {
        // e.preventDefault();

        if (checked === true) {
            // router.push('/cart')
            setCheckValidity(false)
        } else {
            setCheckValidity(true);
        }
    }

    useEffect(() => {
        if (checked) {
            setCheckValidity(false)
        }
    }, [checked])

    return (
        <>
            <main className='w-full h-full text-white'>
                {/* navbar */}
                <DeskTopNavbar />
                {/* badges */}
                {/* <div className='w-full mb-[16px]'>
                    <Badge />
                </div> */}

                {/* contents */}
                <div className='w-full h-full 1x1:px-0 px-[15px] max-w-[1260px] mx-auto'>
                    {/* Steps */}
                    <div className='flex items-center justify-center mt-[12px]'>
                        <Steppers Steps={3} />
                    </div>

                    {/* main contents */}
                    <div className='w-full h-full'>
                        {/* select state city */}
                        {/* <div className='w-full ml-auto xl:mt-0 mt-[36px] xl:block hidden xl:pr-[20px]'>
                        <SelectStateCity />
                    </div> */}

                        {/* contents */}

                        <div className='w-full h-full'>
                            {/* <DetailPages /> */}
                            <div className='w-full h-full max-w-[1260px] mx-auto text-white md:mt-[50px] mt-[40px] 1x1:mb-0 lg:mb-[70px]'>
                                {/* main cars details */}
                                <div className="w-full h-full flex lg:flex-row flex-col justify-between gap-[12px]">
                                    {/* md:mt-[30px] mt-[6px] */}

                                    {/* left side cars details */}
                                    <div className="lg:w-[45%] w-full h-full flex flex-col justify-between">
                                        <div className="w-full">
                                            {/* cars title */}
                                            <div className="w-full flex items-start flex-col">
                                                {/* title */}
                                                <h2 className="text-white md:text-[26px] xs:text-[22px] text-[20px] font-bold uppercase">Scorpio-N</h2>
                                                <p className='text-white xs:text-[18px] text-[16px] font-bold'>Scorpio-N • Z8 L D AT BS6.2 • Deep Forest</p>
                                                {/* <p className='text-white xs:text-[18px] text-[16px] font-bold'>XUV400 • Electric Luxury • Black Copper</p> */}
                                                <p className='text-white md:text-[14px] text-[12px] sm:w-[80%] w-[90%] md:mt-[18px] mt-[9px] flex flex-col gap-[5px]'>
                                                    <span>Dealer</span>
                                                    <span className='font-bold'>Nbs International Ltd., 400058</span>
                                                </p>
                                            </div>
                                            {/* cars images */}
                                            {/* 1x1:mt-[30px] md:mt-[20px] mt-[8px] */}
                                            <div className="md:w-[425px] sm:w-[330px] w-full lg:mr-auto mx-auto md:h-[307px] h-[191px] md:mt-0 mt-[24px]">
                                                {/* <img src='/infinityBlue.png' alt="product-img" className='w-full h-full md:object-contain object-cover' /> */}
                                                <img src='/image 14.png' alt="product-img" className='w-full h-full object-contain' />
                                            </div>
                                        </div>
                                    </div>

                                    {/* right side select configurations */}
                                    <div id="overFlowNone" className="lg:w-[50%] w-full 1x1:h-[500px] md:h-[440px] overflow-scroll lg:mb-0 mb-[90px]">
                                        <div className='w-full h-max'>
                                            {/* titles */}
                                            <div className='flex flex-col gap-[8px]'>
                                                <h2 className='md:text-[20px] text-[16px] font-bold'>Verify your Personal Details</h2>
                                                <div className='flex items-center gap-[5px]'>
                                                    <span className='md:text-[20px] text-[16px] font-[400] capitalize'>mobile</span>
                                                    <h2 className='md:text-[20px] text-[16px] font-bold'>+91 9677732949</h2>
                                                </div>
                                            </div>

                                            {/* forms */}

                                            <form className='w-full h-max mt-[16px]'>
                                                {/* *mandatory field */}
                                                <p className={`1x1:text-[14px] text-[12px] pl-[10px] relative before:absolute before:content-["*"] before:-left-[0px] before:top-0 before:text-[#FF3E5B]`}>
                                                    Mandatory fields
                                                </p>

                                                <div className='w-full h-max flex flex-col mt-[8px]'>
                                                    <div className='flex flex-col gap-[16px]'>
                                                        <InputFields id="nameChecks" values={getExistUserName} type="text" placeholder="Enter Name" mandatory="*" validity={userName} />
                                                        <InputFields id="emailChecks" values={getExistUserEmail} type="email" placeholder="Enter Email" mandatory="*" validity={userEmail} />
                                                    </div>

                                                    <p className='text-[12px] mt-[10px] mb-[14px]'>
                                                        All booking communications will be shared on this
                                                        email address.
                                                    </p>

                                                    <div className='w-full'>
                                                        {/* checkbox 1 */}
                                                        <div className='w-full flex items-center gap-[12px]'>
                                                            <div onClick={() => setChecked(!checked)} className={`w-[18px] h-[17px] flex items-center justify-center cursor-pointer rounded-[5px] border-[1px] border-[#B2B2B2] bg-[#F4F4F4]`}>
                                                                <input type="checkbox" className={`appearance-none rounded-[5px] border-[1px] ${theme === "dark" ? 'bg-white border-0' : 'border-[#DEDEDE]'}`} />
                                                                <span className={`${checked ? 'opacity-1' : 'opacity-0'} flex items-center justify-center`}>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="8" viewBox="0 0 11 8" fill="none">
                                                                        <path d="M3.66976 7.44002C3.48551 7.44083 3.30837 7.36897 3.17676 7.24002L0.87676 4.94002C0.803483 4.87726 0.743968 4.80004 0.701952 4.7132C0.659936 4.62635 0.636325 4.53176 0.632602 4.43536C0.628878 4.33895 0.645122 4.24282 0.680314 4.15299C0.715506 4.06316 0.768886 3.98158 0.837105 3.91336C0.905323 3.84514 0.986907 3.79176 1.07673 3.75657C1.16656 3.72138 1.26269 3.70514 1.3591 3.70886C1.4555 3.71258 1.55009 3.73619 1.63694 3.77821C1.72378 3.82023 1.80101 3.87974 1.86376 3.95302L3.65776 5.74702L9.02876 0.447018C9.0933 0.381741 9.17015 0.329917 9.25487 0.294548C9.33958 0.259179 9.43046 0.240967 9.52226 0.240967C9.61406 0.240967 9.70494 0.259179 9.78966 0.294548C9.87437 0.329917 9.95122 0.381741 10.0158 0.447018C10.1461 0.578172 10.2193 0.755588 10.2193 0.940518C10.2193 1.12545 10.1461 1.30286 10.0158 1.43402L4.15176 7.22802C4.09016 7.2944 4.01561 7.34746 3.93271 7.38392C3.84981 7.42038 3.76032 7.43947 3.66976 7.44002Z" fill="#EA3A51" />
                                                                    </svg>
                                                                </span>
                                                            </div>

                                                            <div className='w-full select-none'>
                                                                <span className={`text-[12px] ${theme === "dark" ? 'text-white' : 'text-[#0B0B0C]'}`}>By clicking this, you agree to our <br />
                                                                    <b className='underline'>T&C</b> and <b className='underline'>Privacy Policy</b></span>
                                                            </div>
                                                        </div>

                                                        {
                                                            checkValidity === true &&
                                                            <div className='w-full my-[6px] flex items-center gap-[6px]'>
                                                                {/* icons */}
                                                                <div>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                                                        <path fillRule="evenodd" clipRule="evenodd" d="M7.12683 1.45855L12.5126 6.84435C12.5907 6.92246 12.5907 7.04909 12.5126 7.12719L7.12683 12.513C7.04872 12.5911 6.92209 12.5911 6.84398 12.513L1.45819 7.12719C1.38008 7.04909 1.38008 6.92246 1.45819 6.84435L6.84399 1.45855C6.92209 1.38045 7.04872 1.38045 7.12683 1.45855ZM6.2783 0.892868C6.66882 0.502344 7.30199 0.502345 7.69251 0.892869L13.0783 6.27867C13.4688 6.66919 13.4688 7.30235 13.0783 7.69288L7.69251 13.0787C7.30199 13.4692 6.66882 13.4692 6.2783 13.0787L0.892502 7.69288C0.501978 7.30235 0.501979 6.66919 0.892503 6.27867L6.2783 0.892868ZM7.38541 4.58576C7.38541 4.36485 7.20632 4.18576 6.98541 4.18576C6.76449 4.18576 6.58541 4.36485 6.58541 4.58576V7.98569C6.58541 8.2066 6.76449 8.38569 6.98541 8.38569C7.20632 8.38569 7.38541 8.2066 7.38541 7.98569V4.58576ZM7.38541 9.45166C7.38542 9.23075 7.20635 9.05165 6.98544 9.05163C6.76452 9.05162 6.58542 9.23069 6.58541 9.4516L6.58541 9.47342C6.58539 9.69434 6.76446 9.87343 6.98538 9.87345C7.20629 9.87347 7.38539 9.69439 7.38541 9.47348L7.38541 9.45166Z" fill="#FF3E5B" />
                                                                    </svg>
                                                                </div>

                                                                <span className='text-[12px] text-[#FF3E5B] capitalize'>required</span>
                                                            </div>
                                                        }

                                                        {/* checkbox 2 */}
                                                        {/* <div className='w-full flex items-center gap-[12px] mt-[10px]'>
                                                            customs checkbox
                                                            <div onClick={() => setChecked_2(!checked_2)} className={`w-[18px] h-[17px] flex items-center justify-center cursor-pointer rounded-[5px] border-[1px] border-[#B2B2B2] bg-[#F4F4F4]`}>
                                                                <input type="checkbox" className={`appearance-none rounded-[5px] border-[1px] ${theme === "dark" ? 'border-0' : 'border-[#DEDEDE]'}`} />
                                                                <span className={`${checked_2 ? 'opacity-1' : 'opacity-0'} relative`}>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="8" viewBox="0 0 11 8" fill="none">
                                                                        <path d="M3.66976 7.44002C3.48551 7.44083 3.30837 7.36897 3.17676 7.24002L0.87676 4.94002C0.803483 4.87726 0.743968 4.80004 0.701952 4.7132C0.659936 4.62635 0.636325 4.53176 0.632602 4.43536C0.628878 4.33895 0.645122 4.24282 0.680314 4.15299C0.715506 4.06316 0.768886 3.98158 0.837105 3.91336C0.905323 3.84514 0.986907 3.79176 1.07673 3.75657C1.16656 3.72138 1.26269 3.70514 1.3591 3.70886C1.4555 3.71258 1.55009 3.73619 1.63694 3.77821C1.72378 3.82023 1.80101 3.87974 1.86376 3.95302L3.65776 5.74702L9.02876 0.447018C9.0933 0.381741 9.17015 0.329917 9.25487 0.294548C9.33958 0.259179 9.43046 0.240967 9.52226 0.240967C9.61406 0.240967 9.70494 0.259179 9.78966 0.294548C9.87437 0.329917 9.95122 0.381741 10.0158 0.447018C10.1461 0.578172 10.2193 0.755588 10.2193 0.940518C10.2193 1.12545 10.1461 1.30286 10.0158 1.43402L4.15176 7.22802C4.09016 7.2944 4.01561 7.34746 3.93271 7.38392C3.84981 7.42038 3.76032 7.43947 3.66976 7.44002Z" fill="#EA3A51" />
                                                                    </svg>
                                                                </span>
                                                            </div>

                                                            <div className='w-full select-none'>
                                                                <span className={`text-[12px] ${theme === "dark" ? 'text-white' : 'text-[#0B0B0C]'}`}>Subscribe with WhatsApp</span>
                                                            </div>
                                                        </div> */}
                                                    </div>
                                                </div>
                                            </form>
                                        </div>

                                        {/* disclaimers */}
                                        {/* <div className="1x1:w-[35%] mt-[25px] mb-[90px] 1x1:fixed 1x1:bottom-[70px] md:hidden block">
                                            <p className="text-white md:text-[12px] text-[10px]">*Disclaimer: We strongly recommend using Mahindra certified charging boxes for safe and smooth charging experience. Please note that the warranty on charging cable is applicable only if used with Mahindra certified wall outlets or charging boxes. For more details please contact the Mahindra dealer near you.</p>
                                        </div> */}
                                    </div>
                                </div>
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
                            <Buttons links="/scorpio-N/dealer" title="back" outline={true} />
                            {/* <Buttons cardsItems={carsDetails} links={checked === true ? '/cart' : null} title="continue" outline={false} /> */}

                            <Link to={checked === true ? '/scorpio-N/add-to-cart' : null} onClick={() => handleSubmits()} type='button' className={`md:w-[150px] w-[120px] flex items-center justify-center md:text-[16px] text-[14px] relative z-[5] capitalize h-full before:content-[""] before:absolute before:left-0 before:right-0 before:bottom-0 before:top-0 before:md:w-[144px] before:w-[120px] before:h-[44px] before:border-[1px] before:border-[#ff3e5b] before:bg-[#ff3e5b] before:z-[-1] after:content-[""] after:absolute after:md:right-[-3px] after:right-[-10px] after:bottom-0 after:top-0 after:bg-[#ff3e5b] after:w-[2px] after:h-full text-white font-bold`}
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

export default Details