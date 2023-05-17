import React, { useEffect, useState } from 'react'

function ConfirmsPoppup() {
    const [showroomPlace, setShowroomPlace] = useState(true);

    const handleClicks = () => {
        setShowroomPlace(true)
        document.body.style.overflow = "hidden"
    }

    const handleClose = () => {
        setShowroomPlace(false)
        console.log(showroomPlace)
        document.body.style.overflow = "auto"
    }

    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setIsOpen(true)
        }, 300)
    }, [isOpen])

    return (
        <>
            <div className='w-full h-screen fixed top-0 left-0 bottom-0 right-0 z-[1005]'>
                {/* overlays */}
                <div onClick={() => handleClose()} className='z-[1] w-full h-screen fixed left-0 right-0 top-0 bottom-0 bg-[#0B0B0C] opacity-[0.5]'></div>

                {/* contents */}
                <div className={`${isOpen ? 'opacity-1' : 'opacity-0'} transition-opacity w-full h-full flex items-center justify-center`}>
                    <div className='sm:w-[388px] w-[330px] h-[390px] bg-[#212121] rounded-[20px] p-[20px_40px] z-[100] border-[1px] border-white relative'></div>
                </div>
            </div>
        </>
    )
}

export default ConfirmsPoppup