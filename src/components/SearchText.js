import React from 'react'

function SearchText({ placeholders, handleSearchValue, setSearchStateList, searchStateList, searchTextValue }) {

    return (
        <>
            <div className='w-full h-[45px] mb-[15px] relative'>
                <input className='w-full h-full p-[10px_15px] uppercase rounded-[5px]' onChange={handleSearchValue} type="text" value={searchStateList} placeholder={placeholders} />
                {
                    searchTextValue.length != 0 &&
                    <div className='absolute top-[115%] left-0 right-0 w-full max-h-[200px] bg-[#212121] z-50 border-[1px] border-white rounded-[5px] overflow-y-auto overflow-x-hidden'>
                        <ul className='p-[10px_15px]'>
                            {
                                searchTextValue.map((ele) => {
                                    const { id, state } = ele
                                    return (
                                        <li onMouseOver={() => setSearchStateList(state)} onClick={() => setSearchStateList(state)} key={id} className={`cursor-pointer text-[14px] dark:text-white p-[3px] capitalize`}>{state}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                }
            </div>
        </>
    )
}

export default SearchText