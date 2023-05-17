import React, { useEffect, useRef, useState } from 'react';

let useClickOutSide = (handler) => {
    let domNode = useRef();

    useEffect(() => {
        const handlerEvent = (e) => {
            if (!domNode.current.contains(e.target)) {
                handler();
            }
        }

        document.addEventListener("mousedown", handlerEvent);

        return () => {
            document.removeEventListener("mousedown", handlerEvent)
        }
    }, [handler]);

    return domNode
}

function SelectBox({ items, theme, placeholder, mandatory }) {
    const [isOpen, setIsOpen] = useState(false);
    // const [selectedText, setSelectedText] = useState('');
    const [selected, setSelected] = useState('');

    const selectBoxText = (ele) => {
        setSelected(ele.target.innerHTML);
        setIsOpen(!isOpen);
    }

    let domNode = useClickOutSide(() => {
        setIsOpen(false)
    })

    return (
        <>
            <div className="flex justify-center">
                <div ref={domNode} className={`w-full h-[48px] rounded-[10px] text-[#635D5D] flex flex-col items-center ${theme === 'dark' ? ' bg-[#0B0B0C]' : ' bg-[#F4F4F4]'}`}>
                    {/* select fields */}
                    <div onClick={() => setIsOpen(!isOpen)} className='w-full py-[12px] px-[16px] h-full flex items-center justify-between cursor-pointer'>
                        {/* <input placeholder={placeholder} className="appearance-none" /> */}
                        {/* <select>

                        </select> */}
                        <p className={`select-none ${theme === "dark" ? 'text-[#A3A3A3]' : 'text-[#635D5D]'} capitalize md:text-[16px] text-[14px]`}>
                            {/* ${theme === 'dark' ? selected && 'text-[#A3A3A3]' : selected && 'text-[#A3A3A3]'} */}
                            {/* ${theme === 'dark' ? selected && `text-white` : selected && `text-[#A3A3A3]`} */}
                            {/* {selected ? selected : items[0].name} */}
                            {selected ? selected : mandatory ? placeholder + mandatory : placeholder}
                        </p>

                        {/* icons */}
                        <div className={`h-[14px] flex items-center ${isOpen && "rotate-180 transition-all"} transition-all ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="10" viewBox="0 0 16 11" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M15.058 0.571661C15.2393 0.741639 15.2485 1.02642 15.0785 1.20773L8.32849 8.40773C8.24342 8.49847 8.12458 8.54995 8.00019 8.54995C7.87581 8.54995 7.75697 8.49847 7.6719 8.40773L0.921904 1.20773C0.751924 1.02641 0.761111 0.741639 0.942422 0.57166C1.12373 0.401682 1.40851 0.410868 1.57849 0.592179L8.00019 7.442L14.4219 0.592179C14.5919 0.410869 14.8767 0.401682 15.058 0.571661Z" fill={`${theme === 'dark' ? '#DEDEDE' : '#635D5D'}`} />
                            </svg>
                        </div>
                    </div>

                    {/* all lists items */}
                    {
                        isOpen && (
                            <ul className={`z-20 divide-y-[1px] border-[1px] ${theme === 'dark' ? 'bg-[#0B0B0C] border-[#A3A3A3] divide-[#635D5D]' : 'bg-[#F4F4F4] border-[#DEDEDE] divide-[#DEDEDE]'} ${isOpen ? 'opacity-1 duration-[1500ms]' : 'opacity-0 duration-[1500ms]'} relative w-full left-0 right-0 md:-top-[320%] top-2 rounded-[10px] transition-all`}>
                                {items.map((ele, id) => {
                                    {/* console.log(items.length - 1 === id); */ }
                                    const lastArray = items.length - 1;

                                    return (
                                        <li key={id} onClick={selectBoxText} className={`${theme === 'dark' ? `hover:bg-[#242424] text-[#A3A3A3] ${ele.id === 1 && "rounded-[10px_10px_0_0]"}` : 'hover:bg-white text-[#0B0B0C]'} ${lastArray + 1 === ele.id && 'rounded-[0_0_10px_10px]'} box-border px-4 pt-[4px] pb-[6px] cursor-pointer md:text-[14px] text-[12px]`}>{ele.name}</li>
                                    )
                                })}
                            </ul>
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default SelectBox
