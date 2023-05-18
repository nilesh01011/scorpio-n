import React, { useEffect, useState } from 'react'
import DisclaimerPopup from './DisclaimerPopup';

function DealerSelect({ theme = "dark" }) {
    useEffect(() => {
        document.body.style.backgroundColor = "#212121"
    });

    const carDealer = [
        {
            id: 1,
            shopName: 'Nbs International Ltd.',
            shopPinCode: 'MUMBAI, 400058',
            shopAddress: 'Standford, Sv Road, Juhu Tara Lane, Near Shoppers Stop, Andheri West'
        },
        {
            id: 2,
            shopName: 'Nbs International Ltd.',
            shopPinCode: 'KANDIVALI_SH, 400067',
            shopAddress: 'Shop No B-1 Giriraj Heights, New Link Rd, Near Symphony-B, B.I.G.D, Kandivali West'
        },
        {
            id: 3,
            shopName: 'Nbs International Ltd.',
            shopPinCode: 'CHOWPATTY, 400004',
            shopAddress: '10, Stone Building, Opp. Girgaon Chowpatty'
        },
        {
            id: 4,
            shopName: 'Hare Krishan Classic Car Cares Pvt. Ltd.',
            shopPinCode: 'MUMBAI, 400080',
            shopAddress: '1, Udyog Kshetra, Mulund Goregaon Link Road, Mulund (West)'
        },
        {
            id: 5,
            shopName: 'Randhawa Motors (A Div Of Randhawa Automobile Engineering Pvt Ltd).',
            shopPinCode: 'MAROL(ANDHERI EAST), 400059',
            shopAddress: 'Unit No.4 N 5, Ground Floor, Satellite Silver, Marol Naka, Andheri East'
        }
    ];

    const [selectCarDealer, setSelectCarDealer] = useState(1)

    return (
        <>
            <div className='w-full h-full max-w-[1260px] mx-auto text-white md:mt-[50px] mt-[40px]'>
                {/* main cars details */}
                <div className="w-full h-full flex lg:flex-row flex-col justify-between gap-[12px]">
                    {/* md:mt-[30px] mt-[6px] */}

                    {/* left side cars details */}
                    <div className="lg:w-[45%] w-full h-full flex flex-col justify-between">
                        <div className="w-full">
                            {/* cars title */}
                            <div className="w-full flex items-start flex-col">
                                {/* title */}
                                <h2 className="dark:text-white md:text-[26px] xs:text-[22px] text-[20px] font-bold uppercase">Scorpio-N</h2>
                                <p className='text-white xs:text-[18px] text-[16px] font-bold'>Scorpio-N • Z8 L D AT • Deep Forest</p>
                                {/* <p className='text-white xs:text-[18px] text-[16px] font-bold'>XUV400 • Electric Luxury • Black Copper</p> */}
                            </div>
                            {/* cars images */}
                            {/* 1x1:mt-[30px] md:mt-[20px] mt-[8px] */}
                            <div className="md:w-[425px] sm:w-[330px] w-full lg:mr-auto mx-auto md:h-[307px] h-[191px] md:mt-0 mt-[24px]">
                                {/* <img src='/infinityBlue.png' alt="product-img" className='w-full h-full md:object-contain object-cover' /> */}
                                <img src='/image 14.png' alt="product-img" className='w-full h-full object-contain' />
                            </div>
                        </div>

                        <div className="1x1:w-[35%] 1x1:mb-0 mb-[70px] mt-[20px] md:block hidden 1x1:fixed 1x1:bottom-[70px]">
                            <DisclaimerPopup />
                        </div>
                    </div>

                    {/* right side select configurations */}
                    <div id="overFlowNone" className="lg:w-[50%] w-full 1x1:h-[500px] md:h-[440px] 1x1:mb-0 md:mb-[90px] overflow-scroll">
                        <div className='w-full'>
                            <div className='w-full flex md:items-center items-start md:flex-row flex-col justify-between px-[4px] mb-[16px]'>
                                {/* title */}
                                <div className='h-[36px] flex items-center'>
                                    <h2 className={`${theme === "dark" ? 'text-white' : 'text-black'} md:text-[20px] text-[16px] font-bold`}>Select Dealer</h2>
                                </div>

                                <div className=''>
                                    <div className='flex items-center gap-[4px]'>
                                        <p className='1x1:text-[14px] text-[12px]'>Click here to change location:</p>
                                        <div className='flex items-center gap-[4px] cursor-pointer'>
                                            {/* text */}
                                            <p className='underline 1x1:text-[14px] text-[12px]'>Mumbai</p>
                                            {/* icons */}
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                                    <path d="M13.8377 9.618V12.868C13.8377 13.1908 13.7095 13.5003 13.4813 13.7286C13.2531 13.9568 12.9435 14.085 12.6207 14.085H4.09874C3.77615 14.085 3.46675 13.9569 3.23855 13.7289C3.01035 13.5009 2.88201 13.1916 2.88174 12.869V4.347C2.88174 4.02424 3.00996 3.71469 3.2382 3.48646C3.46643 3.25822 3.77598 3.13 4.09874 3.13H7.34874" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M12.6208 1.91296L15.0558 4.34796L8.96875 10.435H6.53375V7.99996L12.6208 1.91296Z" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* pincode by search results */}
                            <div className='mt-[10px] w-full'>
                                <div className='flex gap-[20px] flex-col w-full p-[5px]'>
                                    {
                                        carDealer.slice(0, 5).map((ele) => {
                                            const { id, shopName, shopAddress, shopPinCode } = ele;

                                            return (
                                                <div key={id} onClick={() => setSelectCarDealer(id)} className={`w-full h-max rounded-[10px] shadow-md ${selectCarDealer === id ? 'bg-[#F8F8F8] text-black' : 'bg-[#333333] text-white'} p-[16px] cursor-pointer`}>
                                                    <div className='w-full flex items-baseline gap-[16px] relative'>
                                                        {/* left side icons */}
                                                        <div className="w-auto flex items-center absolute top-[5px] left-0">
                                                            {
                                                                selectCarDealer === id ? (
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                                                        <path d="M9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18Z" fill="#FF3E5B" />
                                                                        <path d="M6.59252 12.97C6.377 12.9698 6.17015 12.8851 6.01652 12.734L3.33352 10.051C3.25387 9.97623 3.19006 9.88626 3.14587 9.78639C3.10168 9.68652 3.07801 9.57878 3.07628 9.46959C3.07454 9.36039 3.09476 9.25196 3.13575 9.15073C3.17674 9.0495 3.23766 8.95755 3.31488 8.88032C3.3921 8.8031 3.48406 8.74218 3.58529 8.70119C3.68651 8.66021 3.79495 8.63998 3.90414 8.64172C4.01334 8.64346 4.12108 8.66712 4.22095 8.71131C4.32082 8.7555 4.41079 8.81932 4.48552 8.89896L6.57952 10.993L12.8495 4.80496C12.9248 4.72877 13.0145 4.66828 13.1134 4.62699C13.2123 4.58571 13.3184 4.56445 13.4255 4.56445C13.5327 4.56445 13.6387 4.58571 13.7376 4.62699C13.8365 4.66828 13.9262 4.72877 14.0015 4.80496C14.1525 4.95867 14.2371 5.16551 14.2371 5.38096C14.2371 5.59641 14.1525 5.80325 14.0015 5.95696L7.15552 12.721C7.0837 12.7988 6.99667 12.861 6.89984 12.9038C6.803 12.9467 6.6984 12.9692 6.59252 12.97Z" fill="white" />
                                                                    </svg>
                                                                ) : (
                                                                    <div className={`w-[18px] h-[18px] rounded-full border-[1px] ${theme === "dark" ? 'border-white' : 'border-black'}`}></div>
                                                                )
                                                            }
                                                        </div>

                                                        {/* middel contents */}

                                                        <div className='w-full pl-[30px]'>
                                                            {/* title */}
                                                            {/* w-[80%] */}
                                                            <div className=' h-full'>
                                                                <h2 className={` xl:text-[18px] text-[16px] mb-[4px] font-bold capitalize`}>
                                                                    {shopName}
                                                                </h2>
                                                                <p className={`md:text-[16px] text-[14px]`}>
                                                                    {shopAddress}
                                                                </p>
                                                                <p className={`flex items-center gap-[5px] md:text-[16px] text-[14px]`}>
                                                                    {shopPinCode}
                                                                    {/* icons */}
                                                                    <span>
                                                                        {
                                                                            selectCarDealer === id ? (
                                                                                <svg xmlns="http://www.w3.org/2000/svg" width="9" height="12" viewBox="0 0 9 12" fill="none">
                                                                                    <path d="M4.32873 11.6252C4.27219 11.6264 4.21627 11.6133 4.16612 11.5872C4.11598 11.5612 4.07324 11.5229 4.04185 11.476L1.3855 7.85635C0.582113 6.95087 0.1031 5.805 0.0236816 4.59866C0.024151 3.45735 0.479081 2.36292 1.28849 1.55589C2.0979 0.748859 3.19557 0.295268 4.34025 0.2948H4.35707C5.49803 0.302015 6.58993 0.758331 7.39507 1.5644C8.20021 2.37048 8.65338 3.46104 8.65592 4.59866C8.58017 5.80684 8.10144 6.95507 7.29587 7.86076C7.14092 8.07265 4.62093 11.4804 4.62093 11.4804C4.58574 11.5243 4.54136 11.56 4.49089 11.585C4.44042 11.61 4.38508 11.6237 4.32873 11.6252ZM4.31722 1.0099C3.36454 1.01271 2.45185 1.39207 1.77928 2.06482C1.10671 2.73756 0.729146 3.64878 0.729384 4.59866C0.816723 5.65248 1.24669 6.64907 1.95396 7.437L4.32431 10.6585C4.99017 9.75976 6.57955 7.60297 6.70617 7.437C7.41279 6.64883 7.84213 5.65227 7.92897 4.59866C7.92827 3.64891 7.55029 2.7381 6.87773 2.06553C6.20517 1.39297 5.29279 1.0134 4.34025 1.0099H4.31722Z" fill="#EA3A51" />
                                                                                    <path d="M4.29944 6.45792C3.86163 6.45792 3.43364 6.32847 3.06962 6.08595C2.70559 5.84343 2.42186 5.49873 2.25432 5.09543C2.08677 4.69214 2.04294 4.24836 2.12835 3.82022C2.21376 3.39209 2.42459 2.99882 2.73417 2.69015C3.04375 2.38148 3.43818 2.17127 3.86758 2.08611C4.29698 2.00095 4.74207 2.04466 5.14656 2.21171C5.55104 2.37876 5.89676 2.66165 6.14 3.02461C6.38323 3.38756 6.51306 3.81429 6.51306 4.25081C6.51306 4.83617 6.27984 5.39756 5.86471 5.81147C5.44957 6.22538 4.88653 6.45792 4.29944 6.45792ZM4.29944 2.75527C4.00298 2.75457 3.71297 2.84159 3.46613 3.0053C3.21929 3.16901 3.02672 3.40206 2.91278 3.67495C2.79884 3.94784 2.76867 4.2483 2.82607 4.53829C2.88348 4.82829 3.02589 5.09478 3.23527 5.30404C3.44465 5.5133 3.7116 5.65592 4.00231 5.71385C4.29303 5.77177 4.59444 5.7424 4.8684 5.62944C5.14237 5.51649 5.37656 5.32503 5.54134 5.0793C5.70612 4.83358 5.79408 4.54463 5.79408 4.24904C5.79384 3.85355 5.63641 3.47428 5.35626 3.19429C5.07612 2.91431 4.69609 2.75644 4.29944 2.75527Z" fill="#EA3A51" />
                                                                                </svg>
                                                                            ) : (
                                                                                <svg xmlns="http://www.w3.org/2000/svg" width="9" height="12" viewBox="0 0 9 12" fill="none">
                                                                                    <path d="M4.32873 11.6252C4.27219 11.6264 4.21627 11.6133 4.16612 11.5872C4.11598 11.5612 4.07324 11.5229 4.04185 11.476L1.3855 7.85635C0.582113 6.95087 0.1031 5.805 0.0236816 4.59866C0.024151 3.45735 0.479081 2.36292 1.28849 1.55589C2.0979 0.748859 3.19557 0.295268 4.34025 0.2948H4.35707C5.49803 0.302015 6.58993 0.758331 7.39507 1.5644C8.20021 2.37048 8.65338 3.46104 8.65592 4.59866C8.58017 5.80684 8.10144 6.95507 7.29587 7.86076C7.14092 8.07265 4.62093 11.4804 4.62093 11.4804C4.58574 11.5243 4.54136 11.56 4.49089 11.585C4.44042 11.61 4.38508 11.6237 4.32873 11.6252ZM4.31722 1.0099C3.36454 1.01271 2.45185 1.39207 1.77928 2.06482C1.10671 2.73756 0.729146 3.64878 0.729384 4.59866C0.816723 5.65248 1.24669 6.64907 1.95396 7.437L4.32431 10.6585C4.99017 9.75976 6.57955 7.60297 6.70617 7.437C7.41279 6.64883 7.84213 5.65227 7.92897 4.59866C7.92827 3.64891 7.55029 2.7381 6.87773 2.06553C6.20517 1.39297 5.29279 1.0134 4.34025 1.0099H4.31722Z" fill="white" />
                                                                                    <path d="M4.29944 6.45792C3.86163 6.45792 3.43364 6.32847 3.06962 6.08595C2.70559 5.84343 2.42186 5.49873 2.25432 5.09543C2.08677 4.69214 2.04294 4.24836 2.12835 3.82022C2.21376 3.39209 2.42459 2.99882 2.73417 2.69015C3.04375 2.38148 3.43818 2.17127 3.86758 2.08611C4.29698 2.00095 4.74207 2.04466 5.14656 2.21171C5.55104 2.37876 5.89676 2.66165 6.14 3.02461C6.38323 3.38756 6.51306 3.81429 6.51306 4.25081C6.51306 4.83617 6.27984 5.39756 5.86471 5.81147C5.44957 6.22538 4.88653 6.45792 4.29944 6.45792ZM4.29944 2.75527C4.00298 2.75457 3.71297 2.84159 3.46613 3.0053C3.21929 3.16901 3.02672 3.40206 2.91278 3.67495C2.79884 3.94784 2.76867 4.2483 2.82607 4.53829C2.88348 4.82829 3.02589 5.09478 3.23527 5.30404C3.44465 5.5133 3.7116 5.65592 4.00231 5.71385C4.29303 5.77177 4.59444 5.7424 4.8684 5.62944C5.14237 5.51649 5.37656 5.32503 5.54134 5.0793C5.70612 4.83358 5.79408 4.54463 5.79408 4.24904C5.79384 3.85355 5.63641 3.47428 5.35626 3.19429C5.07612 2.91431 4.69609 2.75644 4.29944 2.75527Z" fill="white" />
                                                                                </svg>
                                                                            )
                                                                        }
                                                                    </span>
                                                                </p>
                                                            </div>
                                                        </div>

                                                        {/* right side locations */}
                                                        {/* <div className="w-auto flex items-center absolute top-0 right-0">
                                                            {
                                                                selectCarDealer === id ? (
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 12 16" fill="none">
                                                                        <path d="M6.06402 15.28C5.99197 15.2815 5.9207 15.2649 5.85681 15.2317C5.79291 15.1984 5.73844 15.1497 5.69844 15.0899L2.31348 10.4774C1.28973 9.32358 0.679327 7.8634 0.578125 6.32617C0.578723 4.87181 1.15844 3.47718 2.18986 2.44879C3.22129 1.4204 4.62003 0.842393 6.07869 0.841797H6.10013C7.55404 0.850991 8.94545 1.43247 9.97143 2.45964C10.9974 3.48682 11.5749 4.87651 11.5781 6.32617C11.4816 7.86574 10.8715 9.32893 9.84502 10.483C9.64757 10.753 6.43637 15.0955 6.43637 15.0955C6.39152 15.1515 6.33497 15.197 6.27065 15.2288C6.20634 15.2607 6.13582 15.2782 6.06402 15.28ZM6.04935 1.75305C4.83536 1.75662 3.67232 2.24004 2.81527 3.09732C1.95822 3.95459 1.47709 5.11574 1.4774 6.32617C1.58869 7.66905 2.1366 8.93899 3.03786 9.94305L6.05838 14.0482C6.90688 12.9029 8.93221 10.1545 9.09356 9.94305C9.99401 8.93869 10.5411 7.66878 10.6518 6.32617C10.6509 5.11591 10.1692 3.95528 9.31219 3.09823C8.45515 2.24118 7.29251 1.75751 6.07869 1.75305H6.04935Z" fill="#FF3E5B" />
                                                                        <path d="M6.02588 8.69531C5.46798 8.69531 4.92261 8.53036 4.45873 8.22132C3.99485 7.91228 3.6333 7.47303 3.4198 6.95911C3.2063 6.44519 3.15044 5.87969 3.25928 5.33412C3.36812 4.78855 3.63678 4.28741 4.03127 3.89408C4.42577 3.50074 4.92839 3.23288 5.47557 3.12436C6.02275 3.01583 6.58992 3.07153 7.10535 3.2844C7.62079 3.49727 8.06134 3.85776 8.37129 4.32027C8.68125 4.78279 8.84668 5.32655 8.84668 5.88281C8.84668 6.62874 8.54949 7.34411 8.02049 7.87155C7.49149 8.399 6.774 8.69531 6.02588 8.69531ZM6.02588 3.97706C5.6481 3.97617 5.27855 4.08705 4.964 4.29567C4.64946 4.50429 4.40406 4.80126 4.25887 5.149C4.11368 5.49674 4.07523 5.87961 4.14838 6.24915C4.22154 6.61869 4.40301 6.95828 4.66982 7.22494C4.93663 7.4916 5.2768 7.67334 5.64725 7.74715C6.01771 7.82097 6.4018 7.78353 6.75091 7.6396C7.10002 7.49566 7.39845 7.25168 7.60843 6.93856C7.8184 6.62543 7.93049 6.25723 7.93049 5.88056C7.93019 5.37659 7.72957 4.89328 7.37259 4.5365C7.0156 4.17972 6.53134 3.97855 6.02588 3.97706Z" fill="#FF3E5B" />
                                                                    </svg>
                                                                ) : (
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 12 16" fill="none">
                                                                        <path d="M6.06402 15.28C5.99197 15.2815 5.9207 15.2649 5.85681 15.2317C5.79291 15.1984 5.73844 15.1497 5.69844 15.0899L2.31348 10.4774C1.28973 9.32358 0.679327 7.8634 0.578125 6.32617C0.578723 4.87181 1.15844 3.47718 2.18986 2.44879C3.22129 1.4204 4.62003 0.842393 6.07869 0.841797H6.10013C7.55404 0.850991 8.94545 1.43247 9.97143 2.45964C10.9974 3.48682 11.5749 4.87651 11.5781 6.32617C11.4816 7.86574 10.8715 9.32893 9.84502 10.483C9.64757 10.753 6.43637 15.0955 6.43637 15.0955C6.39152 15.1515 6.33497 15.197 6.27065 15.2288C6.20634 15.2607 6.13582 15.2782 6.06402 15.28ZM6.04935 1.75305C4.83536 1.75662 3.67232 2.24004 2.81527 3.09732C1.95822 3.95459 1.47709 5.11574 1.4774 6.32617C1.58869 7.66905 2.1366 8.93899 3.03786 9.94305L6.05838 14.0482C6.90688 12.9029 8.93221 10.1545 9.09356 9.94305C9.99401 8.93869 10.5411 7.66878 10.6518 6.32617C10.6509 5.11591 10.1692 3.95528 9.31219 3.09823C8.45515 2.24118 7.29251 1.75751 6.07869 1.75305H6.04935Z" fill={`${theme === "dark" ? 'white' : '#0B0B0C'}`} />
                                                                        <path d="M6.02588 8.69531C5.46798 8.69531 4.92261 8.53036 4.45873 8.22132C3.99485 7.91228 3.6333 7.47303 3.4198 6.95911C3.2063 6.44519 3.15044 5.87969 3.25928 5.33412C3.36812 4.78855 3.63678 4.28741 4.03127 3.89408C4.42577 3.50074 4.92839 3.23288 5.47557 3.12436C6.02275 3.01583 6.58992 3.07153 7.10535 3.2844C7.62079 3.49727 8.06134 3.85776 8.37129 4.32027C8.68125 4.78279 8.84668 5.32655 8.84668 5.88281C8.84668 6.62874 8.54949 7.34411 8.02049 7.87155C7.49149 8.399 6.774 8.69531 6.02588 8.69531ZM6.02588 3.97706C5.6481 3.97617 5.27855 4.08705 4.964 4.29567C4.64946 4.50429 4.40406 4.80126 4.25887 5.149C4.11368 5.49674 4.07523 5.87961 4.14838 6.24915C4.22154 6.61869 4.40301 6.95828 4.66982 7.22494C4.93663 7.4916 5.2768 7.67334 5.64725 7.74715C6.01771 7.82097 6.4018 7.78353 6.75091 7.6396C7.10002 7.49566 7.39845 7.25168 7.60843 6.93856C7.8184 6.62543 7.93049 6.25723 7.93049 5.88056C7.93019 5.37659 7.72957 4.89328 7.37259 4.5365C7.0156 4.17972 6.53134 3.97855 6.02588 3.97706Z" fill={`${theme === "dark" ? 'white' : '#0B0B0C'}`} />
                                                                    </svg>
                                                                )
                                                            }
                                                        </div> */}
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }

                                </div>
                            </div>
                        </div>

                        {/* disclaimers */}
                        <div className="1x1:w-[35%] mt-[25px] mb-[90px] 1x1:fixed 1x1:bottom-[70px] md:hidden block">
                            <p className="text-white md:text-[12px] text-[10px]">*Disclaimer: We strongly recommend using Mahindra certified charging boxes for safe and smooth charging experience. Please note that the warranty on charging cable is applicable only if used with Mahindra certified wall outlets or charging boxes. For more details please contact the Mahindra dealer near you.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DealerSelect