import React, { useEffect, useRef, useState } from 'react'
import { BsChevronLeft, BsSearch } from 'react-icons/bs'
import { AiOutlineUser } from 'react-icons/ai'
// import { megaMenuBar } from '../../api/MenuBar'
import { FaChevronRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { megaMenuBar } from '../../api/MenuBar'

function DeskTopNavbar() {

    const [theme, setTheme] = useState('')

    const closeMegaMenu = useRef();

    const [mobileView, setMobileView] = useState(false)
    // URL router paths
    // const router = useRouter();
    // const modelSelectionPathname = router.pathname;
    const [menuHide, setMenuHide] = useState(false);

    // const [modelSelecMenu, setModelSelecMenu] = useState(false)

    // theme change

    // useEffect(() => {
    //     if (modelSelectionPathname === '/dark-page') {
    //         setTheme('dark')
    //         localStorage.setItem('theme', JSON.stringify(theme))
    //     }

    //     if (modelSelectionPathname === '/light-page') {
    //         setTheme('light')
    //         localStorage.setItem('theme', JSON.stringify(theme))
    //     }

    // }, [modelSelectionPathname, theme])

    // menubar hide
    // useEffect(() => {
    //     if (modelSelectionPathname === '/own-online/model-selection' || modelSelectionPathname === '/own-online/product-details') {
    //         setMenuHide(false)
    //         setModelSelecMenu(true)
    //     } else {
    //         setMenuHide(true)
    //         setModelSelecMenu(false)
    //     }
    // }, [modelSelectionPathname])

    // const [contentShow, setContentShow] = useState('');
    const [contentIdShow, setContentIdShow] = useState(0);
    const [isActive, setIsActive] = useState(false);

    // menu onClicks
    // const megaMenuOnclick = (title, id) => {

    //     console.log(title, id)

    //     setContentShow(title)

    //     setContentIdShow(id)

    //     if (title) {
    //         setIsActive(true)
    //         if (title === contentShow) {
    //             setIsActive(!isActive)
    //         }
    //     } else {
    //         setIsActive(false)
    //     }
    // }

    const handleHome = () => {
        // router.push('/')
    }

    const [ismenu, setIsMenu] = useState(1);

    const handleClick = (id) => {
        setIsMenu(id)
    }

    return (
        <>
            <nav className={`w-full h-[67px] px-[15px] bg-[#191919] sticky top-0 z-50`}>
                <div className='flex justify-between items-center max-w-[1260px] mx-auto w-full h-full'>
                    {/* logo */}
                    <div className='h-max flex items-center gap-[20px]'>
                        <div onClick={() => setMenuHide(!menuHide)} className={`flex flex-col gap-1 w-[18px] h-[12px] cursor-pointer`}>
                            {
                                menuHide === false ? (
                                    <>
                                        <span className='w-full h-full dark:bg-white rounded-md'></span>
                                        <span className='w-full h-full dark:bg-white rounded-md'></span>
                                        <span className='w-full h-full dark:bg-white rounded-md'></span>
                                    </>
                                ) : (
                                    <>
                                        <span className='w-full h-[1.65px] relative -bottom-[6px] dark:bg-white rounded-md rotate-[137deg]'></span>
                                        <span className='w-full h-[1.65px] dark:bg-white rounded-md -rotate-[137deg]'></span>
                                    </>
                                )
                            }
                        </div>
                        {/* logo */}
                        <div className='h-full'>
                            <Link onClick={() => handleHome()} href='/'>
                                <svg width="133" height="30" viewBox="0 0 133 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M96.5263 14.7652H103.154C104.65 14.7652 105.885 15.9481 105.885 17.392V23.4283H95.987C95.065 23.4283 94.317 22.7151 94.317 21.8279V19.7404C94.317 18.9228 95.0128 18.2444 95.8652 18.2444H101.362L100.788 19.4621H96.7524C96.5784 19.4621 96.3697 19.6012 96.3697 19.7752V21.4278C96.3697 21.6192 96.561 21.7409 96.7524 21.7409H103.763V17.8095C103.763 17.044 103.085 16.4526 102.319 16.4526H95.7434L96.5263 14.7652ZM56.881 12.8864V11.5991H54.7413V14.1041L56.881 12.8864ZM54.7413 15.3218L56.881 14.1041V23.4457H54.7413V15.3218ZM67.6665 14.7652C69.1625 14.7652 70.3976 15.9481 70.3976 17.392V23.4283H68.2579V17.8095C68.2579 17.044 67.5795 16.4526 66.8141 16.4526H61.6823V23.4283H59.5426V14.7652C62.2389 14.7826 64.9527 14.7652 67.6665 14.7652ZM95.0302 14.7652H89.6549C88.1588 14.7652 86.9237 15.9481 86.9237 17.392V23.4283H89.0634V17.8095C89.0634 17.044 89.7418 16.4526 90.5073 16.4526H94.2126L95.0302 14.7652ZM23.22 23.4283H25.3597V17.392C25.3597 15.9481 24.1246 14.7652 22.6285 14.7652H8.60742V23.4283H10.7471V16.7657C10.7471 16.5743 10.9385 16.4526 11.1298 16.4526H15.5484C15.7223 16.4526 15.9311 16.5917 15.9311 16.7657V23.4283H18.0534V16.7657C18.0534 16.5743 18.2447 16.4526 18.4361 16.4526H21.7935C22.5589 16.4526 23.2374 17.044 23.2374 17.8095L23.22 23.4283ZM41.0508 11.6165V23.4283H43.1905V11.6165H41.0508ZM49.9401 23.4283H52.0797V17.392C52.0797 15.9481 50.8446 14.7652 49.3486 14.7652H44.8083L44.0081 16.4352H48.5136C49.279 16.4352 49.9575 17.0266 49.9575 17.7921L49.9401 23.4283ZM83.8794 11.6165V23.4283H74.2247C73.3027 23.4283 72.5547 22.7151 72.5547 21.8279V17.4093C72.5547 15.9655 73.7898 14.7826 75.2859 14.7826H80.783L79.9654 16.4526H76.1209C75.3555 16.4526 74.677 17.044 74.677 17.8095V21.4452C74.677 21.6365 74.8684 21.7583 75.0423 21.7583H81.705V11.6165H83.8794ZM29.4477 14.7652H36.0755C37.5716 14.7652 38.8067 15.9481 38.8067 17.392V23.4283H28.9084C27.9864 23.4283 27.2384 22.7151 27.2384 21.8279V19.7404C27.2384 18.9228 27.9343 18.2444 28.7867 18.2444H34.2838L33.6923 19.4621H29.6564C29.4825 19.4621 29.2911 19.6012 29.2911 19.7752V21.4278C29.2911 21.6192 29.4825 21.7409 29.6564 21.7409H36.667V17.8095C36.667 17.044 35.9886 16.4526 35.2231 16.4526H28.6475L29.4477 14.7652Z" fill="white" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M120.411 10.5728V10.5206C120.463 10.2249 120.515 9.96392 120.602 9.70298C120.689 9.45943 120.793 9.23329 120.95 9.04193C121.106 8.85058 121.298 8.69402 121.541 8.58964C121.785 8.48527 122.081 8.43308 122.446 8.43308H123.368L123.525 8.45047C123.681 8.48527 123.838 8.52006 123.977 8.58964C124.116 8.65922 124.238 8.72881 124.342 8.83318C124.446 8.93756 124.551 9.05933 124.603 9.1985C124.655 9.33766 124.69 9.47683 124.69 9.65079V9.75516L124.673 9.85954C124.638 10.1205 124.568 10.3292 124.499 10.5032C124.412 10.6771 124.325 10.7989 124.186 10.9033C124.064 11.0077 123.907 11.0599 123.733 11.0946C123.559 11.1294 123.368 11.1468 123.142 11.1468H121.402C121.367 11.3208 121.367 11.4948 121.367 11.6339C121.367 11.7731 121.402 11.8949 121.454 11.9818C121.507 12.0688 121.611 12.1384 121.75 12.1906C121.907 12.2428 122.115 12.2602 122.394 12.2602H124.273L123.785 13.0778H121.837C121.211 13.0778 120.828 12.9212 120.602 12.6429C120.376 12.3645 120.289 12.0166 120.289 11.6165C120.289 11.46 120.306 11.286 120.324 11.0946C120.358 10.9207 120.376 10.7467 120.411 10.5728ZM112.93 8.90277L114.166 8.20693L113.435 13.043H112.252L112.356 12.3645C112.53 11.2338 112.704 10.1031 112.861 8.97235V8.93756L112.93 8.90277ZM113.278 7.04141H114.339L114.253 7.66766L112.948 8.39829L113.157 7.04141H113.278ZM119.28 8.71141L118.915 9.30287H117.001L116.827 9.32027C116.775 9.33766 116.723 9.33766 116.671 9.35506C116.636 9.37245 116.584 9.38985 116.566 9.40725C116.549 9.42464 116.514 9.45943 116.497 9.49423C116.479 9.52902 116.462 9.58121 116.444 9.616C116.427 9.65079 116.427 9.70298 116.427 9.75516C116.427 9.78996 116.427 9.82475 116.444 9.85954C116.462 9.89433 116.479 9.92912 116.514 9.96392C116.549 9.99871 116.584 10.0161 116.636 10.0509C116.688 10.0857 116.758 10.1031 116.81 10.1205L118.41 10.5032C118.601 10.5554 118.775 10.625 118.915 10.6945C119.054 10.7815 119.176 10.8859 119.263 11.0251C119.35 11.1468 119.419 11.3034 119.436 11.46C119.471 11.6165 119.471 11.7905 119.436 11.9644C119.402 12.1732 119.332 12.3645 119.228 12.5037C119.141 12.6429 119.019 12.7647 118.88 12.8516C118.741 12.9386 118.584 12.9908 118.41 13.0256C118.236 13.0604 118.062 13.0778 117.871 13.0778H114.74L115.227 12.2776H117.245C117.384 12.2776 117.506 12.2776 117.627 12.2602C117.749 12.2428 117.853 12.2254 117.94 12.1906C118.027 12.1558 118.097 12.1036 118.149 12.034C118.201 11.9644 118.254 11.8601 118.271 11.7383C118.288 11.6513 118.271 11.5817 118.254 11.5295C118.219 11.4774 118.184 11.4252 118.114 11.373C118.045 11.3208 117.958 11.286 117.888 11.2512C117.801 11.2164 117.714 11.199 117.627 11.1816L116.218 10.8511C116.044 10.8163 115.888 10.7467 115.749 10.6771C115.609 10.5902 115.505 10.5032 115.418 10.3814C115.331 10.2596 115.279 10.1379 115.244 9.98131C115.209 9.84214 115.227 9.68558 115.244 9.51162C115.279 9.32027 115.348 9.14631 115.418 9.00714C115.505 8.86797 115.609 8.7636 115.749 8.69402C115.87 8.62443 116.009 8.57224 116.166 8.53745C116.323 8.50266 116.497 8.48526 116.671 8.48526H119.384L119.28 8.71141ZM109.66 12.9734L108.321 10.3466H107.033L106.633 13.043H105.45L105.624 11.9644C105.902 10.1727 106.181 8.38089 106.424 6.60651V6.55432H109.851L110.025 6.57172C110.234 6.60651 110.425 6.6587 110.582 6.74568C110.756 6.83266 110.895 6.95443 111.017 7.09359C111.139 7.23276 111.208 7.38932 111.278 7.56328C111.33 7.73724 111.365 7.9286 111.365 8.13735V8.31131L111.347 8.50266C111.295 8.83318 111.208 9.09412 111.086 9.30287C110.965 9.51162 110.791 9.68558 110.617 9.80735C110.443 9.92912 110.269 9.99871 110.06 10.0683C109.886 10.1205 109.712 10.1553 109.521 10.1901L111.052 13.043H109.712L109.66 12.9734ZM109.225 7.40672H107.468L107.155 9.52902H108.529C108.738 9.52902 108.947 9.51162 109.138 9.47683C109.329 9.44204 109.503 9.38985 109.66 9.30287C109.799 9.21589 109.938 9.11152 110.025 8.97235C110.13 8.83318 110.199 8.65922 110.234 8.43308C110.269 8.24172 110.269 8.06776 110.234 7.9286C110.199 7.80683 110.147 7.70245 110.077 7.61547C109.991 7.52849 109.886 7.4763 109.764 7.44151C109.608 7.42412 109.434 7.40672 109.225 7.40672ZM122.863 9.23329H122.446C122.081 9.23329 121.872 9.37246 121.75 9.58121C121.628 9.78996 121.576 10.0683 121.524 10.3988H122.933C123.02 10.3988 123.09 10.3814 123.159 10.364C123.211 10.3466 123.281 10.3118 123.316 10.277C123.368 10.2422 123.42 10.1727 123.455 10.1031C123.49 10.0335 123.525 9.92912 123.542 9.82475C123.559 9.68558 123.559 9.58121 123.542 9.51162C123.525 9.44204 123.49 9.38985 123.438 9.35506C123.385 9.32027 123.298 9.28548 123.211 9.26808C123.107 9.25068 122.985 9.23329 122.863 9.23329Z" fill="white" />
                                </svg>
                            </Link>

                        </div>
                    </div>
                    {/* middle menu and search and user profile */}
                    <div className={`${menuHide === false ? 'hidden' : 'block'} xl:w-[80%] w-[85%]`}>
                        <div className='md:block hidden'>
                            <div className='flex items-center justify-between'>
                                {/* middle menu list */}
                                <div className='flex items-center relative'>
                                    <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                                        {
                                            megaMenuBar.map((ele) => {
                                                const { id, name } = ele;
                                                return (
                                                    <li ref={closeMegaMenu} key={id} className={`${name} select-none px-3 py-2 flex items-center text-[18px] font-bold dark:text-white capitalize ml-2 relative`}>
                                                        <span className="ml-2 cursor-pointer">{name}</span>
                                                        {
                                                            contentIdShow === id && isActive &&
                                                            <div onMouseLeave={() => setIsActive(false)} key={id} className={` ${ele.menuList.length !== 0 ? `${ele.name === 'buy' ? 'w-[1300%]' : 'w-[970%]'} absolute left-0 top-[55px] flex divide-black divide-x-[1px] h-max bg-[#3C3C3C] z-50 shadow-lg` : 'hidden'}`}>
                                                                <div className="w-[25%] h-full border-black border-r-0">
                                                                    <ul className='w-full h-full'>
                                                                        {
                                                                            ele.menuList.map((menu) => {
                                                                                const { id, name } = menu

                                                                                return (
                                                                                    <li key={id} onClick={() => handleClick(id)} className={`cursor-pointer ${ismenu === id && "bg-[#CE0E2D]"} py-[16px] pl-[18px] pr-[15px] font-bold dark:text-white text-[16px] border border-black border-l-0 border-t-0 border-r-0 border-b-1 flex items-center justify-between`}>
                                                                                        {name}
                                                                                        <FaChevronRight className={`${ismenu === id && 'rotate-180 transition-all'}`} size={18} />
                                                                                    </li>
                                                                                )
                                                                            })
                                                                        }
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        }
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                                {/* search and user profile */}
                                <div className='flex items-center gap-4'>
                                    <div className='px-[15px]'>
                                        <h1 className='dark:text-white'>Text Drive</h1>
                                    </div>
                                    <div className='px-[15px]'>
                                        <h1 className='dark:text-white'>Locate Us</h1>
                                    </div>
                                    <div>
                                        <BsSearch className='dark:text-white' size={20} />
                                    </div>
                                    <div>
                                        <AiOutlineUser className='dark:text-white' size={22} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* =============================================== */}
                {/* ================== Dropdown =================== */}
                {/* {
                    isActive &&
                    <DropDownList uniqueId={contentIdShow} items={megaMenuBar} isShow={contentShow} />
                } */}
            </nav>

        </>
    )
}

export default DeskTopNavbar