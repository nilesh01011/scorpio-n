import React, { useEffect, useState } from 'react'
import { FiEdit } from 'react-icons/fi'
import { cityRegisters, stateRegisters } from '../api/cityRegister'
import Buttons from './Buttons'

function SelectStateCity() {
    const [showroomPlace, setShowroomPlace] = useState(false)

    // ==== state ====
    const [searchTextStateValue, setSearchTextStateValue] = useState([])
    const [openStateList, setOpenStateList] = useState(false)

    // value get
    const [searchStateList, setSearchStateList] = useState('')

    const handleSearchStateValue = (e) => {
        const searchText = e.target.value;
        setSearchStateList(searchText)
        const searctResult = cityRegisters.filter((ele) => {
            return ele.state.toLowerCase().includes(searchText)
        })
        if (searchText === "") {
            setSearchTextStateValue([])
            setOpenStateList(false);
        } else {
            setSearchTextStateValue(searctResult)
            setOpenStateList(true);
        }
    }

    // ==== city ====
    const [searchTextCityValue, setSearchTextCityValue] = useState([])
    const [openCityList, setOpenCityList] = useState(false)
    // value get
    const [searchCityList, setSearchCityList] = useState('')

    const handleSearchCityValue = (e) => {
        const searchText = e.target.value;
        setSearchCityList(searchText)
        const searctResult = stateRegisters.filter((ele) => {
            return ele.state.toLowerCase().includes(searchText)
        })
        if (searchText === "") {
            setSearchTextCityValue([])
            setOpenCityList(false)
        } else {
            setSearchTextCityValue(searctResult)
            setOpenCityList(true)
        }
    }

    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setIsOpen(true)
        }, 1500)
    }, [isOpen])

    const handleClicks = () => {
        // setShowroomPlace(true)
        // document.body.style.overflow = "hidden"
    }

    const handleClose = () => {
        setShowroomPlace(false)
        document.body.style.overflow = "auto"
    }

    return (
        <>
            <div className=' w-full h-[20px]'>
                <h2 className='dark:text-white text-[12px] flex justify-start items-baseline'>
                    *Ex-showroom price:
                    <div onClick={() => handleClicks()} className='flex ml-1 items-center gap-[0.3rem] cursor-pointer'>
                        <p className='font-bold'>Mumbai</p>
                        <FiEdit className="dark:text-white" size={12} />
                    </div>
                </h2>
            </div>

            {/* popup box */}
            {/* ex-showroom placement shows */}

            {
                showroomPlace &&
                <div className={`w-full h-screen fixed top-0 left-0 bottom-0 right-0 z-[1005]`}>
                    {/* overlays */}
                    <div onClick={() => handleClose()} className='z-[1] w-full h-screen fixed left-0 right-0 top-0 bottom-0 bg-[#0B0B0C] opacity-[0.5]'></div>
                    {/* select place menu content */}
                    <div className={`${isOpen ? 'opacity-1' : 'opacity-0'} transition-opacity w-full h-full flex items-center justify-center`}>
                        <div className='sm:w-[393px] w-[330px] h-[262px] bg-[#212121] rounded-[20px] p-[20px_40px] z-[100] border-[1px] border-white relative'>
                            <h1 className='font-black text-[24px] text-center dark:text-white'>City of Registration</h1>
                            {/* cancle button */}
                            <div onClick={() => handleClose()} className='text-[35px] dark:text-white font-bold absolute top-1 right-4 cursor-pointer'>×</div>

                            {/* input body */}
                            <div className='w-full h-max mt-[20px]'>
                                <form>
                                    {/* <SearchText searchStateList={searchStateList} handleSearchValue={handleSearchValue} searchTextValue={searchTextValue} setSearchTextValue={setSearchTextValue} placeholders="SELECT STATE" /> */}
                                    <div className='w-full h-[45px] mb-[15px] relative'>
                                        <input className='w-full h-full p-[10px_15px] uppercase rounded-[5px] text-[14px]' onChange={handleSearchStateValue} type="text" value={searchStateList} placeholder="SELECT STATE" />
                                        {
                                            openStateList === true && searchTextStateValue.length !== 0 &&
                                            <div className='absolute top-[115%] left-0 right-0 w-full max-h-[200px] bg-[#212121] z-50 border-[1px] border-white rounded-[5px] overflow-y-auto overflow-x-hidden'>
                                                <ul className='p-[10px_15px]'>
                                                    {
                                                        searchTextStateValue.map((ele) => {
                                                            const { id, state } = ele
                                                            return (
                                                                <li onMouseOver={() => setSearchStateList(state)} onClick={() => setOpenStateList(false)} key={id} className={`cursor-pointer text-[14px] dark:text-white p-[3px] capitalize`}>{state}</li>
                                                            )
                                                        })
                                                    }
                                                </ul>
                                            </div>
                                        }
                                    </div>
                                    {/* <SearchText placeholders="SELECT CITY" /> */}
                                    <div className='w-full h-[45px] mb-[15px] relative'>
                                        <input className='w-full h-full p-[10px_15px] uppercase rounded-[5px] text-[14px]' onChange={handleSearchCityValue} type="text" value={searchCityList} placeholder="SELECT CITY" />
                                        {
                                            openCityList === true && searchTextCityValue.length !== 0 &&
                                            <div className='absolute top-[115%] left-0 right-0 w-full max-h-[200px] bg-[#212121] z-50 border-[1px] border-white rounded-[5px] overflow-y-auto overflow-x-hidden'>
                                                <ul className='p-[10px_15px]'>
                                                    {
                                                        searchTextCityValue.map((ele) => {
                                                            const { id, state } = ele
                                                            return (
                                                                <li onMouseOver={() => setSearchCityList(state)} onClick={(e) => setOpenCityList(false)} key={id} className={`cursor-pointer text-[14px] dark:text-white p-[3px] capitalize`}>{state}</li>
                                                            )
                                                        })
                                                    }
                                                </ul>
                                            </div>
                                        }
                                    </div>
                                    <div className='w-full flex items-center justify-center h-[44px]'>
                                        <Buttons title="confirm" outline={true} />
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

export default SelectStateCity