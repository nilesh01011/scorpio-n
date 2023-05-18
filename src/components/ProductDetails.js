import React, { useEffect, useState } from "react";
import { chooseVariant, colorChoise } from "../api/CarData";
import ChooseConfig from "./ChooseConfig";
// import DisclaimerPopup from "../components/DisclaimerPopup";

function ProductDetails() {
    const [setImages, setSetImages] = useState('/image 14.png');
    const [toggleColorChoise, setToggleColorChoise] = useState(1)
    // const [colorName, setColorName] = useState('Infinity Blue Copper');
    const [colorName, setColorName] = useState('DEEP FOREST');

    const handleColorChange = (ele) => {
        setToggleColorChoise(ele.id);
        setColorName(ele.color)
        setSetImages(ele.imgSrc)
    }

    const [isContentShow, setIsContentShow] = useState(2);

    const [isChooseVariant, setIsChooseVariant] = useState([]);

    // const isChooseVariant = carsDetails.isChooseVariant;

    const [isFirstActive, setIsFirstActive] = useState(2)
    const [lengthCheck, setLengthCheck] = useState(0)

    const handleChooseVariant = (id) => {
        setIsFirstActive(id)

        setIsContentShow(id);
    }

    useEffect(() => {
        setIsChooseVariant(chooseVariant)

        const lengthChentVariant = isChooseVariant && isChooseVariant.map((ele) => {
            setLengthCheck(isChooseVariant.length);
        })

    }, [isChooseVariant]);

    // charger choose

    const types = [
        {
            id: 1,
            types: 'Diesel',
        },
        {
            id: 2,
            types: 'Petrol',
        }
    ];

    const transmission = [
        {
            id: 1,
            types: 'Automatic'
        },
        {
            id: 2,
            types: 'Manual'
        }
    ];

    const seating = [
        {
            id: 1,
            types: '6 Seater'
        },
        {
            id: 2,
            types: '7 Seater'
        }
    ]

    return (
        <>
            <div className='w-full h-full max-w-[1260px] mx-auto text-white md:mt-[50px] mt-[40px]'>
                {/* main cars details */}
                {/* md:mt-[30px] mt-[6px] */}
                <div className="w-full h-full flex lg:flex-row flex-col justify-between gap-[12px] 1x1:mb-0 lg:mb-[80px]">
                    {/* left side cars details */}
                    <div className="lg:w-[45%] w-full h-full flex flex-col justify-between">
                        <div className="w-full">
                            {/* cars title */}
                            <div className="w-full flex items-center justify-between">
                                {/* title */}
                                <h2 className="dark:text-white md:text-[26px] sm:text-[22px] text-[20px] font-bold uppercase">Scorpio-N</h2>
                            </div>
                            {/* cars images */}
                            <div className="md:w-[425px] xs:w-[330px] w-[300px] lg:mr-auto mx-auto md:h-[307px] h-[191px] md:mt-0 mt-[5px]">
                                <img src={setImages} alt="product-img" className='w-full h-full md:object-contain object-cover' />
                            </div>
                        </div>

                        {/* disclaimers */}
                        <span className={`underline text-[12px] cursor-pointer md:block hidden`}>
                            *See Disclaimers
                        </span>
                    </div>
                    {/* right side select configurations */}
                    {/* h-[360px] */}
                    <div id="overFlowNone" className="lg:w-[50%] w-full 1x1:h-[520px] lg:h-[370px] h-full lg:mb-0 md:mb-[90px] overflow-scroll">
                        {/* Choose Configuration */}
                        <div className="w-full mb-[16px]">
                            {/* colors title */}
                            <div className="w-full mb-[12px]">
                                <h3 className="text-[18px] dark:text-white font-bold text-left">Choose Configuration</h3>
                            </div>

                            {/* choose configurations */}
                            {/* choose config tabs */}
                            <div className="w-full grid grid-cols-3 sm:gap-[20px] gap-[10px] mt-[12px]">
                                <ChooseConfig theme='dark' title="fuel" contents={types} isActiveTab={1} />
                                <ChooseConfig theme='dark' title="transmission" contents={transmission} isActiveTab={1} />
                                {/* contentOne="5 Seater" contentTwo="7 Seater" */}
                                <ChooseConfig theme='dark' title="seating" contents={seating} isActiveTab={2} />
                            </div>
                        </div>

                        {/* color selections */}
                        <div className="w-full mb-[16px]">
                            {/* colors title */}
                            <div className="w-full mb-[12px]">
                                <h3 className="text-[18px] dark:text-white font-bold text-left">Choose Colour:
                                    <span className="capitalize ml-[5px] text-[14px] font-normal">
                                        {colorName}
                                    </span>
                                </h3>
                            </div>
                            {/* color choose */}
                            <div className="w-full sm:h-[44px] h-full rounded-[10px] flex flex-wrap items-center gap-[30px] px-[9px]">
                                {
                                    colorChoise && colorChoise.map((ele) => {
                                        const { id, colorCode } = ele;

                                        if (colorName === '') {
                                            setColorName(`${colorChoise[0].color}`)
                                        }

                                        return (
                                            <button key={id} onClick={() => handleColorChange(ele)} type="button" className={`w-[28px] h-[28px] rounded-full border border-white ${toggleColorChoise === id ? 'outline outline-white outline-1 outline-offset-[6px]' : 'outline-0 outline-offset-0'}`} style={{ background: `${colorCode}` }}></button>
                                        )
                                    })
                                }
                            </div>
                        </div>

                        {/* choose variant */}
                        <div className="w-full">
                            {/* choose variant title */}
                            <div className="w-full mb-[12px]">
                                <h3 className="md:text-[18px] text-[16px] dark:text-white font-bold text-left">Choose  Variant ({lengthCheck})</h3>
                            </div>
                            {/* 1x1:h-[220px] h-[180px] */}
                            <div id="overFlowNone" className={`w-full ${lengthCheck <= 1 ? 'h-max' : 'h-[210px] overflow-scroll'} flex flex-col gap-[16px]`}>
                                {
                                    isChooseVariant && isChooseVariant.map((ele) => {
                                        const { id, title, price, lists } = ele;
                                        // ${isFirstActive === id ? 'h-max bg-[#F8F8F8]' : 'h-max bg-[#333333]'}
                                        return (
                                            <div onClick={() => handleChooseVariant(id)} key={id} className={`w-full rounded-[10px] h-max ${isFirstActive === id ? 'h-max bg-[#F8F8F8] text-black' : 'h-max bg-[#333333]'}  divide-y-[1px] divide-[#8E8585] cursor-pointer`}>
                                                {/* title and prices */}
                                                <div className={`w-full flex sm:items-center items-start md:gap-0 gap-[4px] sm:justify-between sm:flex-row flex-col p-[16px]`}>
                                                    {/* title and icons */}
                                                    <div className="flex items-center gap-[10px]">
                                                        {/* icons */}
                                                        <div className="w-auto">
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
                                                        {/* title */}
                                                        {/* ${isFirstActive === id ? 'text-black' : 'text-white'} */}
                                                        <h4 className={`md:text-[18px] text-[16px] font-bold`}>{title}</h4>
                                                    </div>

                                                    {/* prices */}
                                                    <div className="flex pl-[25px] md:flex-col flex-row md:items-start items-center md:gap-0 gap-[10px]">
                                                        {/* <span className={`md:text-[14px] text-[12px] ${isFirstActive === id ? 'text-black' : 'text-white'}`}>Start at</span> */}
                                                        {/* ${isFirstActive === id ? 'text-black' : 'text-white'} */}
                                                        <span className={`font-bold md:text-[18px] text-[16px]`}>{price}</span>
                                                    </div>
                                                </div>

                                                {/* contents */}
                                                {/* {
                                                    isContentShow === id &&
                                                    <div className="w-full h-max flex sm:flex-row flex-col items-start sm:gap-[15px] gap-[5px] p-[16px] pt-[8px] sm:pl-[16px] pl-[42px]">
                                                        left side
                                                        <div className="xl:w-[20%] sm:w-[25%] w-full relative xs:left-0 -left-[16px]">
                                                            <p className="capitalize font-bold whitespace-nowrap">
                                                                key features
                                                            </p>
                                                        </div>
                                                        right sides
                                                        <div className="xl:w-[80%] lg:w-[75%] sm:w-[100%] w-full">
                                                            <ul className="list-disc flex flex-col gap-[4px]">
                                                                {
                                                                    lists.map((el) => {
                                                                        const { id, listName } = el
                                                                        return (
                                                                            <li key={id} className="capitalize text-[16px]">{listName}</li>
                                                                        )
                                                                    })
                                                                }
                                                            </ul>
                                                        </div>
                                                    </div>
                                                } */}
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>

                        {/* tabs for fuel or diesel */}



                        {/* disclaimers */}
                        <div className="1x1:w-[35%] mt-[25px] mb-[90px] 1x1:fixed 1x1:bottom-[70px] md:hidden block">
                            <span className={`underline text-[12px] cursor-pointer`}>
                                *See Disclaimers
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetails