import React, { useEffect, useState } from 'react'

function AccessoriesComponentsTwo() {

    const [selectOne, setSelectOne] = useState(false);
    const [selectTwo, setSelectTwo] = useState(false);
    const [selectThree, setSelectThree] = useState(false);
    const [selectFour, setSelectFour] = useState(false);
    const [selectFive, setSelectFive] = useState(false);
    const [selectSix, setSelectSix] = useState(false);

    // counter items

    const [counter, setCounter] = useState(0)

    function increaseCount() {
        setCounter(counter + 1);
    }

    function decreaseCount() {
        setCounter(counter - 1);
    }


    return (
        <div className='w-full h-full'>
            <div className='w-full mt-[1rem] mb-[10px]'>
                <h6 className={`text-white text-[18px] font-bold`}>Interior ({counter} Selected)</h6>
            </div>
            {/* grid-cols-2 */}
            {/* h-[460px] */}
            <div id="overFlowNone" className='w-full h-full overflow-scroll select-none'>
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
                        <div className='max-w-full max-h-[184px] overflow-hidden'>
                            <img src='/accessoriesInterior.png' alt="accessories-Img" className='w-full h-full object-contain rounded-[10px_10px_0_0]' />
                        </div>

                        {/* bottoms sides */}
                        <div className={`relative w-full h-max rounded-[0_0_10px_10px] bg-[#191919] p-[14px_12px] flex md:items-end md:flex-row md:gap-0 gap-[10px] flex-col md:justify-between`}>
                            <div className='h-full'>
                                <p className={`text-white 1x1:text-[14px] text-[12px]`}>Black H/R Mtd DVD </p>
                                <p className={`text-white 1x1:text-[14px] text-[12px]`}>Touchscreen Set (7 Inch)</p>
                            </div>

                            {/* prices */}
                            <div className='flex items-center gap-[6px]'>
                                <h2 className={`text-white font-bold text-[16px]`}>₹16 650.00</h2>
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
                                    <div onClick={() => { setSelectOne(!selectOne); decreaseCount() }} className='text-black absolute md:-top-[25%] -top-[15%] right-3 sm:h-[36px] h-[28px] sm:w-[36px] w-[28px] rounded-full bg-white cursor-pointer flex items-center justify-center'>

                                        <div className='sm:h-[19px] h-[15px] flex items-center justify-center'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="3" viewBox="0 0 18 3" fill="none">
                                                <rect width="18" height="3" fill="#FF3E5B" />
                                            </svg>
                                        </div>

                                    </div>
                                ) : (
                                    <div onClick={() => { setSelectOne(!selectOne); increaseCount() }} className='text-black absolute md:-top-[25%] -top-[15%] right-3 sm:h-[36px] h-[28px] sm:w-[36px] w-[28px] rounded-full bg-white cursor-pointer flex items-center justify-center'>

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
                        <div className='max-w-full max-h-[184px] overflow-hidden'>
                            <img src='/interiorTwo.png' alt="accessories-Img" className='w-full h-full object-contain rounded-[10px_10px_0_0]' />
                        </div>

                        {/* bottoms sides */}
                        <div className={`relative w-full h-max rounded-[0_0_10px_10px] bg-[#191919] p-[14px_12px] flex md:items-end md:flex-row md:gap-0 gap-[10px] flex-col md:justify-between`}>
                            <div className='h-full'>
                                <p className={`text-white 1x1:text-[14px] text-[12px]`}>Grey H/R Mtd DVD </p>
                                <p className={`text-white 1x1:text-[14px] text-[12px]`}>Touchscreen Set (7 Inch)</p>
                            </div>

                            {/* prices */}
                            <div className='flex items-center gap-[6px]'>
                                <h2 className={`text-white font-bold text-[16px]`}>₹16 650.00</h2>
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
                                    <div onClick={() => { setSelectTwo(!selectTwo); decreaseCount() }} className='text-black absolute md:-top-[25%] -top-[15%] right-3 sm:h-[36px] h-[28px] sm:w-[36px] w-[28px] rounded-full bg-white cursor-pointer flex items-center justify-center'>

                                        <div className='sm:h-[19px] h-[15px] flex items-center justify-center'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="3" viewBox="0 0 18 3" fill="none">
                                                <rect width="18" height="3" fill="#FF3E5B" />
                                            </svg>
                                        </div>

                                    </div>
                                ) : (
                                    <div onClick={() => { setSelectTwo(!selectTwo); increaseCount() }} className='text-black absolute md:-top-[25%] -top-[15%] right-3 sm:h-[36px] h-[28px] sm:w-[36px] w-[28px] rounded-full bg-white cursor-pointer flex items-center justify-center'>

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
                        <div className='max-w-full max-h-[184px] overflow-hidden'>
                            <img src='/interiorThree.png' alt="accessories-Img" className='w-full h-full object-contain rounded-[10px_10px_0_0]' />
                        </div>

                        {/* bottoms sides */}
                        <div className={`relative w-full h-max rounded-[0_0_10px_10px] bg-[#191919] p-[14px_12px] flex md:items-end md:flex-row md:gap-0 gap-[10px] flex-col md:justify-between`}>
                            <div className='h-full'>
                                <p className={`text-white 1x1:text-[14px] text-[12px]`}>OE Rear Luggage</p>
                                <p className={`text-white 1x1:text-[14px] text-[12px]`}>Cover</p>
                            </div>

                            {/* prices */}
                            <div className='flex items-center gap-[6px]'>
                                <h2 className={`text-white font-bold text-[16px]`}>₹1 580.00</h2>
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
                                    <div onClick={() => { setSelectThree(!selectThree); decreaseCount() }} className='text-black absolute md:-top-[25%] -top-[15%] right-3 sm:h-[36px] h-[28px] sm:w-[36px] w-[28px] rounded-full bg-white cursor-pointer flex items-center justify-center'>

                                        <div className='sm:h-[19px] h-[15px] flex items-center justify-center'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="3" viewBox="0 0 18 3" fill="none">
                                                <rect width="18" height="3" fill="#FF3E5B" />
                                            </svg>
                                        </div>

                                    </div>
                                ) : (
                                    <div onClick={() => { setSelectThree(!selectThree); increaseCount() }} className='text-black absolute md:-top-[25%] -top-[15%] right-3 sm:h-[36px] h-[28px] sm:w-[36px] w-[28px] rounded-full bg-white cursor-pointer flex items-center justify-center'>

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
                        <div className='max-w-full max-h-[184px] overflow-hidden'>
                            <img src='/interiorFour.png' alt="accessories-Img" className='w-full h-full object-contain rounded-[10px_10px_0_0]' />
                        </div>

                        {/* bottoms sides */}
                        <div className={`relative w-full h-max rounded-[0_0_10px_10px] bg-[#191919] p-[14px_12px] flex md:items-end md:flex-row md:gap-0 gap-[10px] flex-col md:justify-between`}>
                            <div className='h-full'>
                                <p className={`text-white 1x1:text-[14px] text-[12px]`}>Grey - Door Trims </p>
                                <p className={`text-white 1x1:text-[14px] text-[12px]`}>Armrest Set</p>
                            </div>

                            {/* prices */}
                            <div className='flex items-center gap-[6px]'>
                                <h2 className={`text-white font-bold text-[16px]`}>₹1 540.00</h2>
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
                                    <div onClick={() => { setSelectFour(!selectFour); decreaseCount() }} className='text-black absolute md:-top-[25%] -top-[15%] right-3 sm:h-[36px] h-[28px] sm:w-[36px] w-[28px] rounded-full bg-white cursor-pointer flex items-center justify-center'>

                                        <div className='sm:h-[19px] h-[15px] flex items-center justify-center'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="3" viewBox="0 0 18 3" fill="none">
                                                <rect width="18" height="3" fill="#FF3E5B" />
                                            </svg>
                                        </div>

                                    </div>
                                ) : (
                                    <div onClick={() => { setSelectFour(!selectFour); increaseCount() }} className='text-black absolute md:-top-[25%] -top-[15%] right-3 sm:h-[36px] h-[28px] sm:w-[36px] w-[28px] rounded-full bg-white cursor-pointer flex items-center justify-center'>

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
                        <div className='max-w-full max-h-[184px] overflow-hidden'>
                            <img src='/interiorFive.png' alt="accessories-Img" className='w-full h-full object-contain rounded-[10px_10px_0_0]' />
                        </div>

                        {/* bottoms sides */}
                        <div className={`relative w-full h-max rounded-[0_0_10px_10px] bg-[#191919] p-[14px_12px] flex md:items-end md:flex-row md:gap-0 gap-[10px] flex-col md:justify-between`}>
                            <div className='h-full'>
                                <p className={`text-white 1x1:text-[14px] text-[12px] invisible`}>Grey - Door Trims </p>
                                <p className={`text-white 1x1:text-[14px] text-[12px]`}>Anti-Skid Dash Mat Set</p>
                            </div>

                            {/* prices */}
                            <div className='flex items-center gap-[6px]'>
                                <h2 className={`text-white font-bold text-[16px]`}>₹556.00</h2>
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
                                    <div onClick={() => { setSelectFive(!selectFive); decreaseCount() }} className='text-black absolute md:-top-[25%] -top-[15%] right-3 sm:h-[36px] h-[28px] sm:w-[36px] w-[28px] rounded-full bg-white cursor-pointer flex items-center justify-center'>

                                        <div className='sm:h-[19px] h-[15px] flex items-center justify-center'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="3" viewBox="0 0 18 3" fill="none">
                                                <rect width="18" height="3" fill="#FF3E5B" />
                                            </svg>
                                        </div>

                                    </div>
                                ) : (
                                    <div onClick={() => { setSelectFive(!selectFive); increaseCount() }} className='text-black absolute md:-top-[25%] -top-[15%] right-3 sm:h-[36px] h-[28px] sm:w-[36px] w-[28px] rounded-full bg-white cursor-pointer flex items-center justify-center'>

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
                        <div className='max-w-full max-h-[184px] overflow-hidden'>
                            <img src='/interiorSix.png' alt="accessories-Img" className='w-full h-full object-contain rounded-[10px_10px_0_0]' />
                        </div>

                        {/* bottoms sides */}
                        <div className={`relative w-full h-max rounded-[0_0_10px_10px] bg-[#191919] p-[14px_12px] flex md:items-end md:flex-row md:gap-0 gap-[10px] flex-col md:justify-between`}>
                            <div className='h-full'>
                                <p className={`text-white 1x1:text-[14px] text-[12px]`}>Rugged Black Trunk Floor</p>
                                <p className={`text-white 1x1:text-[14px] text-[12px]`}>Mat Set</p>
                            </div>

                            {/* prices */}
                            <div className='flex items-center gap-[6px]'>
                                <h2 className={`text-white font-bold text-[16px]`}>₹731.00</h2>
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
                                    <div onClick={() => { setSelectSix(!selectSix); decreaseCount() }} className='text-black absolute md:-top-[25%] -top-[15%] right-3 sm:h-[36px] h-[28px] sm:w-[36px] w-[28px] rounded-full bg-white cursor-pointer flex items-center justify-center'>

                                        <div className='sm:h-[19px] h-[15px] flex items-center justify-center'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="3" viewBox="0 0 18 3" fill="none">
                                                <rect width="18" height="3" fill="#FF3E5B" />
                                            </svg>
                                        </div>

                                    </div>
                                ) : (
                                    <div onClick={() => { setSelectSix(!selectSix); increaseCount() }} className='text-black absolute md:-top-[25%] -top-[15%] right-3 sm:h-[36px] h-[28px] sm:w-[36px] w-[28px] rounded-full bg-white cursor-pointer flex items-center justify-center'>

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
    )
}

export default AccessoriesComponentsTwo