import React, { useEffect, useRef, useState } from 'react'
import DeskTopNavbar from '../components/navbar/DeskTopNavbar'
import Buttons from '../components/Buttons'
import { Link } from 'react-router-dom'
import Steppers from './preapproved/Steppers';
import SelectBox from '../components/SelectBox';
import InputFields from './exclusive-benefits/InputFields';
// import InputFields from '../components/InputFields';

function MoreDetailPages({ setWidth, theme = 'dark' }) {
    const widthSet = `${setWidth + 'px'}`;

    // box 1
    const [showContents, setShowContents] = useState(true);

    // box 2
    const [showContents2, setShowContents2] = useState(true);

    // box 3
    const [showContents3, setShowContents3] = useState(true);

    // box 4
    const [showContents4, setShowContents4] = useState(true);

    useEffect(() => {
        document.querySelector('body').style.backgroundColor = '#0B0B0C';
    })

    const gender = [
        {
            id: 1,
            name: 'Male',
        },
        {
            id: 2,
            name: 'Female',
        },
        {
            id: 3,
            name: 'Other',
        }
    ]

    const proof = [
        {
            id: 1,
            name: 'Proof 1'
        },
        {
            id: 2,
            name: 'Proof 2'
        },
        {
            id: 3,
            name: 'Proof 3'
        }
    ]


    const handleClicks = () => {
        const loan = true;
        localStorage.setItem("Loans", loan)
    }

    return (
        <>
            <main className='w-full h-full text-white'>
                {/* navbar */}
                <DeskTopNavbar />

                {/* contents */}
                <div className='w-full h-full 1x1:px-0 px-[15px] max-w-[1264px] mx-auto'>
                    {/* Steps */}
                    <div className='flex items-center justify-center mt-[12px]'>
                        <Steppers Steps={3} />
                    </div>

                    {/* main contents */}

                    <div className='w-full h-full'>
                        {/* titles */}
                        <div className='w-full mt-[36px] mb-[22px]'>
                            <h1 className='md:text-[26px] text-[20px] font-[700] mb-[12px]'>Share More Details to Complete Application</h1>
                            <p className='1x1:text-[14px] text-[12px]'> <span className='text-[#FF3E5B]'>*</span>Mandatory field</p>
                        </div>

                        {/* contents box */}

                        <div className='w-full flex items-center flex-col gap-[20px] mb-[100px]'>
                            {/* box 1 */}
                            {/* <div className='w-full h-full divide-y-[1px] divide-[#707070]'>
                                <div onClick={() => setShowContents(!showContents)} className={`cursor-pointer p-[20px] flex items-center justify-between w-full h-auto bg-[#242424] text-white ${showContents === true ? 'rounded-[10px_10px_0_0] pb-[18px]' : 'rounded-[10px]'}`}>
                                    text
                                    <div className='flex items-center gap-[20px]'>
                                        prices
                                        <div className='flex items-center gap-2'>
                                            <h2 className={`md:text-[18px] text-[16px] font-bold select-none`}>
                                                Personal Details
                                            </h2>
                                        </div>

                                    </div>
                                    icons
                                    <div className='h-[20px] flex items-center'>
                                        <svg width="20" className={`${showContents === false && 'rotate-180'}`} height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M19.0588 11.2377C19.3005 11.0111 19.3128 10.6314 19.0862 10.3897L10.0862 0.789657C9.97273 0.668667 9.81428 0.600022 9.64844 0.600022C9.48259 0.600022 9.32414 0.668667 9.21071 0.789657L0.210714 10.3897C-0.0159245 10.6314 -0.00367548 11.0111 0.238071 11.2377C0.47982 11.4644 0.859522 11.4521 1.08616 11.2104L9.64844 2.07729L18.2107 11.2104C18.4374 11.4521 18.8171 11.4644 19.0588 11.2377Z" fill={`white`} />
                                        </svg>
                                    </div>
                                </div>

                                contents

                                {
                                    showContents &&
                                    <div className={`w-full bg-[#242424] h-max pt-[12px] p-[20px] rounded-[0_0_10px_10px] text-white`}>
                                        grid systems
                                        <div className='w-full h-full grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[20px]'>
                                            select box 1
                                            <div className='w-full flex items-start flex-col gap-[12px]'>
                                                <div>
                                                    <span className='font-semibold'>Father’s Name</span>
                                                </div>
                                                <InputFields theme={theme} inputType="text" maxLength={15} placeholder="Enter Name" />
                                            </div>
                                            select box 2
                                            <div className='w-full flex items-start flex-col gap-[12px]'>
                                                <div>
                                                    <span className='font-semibold'>Mother’s Name</span>
                                                </div>
                                                <InputFields theme={theme} inputType="text" maxLength={15} placeholder="Enter Name" />
                                            </div>
                                            select box 3
                                            <div className='w-full flex items-start flex-col gap-[12px]'>
                                                <div>
                                                    <span className='font-semibold'>Gender</span>
                                                </div>

                                                <div className='w-full'>
                                                    <SelectBox theme={theme} items={gender} placeholder="select Gender" mandatory="" />
                                                </div>
                                            </div>

                                            select box 4
                                            <div className='w-full flex items-start flex-col gap-[12px]'>
                                                <div>
                                                    <span className='font-semibold'>Spouse’s Name</span>
                                                </div>
                                                <InputFields theme={theme} inputType="text" maxLength={15} placeholder="Enter Name" />
                                            </div>
                                        </div>
                                    </div>
                                }
                            </div> */}

                            {/* box 2 */}
                            {/* <div className='w-full h-full divide-y-[1px] divide-[#707070]'>
                                <div onClick={() => setShowContents2(!showContents2)} className={`cursor-pointer p-[20px] flex items-center justify-between w-full h-auto bg-[#242424] text-white ${showContents2 === true ? 'rounded-[10px_10px_0_0] pb-[18px]' : 'rounded-[10px]'}`}>
                                    text
                                    <div className='flex items-center gap-[20px]'>
                                        prices
                                        <div className='flex items-center gap-2'>
                                            <h2 className={`md:text-[18px] text-[16px] font-bold select-none`}>
                                                Residential  Details
                                            </h2>
                                        </div>

                                    </div>
                                    icons
                                    <div className='h-[20px] flex items-center'>
                                        <svg width="20" className={`${showContents2 === false && 'rotate-180'}`} height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M19.0588 11.2377C19.3005 11.0111 19.3128 10.6314 19.0862 10.3897L10.0862 0.789657C9.97273 0.668667 9.81428 0.600022 9.64844 0.600022C9.48259 0.600022 9.32414 0.668667 9.21071 0.789657L0.210714 10.3897C-0.0159245 10.6314 -0.00367548 11.0111 0.238071 11.2377C0.47982 11.4644 0.859522 11.4521 1.08616 11.2104L9.64844 2.07729L18.2107 11.2104C18.4374 11.4521 18.8171 11.4644 19.0588 11.2377Z" fill={`white`} />
                                        </svg>
                                    </div>
                                </div>

                                contents

                                {
                                    showContents2 &&
                                    <div className={`w-full bg-[#242424] h-max pt-[12px] p-[20px] rounded-[0_0_10px_10px] text-white`}>
                                        grid systems
                                        <div className='w-full h-full grid sm:grid-cols-2 grid-cols-1 gap-[20px]'>
                                            select box 1
                                            <div className='w-full flex items-start flex-col gap-[12px]'>
                                                <div>
                                                    <span className='font-semibold'>Address 1</span>
                                                </div>
                                                <InputFields theme={theme} inputType="text" maxLength={15} placeholder="Enter Address" />
                                            </div>
                                            select box 2
                                            <div className='w-full flex items-start flex-col gap-[12px]'>
                                                <div>
                                                    <span className='font-semibold'>Address 2</span>
                                                </div>
                                                <InputFields theme={theme} inputType="text" maxLength={15} placeholder="Enter Address" />
                                            </div>
                                        </div>
                                    </div>
                                }
                            </div> */}

                            {/* box 3 */}
                            {/* <div className='w-full h-full divide-y-[1px] divide-[#707070]'>
                                <div onClick={() => setShowContents3(!showContents3)} className={`cursor-pointer p-[20px] flex items-center justify-between w-full h-auto bg-[#242424] text-white ${showContents3 === true ? 'rounded-[10px_10px_0_0] pb-[18px]' : 'rounded-[10px]'}`}>
                                    text
                                    <div className='flex items-center gap-[20px]'>
                                        prices
                                        <div className='flex items-center gap-2'>
                                            <h2 className={`md:text-[18px] text-[16px] font-bold select-none`}>
                                                Employment Details
                                            </h2>
                                        </div>

                                    </div>
                                    icons
                                    <div className='h-[20px] flex items-center'>
                                        <svg width="20" className={`${showContents3 === false && 'rotate-180'}`} height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M19.0588 11.2377C19.3005 11.0111 19.3128 10.6314 19.0862 10.3897L10.0862 0.789657C9.97273 0.668667 9.81428 0.600022 9.64844 0.600022C9.48259 0.600022 9.32414 0.668667 9.21071 0.789657L0.210714 10.3897C-0.0159245 10.6314 -0.00367548 11.0111 0.238071 11.2377C0.47982 11.4644 0.859522 11.4521 1.08616 11.2104L9.64844 2.07729L18.2107 11.2104C18.4374 11.4521 18.8171 11.4644 19.0588 11.2377Z" fill={`white`} />
                                        </svg>
                                    </div>
                                </div>

                                contents

                                {
                                    showContents3 &&
                                    <div className={`w-full bg-[#242424] h-max pt-[12px] p-[20px] rounded-[0_0_10px_10px] text-white`}>
                                        grid systems
                                        <div className='w-full h-full grid sm:grid-cols-2 grid-cols-1 gap-[20px]'>
                                            select box 1
                                            <div className='w-full flex items-start flex-col gap-[12px]'>
                                                <div>
                                                    <span className='font-semibold'>Office Address</span>
                                                </div>
                                                <InputFields theme={theme} inputType="text" maxLength={15} placeholder="Enter Office Address" />
                                            </div>
                                        </div>
                                    </div>
                                }
                            </div> */}

                            {/* box 4 */}
                            <div className='w-full h-full divide-y-[1px] divide-[#707070]'>
                                {/* border-b-[1px] border-[#707070] */}
                                <div onClick={() => setShowContents4(!showContents4)} className={`cursor-pointer p-[20px] flex items-center justify-between w-full h-auto bg-[#242424] text-white ${showContents4 === true ? 'rounded-[10px_10px_0_0] pb-[18px]' : 'rounded-[10px]'}`}>
                                    {/* text */}
                                    <div className='flex items-center gap-[20px]'>
                                        {/* prices */}
                                        <div className='flex items-center gap-2'>
                                            <h2 className={`md:text-[18px] text-[16px] font-bold select-none`}>
                                                Document Upload
                                            </h2>
                                        </div>

                                    </div>
                                    {/* icons */}
                                    <div className='h-[20px] flex items-center'>
                                        <svg width="20" className={`${showContents4 === false && 'rotate-180'}`} height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M19.0588 11.2377C19.3005 11.0111 19.3128 10.6314 19.0862 10.3897L10.0862 0.789657C9.97273 0.668667 9.81428 0.600022 9.64844 0.600022C9.48259 0.600022 9.32414 0.668667 9.21071 0.789657L0.210714 10.3897C-0.0159245 10.6314 -0.00367548 11.0111 0.238071 11.2377C0.47982 11.4644 0.859522 11.4521 1.08616 11.2104L9.64844 2.07729L18.2107 11.2104C18.4374 11.4521 18.8171 11.4644 19.0588 11.2377Z" fill={`white`} />
                                        </svg>
                                    </div>
                                </div>

                                {/* contents */}

                                {
                                    showContents4 &&
                                    <div className={`w-full bg-[#242424] h-max pt-[12px] p-[20px] rounded-[0_0_10px_10px] text-white`}>
                                        {/* grid systems */}
                                        <div className='w-full h-full grid md:grid-cols-4 sm:grid-cols-2 gap-[20px]'>
                                            {/* select box 1 */}
                                            <div className='w-full flex items-start flex-col gap-[12px]'>
                                                <div>
                                                    <span className='font-semibold'>Proof of Identity<span className='text-[#FF3E5B]'>*</span></span>
                                                </div>
                                                <div className='w-full'>
                                                    <SelectBox theme={theme} items={proof} placeholder="select Gender" mandatory="" />
                                                </div>
                                                <form onClick={() => document.querySelector('#input-fieldsOne').click()} className='w-full flex items-center relative justify-center p-[14px] rounded-[10px] border-[1px] border-dashed border-[#707070] cursor-pointer'>
                                                    <input type="file" id="input-fieldsOne" className="w-full text-slate-500 file:hidden appearance-none hidden" hidden />

                                                    <span>
                                                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M24.0002 16.121V21.373C24.0093 22.0601 23.7452 22.7227 23.2659 23.2151C22.7866 23.7075 22.1313 23.9895 21.4442 23.999H3.55623C2.86912 23.9895 2.21389 23.7075 1.73459 23.2151C1.25529 22.7227 0.991147 22.0601 1.00023 21.373V16.121" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M18.752 7.565L12.5 1L6.25195 7.565" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M12.5 1V16.757" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    </span>
                                                </form>
                                            </div>
                                            {/* select box 2 */}
                                            <div className='w-full flex items-start flex-col gap-[12px]'>
                                                <div>
                                                    <span className='font-semibold'>Proof of Address<span className='text-[#FF3E5B]'>*</span></span>
                                                </div>
                                                <div className='w-full'>
                                                    <SelectBox theme={theme} items={proof} placeholder="select" mandatory="" />
                                                </div>

                                                <form onClick={() => document.querySelector('#input-fieldsOne').click()} className='w-full flex items-center relative justify-center p-[14px] rounded-[10px] border-[1px] border-dashed border-[#707070] cursor-pointer'>
                                                    <input type="file" id="input-fieldsOne" className="w-full text-slate-500 file:hidden appearance-none hidden" hidden />

                                                    <span>
                                                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M24.0002 16.121V21.373C24.0093 22.0601 23.7452 22.7227 23.2659 23.2151C22.7866 23.7075 22.1313 23.9895 21.4442 23.999H3.55623C2.86912 23.9895 2.21389 23.7075 1.73459 23.2151C1.25529 22.7227 0.991147 22.0601 1.00023 21.373V16.121" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M18.752 7.565L12.5 1L6.25195 7.565" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M12.5 1V16.757" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    </span>
                                                </form>
                                            </div>
                                            {/* select box 3 */}
                                            <div className='w-full flex items-start flex-col gap-[12px]'>
                                                <div>
                                                    <span className='font-semibold'>Income Proof<span className='text-[#FF3E5B]'>*</span></span>
                                                </div>
                                                <div className='w-full'>
                                                    <SelectBox theme={theme} items={proof} placeholder="select" mandatory="" />
                                                </div>
                                                <form onClick={() => document.querySelector('#input-fieldsOne').click()} className='w-full flex items-center relative justify-center p-[14px] rounded-[10px] border-[1px] border-dashed border-[#707070] cursor-pointer'>
                                                    <input type="file" id="input-fieldsOne" className="w-full text-slate-500 file:hidden appearance-none hidden" hidden />

                                                    <span>
                                                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M24.0002 16.121V21.373C24.0093 22.0601 23.7452 22.7227 23.2659 23.2151C22.7866 23.7075 22.1313 23.9895 21.4442 23.999H3.55623C2.86912 23.9895 2.21389 23.7075 1.73459 23.2151C1.25529 22.7227 0.991147 22.0601 1.00023 21.373V16.121" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M18.752 7.565L12.5 1L6.25195 7.565" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M12.5 1V16.757" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    </span>
                                                </form>
                                            </div>
                                            {/* select box 4 */}
                                            <div className='w-full flex items-start flex-col gap-[12px]'>
                                                <div>
                                                    <span className='font-semibold'>Bank Statement<span className='text-[#FF3E5B]'>*</span></span>
                                                </div>
                                                <div className='w-full'>
                                                    <SelectBox theme={theme} items={proof} placeholder="select" mandatory="" />
                                                </div>
                                                <form onClick={() => document.querySelector('#input-fieldsOne').click()} className='w-full flex items-center relative justify-center p-[14px] rounded-[10px] border-[1px] border-dashed border-[#707070] cursor-pointer'>
                                                    <input type="file" id="input-fieldsOne" className="w-full text-slate-500 file:hidden appearance-none hidden" hidden />

                                                    <span>
                                                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M24.0002 16.121V21.373C24.0093 22.0601 23.7452 22.7227 23.2659 23.2151C22.7866 23.7075 22.1313 23.9895 21.4442 23.999H3.55623C2.86912 23.9895 2.21389 23.7075 1.73459 23.2151C1.25529 22.7227 0.991147 22.0601 1.00023 21.373V16.121" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M18.752 7.565L12.5 1L6.25195 7.565" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M12.5 1V16.757" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    </span>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                }
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
                            <Buttons links="/own-online/finance/pre-approved/" title="back" outline={true} />
                            {/* <Buttons links="/xuv400/add-to-cart" title="continue" outline={false} /> */}

                            {/* <Link to='/scorpio-N/add-to-cart' type='button' className={`cursor-not-allowed md:text-[16px] text-[14px] relative z-[5] capitalize ${setWidth ? `` : 'flex items-center justify-center xl:w-[150px] md:w-[150px] w-[116px]'} h-full before:content-[""] before:absolute before:left-0 before:right-0 before:bottom-0 before:top-0 ${setWidth ? `before:sm:w-auto before:w-[126px]` : 'before:md:w-[144px] before:w-[116px]'} before:h-[44px] before:border-[1px] before:bg-[#ff3e5b]/60 before:border-[#ff3e5b]/60 before:z-[-1] after:content-[""] after:absolute ${setWidth ? `after:md:-right-[10px] after:-right-[8px]` : 'after:md:right-[-3px] after:right-[-10px]'} after:bottom-0 after:top-0 after:bg-[#ff3e5b]/60 after:w-[2px] after:h-full text-white/60 font-bold`}
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
                            </Link> */}

                            <Link to='/scorpio-N/add-to-cart' onClick={() => handleClicks()} type='button' className={`md:text-[16px] text-[14px] relative z-[5] capitalize ${setWidth ? `` : 'flex items-center justify-center xl:w-[150px] md:w-[150px] w-[116px]'} h-full before:content-[""] before:absolute before:left-0 before:right-0 before:bottom-0 before:top-0 ${setWidth ? `before:sm:w-auto before:w-[126px]` : 'before:md:w-[144px] before:w-[116px]'} before:h-[44px] before:border-[1px] before:bg-[#ff3e5b] before:border-[#ff3e5b] before:z-[-1] after:content-[""] after:absolute ${setWidth ? `after:md:-right-[10px] after:-right-[8px]` : 'after:md:right-[-3px] after:right-[-10px]'} after:bottom-0 after:top-0 after:bg-[#ff3e5b] after:w-[2px] after:h-full text-white font-bold`}
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

export default MoreDetailPages