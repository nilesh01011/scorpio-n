import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Buttons from '../components/Buttons';
import DeskTopNavbar from '../components/navbar/DeskTopNavbar';

function Merchandise({ setWidth }) {
    const widthSet = `${setWidth + 'px'}`;

    const handleClick = () => {
        const activeAccessories = true;
        localStorage.setItem("Merchandise", activeAccessories)
    }

    const [selectOne, setSelectOne] = useState(false);
    const [selectTwo, setSelectTwo] = useState(false);
    const [selectThree, setSelectThree] = useState(false);
    const [selectFour, setSelectFour] = useState(false);
    const [selectFive, setSelectFive] = useState(false);
    const [selectSix, setSelectSix] = useState(false);
    const [selectSeven, setSelectSeven] = useState(false);
    const [selectEight, setSelectEight] = useState(false);

    // counter items

    const [counter, setCounter] = useState(0)

    const [totlePrices, setTotalPrices] = useState(0);

    function increaseCount(prices) {
        setCounter(counter + 1);

        setTotalPrices((prevPrice) => prevPrice + prices);
    }

    function decreaseCount(prices) {
        setCounter(counter - 1);

        setTotalPrices((prevPrice) => prevPrice - prices);
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <main className='w-full h-full text-white'>
            {/* navbar */}
            <DeskTopNavbar />

            <div className='max-w-[1260px] mx-auto mb-[20px] 1x1:px-0 px-[15px]'>
                {/* titles and searches */}
                <div className='w-full pt-[18px] sticky top-[67px] z-50 bg-[#212121]'>
                    <div className='flex sm:flex-row flex-col sm:gap-0 gap-[5px] sm:justify-between sm:items-center'>
                        {/* titles */}
                        <div className="w-full">
                            <h1 className={`text-white md:text-[26px] text-[20px] font-bold flex items-center gap-[9px]`}>
                                Merchandise
                                {
                                    counter !== 0 &&
                                    <div>
                                        <span className='md:text-[26px] text-[20px] font-[700]'>(Total: ₹{new Intl.NumberFormat('en-IN').format(totlePrices)})</span>
                                    </div>
                                }
                            </h1>
                        </div>

                        {/* searchs boxs */}
                        <div className='w-auto'>
                            <div className='sm:w-[286px] w-full h-[36px] relative'>
                                <input type="search" placeholder='Search for Accessories' className={`w-full p-[8px_16px] pr-[36px] rounded-[5px] placeholder:capitalize 1x1:placeholder:text-[14px] placeholder:text-[12px] bg-[#191919] text-white placeholder:text-[#635D5D]`} style={{ border: '1px solid #635D5D' }} />

                                <div className='h-[16px] absolute right-[14px] top-[10px]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M15.7881 13.8289L12.6703 10.7135C12.5999 10.6434 12.5164 10.588 12.4245 10.5505C12.3326 10.513 12.2341 10.4941 12.1349 10.495H11.6253C12.6436 9.19083 13.1259 7.54761 12.9738 5.90034C12.8217 4.25308 12.0467 2.72583 10.8068 1.63001C9.56693 0.534185 7.95556 -0.0476787 6.30126 0.00305985C4.64696 0.0537984 3.07431 0.733318 1.904 1.90306C0.733679 3.0728 0.0538249 4.64468 0.00306136 6.29816C-0.0477022 7.95165 0.534448 9.56223 1.63081 10.8015C2.72717 12.0408 4.25517 12.8154 5.90324 12.9674C7.55132 13.1194 9.19535 12.6374 10.5001 11.6196V12.1289C10.4993 12.2281 10.5182 12.3265 10.5557 12.4184C10.5932 12.5103 10.6487 12.5938 10.7187 12.664L13.8357 15.7794C13.9051 15.8493 13.9877 15.9048 14.0786 15.9427C14.1696 15.9805 14.2672 16 14.3657 16C14.4642 16 14.5618 15.9805 14.6528 15.9427C14.7437 15.9048 14.8263 15.8493 14.8957 15.7794L15.7809 14.8947C15.9213 14.7535 16 14.5626 16 14.3635C16 14.1645 15.9213 13.9736 15.7809 13.8324L15.7881 13.8289ZM6.50247 10.495C5.71092 10.495 4.93716 10.2604 4.27901 9.82081C3.62087 9.38127 3.10791 8.75653 2.805 8.0256C2.50209 7.29467 2.42283 6.49037 2.57725 5.71442C2.73168 4.93847 3.11284 4.22571 3.67255 3.66628C4.23225 3.10685 4.94536 2.72588 5.72169 2.57153C6.49803 2.41718 7.30272 2.4964 8.03401 2.79916C8.7653 3.10192 9.39034 3.61463 9.8301 4.27245C10.2699 4.93027 10.5046 5.70366 10.5046 6.49481C10.5049 7.02022 10.4017 7.54054 10.2007 8.02602C9.99965 8.51149 9.70487 8.95261 9.33317 9.32412C8.96147 9.69564 8.52014 9.99028 8.03442 10.1912C7.54871 10.3921 7.02813 10.4953 6.50247 10.495Z" fill={`#635D5D`} />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full mt-[1rem] pb-[18px]'>
                        <h6 className={`text-white text-[18px] font-bold`}>Interior ({counter} Selected)</h6>
                    </div>
                </div>

                {/* contents */}
                <div className='w-full h-full 1x1:mb-[90px] mb-[80px]'>
                    {/* <AccessoriesBox accessories={exteriorBox} title="Exterior" selected="1 Selected" /> */}
                    {/* <AccessoriesComponentsTwo /> */}
                    <div className='w-full h-full'>
                        {/* grid-cols-2 */}
                        {/* md:h-full h-[350px] overflow-scroll */}
                        <div id="overFlowNone" className='w-full h-full select-none'>
                            {/* md:w-full w-max h-auto md:grid md:grid-cols-4 gap-[15px] flex justify-start items-center */}
                            <div className='w-full h-auto grid lg:grid-cols-4 grid-cols-2 gap-[15px]'>
                                {/* accessories box one */}
                                {/* md:w-full w-[245px] */}
                                <div className="w-full relative max-h-[260px] shadow-md rounded-[10px]">
                                    {/* absolutes */}
                                    <div className='absolute left-3 top-3'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z" fill="#707070" />
                                            <path d="M7.44824 12.4298V6.56317H8.43846V12.4298H7.44824ZM7.95579 5.35161C7.77605 5.35731 7.601 5.29366 7.4669 5.17383C7.40236 5.11646 7.3511 5.0457 7.31672 4.96648C7.28233 4.88726 7.26563 4.8015 7.26779 4.71517C7.26434 4.62775 7.28042 4.54066 7.31486 4.46024C7.3493 4.37982 7.40125 4.30809 7.4669 4.25028C7.60157 4.1314 7.77623 4.06789 7.95579 4.0725C8.13536 4.06789 8.31002 4.1314 8.44468 4.25028C8.51034 4.30809 8.56228 4.37982 8.59673 4.46024C8.63117 4.54066 8.64725 4.62775 8.64379 4.71517C8.64596 4.8015 8.62926 4.88726 8.59487 4.96648C8.56048 5.0457 8.50923 5.11646 8.44468 5.17383C8.31058 5.29366 8.13554 5.35731 7.95579 5.35161Z" fill="white" />
                                        </svg>
                                    </div>

                                    {/* head sides */}
                                    <div className='max-w-full h-[180px] overflow-hidden flex items-center justify-center bg-[#DEDEDE] rounded-[10px_10px_0_0]'>
                                        <img src='/image 14.png' alt="accessories-Img" className='w-full h-[120px] object-contain rounded-[10px_10px_0_0]' />
                                    </div>

                                    {/* bottoms sides */}
                                    <div className={`relative w-full h-max rounded-[0_0_10px_10px] bg-[#191919] p-[14px_12px] flex md:items-end md:flex-row md:gap-0 gap-[10px] flex-col md:justify-between`}>
                                        <div className='h-full'>
                                            <p className={`text-white 1x1:text-[14px] xs:text-[12px] text-[11px]`}>Mahindra Scorpio-N</p>
                                            <p className={`text-white 1x1:text-[14px] xs:text-[12px] text-[11px]`}>Scale Model</p>
                                        </div>

                                        {/* prices */}
                                        <div className='flex items-center gap-[6px]'>
                                            <h2 className={`text-white font-bold md:text-[16px] text-[10px]`}>₹2 650.00</h2>
                                            {/* icons */}
                                            {
                                                selectOne === true &&
                                                <div className='h-[19px]'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
                                                        <path d="M9 18.8655C13.9706 18.8655 18 14.836 18 9.86548C18 4.89492 13.9706 0.865479 9 0.865479C4.02944 0.865479 0 4.89492 0 9.86548C0 14.836 4.02944 18.8655 9 18.8655Z" fill="#FF3E5B" />
                                                        <path d="M7.06564 12.8656C6.89987 12.8655 6.74076 12.8003 6.62258 12.6841L4.55879 10.6203C4.49753 10.5628 4.44844 10.4936 4.41445 10.4168C4.38046 10.34 4.36226 10.2571 4.36092 10.1731C4.35958 10.0891 4.37514 10.0057 4.40667 9.92783C4.4382 9.84996 4.48505 9.77923 4.54446 9.71983C4.60386 9.66043 4.67459 9.61357 4.75246 9.58204C4.83032 9.55051 4.91373 9.53495 4.99772 9.53629C5.08172 9.53763 5.16459 9.55583 5.24141 9.58983C5.31823 9.62382 5.38744 9.6729 5.44492 9.73416L7.05564 11.3449L11.8786 6.58502C11.9365 6.52642 12.0055 6.47989 12.0816 6.44813C12.1576 6.41638 12.2392 6.40002 12.3216 6.40002C12.4041 6.40002 12.4857 6.41638 12.5617 6.44813C12.6378 6.47989 12.7068 6.52642 12.7647 6.58502C12.8808 6.70326 12.9459 6.86236 12.9459 7.02809C12.9459 7.19382 12.8808 7.35292 12.7647 7.47115L7.49871 12.6741C7.44346 12.7339 7.37652 12.7818 7.30204 12.8148C7.22755 12.8477 7.14709 12.865 7.06564 12.8656Z" fill="white" />
                                                    </svg>
                                                </div>
                                            }
                                        </div>

                                        {/* add buttons */}
                                        {
                                            selectOne === true ? (
                                                <div onClick={() => { setSelectOne(!selectOne); decreaseCount(2650); }} className='text-black absolute md:-top-[25%] -top-[15%] right-3 sm:h-[36px] h-[28px] sm:w-[36px] w-[28px] rounded-full bg-white cursor-pointer flex items-center justify-center'>

                                                    <div className='sm:h-[19px] h-[15px] flex items-center justify-center'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="3" viewBox="0 0 18 3" fill="none">
                                                            <rect width="18" height="3" fill="#FF3E5B" />
                                                        </svg>
                                                    </div>

                                                </div>
                                            ) : (
                                                <div onClick={() => { setSelectOne(!selectOne); increaseCount(2650) }} className='text-black absolute md:-top-[25%] -top-[15%] right-3 sm:h-[36px] h-[28px] sm:w-[36px] w-[28px] rounded-full bg-white cursor-pointer flex items-center justify-center'>

                                                    <div className='sm:h-[19px] h-[15px]'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" className='sm:h-[19px] h-[15px]' width="19" height="21" viewBox="0 0 19 21" fill="none">
                                                            <path d="M8.03805 20.353V11.873H0.123047V9.17302H8.03805V0.692017H10.865V9.17302H18.78V11.873H10.865V20.353H8.03805Z" fill="#FF3E5B" />
                                                        </svg>
                                                    </div>

                                                </div>
                                            )
                                        }
                                    </div>
                                </div>
                                {/* accessories box two */}
                                <div className="mw-full relative max-h-[260px] shadow-md rounded-[10px]">
                                    {/* absolutes */}
                                    <div className='absolute left-3 top-3'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z" fill="#707070" />
                                            <path d="M7.44824 12.4298V6.56317H8.43846V12.4298H7.44824ZM7.95579 5.35161C7.77605 5.35731 7.601 5.29366 7.4669 5.17383C7.40236 5.11646 7.3511 5.0457 7.31672 4.96648C7.28233 4.88726 7.26563 4.8015 7.26779 4.71517C7.26434 4.62775 7.28042 4.54066 7.31486 4.46024C7.3493 4.37982 7.40125 4.30809 7.4669 4.25028C7.60157 4.1314 7.77623 4.06789 7.95579 4.0725C8.13536 4.06789 8.31002 4.1314 8.44468 4.25028C8.51034 4.30809 8.56228 4.37982 8.59673 4.46024C8.63117 4.54066 8.64725 4.62775 8.64379 4.71517C8.64596 4.8015 8.62926 4.88726 8.59487 4.96648C8.56048 5.0457 8.50923 5.11646 8.44468 5.17383C8.31058 5.29366 8.13554 5.35731 7.95579 5.35161Z" fill="white" />
                                        </svg>
                                    </div>

                                    {/* head sides */}
                                    <div className='max-w-full h-[180px] overflow-hidden bg-[#DEDEDE] flex items-center justify-center rounded-[10px_10px_0_0]'>
                                        <img src='/merchandiseTwo.png' alt="accessories-Img" className='w-full h-[160px] object-contain rounded-[10px_10px_0_0]' />
                                    </div>

                                    {/* bottoms sides */}
                                    <div className={`relative w-full h-max rounded-[0_0_10px_10px] bg-[#191919] p-[14px_12px] flex md:items-end md:flex-row md:gap-0 gap-[10px] flex-col md:justify-between`}>
                                        <div className='h-full'>
                                            <p className={`text-white 1x1:text-[14px] xs:text-[12px] text-[11px]`}>Insulated </p>
                                            <p className={`text-white 1x1:text-[14px] xs:text-[12px] text-[11px]`}>Sipper Cup</p>
                                        </div>

                                        {/* prices */}
                                        <div className='flex items-center gap-[6px]'>
                                            <h2 className={`text-white font-bold md:text-[16px] text-[10px]`}>₹650.00</h2>
                                            {/* icons */}
                                            {
                                                selectTwo === true &&
                                                <div className='h-[19px]'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
                                                        <path d="M9 18.8655C13.9706 18.8655 18 14.836 18 9.86548C18 4.89492 13.9706 0.865479 9 0.865479C4.02944 0.865479 0 4.89492 0 9.86548C0 14.836 4.02944 18.8655 9 18.8655Z" fill="#FF3E5B" />
                                                        <path d="M7.06564 12.8656C6.89987 12.8655 6.74076 12.8003 6.62258 12.6841L4.55879 10.6203C4.49753 10.5628 4.44844 10.4936 4.41445 10.4168C4.38046 10.34 4.36226 10.2571 4.36092 10.1731C4.35958 10.0891 4.37514 10.0057 4.40667 9.92783C4.4382 9.84996 4.48505 9.77923 4.54446 9.71983C4.60386 9.66043 4.67459 9.61357 4.75246 9.58204C4.83032 9.55051 4.91373 9.53495 4.99772 9.53629C5.08172 9.53763 5.16459 9.55583 5.24141 9.58983C5.31823 9.62382 5.38744 9.6729 5.44492 9.73416L7.05564 11.3449L11.8786 6.58502C11.9365 6.52642 12.0055 6.47989 12.0816 6.44813C12.1576 6.41638 12.2392 6.40002 12.3216 6.40002C12.4041 6.40002 12.4857 6.41638 12.5617 6.44813C12.6378 6.47989 12.7068 6.52642 12.7647 6.58502C12.8808 6.70326 12.9459 6.86236 12.9459 7.02809C12.9459 7.19382 12.8808 7.35292 12.7647 7.47115L7.49871 12.6741C7.44346 12.7339 7.37652 12.7818 7.30204 12.8148C7.22755 12.8477 7.14709 12.865 7.06564 12.8656Z" fill="white" />
                                                    </svg>
                                                </div>
                                            }
                                        </div>

                                        {/* add buttons */}
                                        {
                                            selectTwo === true ? (
                                                <div onClick={() => { setSelectTwo(!selectTwo); decreaseCount(650) }} className='text-black absolute md:-top-[25%] -top-[15%] right-3 sm:h-[36px] h-[28px] sm:w-[36px] w-[28px] rounded-full bg-white cursor-pointer flex items-center justify-center'>

                                                    <div className='sm:h-[19px] h-[15px] flex items-center justify-center'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="3" viewBox="0 0 18 3" fill="none">
                                                            <rect width="18" height="3" fill="#FF3E5B" />
                                                        </svg>
                                                    </div>

                                                </div>
                                            ) : (
                                                <div onClick={() => { setSelectTwo(!selectTwo); increaseCount(650) }} className='text-black absolute md:-top-[25%] -top-[15%] right-3 sm:h-[36px] h-[28px] sm:w-[36px] w-[28px] rounded-full bg-white cursor-pointer flex items-center justify-center'>

                                                    <div className='sm:h-[19px] h-[15px]'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" className='sm:h-[19px] h-[15px]' width="19" height="21" viewBox="0 0 19 21" fill="none">
                                                            <path d="M8.03805 20.353V11.873H0.123047V9.17302H8.03805V0.692017H10.865V9.17302H18.78V11.873H10.865V20.353H8.03805Z" fill="#FF3E5B" />
                                                        </svg>
                                                    </div>

                                                </div>
                                            )
                                        }
                                    </div>
                                </div>
                                {/* accessories box three */}
                                <div className="w-full relative max-h-[260px] shadow-md rounded-[10px]">
                                    {/* absolutes */}
                                    <div className='absolute left-3 top-3'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z" fill="#707070" />
                                            <path d="M7.44824 12.4298V6.56317H8.43846V12.4298H7.44824ZM7.95579 5.35161C7.77605 5.35731 7.601 5.29366 7.4669 5.17383C7.40236 5.11646 7.3511 5.0457 7.31672 4.96648C7.28233 4.88726 7.26563 4.8015 7.26779 4.71517C7.26434 4.62775 7.28042 4.54066 7.31486 4.46024C7.3493 4.37982 7.40125 4.30809 7.4669 4.25028C7.60157 4.1314 7.77623 4.06789 7.95579 4.0725C8.13536 4.06789 8.31002 4.1314 8.44468 4.25028C8.51034 4.30809 8.56228 4.37982 8.59673 4.46024C8.63117 4.54066 8.64725 4.62775 8.64379 4.71517C8.64596 4.8015 8.62926 4.88726 8.59487 4.96648C8.56048 5.0457 8.50923 5.11646 8.44468 5.17383C8.31058 5.29366 8.13554 5.35731 7.95579 5.35161Z" fill="white" />
                                        </svg>
                                    </div>

                                    {/* head sides */}
                                    <div className='max-w-full h-[180px] overflow-hidden flex items-center justify-center bg-[#DEDEDE] rounded-[10px_10px_0_0]'>
                                        <img src='/merchandiseThree.png' alt="accessories-Img" className='w-full h-[160px] object-contain rounded-[10px_10px_0_0]' />
                                    </div>

                                    {/* bottoms sides */}
                                    <div className={`relative w-full h-max rounded-[0_0_10px_10px] bg-[#191919] p-[14px_12px] flex md:items-end md:flex-row md:gap-0 gap-[10px] flex-col md:justify-between`}>
                                        <div className='h-full'>
                                            <p className={`text-white 1x1:text-[14px] xs:text-[12px] text-[11px]`}>Mahindra Rise Dairy </p>
                                            <p className={`text-white 1x1:text-[14px] xs:text-[12px] text-[11px]`}>- Black</p>
                                        </div>

                                        {/* prices */}
                                        <div className='flex items-center gap-[6px]'>
                                            <h2 className={`text-white font-bold md:text-[16px] text-[10px]`}>₹270.00</h2>
                                            {/* icons */}
                                            {
                                                selectThree === true &&
                                                <div className='h-[19px]'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
                                                        <path d="M9 18.8655C13.9706 18.8655 18 14.836 18 9.86548C18 4.89492 13.9706 0.865479 9 0.865479C4.02944 0.865479 0 4.89492 0 9.86548C0 14.836 4.02944 18.8655 9 18.8655Z" fill="#FF3E5B" />
                                                        <path d="M7.06564 12.8656C6.89987 12.8655 6.74076 12.8003 6.62258 12.6841L4.55879 10.6203C4.49753 10.5628 4.44844 10.4936 4.41445 10.4168C4.38046 10.34 4.36226 10.2571 4.36092 10.1731C4.35958 10.0891 4.37514 10.0057 4.40667 9.92783C4.4382 9.84996 4.48505 9.77923 4.54446 9.71983C4.60386 9.66043 4.67459 9.61357 4.75246 9.58204C4.83032 9.55051 4.91373 9.53495 4.99772 9.53629C5.08172 9.53763 5.16459 9.55583 5.24141 9.58983C5.31823 9.62382 5.38744 9.6729 5.44492 9.73416L7.05564 11.3449L11.8786 6.58502C11.9365 6.52642 12.0055 6.47989 12.0816 6.44813C12.1576 6.41638 12.2392 6.40002 12.3216 6.40002C12.4041 6.40002 12.4857 6.41638 12.5617 6.44813C12.6378 6.47989 12.7068 6.52642 12.7647 6.58502C12.8808 6.70326 12.9459 6.86236 12.9459 7.02809C12.9459 7.19382 12.8808 7.35292 12.7647 7.47115L7.49871 12.6741C7.44346 12.7339 7.37652 12.7818 7.30204 12.8148C7.22755 12.8477 7.14709 12.865 7.06564 12.8656Z" fill="white" />
                                                    </svg>
                                                </div>
                                            }
                                        </div>

                                        {/* add buttons */}
                                        {
                                            selectThree === true ? (
                                                <div onClick={() => { setSelectThree(!selectThree); decreaseCount(270); }} className='text-black absolute md:-top-[25%] -top-[15%] right-3 sm:h-[36px] h-[28px] sm:w-[36px] w-[28px] rounded-full bg-white cursor-pointer flex items-center justify-center'>

                                                    <div className='sm:h-[19px] h-[15px] flex items-center justify-center'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="3" viewBox="0 0 18 3" fill="none">
                                                            <rect width="18" height="3" fill="#FF3E5B" />
                                                        </svg>
                                                    </div>

                                                </div>
                                            ) : (
                                                <div onClick={() => { setSelectThree(!selectThree); increaseCount(270); }} className='text-black absolute md:-top-[25%] -top-[15%] right-3 sm:h-[36px] h-[28px] sm:w-[36px] w-[28px] rounded-full bg-white cursor-pointer flex items-center justify-center'>

                                                    <div className='sm:h-[19px] h-[15px]'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" className='sm:h-[19px] h-[15px]' width="19" height="21" viewBox="0 0 19 21" fill="none">
                                                            <path d="M8.03805 20.353V11.873H0.123047V9.17302H8.03805V0.692017H10.865V9.17302H18.78V11.873H10.865V20.353H8.03805Z" fill="#FF3E5B" />
                                                        </svg>
                                                    </div>

                                                </div>
                                            )
                                        }
                                    </div>
                                </div>
                                {/* accessories box four */}
                                <div className="w-full relative max-h-[260px] shadow-md rounded-[10px]">
                                    {/* absolutes */}
                                    <div className='absolute left-3 top-3'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z" fill="#707070" />
                                            <path d="M7.44824 12.4298V6.56317H8.43846V12.4298H7.44824ZM7.95579 5.35161C7.77605 5.35731 7.601 5.29366 7.4669 5.17383C7.40236 5.11646 7.3511 5.0457 7.31672 4.96648C7.28233 4.88726 7.26563 4.8015 7.26779 4.71517C7.26434 4.62775 7.28042 4.54066 7.31486 4.46024C7.3493 4.37982 7.40125 4.30809 7.4669 4.25028C7.60157 4.1314 7.77623 4.06789 7.95579 4.0725C8.13536 4.06789 8.31002 4.1314 8.44468 4.25028C8.51034 4.30809 8.56228 4.37982 8.59673 4.46024C8.63117 4.54066 8.64725 4.62775 8.64379 4.71517C8.64596 4.8015 8.62926 4.88726 8.59487 4.96648C8.56048 5.0457 8.50923 5.11646 8.44468 5.17383C8.31058 5.29366 8.13554 5.35731 7.95579 5.35161Z" fill="white" />
                                        </svg>
                                    </div>

                                    {/* head sides */}
                                    <div className='max-w-full h-[180px] overflow-hidden flex items-center justify-center bg-[#DEDEDE] rounded-[10px_10px_0_0]'>
                                        <img src='/merchandiseFour.png' alt="accessories-Img" className='w-full h-[160px] object-contain rounded-[10px_10px_0_0]' />
                                    </div>

                                    {/* bottoms sides */}
                                    <div className={`relative w-full h-max rounded-[0_0_10px_10px] bg-[#191919] p-[14px_12px] flex md:items-end md:flex-row md:gap-0 gap-[10px] flex-col md:justify-between`}>
                                        <div className='h-full'>
                                            <p className={`text-white 1x1:text-[14px] xs:text-[12px] text-[11px]`}>Mahindra Rise Branding </p>
                                            <p className={`text-white 1x1:text-[14px] xs:text-[12px] text-[11px]`}>100% Cotton T-shirts Red</p>
                                        </div>

                                        {/* prices */}
                                        <div className='flex items-center gap-[6px]'>
                                            <h2 className={`text-white font-bold md:text-[16px] text-[10px]`}>₹870.00</h2>
                                            {/* icons */}
                                            {
                                                selectFour === true &&
                                                <div className='h-[19px]'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
                                                        <path d="M9 18.8655C13.9706 18.8655 18 14.836 18 9.86548C18 4.89492 13.9706 0.865479 9 0.865479C4.02944 0.865479 0 4.89492 0 9.86548C0 14.836 4.02944 18.8655 9 18.8655Z" fill="#FF3E5B" />
                                                        <path d="M7.06564 12.8656C6.89987 12.8655 6.74076 12.8003 6.62258 12.6841L4.55879 10.6203C4.49753 10.5628 4.44844 10.4936 4.41445 10.4168C4.38046 10.34 4.36226 10.2571 4.36092 10.1731C4.35958 10.0891 4.37514 10.0057 4.40667 9.92783C4.4382 9.84996 4.48505 9.77923 4.54446 9.71983C4.60386 9.66043 4.67459 9.61357 4.75246 9.58204C4.83032 9.55051 4.91373 9.53495 4.99772 9.53629C5.08172 9.53763 5.16459 9.55583 5.24141 9.58983C5.31823 9.62382 5.38744 9.6729 5.44492 9.73416L7.05564 11.3449L11.8786 6.58502C11.9365 6.52642 12.0055 6.47989 12.0816 6.44813C12.1576 6.41638 12.2392 6.40002 12.3216 6.40002C12.4041 6.40002 12.4857 6.41638 12.5617 6.44813C12.6378 6.47989 12.7068 6.52642 12.7647 6.58502C12.8808 6.70326 12.9459 6.86236 12.9459 7.02809C12.9459 7.19382 12.8808 7.35292 12.7647 7.47115L7.49871 12.6741C7.44346 12.7339 7.37652 12.7818 7.30204 12.8148C7.22755 12.8477 7.14709 12.865 7.06564 12.8656Z" fill="white" />
                                                    </svg>
                                                </div>
                                            }
                                        </div>

                                        {/* add buttons */}
                                        {
                                            selectFour === true ? (
                                                <div onClick={() => { setSelectFour(!selectFour); decreaseCount(870); }} className='text-black absolute md:-top-[25%] -top-[15%] right-3 sm:h-[36px] h-[28px] sm:w-[36px] w-[28px] rounded-full bg-white cursor-pointer flex items-center justify-center'>

                                                    <div className='sm:h-[19px] h-[15px] flex items-center justify-center'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="3" viewBox="0 0 18 3" fill="none">
                                                            <rect width="18" height="3" fill="#FF3E5B" />
                                                        </svg>
                                                    </div>

                                                </div>
                                            ) : (
                                                <div onClick={() => { setSelectFour(!selectFour); increaseCount(870); }} className='text-black absolute md:-top-[25%] -top-[15%] right-3 sm:h-[36px] h-[28px] sm:w-[36px] w-[28px] rounded-full bg-white cursor-pointer flex items-center justify-center'>

                                                    <div className='sm:h-[19px] h-[15px]'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" className='sm:h-[19px] h-[15px]' width="19" height="21" viewBox="0 0 19 21" fill="none">
                                                            <path d="M8.03805 20.353V11.873H0.123047V9.17302H8.03805V0.692017H10.865V9.17302H18.78V11.873H10.865V20.353H8.03805Z" fill="#FF3E5B" />
                                                        </svg>
                                                    </div>

                                                </div>
                                            )
                                        }
                                    </div>
                                </div>
                                {/* accessories box five */}
                                <div className="w-full relative max-h-[260px] shadow-md rounded-[10px]">
                                    {/* absolutes */}
                                    <div className='absolute left-3 top-3'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z" fill="#707070" />
                                            <path d="M7.44824 12.4298V6.56317H8.43846V12.4298H7.44824ZM7.95579 5.35161C7.77605 5.35731 7.601 5.29366 7.4669 5.17383C7.40236 5.11646 7.3511 5.0457 7.31672 4.96648C7.28233 4.88726 7.26563 4.8015 7.26779 4.71517C7.26434 4.62775 7.28042 4.54066 7.31486 4.46024C7.3493 4.37982 7.40125 4.30809 7.4669 4.25028C7.60157 4.1314 7.77623 4.06789 7.95579 4.0725C8.13536 4.06789 8.31002 4.1314 8.44468 4.25028C8.51034 4.30809 8.56228 4.37982 8.59673 4.46024C8.63117 4.54066 8.64725 4.62775 8.64379 4.71517C8.64596 4.8015 8.62926 4.88726 8.59487 4.96648C8.56048 5.0457 8.50923 5.11646 8.44468 5.17383C8.31058 5.29366 8.13554 5.35731 7.95579 5.35161Z" fill="white" />
                                        </svg>
                                    </div>

                                    {/* head sides */}
                                    <div className='max-w-full h-[180px] overflow-hidden flex items-center justify-center bg-[#DEDEDE] rounded-[10px_10px_0_0]'>
                                        <img src='/image 14.png' alt="accessories-Img" className='w-full h-[120px] object-contain rounded-[10px_10px_0_0]' />
                                    </div>

                                    {/* bottoms sides */}
                                    <div className={`relative w-full h-max rounded-[0_0_10px_10px] bg-[#191919] p-[14px_12px] flex md:items-end md:flex-row md:gap-0 gap-[10px] flex-col md:justify-between`}>
                                        <div className='h-full'>
                                            <p className={`text-white 1x1:text-[14px] xs:text-[12px] text-[11px]`}>Mahindra Scorpio-N</p>
                                            <p className={`text-white 1x1:text-[14px] xs:text-[12px] text-[11px]`}>Scale Model</p>
                                        </div>

                                        {/* prices */}
                                        <div className='flex items-center gap-[6px]'>
                                            <h2 className={`text-white font-bold md:text-[16px] text-[10px]`}>₹2 650.00</h2>
                                            {/* icons */}
                                            {
                                                selectFive === true &&
                                                <div className='h-[19px]'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
                                                        <path d="M9 18.8655C13.9706 18.8655 18 14.836 18 9.86548C18 4.89492 13.9706 0.865479 9 0.865479C4.02944 0.865479 0 4.89492 0 9.86548C0 14.836 4.02944 18.8655 9 18.8655Z" fill="#FF3E5B" />
                                                        <path d="M7.06564 12.8656C6.89987 12.8655 6.74076 12.8003 6.62258 12.6841L4.55879 10.6203C4.49753 10.5628 4.44844 10.4936 4.41445 10.4168C4.38046 10.34 4.36226 10.2571 4.36092 10.1731C4.35958 10.0891 4.37514 10.0057 4.40667 9.92783C4.4382 9.84996 4.48505 9.77923 4.54446 9.71983C4.60386 9.66043 4.67459 9.61357 4.75246 9.58204C4.83032 9.55051 4.91373 9.53495 4.99772 9.53629C5.08172 9.53763 5.16459 9.55583 5.24141 9.58983C5.31823 9.62382 5.38744 9.6729 5.44492 9.73416L7.05564 11.3449L11.8786 6.58502C11.9365 6.52642 12.0055 6.47989 12.0816 6.44813C12.1576 6.41638 12.2392 6.40002 12.3216 6.40002C12.4041 6.40002 12.4857 6.41638 12.5617 6.44813C12.6378 6.47989 12.7068 6.52642 12.7647 6.58502C12.8808 6.70326 12.9459 6.86236 12.9459 7.02809C12.9459 7.19382 12.8808 7.35292 12.7647 7.47115L7.49871 12.6741C7.44346 12.7339 7.37652 12.7818 7.30204 12.8148C7.22755 12.8477 7.14709 12.865 7.06564 12.8656Z" fill="white" />
                                                    </svg>
                                                </div>
                                            }
                                        </div>

                                        {/* add buttons */}
                                        {
                                            selectFive === true ? (
                                                <div onClick={() => { setSelectFive(!selectFive); decreaseCount(2650); }} className='text-black absolute md:-top-[25%] -top-[15%] right-3 sm:h-[36px] h-[28px] sm:w-[36px] w-[28px] rounded-full bg-white cursor-pointer flex items-center justify-center'>

                                                    <div className='sm:h-[19px] h-[15px] flex items-center justify-center'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="3" viewBox="0 0 18 3" fill="none">
                                                            <rect width="18" height="3" fill="#FF3E5B" />
                                                        </svg>
                                                    </div>

                                                </div>
                                            ) : (
                                                <div onClick={() => { setSelectFive(!selectFive); increaseCount(2650) }} className='text-black absolute md:-top-[25%] -top-[15%] right-3 sm:h-[36px] h-[28px] sm:w-[36px] w-[28px] rounded-full bg-white cursor-pointer flex items-center justify-center'>

                                                    <div className='sm:h-[19px] h-[15px]'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" className='sm:h-[19px] h-[15px]' width="19" height="21" viewBox="0 0 19 21" fill="none">
                                                            <path d="M8.03805 20.353V11.873H0.123047V9.17302H8.03805V0.692017H10.865V9.17302H18.78V11.873H10.865V20.353H8.03805Z" fill="#FF3E5B" />
                                                        </svg>
                                                    </div>

                                                </div>
                                            )
                                        }
                                    </div>
                                </div>
                                {/* accessories box six */}
                                <div className="mw-full relative max-h-[260px] shadow-md rounded-[10px]">
                                    {/* absolutes */}
                                    <div className='absolute left-3 top-3'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z" fill="#707070" />
                                            <path d="M7.44824 12.4298V6.56317H8.43846V12.4298H7.44824ZM7.95579 5.35161C7.77605 5.35731 7.601 5.29366 7.4669 5.17383C7.40236 5.11646 7.3511 5.0457 7.31672 4.96648C7.28233 4.88726 7.26563 4.8015 7.26779 4.71517C7.26434 4.62775 7.28042 4.54066 7.31486 4.46024C7.3493 4.37982 7.40125 4.30809 7.4669 4.25028C7.60157 4.1314 7.77623 4.06789 7.95579 4.0725C8.13536 4.06789 8.31002 4.1314 8.44468 4.25028C8.51034 4.30809 8.56228 4.37982 8.59673 4.46024C8.63117 4.54066 8.64725 4.62775 8.64379 4.71517C8.64596 4.8015 8.62926 4.88726 8.59487 4.96648C8.56048 5.0457 8.50923 5.11646 8.44468 5.17383C8.31058 5.29366 8.13554 5.35731 7.95579 5.35161Z" fill="white" />
                                        </svg>
                                    </div>

                                    {/* head sides */}
                                    <div className='max-w-full h-[180px] overflow-hidden bg-[#DEDEDE] flex items-center justify-center rounded-[10px_10px_0_0]'>
                                        <img src='/merchandiseTwo.png' alt="accessories-Img" className='w-full h-[160px] object-contain rounded-[10px_10px_0_0]' />
                                    </div>

                                    {/* bottoms sides */}
                                    <div className={`relative w-full h-max rounded-[0_0_10px_10px] bg-[#191919] p-[14px_12px] flex md:items-end md:flex-row md:gap-0 gap-[10px] flex-col md:justify-between`}>
                                        <div className='h-full'>
                                            <p className={`text-white 1x1:text-[14px] xs:text-[12px] text-[11px]`}>Insulated </p>
                                            <p className={`text-white 1x1:text-[14px] xs:text-[12px] text-[11px]`}>Sipper Cup</p>
                                        </div>

                                        {/* prices */}
                                        <div className='flex items-center gap-[6px]'>
                                            <h2 className={`text-white font-bold md:text-[16px] text-[10px]`}>₹650.00</h2>
                                            {/* icons */}
                                            {
                                                selectSix === true &&
                                                <div className='h-[19px]'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
                                                        <path d="M9 18.8655C13.9706 18.8655 18 14.836 18 9.86548C18 4.89492 13.9706 0.865479 9 0.865479C4.02944 0.865479 0 4.89492 0 9.86548C0 14.836 4.02944 18.8655 9 18.8655Z" fill="#FF3E5B" />
                                                        <path d="M7.06564 12.8656C6.89987 12.8655 6.74076 12.8003 6.62258 12.6841L4.55879 10.6203C4.49753 10.5628 4.44844 10.4936 4.41445 10.4168C4.38046 10.34 4.36226 10.2571 4.36092 10.1731C4.35958 10.0891 4.37514 10.0057 4.40667 9.92783C4.4382 9.84996 4.48505 9.77923 4.54446 9.71983C4.60386 9.66043 4.67459 9.61357 4.75246 9.58204C4.83032 9.55051 4.91373 9.53495 4.99772 9.53629C5.08172 9.53763 5.16459 9.55583 5.24141 9.58983C5.31823 9.62382 5.38744 9.6729 5.44492 9.73416L7.05564 11.3449L11.8786 6.58502C11.9365 6.52642 12.0055 6.47989 12.0816 6.44813C12.1576 6.41638 12.2392 6.40002 12.3216 6.40002C12.4041 6.40002 12.4857 6.41638 12.5617 6.44813C12.6378 6.47989 12.7068 6.52642 12.7647 6.58502C12.8808 6.70326 12.9459 6.86236 12.9459 7.02809C12.9459 7.19382 12.8808 7.35292 12.7647 7.47115L7.49871 12.6741C7.44346 12.7339 7.37652 12.7818 7.30204 12.8148C7.22755 12.8477 7.14709 12.865 7.06564 12.8656Z" fill="white" />
                                                    </svg>
                                                </div>
                                            }
                                        </div>

                                        {/* add buttons */}
                                        {
                                            selectSix === true ? (
                                                <div onClick={() => { setSelectSix(!selectSix); decreaseCount(650) }} className='text-black absolute md:-top-[25%] -top-[15%] right-3 sm:h-[36px] h-[28px] sm:w-[36px] w-[28px] rounded-full bg-white cursor-pointer flex items-center justify-center'>

                                                    <div className='sm:h-[19px] h-[15px] flex items-center justify-center'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="3" viewBox="0 0 18 3" fill="none">
                                                            <rect width="18" height="3" fill="#FF3E5B" />
                                                        </svg>
                                                    </div>

                                                </div>
                                            ) : (
                                                <div onClick={() => { setSelectSix(!selectSix); increaseCount(650) }} className='text-black absolute md:-top-[25%] -top-[15%] right-3 sm:h-[36px] h-[28px] sm:w-[36px] w-[28px] rounded-full bg-white cursor-pointer flex items-center justify-center'>

                                                    <div className='sm:h-[19px] h-[15px]'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" className='sm:h-[19px] h-[15px]' width="19" height="21" viewBox="0 0 19 21" fill="none">
                                                            <path d="M8.03805 20.353V11.873H0.123047V9.17302H8.03805V0.692017H10.865V9.17302H18.78V11.873H10.865V20.353H8.03805Z" fill="#FF3E5B" />
                                                        </svg>
                                                    </div>

                                                </div>
                                            )
                                        }
                                    </div>
                                </div>
                                {/* accessories box seven */}
                                <div className="w-full relative max-h-[260px] shadow-md rounded-[10px]">
                                    {/* absolutes */}
                                    <div className='absolute left-3 top-3'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z" fill="#707070" />
                                            <path d="M7.44824 12.4298V6.56317H8.43846V12.4298H7.44824ZM7.95579 5.35161C7.77605 5.35731 7.601 5.29366 7.4669 5.17383C7.40236 5.11646 7.3511 5.0457 7.31672 4.96648C7.28233 4.88726 7.26563 4.8015 7.26779 4.71517C7.26434 4.62775 7.28042 4.54066 7.31486 4.46024C7.3493 4.37982 7.40125 4.30809 7.4669 4.25028C7.60157 4.1314 7.77623 4.06789 7.95579 4.0725C8.13536 4.06789 8.31002 4.1314 8.44468 4.25028C8.51034 4.30809 8.56228 4.37982 8.59673 4.46024C8.63117 4.54066 8.64725 4.62775 8.64379 4.71517C8.64596 4.8015 8.62926 4.88726 8.59487 4.96648C8.56048 5.0457 8.50923 5.11646 8.44468 5.17383C8.31058 5.29366 8.13554 5.35731 7.95579 5.35161Z" fill="white" />
                                        </svg>
                                    </div>

                                    {/* head sides */}
                                    <div className='max-w-full h-[180px] overflow-hidden flex items-center justify-center bg-[#DEDEDE] rounded-[10px_10px_0_0]'>
                                        <img src='/merchandiseThree.png' alt="accessories-Img" className='w-full h-[160px] object-contain rounded-[10px_10px_0_0]' />
                                    </div>

                                    {/* bottoms sides */}
                                    <div className={`relative w-full h-max rounded-[0_0_10px_10px] bg-[#191919] p-[14px_12px] flex md:items-end md:flex-row md:gap-0 gap-[10px] flex-col md:justify-between`}>
                                        <div className='h-full'>
                                            <p className={`text-white 1x1:text-[14px] xs:text-[12px] text-[11px]`}>Mahindra Rise Dairy </p>
                                            <p className={`text-white 1x1:text-[14px] xs:text-[12px] text-[11px]`}>- Black</p>
                                        </div>

                                        {/* prices */}
                                        <div className='flex items-center gap-[6px]'>
                                            <h2 className={`text-white font-bold md:text-[16px] text-[10px]`}>₹270.00</h2>
                                            {/* icons */}
                                            {
                                                selectSeven === true &&
                                                <div className='h-[19px]'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
                                                        <path d="M9 18.8655C13.9706 18.8655 18 14.836 18 9.86548C18 4.89492 13.9706 0.865479 9 0.865479C4.02944 0.865479 0 4.89492 0 9.86548C0 14.836 4.02944 18.8655 9 18.8655Z" fill="#FF3E5B" />
                                                        <path d="M7.06564 12.8656C6.89987 12.8655 6.74076 12.8003 6.62258 12.6841L4.55879 10.6203C4.49753 10.5628 4.44844 10.4936 4.41445 10.4168C4.38046 10.34 4.36226 10.2571 4.36092 10.1731C4.35958 10.0891 4.37514 10.0057 4.40667 9.92783C4.4382 9.84996 4.48505 9.77923 4.54446 9.71983C4.60386 9.66043 4.67459 9.61357 4.75246 9.58204C4.83032 9.55051 4.91373 9.53495 4.99772 9.53629C5.08172 9.53763 5.16459 9.55583 5.24141 9.58983C5.31823 9.62382 5.38744 9.6729 5.44492 9.73416L7.05564 11.3449L11.8786 6.58502C11.9365 6.52642 12.0055 6.47989 12.0816 6.44813C12.1576 6.41638 12.2392 6.40002 12.3216 6.40002C12.4041 6.40002 12.4857 6.41638 12.5617 6.44813C12.6378 6.47989 12.7068 6.52642 12.7647 6.58502C12.8808 6.70326 12.9459 6.86236 12.9459 7.02809C12.9459 7.19382 12.8808 7.35292 12.7647 7.47115L7.49871 12.6741C7.44346 12.7339 7.37652 12.7818 7.30204 12.8148C7.22755 12.8477 7.14709 12.865 7.06564 12.8656Z" fill="white" />
                                                    </svg>
                                                </div>
                                            }
                                        </div>

                                        {/* add buttons */}
                                        {
                                            selectSeven === true ? (
                                                <div onClick={() => { setSelectSeven(!selectSeven); decreaseCount(270); }} className='text-black absolute md:-top-[25%] -top-[15%] right-3 sm:h-[36px] h-[28px] sm:w-[36px] w-[28px] rounded-full bg-white cursor-pointer flex items-center justify-center'>

                                                    <div className='sm:h-[19px] h-[15px] flex items-center justify-center'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="3" viewBox="0 0 18 3" fill="none">
                                                            <rect width="18" height="3" fill="#FF3E5B" />
                                                        </svg>
                                                    </div>

                                                </div>
                                            ) : (
                                                <div onClick={() => { setSelectSeven(!selectSeven); increaseCount(270); }} className='text-black absolute md:-top-[25%] -top-[15%] right-3 sm:h-[36px] h-[28px] sm:w-[36px] w-[28px] rounded-full bg-white cursor-pointer flex items-center justify-center'>

                                                    <div className='sm:h-[19px] h-[15px]'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" className='sm:h-[19px] h-[15px]' width="19" height="21" viewBox="0 0 19 21" fill="none">
                                                            <path d="M8.03805 20.353V11.873H0.123047V9.17302H8.03805V0.692017H10.865V9.17302H18.78V11.873H10.865V20.353H8.03805Z" fill="#FF3E5B" />
                                                        </svg>
                                                    </div>

                                                </div>
                                            )
                                        }
                                    </div>
                                </div>
                                {/* accessories box eight */}
                                <div className="w-full relative max-h-[260px] shadow-md rounded-[10px]">
                                    {/* absolutes */}
                                    <div className='absolute left-3 top-3'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z" fill="#707070" />
                                            <path d="M7.44824 12.4298V6.56317H8.43846V12.4298H7.44824ZM7.95579 5.35161C7.77605 5.35731 7.601 5.29366 7.4669 5.17383C7.40236 5.11646 7.3511 5.0457 7.31672 4.96648C7.28233 4.88726 7.26563 4.8015 7.26779 4.71517C7.26434 4.62775 7.28042 4.54066 7.31486 4.46024C7.3493 4.37982 7.40125 4.30809 7.4669 4.25028C7.60157 4.1314 7.77623 4.06789 7.95579 4.0725C8.13536 4.06789 8.31002 4.1314 8.44468 4.25028C8.51034 4.30809 8.56228 4.37982 8.59673 4.46024C8.63117 4.54066 8.64725 4.62775 8.64379 4.71517C8.64596 4.8015 8.62926 4.88726 8.59487 4.96648C8.56048 5.0457 8.50923 5.11646 8.44468 5.17383C8.31058 5.29366 8.13554 5.35731 7.95579 5.35161Z" fill="white" />
                                        </svg>
                                    </div>

                                    {/* head sides */}
                                    <div className='max-w-full h-[180px] overflow-hidden flex items-center justify-center bg-[#DEDEDE] rounded-[10px_10px_0_0]'>
                                        <img src='/merchandiseFour.png' alt="accessories-Img" className='w-full h-[160px] object-contain rounded-[10px_10px_0_0]' />
                                    </div>

                                    {/* bottoms sides */}
                                    <div className={`relative w-full h-max rounded-[0_0_10px_10px] bg-[#191919] p-[14px_12px] flex md:items-end md:flex-row md:gap-0 gap-[10px] flex-col md:justify-between`}>
                                        <div className='h-full'>
                                            <p className={`text-white 1x1:text-[14px] xs:text-[12px] text-[11px]`}>Mahindra Rise Branding </p>
                                            <p className={`text-white 1x1:text-[14px] xs:text-[12px] text-[11px]`}>100% Cotton T-shirts Red</p>
                                        </div>

                                        {/* prices */}
                                        <div className='flex items-center gap-[6px]'>
                                            <h2 className={`text-white font-bold md:text-[16px] text-[10px]`}>₹870.00</h2>
                                            {/* icons */}
                                            {
                                                selectEight === true &&
                                                <div className='h-[19px]'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
                                                        <path d="M9 18.8655C13.9706 18.8655 18 14.836 18 9.86548C18 4.89492 13.9706 0.865479 9 0.865479C4.02944 0.865479 0 4.89492 0 9.86548C0 14.836 4.02944 18.8655 9 18.8655Z" fill="#FF3E5B" />
                                                        <path d="M7.06564 12.8656C6.89987 12.8655 6.74076 12.8003 6.62258 12.6841L4.55879 10.6203C4.49753 10.5628 4.44844 10.4936 4.41445 10.4168C4.38046 10.34 4.36226 10.2571 4.36092 10.1731C4.35958 10.0891 4.37514 10.0057 4.40667 9.92783C4.4382 9.84996 4.48505 9.77923 4.54446 9.71983C4.60386 9.66043 4.67459 9.61357 4.75246 9.58204C4.83032 9.55051 4.91373 9.53495 4.99772 9.53629C5.08172 9.53763 5.16459 9.55583 5.24141 9.58983C5.31823 9.62382 5.38744 9.6729 5.44492 9.73416L7.05564 11.3449L11.8786 6.58502C11.9365 6.52642 12.0055 6.47989 12.0816 6.44813C12.1576 6.41638 12.2392 6.40002 12.3216 6.40002C12.4041 6.40002 12.4857 6.41638 12.5617 6.44813C12.6378 6.47989 12.7068 6.52642 12.7647 6.58502C12.8808 6.70326 12.9459 6.86236 12.9459 7.02809C12.9459 7.19382 12.8808 7.35292 12.7647 7.47115L7.49871 12.6741C7.44346 12.7339 7.37652 12.7818 7.30204 12.8148C7.22755 12.8477 7.14709 12.865 7.06564 12.8656Z" fill="white" />
                                                    </svg>
                                                </div>
                                            }
                                        </div>

                                        {/* add buttons */}
                                        {
                                            selectEight === true ? (
                                                <div onClick={() => { setSelectEight(!selectEight); decreaseCount(870); }} className='text-black absolute md:-top-[25%] -top-[15%] right-3 sm:h-[36px] h-[28px] sm:w-[36px] w-[28px] rounded-full bg-white cursor-pointer flex items-center justify-center'>

                                                    <div className='sm:h-[19px] h-[15px] flex items-center justify-center'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="3" viewBox="0 0 18 3" fill="none">
                                                            <rect width="18" height="3" fill="#FF3E5B" />
                                                        </svg>
                                                    </div>

                                                </div>
                                            ) : (
                                                <div onClick={() => { setSelectEight(!selectEight); increaseCount(870); }} className='text-black absolute md:-top-[25%] -top-[15%] right-3 sm:h-[36px] h-[28px] sm:w-[36px] w-[28px] rounded-full bg-white cursor-pointer flex items-center justify-center'>

                                                    <div className='sm:h-[19px] h-[15px]'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" className='sm:h-[19px] h-[15px]' width="19" height="21" viewBox="0 0 19 21" fill="none">
                                                            <path d="M8.03805 20.353V11.873H0.123047V9.17302H8.03805V0.692017H10.865V9.17302H18.78V11.873H10.865V20.353H8.03805Z" fill="#FF3E5B" />
                                                        </svg>
                                                    </div>

                                                </div>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <AccessoriesComponentsOne /> */}
                    {/* <AccessoriesBox accessories={interiorBox} title="Interior" selected="2 Selected" /> */}

                    <div className="w-full md:mt-[36px] mt-[20px]">
                        {/* <DisclaimerPopup theme={theme} /> */}
                        <p className={`text-white md:text-[12px] text-[10px]`}>
                            <b>Disclaimer:</b> The information presented on this Website is made available solely for general information purposes. <a href='#read-more' className='underline font-bold'>Read More</a>
                        </p>
                    </div>
                </div>
            </div>


            {/* footer */}
            {/* see disclaimers */}
            <div className="fixed bottom-0 left-0 right-0 h-max w-full bg-[#313131] mt-0 z-10">

                {/* main footer */}
                <div className="w-full h-[70px] px-[35px] max-w-[1280px] mx-auto flex items-center justify-center">
                    <div className="h-[44px] flex items-center justify-center gap-8">
                        <Buttons links="/scorpio-N/add-to-cart" title="back" outline={true} />
                        {/* <Buttons links="/cart" title="continue" outline={false} /> */}
                        {
                            counter === 0 ? (
                                <Link to='/own-online/finance/application/details/merchandise' disabled={true} onClick={() => handleClick()} type='button' className={`md:text-[16px] text-[14px] relative z-[5] cursor-not-allowed capitalize ${setWidth ? `` : 'flex items-center justify-center xl:w-[150px] md:w-[150px] w-[120px]'} h-full before:content-[""] before:absolute before:left-0 before:right-0 before:bottom-0 before:top-0 ${setWidth ? `before:sm:w-auto before:w-[130px]` : 'before:md:w-[144px] before:w-[120px]'} before:h-[44px] before:border-[1px] before:bg-[#ff3e5b]/60 before:border-[#ff3e5b]/60 before:z-[-1] after:content-[""] after:absolute ${setWidth ? `after:md:-right-[10px] after:-right-[8px]` : 'after:md:right-[-3px] after:right-[-10px]'} after:bottom-0 after:top-0 after:bg-[#ff3e5b]/60 after:w-[2px] after:h-full text-white/60 font-bold`}
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
                            ) : (
                                <Link to='/scorpio-N/add-to-cart' onClick={() => handleClick()} type='button' className={`md:text-[16px] text-[14px] relative z-[5] capitalize ${setWidth ? `` : 'flex items-center justify-center xl:w-[150px] md:w-[150px] w-[120px]'} h-full before:content-[""] before:absolute before:left-0 before:right-0 before:bottom-0 before:top-0 ${setWidth ? `before:sm:w-auto before:w-[130px]` : 'before:md:w-[144px] before:w-[120px]'} before:h-[44px] before:border-[1px] before:bg-[#ff3e5b] before:border-[#ff3e5b] before:z-[-1] after:content-[""] after:absolute ${setWidth ? `after:md:-right-[10px] after:-right-[8px]` : 'after:md:right-[-3px] after:right-[-10px]'} after:bottom-0 after:top-0 after:bg-[#ff3e5b] after:w-[2px] after:h-full text-white font-bold`}
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
                            )
                        }
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Merchandise